/**
 * Project custom element
 */
export default class Project extends HTMLDivElement {

    /**
     * Instanciate the custom element.
     */
    constructor() {
        super()

        this.aboutLink = this.querySelector('.overlay a.about')
        this.overlay = this.querySelector('.project-presentation')
        this.closeLink = this.querySelector('.project-presentation a.close')

        this.onOpen = this.onOpen.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    /**
     * Element connected to the DOM.
     */
    connectedCallback() {
        this.aboutLink.addEventListener('click', this.onOpen)
        this.closeLink.addEventListener('click', this.onClose)
    }

    /**
     * Element disconnectd from the DOM.
     */
    disconnectedCallback() {
        this.aboutLink.removeEventListener('click', this.onOpen)
        this.closeLink.removeEventListener('click', this.onClose)
    }

    /**
     * Request to open project window.
     * @param {MouseEvent} e event
     */
    onOpen(e) {
        console.log(e);
        e.preventDefault()
        this.overlay.style.display = 'block'
        this.overlay.classList.add('opened')
        setTimeout(() => {
            this.overlay.classList.remove('opened')
        }, 400)
        document.body.style.overflow = 'hidden'
    }

    /**
     * Request to close project window.
     * @param {MouseEvent} e event
     */
    onClose(e) {
        e.preventDefault()
        setTimeout(() => {
            this.overlay.style.display = null
            document.body.style.overflow = null
            this.overlay.classList.remove('closed')
        }, 400)
        this.overlay.classList.add('closed')
    }

}
