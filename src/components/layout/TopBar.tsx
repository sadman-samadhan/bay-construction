import { Clock, Mail, Siren } from "lucide-react";
import { companyData } from "@/data/company";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/BrandIcons";

export function TopBar() {
  const socials = [
    { href: companyData.socials.facebook, Icon: FacebookIcon, label: "Facebook" },
    { href: companyData.socials.instagram, Icon: InstagramIcon, label: "Instagram" },
    { href: companyData.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
    { href: companyData.socials.youtube, Icon: YoutubeIcon, label: "YouTube" },
  ];
  return (
    <div className="hidden bg-ink-950 text-xs text-ink-300 md:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand-400" /> {companyData.hours.regular}</span>
          <a href={`mailto:${companyData.email}`} className="flex items-center gap-1.5 hover:text-white">
            <Mail className="h-3.5 w-3.5 text-brand-400" /> {companyData.email}
          </a>
        </div>
        <div className="flex items-center gap-5">
          <a href={companyData.emergencyPhoneHref} className="flex items-center gap-1.5 font-semibold text-accent-300 hover:text-accent-200">
            <Siren className="h-3.5 w-3.5" /> 24/7 Emergency: {companyData.emergencyPhone}
          </a>
          <span className="h-4 w-px bg-white/15" />
          <div className="flex items-center gap-3">
            {socials.map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-white">
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
