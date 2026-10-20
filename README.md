# Abdurachman Ranggana — Professional Portfolio

One-page CV and portfolio website with a premium dark theme, responsive layout, bilingual EN/ID switching, interactive CSS 3D infrastructure hero, interactive filters, expandable experience timeline, project modal, architecture showcase, `mailto` contact form, and downloadable CV PDF.

This implementation uses HTML/CSS/JavaScript without a build step so it can be uploaded directly to regular shared hosting. The requested visual and interactive requirements are implemented, while Next.js/Tailwind are not forced because the deployment target is static file hosting.

## Structure

- `index.html` — page structure, SEO metadata, and accessibility markup.
- `styles.css` — design system, responsive layout, dark/light theme, motion, and print stylesheet.
- `data.js` — the single file to edit for personal details, skills, experience, projects, education, credentials, achievements, and social links.
- `script.js` — data rendering and all frontend interactions.
- `CV-Abdurachman-Ranggana.pdf` — the original CV used by the download buttons.
- `robots.txt` and `sitemap.xml` — replace `https://example.com` with the real hosting domain before deployment.

## Running locally

The website does not require a database, API key, runtime framework, or build process. Open `index.html` directly in a browser for a quick preview. If the browser restricts the PDF or certain features under `file://`, run a simple static server from this folder.

## Uploading

Upload every file in this folder to the public/root directory of the hosting account. Keep `index.html`, `styles.css`, `data.js`, `script.js`, and `CV-Abdurachman-Ranggana.pdf` in the same folder.

## Configuration checklist

1. Edit `data.js` to add a profile photo, LinkedIn, GitHub, WhatsApp, certifications, and verified achievement metrics.
2. Replace `https://example.com` in `robots.txt` and `sitemap.xml` with the real domain.
3. If a backend form is needed, replace the `mailto` handler in `script.js` with a trusted endpoint. The current form intentionally does not claim to store or send messages through a server.
4. To add a photo, replace `.profile-image-placeholder` in `index.html` with an `<img>` element and use an optimized local image file.

## Active features

- Dark mode by default with a light-mode toggle and saved preference.
- English/Indonesian language switcher with centralized translations.
- Lightweight pointer-responsive CSS 3D cloud infrastructure hero with a mobile/reduced-motion fallback.
- Responsive navigation and mobile menu.
- Active-section navigation, smooth scrolling, back-to-top button, reveal animation, and reduced-motion support.
- Skill category filters, project filters, and project search.
- Expandable experience timeline.
- Project detail modal.
- Interactive architecture diagrams with node details.
- Contact form validation with a `mailto` fallback.
- Original CV download and print-friendly stylesheet.
- SEO/Open Graph metadata, semantic landmarks, keyboard-accessible controls, and no fake social or credential links.
