/**
 * Menu custom element.
 */
export default class Menu extends HTMLDivElement {

    /**
     * Instanciate custom element.
     */
    constructor() {
        super()

        this.nav = document.querySelector('nav')
        this.menubutton = document.querySelector('nav .menu-button')
        this.links = this.nav.querySelectorAll('a')

        this.onMenuButtonClick = this.onMenuButtonClick.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    /**
     * Element connected to the DOM.
     */
    connectedCallback() {
        this.menubutton.addEventListener('click', this.onMenuButtonClick)
        this.links.forEach((link) => {
            link.addEventListener('click', this.onClose)
        })
    }

    /**
     * Element disconnected to the DOM.
     */
    disconnectedCallback() {
        this.menubutton.removeEventListener('click', this.onMenuButtonClick)
        this.links.forEach((link) => {
            link.removeEventListener('click', this.onClose)
        })
    }

    /**
     * Requests on menu button click.
     * @param {MouseEvent} e event
     */
    onMenuButtonClick(e) {
        this.nav.classList.toggle('active')
        this.menubutton.classList.toggle('active')
    }

    /**
     * Requests close menu.
     * @param {MouseEvent} e event
     */
    onClose(e) {
        this.nav.classList.remove('active')
        this.menubutton.classList.remove('active')
    }

}
