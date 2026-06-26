# Portfolio Skills & Guidelines

## AI Assistant Instructions

When working on this portfolio project, follow these rules:

---

## Project Overview

- **Type:** Static portfolio website (single-page)
- **Tech:** HTML5, CSS3, Vanilla JavaScript (no frameworks, no Node)
- **Purpose:** Professional portfolio for MD. Moshiur Rahman — Senior Laravel Developer & Technical Lead
- **Deployment:** GitHub Pages
- **Local Dev:** VS Code Live Server extension

---

## Content Rules

### Writing Style
- Use **first person** ("I build", "I specialize")
- Keep descriptions **natural and conversational**, not robotic
- Be **specific** with metrics (90%+ improvement, 40k+ records, 11+ years)
- Avoid generic buzzwords — use **real achievements**
- Every section should tell a **story**, not just list facts

### Stats (Verified from CV)
| Stat | Value | Source |
|---|---|---|
| Years Experience | 11+ | Jan 2015 – Present (2026) |
| Projects Delivered | 45+ | 4 companies + enterprise work |
| Happy Clients | 25+ | Multiple companies + clients |
| Certifications | 15 | Verified from certificate images |

### Certificate Categories
| Category | Count | Certificates |
|---|---|---|
| SQL & Databases | 4 | Intro SQL, Fundamentals DB, SQL Optimization, SQL Data Analysis |
| AI & ML | 3 | Generative AI, Prompt Engineering, Claude AI |
| Cyber Security | 3 | Security Leadership, Intro Cybersecurity, Cyber Hygiene |
| Programming | 1 | PHP Fundamentals |
| Professional | 4 | Agile Conference, Debate Championship, Elevate Your Public Speaking, Excel Essentials |

---

## Design Rules

### Colors (CSS Variables)
```
--primary: #6366f1        (Indigo)
--primary-dark: #4f46e5
--accent: #06b6d4         (Cyan)
--accent2: #f59e0b        (Amber)
```

### Typography
- **Headings:** Inter (800/900 weight)
- **Body:** Inter (400/500 weight)
- **Code:** JetBrains Mono

### Spacing
- Section padding: 90px 24px
- Card border-radius: 16px
- Max width: 1120px (1400px for Learning Hub)

---

## Section Order (Navigation)

1. About (Summary)
2. Services (What I Do)
3. Skills (Technical Core Competencies)
4. Tech Stack (Scrolling marquee)
5. Experience (Timeline)
6. Projects (Key Contributions)
7. Learning (Knowledge Hub — Accordion)
8. Certificates (Licenses & Certifications)
9. Contact (Get In Touch)

---

## Architecture

### External Files
| File | Purpose |
|---|---|
| `index.html` | All HTML content and structure |
| `styles/main.css` | All CSS styles |
| `styles/main.js` | All JavaScript (fetch, accordion, theme, etc.) |
| `learning/**/*.md` | Markdown articles fetched at runtime |

### How Learning Hub Works
1. `index.html` has accordion links with `data-id` pointing to `.md` files
2. `main.js` `loadArticle()` fetches the `.md` file from `learning/` directory
3. `marked.js` (CDN) parses markdown to HTML client-side
4. Parsed HTML is rendered in `#article-view` container
5. `mermaid.js` (CDN) renders any diagram code blocks

### CDN Dependencies
- **marked.js** — markdown parser (loaded in `<head>`)
- **mermaid.js** — diagram renderer (loaded in `<head>`)
- **Font Awesome 6** — icons
- **Google Fonts** — Inter + JetBrains Mono

---

## Certificate Handling

### Adding New Certificates
1. Add image to `certifications/` folder
2. Name format: `lowercase-with-dashes.jpg`
3. Add card HTML in `index.html` cert-grid
4. Set correct `data-category`: sql, ai, security, programming, professional
5. Update filter count in "All" button
6. Update category summary count at bottom

### Certificate Card Template
```html
<a class="cert-card reveal-scale delay-X" href="certifications/FILENAME.jpg" target="_blank" rel="noopener" data-category="CATEGORY" data-index="INDEX">
  <img class="cert-img" src="certifications/FILENAME.jpg" alt="TITLE" loading="lazy" />
  <span class="cert-tag">CATEGORY TAG</span>
  <div class="cert-overlay">
    <div class="cert-title">CERTIFICATE TITLE</div>
    <div class="cert-issuer"><i class="fas fa-award"></i> ISSUER NAME</div>
    <div class="cert-date"><i class="far fa-calendar-alt"></i> Month DD, YYYY</div>
  </div>
</a>
```

