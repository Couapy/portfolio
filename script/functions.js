/**
 * Active a slide on page loading.
 */
export function activeSlideFromURI() {
    if (document.location.hash !== ''){
        let slide = document.querySelector(document.location.hash)
        if (slide !== null && slide.attributes.getNamedItem('is').value === 'div-slide') {
            slide.active('right')
        }
        if (window.innerWidth <= 768) {
            document.body.scrollTop = slide.offsetTop
        }
    }
}

/**
 * Navigate to slides.
 */
export function linkMenuItemsToSlides() {
    const menu_button = document.querySelector('.menu-button')
    const nav_menu = document.querySelector('nav.menu')
    const items = nav_menu.querySelectorAll('a, .nav-link')
    
    menu_button.addEventListener('click', () => {
        nav_menu.classList.toggle('active')
    })
    items.forEach(link => {
        link.addEventListener('click', () => {
            nav_menu.classList.remove('active')
        })
    })
}

/**
 * Returns the index of the element inside the parent element
 * @param {HTML} element 
 */
export function getIndexOfElement(element) {
    var i = 0
    while ((element = element.previousElementSibling) !== null) {
        ++i
    }
    return i
}