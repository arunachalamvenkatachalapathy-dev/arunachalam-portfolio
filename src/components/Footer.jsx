import { LinkedInIcon, GitHubIcon } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <p className="text-sm font-medium text-text-muted">
          © {year} Arunachalam V. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/arunachalamvenv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href="https://github.com/arunachalamvenkatachalapathy-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <GitHubIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
