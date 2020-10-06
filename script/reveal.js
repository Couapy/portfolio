function intersectionHandler (entries, observer) {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.intersectionRatio > threshold) {
            entry.target.classList.remove('reveal')
            observer.unobserve(entry.target)
        }
    })
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
}
const observer = new IntersectionObserver(intersectionHandler, options)
const elements = document.querySelectorAll('.reveal')

window.addEventListener('DOMContentLoaded', () => {
    elements.forEach(element => {
        observer.observe(element)
    })

    console.log('[REVEALER] Loaded')
})
