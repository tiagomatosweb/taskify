/* ─── Dark / Light Mode ───────────────────────────────────── */
const html       = document.documentElement
const toggleBtn  = document.getElementById('theme-toggle')
const sunIcon    = document.getElementById('icon-sun')
const moonIcon   = document.getElementById('icon-moon')

function applyTheme(dark) {
  if (dark) {
    html.classList.add('dark')
    sunIcon?.classList.remove('hidden')
    moonIcon?.classList.add('hidden')
  } else {
    html.classList.remove('dark')
    sunIcon?.classList.add('hidden')
    moonIcon?.classList.remove('hidden')
  }
}

// Init: prefer OS setting, fallback to dark
const stored   = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
applyTheme(stored ? stored === 'dark' : prefersDark)

toggleBtn?.addEventListener('click', () => {
  const isDark = html.classList.contains('dark')
  localStorage.setItem('theme', isDark ? 'light' : 'dark')
  applyTheme(!isDark)
})

/* ─── Mobile Menu ─────────────────────────────────────────── */
const menuBtn   = document.getElementById('menu-btn')
const mobileNav = document.getElementById('mobile-nav')

menuBtn?.addEventListener('click', () => {
  mobileNav?.classList.toggle('hidden')
})

/* ─── Scroll-reveal via IntersectionObserver ─────────────── */
const reveals = document.querySelectorAll('.reveal')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger siblings slightly
        const delay = entry.target.dataset.delay || 0
        setTimeout(() => {
          entry.target.classList.add('visible')
        }, Number(delay))
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)

reveals.forEach(el => observer.observe(el))

/* ─── Sticky Nav shadow on scroll ────────────────────────── */
const nav = document.getElementById('main-nav')

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav?.classList.add('nav-scrolled')
  } else {
    nav?.classList.remove('nav-scrolled')
  }
}, { passive: true })

/* ─── Active nav link on scroll ─────────────────────────── */
const sections    = document.querySelectorAll('section[id]')
const navLinks    = document.querySelectorAll('.nav-link')

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'text-lilac-500',
            link.getAttribute('href') === `#${entry.target.id}`
          )
          link.classList.toggle(
            'text-gray-600',
            link.getAttribute('href') !== `#${entry.target.id}`
          )
        })
      }
    })
  },
  { threshold: 0.4 }
)

sections.forEach(s => sectionObserver.observe(s))