---

## Technical Core Competencies (9 Categories)

1. **Backend Engineering** — PHP 8+, Laravel 11+, REST APIs, Microservices
2. **Frontend Development** — React, Inertia, Livewire, Alpine, JS ES6+
3. **Database Systems & Tools** — MySQL, PostgreSQL, Redis, TablePlus, DBeaver
4. **DevOps & Cloud Infrastructure** — Docker, AWS, CI/CD, Linux, Nginx
5. **Version Control & Collaboration** — Git, GitHub, GitLab, Bitbucket
6. **Project Management & Agile** — Jira, Trello, Notion, Scrum
7. **IDEs & Development Environment** — VS Code, PhpStorm, Cursor, Postman
8. **AI-Assisted Software Engineering** — Claude, ChatGPT, Copilot, Cursor AI
9. **Testing & Code Quality** — PHPUnit, Laravel Testing, TDD, Laravel Pint

---

## Knowledge Sharing

### Structure
```
learning/
├── 01-php-laravel/              # PHP & Laravel
│   ├── 01-php-basics/
│   ├── 02-string-functions/
│   ├── 03-array-functions/
│   ├── 04-oop/
│   ├── 05-laravel/
│   ├── 06-database/
│   ├── 07-api/
│   └── 08-interview/
├── 02-software-engineering/  # Software Engineering
│   ├── 01-clean-code/
│   ├── 02-design-patterns/
│   ├── 03-architecture/
│   ├── 04-system-design/
│   ├── 05-security/
│   ├── 06-performance/
│   └── 07-devops/
└── 03-case-studies/          # Real Project Case Studies
    ├── 01-ssl-wireless/
    ├── 02-erp-projects/
    ├── 03-saas-projects/
    ├── 04-problems-solved/
    ├── 05-interview-stories/
    └── 06-debug-diary/
```

### Naming Convention
- **Folders:** kebab-case (`01-php-basics/`)
- **Cover files:** `cover.md` (one per subcategory, lists all planned topics)
- **Article files:** `XX-kebab-case.md` (e.g., `01-print-vs-echo.md`)

### Cover File Format
```markdown
# Category Title

1. Topic One
2. Topic Two
...
```

### Article File Structure (Bilingual)
Each article follows this template:
1. Definition Table
2. Internal Working / Flow Diagram
3. Code Examples
4. Output
5. Real Project Example
6. Interview Answer (Bangla + English)
7. Common Mistakes
8. Follow-up Questions
9. Memory Tricks
10. Summary & Revision Checklist

### Adding New Articles
1. Create `XX-kebab-case.md` in the appropriate subfolder
2. Follow the bilingual article template
3. Update the subfolder's `cover.md` if adding a new topic
4. Update the `A` object in `styles/main.js` with the new article entry
5. The Learning Hub accordion in `index.html` auto-reflects folder structure

---

## Do NOT

- Use frameworks (React, Vue, etc.) — keep it pure HTML/CSS/JS
- Use Node.js or build tools — site is fully static
- Add comments in code unless specifically asked
- Change the color scheme without explicit instruction
- Remove existing sections without confirmation
- Add fake metrics or placeholder content

---

## When Updating Content

1. Always verify certificate details from images before adding
2. Keep consistent date format: `Month DD, YYYY` (e.g., June 20, 2026)
3. Use `&amp;` for `&` in HTML
4. Use `fas` for solid icons, `fab` for brand icons (Font Awesome 6)
5. Test responsive layout after changes
6. Run through print stylesheet check

---

## Version History

- **v3.0** (June 2026) — External JS/CSS, fetch-based Learning Hub (no build step, no node_modules)
- **v2.1** (June 2026) — Learning Hub: 24 articles across 8 subcategories
- **v2.0** (June 2026) — Full redesign with 9 skill categories, 15 certificates, stats, services, testimonials, contact
- **v1.0** — Initial portfolio with basic sections
