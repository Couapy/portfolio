document.addEventListener('DOMContentLoaded', () => {
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
})
