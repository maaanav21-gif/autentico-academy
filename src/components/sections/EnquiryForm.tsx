import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_xxxxx";
const EMAILJS_TEMPLATE_ID = "template_xxxxx";
const EMAILJS_PUBLIC_KEY = "xxxxxxxx";

const RATE_LIMIT_STORAGE_KEY = "autentico_enquiry_rate_limit";
const MIN_INTERVAL_MS = 30 * 1000;
const MAX_PER_WINDOW = 3;
const WINDOW_MS = 60 * 60 * 1000;
const MIN_FILL_TIME_MS = 3 * 1000;

function readSubmissionTimestamps(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const now = Date.now();
    return parsed.filter(
      (t): t is number => typeof t === "number" && now - t < WINDOW_MS,
    );
  } catch {
    return [];
  }
}

function recordSubmissionTimestamp() {
  if (typeof window === "undefined") return;
  const next = [...readSubmissionTimestamps(), Date.now()];
  try {
    window.localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Ignore storage errors (e.g. private mode).
  }
}
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const enquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Phone can only contain digits"),
  email: z.string().email("Please enter a valid email"),
  program: z.string().min(1, "Please choose a program"),
  message: z.string().optional(),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

const programs = [
  "School Tuition (Class 8-12) — CBSE / ICSE / State",
  "NEET Crash Course",
  "CSIR NET Crash Course",
  "Internship Programs",
  "Certification Programs",
  "Career & Placements Guidance",
];

export default function EnquiryForm() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const mountedAtRef = useRef<number>(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      program: "",
      message: "",
    },
  });

  const programValue = watch("program");

  const onSubmit = async (values: EnquiryValues) => {
    // Honeypot: real users never see/fill this field.
    if (honeypotRef.current && honeypotRef.current.value.trim() !== "") {
      // Pretend success so bots don't probe further.
      toast({
        title: "Enquiry received",
        description:
          "Thank you. Our admissions team will reach out within one working day.",
      });
      setSubmitted(true);
      reset();
      return;
    }

    // Reject submissions that happen suspiciously fast.
    if (Date.now() - mountedAtRef.current < MIN_FILL_TIME_MS) {
      toast({
        title: "Just a moment",
        description: "Please take a second to review your details before sending.",
        variant: "destructive",
      });
      return;
    }

    // Client-side rate limiting.
    const timestamps = readSubmissionTimestamps();
    const last = timestamps[timestamps.length - 1];
    if (last && Date.now() - last < MIN_INTERVAL_MS) {
      const wait = Math.ceil((MIN_INTERVAL_MS - (Date.now() - last)) / 1000);
      toast({
        title: "Please slow down",
        description: `You can send another enquiry in ${wait}s.`,
        variant: "destructive",
      });
      return;
    }
    if (timestamps.length >= MAX_PER_WINDOW) {
      toast({
        title: "Too many enquiries",
        description:
          "You've reached the hourly limit. Please call us directly or try again later.",
        variant: "destructive",
      });
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          phone: values.phone,
          email: values.email,
          program: values.program,
          message: values.message ?? "",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      recordSubmissionTimestamp();
      toast({
        title: "Enquiry received",
        description:
          "Thank you. Our admissions team will reach out within one working day.",
      });
      setSubmitted(true);
      reset();
    } catch (err) {
      const description =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call us directly.";
      toast({
        title: "Could not send enquiry",
        description,
        variant: "destructive",
      });
    }
  };

  return (
    <section id="enquiry" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground mb-4">
            Begin your journey with Autentico
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us about the student and the program you are interested in. Our
            counsellors will guide you through admissions, schedules, and fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="rounded-2xl bg-primary text-primary-foreground p-8 shadow-xl">
              <h3 className="font-outfit text-2xl font-bold mb-6">
                Talk to admissions
              </h3>
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                  <div>
                    <p className="font-semibold mb-0.5">Phone</p>
                    <a
                      href="tel:+919035957974"
                      className="block opacity-90 hover:opacity-100"
                    >
                      +91 90359 57974
                    </a>
                    <a
                      href="tel:+919945677055"
                      className="block opacity-90 hover:opacity-100"
                    >
                      +91 99456 77055
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                  <div>
                    <p className="font-semibold mb-0.5">Email</p>
                    <a
                      href="mailto:autenticoacademypvtltd@gmail.com"
                      className="opacity-90 hover:opacity-100 break-all"
                    >
                      autenticoacademypvtltd@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary shrink-0" />
                <div>
                  <p className="font-bold text-foreground mb-1">Office</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Shettihalli Main Road, Jalahalli West,
                    <br />
                    Bangalore — 560 015
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-4 border-t border-border">
                <MapPin className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <div>
                  <p className="font-bold text-foreground mb-1">Branch</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    4th Main Road, Kirloskar Layout, Opp. Sapthagiri University,
                    Hesaraghatta Main Road, Next to Airforce Station (Chimney
                    Hills), Bengaluru — 560 073
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl bg-card border border-border shadow-xl p-6 md:p-10 space-y-5"
            >
              {/* Honeypot field — visually hidden, off-screen, and not focusable. Bots fill it; humans don't. */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-10000px",
                  top: "auto",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                }}
              >
                <label>
                  Website
                  <input
                    ref={honeypotRef}
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              {submitted && (
                <div className="flex items-center gap-3 rounded-xl bg-secondary/20 text-foreground border border-secondary/40 p-4 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Your enquiry has been received. We'll be in touch shortly.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full name
                  </label>
                  <Input
                    placeholder="Student / Parent name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    placeholder="10-digit mobile number"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Program of interest
                </label>
                <Select
                  value={programValue}
                  onValueChange={(v) =>
                    setValue("program", v, { shouldValidate: true })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a program" />
                  </SelectTrigger>
                  <SelectContent>
                    {programs.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.program && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.program.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <Textarea
                  rows={4}
                  placeholder="Tell us about the student's class, board, or any specific question."
                  {...register("message")}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-base rounded-xl"
              >
                {isSubmitting ? "Sending..." : "Submit enquiry"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to be contacted by our admissions team.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
