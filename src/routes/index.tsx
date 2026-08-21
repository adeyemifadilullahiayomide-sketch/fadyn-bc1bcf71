import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { BackToTop } from "@/components/site/BackToTop";
import { Contact } from "@/components/site/Contact";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { ValueProposition } from "@/components/site/ValueProposition";
import { WhyMe } from "@/components/site/WhyMe";
import { Work } from "@/components/site/Work";

const title = "Fadyn Adeyemi | AI App Developer & Digital Systems Builder";
const description =
  "I build high-converting websites, AI-powered applications, and automated digital systems for B2B and local businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "AI App Developer, Squarespace Website Developer, AI Developer, Vibe Coder, Website Developer, Digital Systems Builder, AI Automation, AI Web Development, Business Automation, Custom AI Applications",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Fadyn Adeyemi",
          jobTitle: "Digital Systems Builder, AI App Developer",
          description,
          url: "/",
          sameAs: [
            "https://www.linkedin.com/in/adeyemi-fadilullahi-424675315",
          ],
          knowsAbout: [
            "AI application development",
            "Squarespace website development",
            "Business automation",
            "CRM and workflow systems",
            "Rapid MVP development",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <ValueProposition />
        <WhyMe />
        <Process />
        <About />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
