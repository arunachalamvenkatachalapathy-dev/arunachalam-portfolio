import { MapPin, FileText, Mail, ArrowRight } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './Icons'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
      aria-label="Hero section"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, #0F766E 0%, transparent 60%), radial-gradient(circle at 20% 80%, #134e4a 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="section-wrapper section-pad w-full">
        <div className="max-w-2xl">
          {/* Location badge */}
          <div className="flex items-center gap-1.5 text-charcoal-muted dark:text-gray-400 text-sm mb-8 reveal">
            <MapPin size={14} className="text-teal-700 dark:text-teal-400" aria-hidden="true" />
            <span>Bargur, Tamil Nadu, India</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-charcoal dark:text-white leading-[1.05] tracking-tight mb-5 reveal">
            Arunachalam V
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg font-medium text-teal-700 dark:text-teal-400 mb-6 leading-relaxed reveal">
            ESG &amp; Sustainability Professional&nbsp;&nbsp;·&nbsp;&nbsp;Environmental Engineer
            <br className="hidden sm:block" />
            GHG Accounting &amp; BRSR Reporting
          </p>

          {/* Value statement */}
          <p className="text-charcoal-soft dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-10 reveal">
            I translate complex environmental data into audit-ready GHG inventories and strategic ESG disclosures — helping organizations measure, report, and reduce their climate impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-10 reveal">
            <a
              href={`${BASE}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="View resume PDF"
            >
              <FileText size={16} aria-hidden="true" />
              View Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-outline"
            >
              Contact Me
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 reveal">
            <a
              href="mailto:arunachalamv.env@gmail.com"
              className="text-charcoal-muted dark:text-gray-400 hover:text-teal-700 dark:hover:text-teal-400 transition-colors duration-150 focus:outline-none focus:text-teal-700"
              aria-label="Email Arunachalam"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/arunachalamenv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-muted dark:text-gray-400 hover:text-teal-700 dark:hover:text-teal-400 transition-colors duration-150 focus:outline-none focus:text-teal-700"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href="https://github.com/arunachalamvenkatachalapathy-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-muted dark:text-gray-400 hover:text-teal-700 dark:hover:text-teal-400 transition-colors duration-150 focus:outline-none focus:text-teal-700"
              aria-label="GitHub profile"
            >
              <GitHubIcon size={20} />
            </a>

            {/* Separator */}
            <span className="text-surface-border dark:text-dark-border" aria-hidden="true">|</span>
            <span className="text-xs text-charcoal-muted dark:text-gray-500">
              Open to ESG & Sustainability roles
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-charcoal-muted dark:text-gray-500 opacity-60" aria-hidden="true">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-current animate-pulse" />
      </div>
    </section>
  )
}
