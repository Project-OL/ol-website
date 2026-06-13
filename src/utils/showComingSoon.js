import '../styles/coming-soon-toast.css'

let hideTimer

function getToastEl() {
  let el = document.getElementById('coming-soon-toast')
  if (!el) {
    el = document.createElement('div')
    el.id = 'coming-soon-toast'
    el.className = 'coming-soon-toast'
    el.setAttribute('role', 'status')
    el.setAttribute('aria-live', 'polite')
    document.body.appendChild(el)
  }
  return el
}

export function showComingSoon(message) {
  const el = getToastEl()
  el.textContent = message
  el.classList.add('coming-soon-toast--visible')
  window.clearTimeout(hideTimer)
  hideTimer = window.setTimeout(() => {
    el.classList.remove('coming-soon-toast--visible')
  }, 2600)
}

export function handleComingSoonClick(message) {
  return (event) => {
    event.preventDefault()
    showComingSoon(message)
  }
}
