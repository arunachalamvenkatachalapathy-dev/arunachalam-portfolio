# Arunachalam V — Personal Portfolio

Personal portfolio website for **Arunachalam V**, ESG & Sustainability Professional and Environmental Engineer.

🔗 **Live site:** https://arunachalamvenkatachalapathy-dev.github.io/arunachalam-portfolio/

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI components |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS v3](https://tailwindcss.com) | Styling |
| [lucide-react](https://lucide.dev) | Icons |
| [GitHub Actions](https://github.com/features/actions) | CI/CD deployment |
| [GitHub Pages](https://pages.github.com) | Static hosting |

---

## Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/arunachalamvenkatachalapathy-dev/arunachalam-portfolio.git
cd arunachalam-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173/arunachalam-portfolio/](http://localhost:5173/arunachalam-portfolio/) in your browser.

---

## Adding Your Resume

Place your resume PDF at:

```
public/resume.pdf
```

The "View Resume" button in the Hero section links to this file. It will be included in the build output automatically.

---

## Building for Production

```bash
npm run build
```

The output goes to `dist/`. You can preview it locally with:

```bash
npx serve dist
```

---

## Deployment

The site is automatically deployed to **GitHub Pages** on every push to the `main` branch via the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### One-time Setup (GitHub)

1. Go to your repository → **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Save — that's it!

Push to `main` and the Actions workflow will:
1. Install dependencies (`npm ci`)
2. Build the project (`npm run build`)
3. Upload `dist/` as a Pages artifact
4. Deploy to GitHub Pages automatically

### Base Path

The `base` in [`vite.config.js`](vite.config.js) is set to `/arunachalam-portfolio/` matching the repository name. If you rename the repo, update this value.

---

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx          # Sticky nav with dark mode toggle
│   ├── Hero.jsx         # Name, tagline, CTAs, social links
│   ├── About.jsx        # Bio + highlight cards
│   ├── Experience.jsx   # Timeline of work experience
│   ├── Projects.jsx     # Project cards (dissertation + live projects)
│   ├── Skills.jsx       # Grouped skill categories
│   ├── Achievements.jsx # Awards + certifications
│   ├── Education.jsx    # Academic background
│   ├── Contact.jsx      # Contact links + availability indicator
│   └── Footer.jsx       # Minimal footer
├── App.jsx              # Root component + scroll reveal hook
├── main.jsx             # React entry point
└── index.css            # Global styles + Tailwind directives
public/
└── resume.pdf           # ← Add your resume here
```

---

## Customization

- **Colors** — Edit `tailwind.config.js` → `theme.extend.colors`
- **Content** — Edit the data arrays in each component file
- **Dark mode** — Persisted in `localStorage`, toggleable via the nav button

---

## License

MIT — feel free to adapt for your own portfolio.
