export default class ImagePreviewer extends HTMLDivElement {

    constructor() {
        super()
        this.initialize()
        this.onClose = this.onClose.bind(this)
    }

    initialize() {
        this.closeButton = document.createElement('button')
        this.closeButton.classList.add('close')
        this.closeButton.setAttribute('data-dismiss', 'modal')
        this.closeButton.setAttribute('aria-label', 'close')
        let closeSpan = document.createElement('span', { 'aria-hidden': 'true' })
        closeSpan.setAttribute('aria-hidden', 'true')
        closeSpan.innerHTML = '&times';

        let viewer = document.createElement('div')
        viewer.classList.add('viewer')
        let scroller = document.createElement('div')
        scroller.classList.add('scrollable')
        this.image = document.createElement('img')
        this.legend = document.createElement('legend')
        this.legend.classList.add('legend')

        this.closeButton.appendChild(closeSpan)
        viewer.appendChild(scroller)
        scroller.appendChild(this.image)
        scroller.appendChild(this.legend)
        this.appendChild(this.closeButton)
        this.appendChild(viewer)
    }

    load(image) {
        if (!(image instanceof HTMLImageElement)) {
            console.error("Invalid image :");
            console.error(image);
            return
        }
        this.image.src = image.src;
        this.legend.innerText = this.image.getAttribute('alt')
    }

    connectedCallback() {
        this.closeButton.addEventListener('click', this.onClose)
    }

    disconnectedCallback() {
        this.closeButton.removeEventListener('click', this.onClose)
    }

    onClose() {
        this.classList.add('image-preview-close')
        setTimeout(() => {
            this.remove()
        }, 400)
    }

}
