import { Mail } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border py-10">
      <div className="section-wrapper max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-display font-bold text-xs">
            AV
          </div>
          <p className="text-sm font-medium text-text-muted">
            © {year} Arunachalam V. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:arunachalamv.env@gmail.com"
            className="text-text-muted hover:text-accent hover:-translate-y-0.5 transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/arunachalamvenv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent hover:-translate-y-0.5 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="https://github.com/arunachalamvenkatachalapathy-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent hover:-translate-y-0.5 transition-all"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
