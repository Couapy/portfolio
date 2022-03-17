function selectTheme(theme, save = false) {
  // Update body class
  document.body.className = theme
  // Update meta theme-color
  const meta = document.querySelector('meta[name="theme-color"]')
  meta.content = getComputedStyle(document.body).getPropertyValue('--theme-color').replace(' ', '')
}

export default function setupTheme() {
  const theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'

  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => {
    selectTheme(e.matches ? 'light' : 'dark')
  })

  selectTheme(theme, false)
}
