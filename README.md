# Md. Moshiur Rahman — Portfolio

Modern static portfolio website built with HTML, CSS & JavaScript. Ready to publish on GitHub Pages.

## Live Demo

**URL:** `https://moshiur1412.github.io/portfolio`

## Features

- **Loading screen** — animated spinner on page load
- **Scroll reveal** — sections fade up as you scroll
- **Animated stats** — counter animation (11+, 45+, 25+, 15+)
- **Certificate filters** — filter by SQL, AI, Security, Programming, Professional
- **Lightbox viewer** — click certificates to view full size with navigation
- **Dark/Light theme** — toggle with localStorage persistence
- **Tech stack marquee** — infinite scrolling tech icons
- **Learning Hub** — articles fetched from markdown files, parsed client-side with marked.js
- **Contact form** — styled contact section
- **PDF download** — click Download PDF to open professional resume
- **Print fallback** — click Print Version for browser's native print dialog
- **Responsive** — works on mobile, tablet, and desktop

## Sections

1. Hero (Profile + Contact)
2. Stats (Experience, Projects, Clients, Certifications)
3. Professional Summary
4. Services (What I Do)
5. Technical Core Competencies (9 categories)
6. Tech Stack (Scrolling marquee)
7. Professional Experience (Timeline)
8. Key Contributions (Projects)
9. Learning Hub (Accordion — fetches .md files)
10. Licenses & Certifications (15 certificates with filters)
11. Education & More
12. Contact
13. Download Resume

## Deploy to GitHub Pages

1. Push this repo to GitHub (`moshiur1412/portfolio`)
2. Go to **Settings → Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose `main` / `master` branch and `/ (root)` folder
5. Click **Save**

## Source Code

This is a fully static site — plain HTML, CSS, and JavaScript with no build step or Node.js dependency. It can be opened directly in any browser or served by any static host.

> **For reviewers:** `index.html` is the single source of truth for the entire page — all section structure, content, and navigation live there. If you are reading or modifying the source, start with `index.html` to understand how everything fits together. Styles and behavior live in `styles/main.css` and `styles/main.js` respectively.

## File Structure

```
portfolio/
├── index.html              # Main portfolio page
├── styles/
│   ├── main.css            # All CSS styles
│   └── main.js             # All JavaScript
├── learning/               # Markdown articles (fetched at runtime)
│   ├── 01-php-laravel/
│   ├── 02-software-engineering/
│   └── 03-case-studies/
├── certifications/         # Certificate images (15)
├── resume_of_md_moshiur_rahman.pdf
├── md-moshiur-rahman-profile.jpg
├── README.md
├── LICENSE
└── .github/workflows/static.yml
```

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Font Awesome 6.5 icons
- Google Fonts (Inter + JetBrains Mono)
- marked.js (markdown parsing, CDN)
- mermaid.js (diagram rendering, CDN)
- No frameworks, no build step — pure static site

## Author

**Md. Moshiur Rahman**
- LinkedIn: [moshiur1412](https://linkedin.com/in/moshiur1412)
- GitHub: [moshiur1412](https://github.com/moshiur1412)
- Email: moshiur1412@gmail.com
