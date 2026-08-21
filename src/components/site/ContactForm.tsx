import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { budgetOptions, needOptions } from "@/data/content";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  company: z.string().trim().max(120).optional(),
  need: z.string().trim().min(1, "Select what you need"),
  budget: z.string().trim().min(1, "Select a budget range"),
  details: z
    .string()
    .trim()
    .min(10, "Tell me a little more about the project")
    .max(2000, "Please keep this under 2000 characters"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "w-full rounded-lg border border-input bg-background/70 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-mint/30 bg-surface/70 p-8 text-center">
        <CheckCircle2 className="mx-auto size-8 text-mint" aria-hidden />
        <h3 className="mt-4 text-lg font-semibold">Thanks — your message is ready to send.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          I'll review the details and get back to you. You can also reach me directly on
          LinkedIn.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-lg border border-border-strong px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-raised"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" maxLength={100} className={`mt-2 ${fieldClass}`} />
          {errors.name ? (
            <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            className={`mt-2 ${fieldClass}`}
          />
          {errors.email ? (
            <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium">
            Company <span className="text-muted-foreground">(optional)</span>
          </label>
          <input id="company" name="company" maxLength={120} className={`mt-2 ${fieldClass}`} />
        </div>

        <div>
          <label htmlFor="need" className="block text-sm font-medium">
            What are you looking for?
          </label>
          <select id="need" name="need" defaultValue="" className={`mt-2 ${fieldClass}`}>
            <option value="" disabled>
              Select an option
            </option>
            {needOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.need ? (
            <p className="mt-1.5 text-xs text-destructive">{errors.need}</p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="budget" className="block text-sm font-medium">
            Budget
          </label>
          <select id="budget" name="budget" defaultValue="" className={`mt-2 ${fieldClass}`}>
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.budget ? (
            <p className="mt-1.5 text-xs text-destructive">{errors.budget}</p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="details" className="block text-sm font-medium">
            Project details
          </label>
          <textarea
            id="details"
            name="details"
            rows={5}
            maxLength={2000}
            className={`mt-2 ${fieldClass}`}
          />
          {errors.details ? (
            <p className="mt-1.5 text-xs text-destructive">{errors.details}</p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
      >
        Start A Project →
      </button>
    </form>
  );
}
