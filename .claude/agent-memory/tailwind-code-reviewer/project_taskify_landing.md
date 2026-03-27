---
name: Taskify Landing Page — Project Context
description: Context for the Taskify landing page project including tech stack, design system, and recurring issues found in review
type: project
---

This is a Tailwind CSS + Vite landing page for "Taskify", a Portuguese-language task manager app targeting Brazilian users.

**Why:** Course/demo project (curso-claude repository). No external stakeholders or deadlines observed.

**Tech stack:** Tailwind CSS v3, Vite, vanilla JS, custom `lilac` color tokens, custom fonts (Bricolage Grotesque for display, Plus Jakarta Sans for body).

**Design system decisions:**
- Custom `lilac` color scale (50–950) mapped to purple/violet tones — maps to `violet` in Tailwind's default palette but uses the custom name throughout.
- `font-display` = Bricolage Grotesque, `font-sans` = Plus Jakarta Sans.
- Custom animations: `animate-orb-drift`, `animate-fade-up`, `animate-float`, `animate-glow-pulse` — all registered in `tailwind.config.js`.
- Custom delay utilities `.delay-100` through `.delay-500` defined in `@layer utilities` in `style.css`.
- Component classes in `style.css`: `.orb`, `.card-glow`, `.btn-glow`, `.mock-window`, `.mock-chrome`, `.mock-dot`, `.mock-task`, `.mock-task-check`, `.reveal`, `.gradient-text`, `.animated-border`.

**Recurring issues found in first review (2026-03-26):**
- All interactive elements were missing `focus-visible:` keyboard states — added ring-2 ring-lilac-500 pattern throughout.
- `<a>` tags used without `href` inside decorative mockup sidebars — corrected to `<button>` elements.
- Conflicting `border` + `border-l-4` + single border color class on priority cards — fixed with explicit `border-l-*` color utilities.
- Inline `style="opacity:0"` instead of Tailwind `opacity-0` class on hero mockup.
- Inline `background-color: rgba(139,92,246,*)` on bar chart bars — replaced with `bg-lilac-500/{opacity}` modifier classes.
- Decorative mockup windows missing `aria-hidden="true"` — screen readers skipped irrelevant UI chrome.
- Footer social icon links missing `aria-label` attributes.
- Heading hierarchy issue: `<h2>` and `<h3>` used inside decorative mockups, breaking document outline — replaced with `<p>` + `aria-hidden`.
- `transition-all` used where only colors change — replaced with `transition-colors` for color-only transitions.

**Recurring issues found in login.html review (2026-03-26):**
- `style="animation-fill-mode:forwards"` on animated card wrapper — replaced with `[animation-fill-mode:forwards]` arbitrary property utility to eliminate inline style.
- Divider element had `aria-hidden="true"` on the outer `<div>`, hiding the "ou" text label from screen readers — fixed with `role="separator" aria-label="ou"` on the container and `aria-hidden="true"` moved to the visual child elements only.
- `<form>` missing semantic association to its heading — added `aria-labelledby="login-heading"` to the form and `id="login-heading"` to the `<h1>`.
- Both text inputs used bare `outline-none` (suppresses all browser outlines) instead of `focus-visible:outline-none` (suppresses outline only when a visible ring is also applied) — replaced throughout.
- Checkbox had `checked:bg-lilac-500 checked:border-lilac-500` alongside `accent-lilac-500` — these two systems are mutually exclusive. Without `appearance-none`, the browser renders its native checkbox and the `checked:` utilities are dead code. Removed the non-functional `checked:` utilities and kept `accent-lilac-500`.
- Orb decorative elements use inline `animation-delay` and `animation-direction` values (`-6s`, `-10s`, `alternate-reverse`) that fall outside the project's custom delay scale and have no Tailwind equivalent — these inline styles are intentionally retained as justified.

**How to apply:** When reviewing future changes to this file, check that all new interactive elements get `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac-500` and that any new decorative content is marked `aria-hidden="true"`. Do not use bare `outline-none` on focusable elements — always scope it to `focus-visible:outline-none`. For checkbox styling, use only `accent-*` (native) OR `appearance-none` + `checked:bg-*` (custom), never both at once.
