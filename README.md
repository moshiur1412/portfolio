# Md. Moshiur Rahman - Portfolio

A professional single-page portfolio for Md. Moshiur Rahman, Senior Software Engineer and Technical Lead. The site is built as a fully static experience with HTML5, CSS3, and vanilla JavaScript, and is ready for deployment on GitHub Pages.

## Live Demo

**URL:** `https://moshiur1412.github.io/portfolio`

## Highlights

- **Professional positioning** - focused on senior software engineering, technical leadership, and real project outcomes
- **Responsive interface** - optimized for mobile, tablet, and desktop screens
- **Dark and light themes** - includes localStorage persistence
- **Animated experience metrics** - counters for experience, projects, clients, and certifications
- **Technical skills showcase** - grouped core competencies and scrolling technology stack
- **Learning Hub** - markdown articles fetched at runtime and rendered client-side with marked.js
- **Certificate gallery** - category filters, full-size lightbox viewer, and keyboard-friendly navigation
- **Resume access** - PDF download plus browser print fallback
- **Static deployment** - no framework, no build step, and no Node.js dependency

## Page Sections

1. Hero (Profile + Contact)
2. Stats (Experience, Projects, Clients, Certifications)
3. Professional Summary
4. Services (What I Do)
5. Technical Core Competencies (9 categories)
6. Tech Stack (Scrolling marquee)
7. Professional Experience (Timeline)
8. Key Contributions (Projects)
9. Learning Hub (Accordion - fetches `.md` files)
10. Licenses & Certifications (15 certificates with filters)
11. Education & More
12. Contact
13. Download Resume

## Deployment

1. Push this repository to GitHub (`moshiur1412/portfolio`)
2. Go to **Settings -> Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose `main` / `master` branch and `/ (root)` folder
5. Click **Save**

## Source Code

This is a fully static site: plain HTML, CSS, and JavaScript with no build step or Node.js dependency. It can be opened directly in a browser or served by any static host.

> **For reviewers:** `index.html` is the single source of truth for the page. It contains the section structure, content, navigation, and Learning Hub accordion markup. Styles live in `styles/main.css`; behavior lives in `styles/main.js`.

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
- No frameworks, no build step, and no runtime server dependency

## Maintenance Notes

- Update `index.html` first when changing page content or structure.
- Keep certificate counts and categories synchronized with the gallery filters.
- Add Learning Hub articles under `learning/` and register new entries in `styles/main.js` when needed.
- Validate changes on both desktop and mobile before publishing.

## Author

**Md. Moshiur Rahman**
- LinkedIn: [moshiur1412](https://linkedin.com/in/moshiur1412)
- GitHub: [moshiur1412](https://github.com/moshiur1412)
- Email: moshiur1412@gmail.com
