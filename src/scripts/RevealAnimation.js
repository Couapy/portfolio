const threshold = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold,
};

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > threshold) {
            entry.target.classList.add('reveal-ready')
            observer.unobserve(entry.target)
        }
    });
};

export default function () {
    document.documentElement.classList.add('reveal-loaded')
    window.addEventListener("DOMContentLoaded", function () {
        const observer = new IntersectionObserver(handleIntersect, options)
        const targets = document.querySelectorAll('.reveal')
        targets.forEach(function (target) {
            observer.observe(target)
        })
    })
}
