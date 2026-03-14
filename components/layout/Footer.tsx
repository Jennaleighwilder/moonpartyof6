import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { SITE } from "@/lib/siteConfig";

const footerLinks = {
  about: [
    { href: "/our-story", label: "Our Story" },
    { href: "/mrs-moon", label: "Mrs. Moon" },
    { href: "/mr-moon", label: "Mr. Moon" },
  ],
  resources: [
    { href: "/resources", label: "Free Resources" },
    { href: "/guides", label: "Guides" },
    { href: "/lovers", label: "Lovers & Patterns" },
    { href: "/quiz", label: "Quiz" },
  ],
  experiences: [
    { href: "/date-nights", label: "Date Nights" },
    { href: "/retreats", label: "Retreats" },
  ],
  connect: [
    { href: "/work-with-us", label: "Work With Us" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-classic-black text-pearl-white">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-display text-lg font-normal mb-4 text-warm-gold uppercase tracking-[0.2em] text-xs">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sleek-silver hover:text-warm-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-normal mb-4 text-warm-gold uppercase tracking-[0.2em] text-xs">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sleek-silver hover:text-warm-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-normal mb-4 text-warm-gold uppercase tracking-[0.2em] text-xs">Experiences</h3>
            <ul className="space-y-3">
              {footerLinks.experiences.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sleek-silver hover:text-warm-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-normal mb-4 text-warm-gold uppercase tracking-[0.2em] text-xs">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sleek-silver hover:text-warm-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-charcoal/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-display text-pearl-white/80 text-sm">
              {SITE.name} — {SITE.tagline}
            </p>
            <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-sleek-silver hover:text-warm-gold text-sm mt-1 block transition-colors">
              {SITE.handle}
            </a>
          </div>
          <SocialLinks variant="footer" />
        </div>
      </div>
    </footer>
  );
}
