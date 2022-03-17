const defaultTheme = window.matchMedia('(prefers-color-scheme: light)') ? 'light' : 'dark'

function selectTheme(theme, save = false) {
  // Update localstorage
  if (save) localStorage.setItem('theme', theme)
  // Update body class
  document.body.className = theme
  // Update meta theme-color
  const meta = document.querySelector('meta[name="theme-color"]')
  meta.content = getComputedStyle(document.body).getPropertyValue('--theme-color').replace(' ', '')
}

export default function setupTheme() {
  const toggleSwitch = document.querySelector('.theme-switch-button')
  const theme = localStorage.getItem('theme') || defaultTheme

  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => {
    selectTheme(e.matches ? 'light' : 'dark', false)
  })

  selectTheme(theme, false)
  toggleSwitch.addEventListener('click', e => {
    const isLight = Array.from(document.body.classList).includes('light')
    selectTheme(isLight ? 'dark' : 'light', true)
  }, false)
}
