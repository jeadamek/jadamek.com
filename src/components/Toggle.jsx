import '../styles/components/toggle.sass'

export function Toggle() {
  function handleThemeToggle() {
      document.body.classList.toggle('dark-theme')
      document.body.classList.toggle('light-theme')
  }

  return <div className="toggle" onClick={handleThemeToggle}></div>
}
