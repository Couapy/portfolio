export default class ImagePreviewable extends HTMLImageElement {

    constructor() {
        super()
        this.onClick = this.onClick.bind(this)
    }

    connectedCallback() {
        this.addEventListener('click', this.onClick)
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.onClick)
    }

    onClick() {
        let previewer = document.createElement('div', { is: 'div-image-previewer' })
        previewer.id = 'image-previewer'
        previewer.load(this)
        document.body.appendChild(previewer)
    }

}
