import { Mail } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border dark:border-dark-border py-8" aria-label="Footer">
      <div className="section-wrapper flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-teal-700 flex items-center justify-center text-white font-bold text-[10px]" aria-hidden="true">
            AV
          </div>
          <p className="text-sm text-charcoal-muted dark:text-gray-500">
            © {year} Arunachalam V · Built with React &amp; Vite
          </p>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:arunachalamv.env@gmail.com"
            className="text-charcoal-muted dark:text-gray-500 hover:text-teal-700 dark:hover:text-teal-400 transition-colors duration-150 focus:outline-none"
            aria-label="Email"
          >
            <Mail size={16} aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/arunachalamenv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-muted dark:text-gray-500 hover:text-teal-700 dark:hover:text-teal-400 transition-colors duration-150 focus:outline-none"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={16} />
          </a>
          <a
            href="https://github.com/arunachalamvenkatachalapathy-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-muted dark:text-gray-500 hover:text-teal-700 dark:hover:text-teal-400 transition-colors duration-150 focus:outline-none"
            aria-label="GitHub"
          >
            <GitHubIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
