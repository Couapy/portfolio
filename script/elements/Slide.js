/**
 * A slide.
 */
export default class Slide extends HTMLDivElement {

    /**
     * Instanciate a slide.
     */
    constructor() {
        super()
        this.slider = null
        this.active = this.active.bind(this)
    }

    /**
     * Determine the slider on DOM loaded.
     */
    connectedCallback() {
        let element = this
        while (element != null && element.attributes.getNamedItem('is').value !== 'div-slider') {
            element = element.parentElement
        }
        this.slider = element
    }
    
    /**
     * Display the slide from one side.
     * @param {string} sliding `left` or `right`
     */
    active(sliding) {
        if (!this.classList.contains('active') && this.slider.animation === false) {
            let previous_slide = document.querySelector('.slide.active')
            // Select dot
            this.slider.dots.querySelector('.active').classList.remove('active')
            this.slider.dots.querySelector('[data-id="' + this.id + '"]').classList.add('active')

            // Disable previous slide && enable the current slide
            this.slider.current_slide = this;
            previous_slide.classList.remove('active')
            previous_slide.classList.add('sliding-' + sliding)
            this.classList.add('active')
            if (sliding === 'right') {
                this.classList.add('inverse-animation')
            }
            
            // Disable slider during animation
            this.slider.animation = true
            setTimeout(() => {
                this.slider.animation = false
                previous_slide.classList.remove('active')
                previous_slide.classList.remove('sliding-' + sliding)
                previous_slide.classList.remove('inverse-animation')
                previous_slide.classList.remove('ready')
                this.classList.add('ready')
            }, 600)
        }
    }

}