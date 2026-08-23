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

const labelClass =
  "block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground";

const fieldClass =
  "mt-3 w-full border-0 border-b border-border bg-transparent pb-3 text-lg text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

const errorClass = "mt-2 text-xs text-primary";

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
      <div className="border-t border-border pt-10">
        <p className="rule-label">Message ready</p>
        <h3 className="mt-6 text-3xl leading-tight sm:text-4xl">
          Thanks — I'll be <span className="serif-italic text-primary">in touch.</span>
        </h3>
        <p className="mt-5 max-w-md text-sm leading-[1.8] text-muted-foreground">
          I'll review the details and get back to you. You can also reach me directly on
          LinkedIn.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="link-underline mt-8 text-[0.78rem] font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="border-t border-border pt-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" maxLength={100} placeholder="Your name" className={fieldClass} />
          {errors.name ? <p className={errorClass}>{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            placeholder="you@company.com"
            className={fieldClass}
          />
          {errors.email ? <p className={errorClass}>{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company (optional)
          </label>
          <input
            id="company"
            name="company"
            maxLength={120}
            placeholder="Company name"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="need" className={labelClass}>
            What are you looking for?
          </label>
          <select id="need" name="need" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select an option
            </option>
            {needOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.need ? <p className={errorClass}>{errors.need}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="budget" className={labelClass}>
            Budget
          </label>
          <select id="budget" name="budget" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.budget ? <p className={errorClass}>{errors.budget}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="details" className={labelClass}>
            Project details
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            maxLength={2000}
            placeholder="Tell me about the project…"
            className={`${fieldClass} resize-none`}
          />
          {errors.details ? <p className={errorClass}>{errors.details}</p> : null}
        </div>
      </div>

      <button
        type="submit"
        className="mt-12 inline-flex items-center gap-2 bg-foreground px-7 py-4 text-[0.82rem] font-medium tracking-wide text-background transition-colors hover:bg-primary"
      >
        Start a Project <span aria-hidden>↗</span>
      </button>
    </form>
  );
}
