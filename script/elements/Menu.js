import { getIndexOfElement } from '../functions.js'


export default class Menu extends HTMLElement {

    constructor() {
        super()
        this.nav_links = this.querySelectorAll('a')
    }

    connectedCallback() {
        this.nav_links.forEach(link => {
            link.addEventListener('click', this.navLinkHandler)
        })
    }

    disconnectedCallback() {
        this.nav_links.forEach(link => {
            link.removeEventListener('click', this.navLinkHandler)
        })
    }

    /**
     * Handle the click event on a link in the nav menu
     * @param {MouseEvent} event 
     */
    navLinkHandler(event) {
        if (this.hash !== '') {
            const id = this.hash.substr(1)
            const slide = document.getElementById(id)
            const index_current_slide = getIndexOfElement(document.querySelector('.slide.active'))
            const index_new_slide = getIndexOfElement(slide)
            if (index_new_slide > index_current_slide) {
                slide.active('left')
            } else {
                slide.active('right')
            }
            if (window.innerWidth <= 768) {
                event.preventDefault()
                document.location.hash = this.hash
                document.body.scrollTop = slide.offsetTop
            }
        }
    }

}
