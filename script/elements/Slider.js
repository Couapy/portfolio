import { getIndexOfElement } from '../functions.js'


/**
 * Usable slider with arrow keys and scroll.
 */
export default class Slider extends HTMLDivElement {

    /**
     * Instanciate the slider.
     */
    constructor() {
        super()
        this.current_slide = this.querySelector('.slide.active')
        this.slides = this.querySelectorAll('.slide')
        this.dots = document.querySelector('.dots')
        this.animation = false

        this.createDots = this.createDots.bind(this)
        this.onScroll = this.onScroll.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.onClickDot = this.onClickDot.bind(this)
    }

    /**
     * Connect the DOM to this object.
     */
    connectedCallback() {
        this.addEventListener('mousewheel', this.onScroll)
        this.addEventListener('DOMMouseScroll', this.onScroll)
        this.addEventListener('keydown', this.onKeyDown)

        this.createDots()
    }

    /**
     * Disconnect the DOM from this object.
     */
    disconnectedCallback() {
        this.removeEventListener('mousewheel', this.onScroll)
        this.removeEventListener('DOMMouseScroll', this.onScroll)
        this.removeEventListener('keydown', this.onKeyDown)

        this.dots.querySelectorAll('.dot').forEach(dot => {
            dot.removeEventListener('click', this.onClickDot)
        })
    }

    /**
     * Create dots and add click event listener to them
     */
    createDots() {
        for (let i = 0; i < this.slides.length; i++) {
            let dot = document.createElement('div')
            this.dots.appendChild(dot)
            dot.classList.add('dot')
            if (i === 0) {
                dot.classList.add('active')
            }
            dot.dataset['id'] = this.slides[i].id
            dot.addEventListener('click', this.onClickDot)
        }
    }

    /**
     * Handle the scroll on the page and apply actions on slider.
     * @param {WheelEvent} e 
     */
    onScroll(e) {
        if (this.animation === false) {
            let next;
            if (e instanceof WheelEvent) {
                next = e.deltaY > 0 || e.deltaX > 0
            }
            else {
                next = e.detail > 0
            }
            let previous_slide = this.current_slide
            var sliding = null
            var slide = this.current_slide
            if (next) {
                slide = slide.nextElementSibling
                sliding = 'left'
                if (slide === null) {
                    slide = previous_slide.parentElement.firstElementChild
                }
            } else {
                slide = slide.previousElementSibling
                sliding = 'right'
                if (slide === null) {
                    slide = previous_slide.parentElement.lastElementChild
                }
            }
            slide.active(sliding)
        }
    }

    /**
     * Handler the arrow keys pressions
     * @param {KeyboardEvent} e 
     */
    onKeyDown(e) {
        if (this.animation === false) {
            var slide = null, sliding = null
            if (e.keyCode === 39 || e.keyCode === 40) {
                sliding = 'left'
                slide = this.current_slide.nextElementSibling
                if (slide === null) {
                    slide = this.firstElementChild
                }
            }
            else if (e.keyCode === 37 || e.keyCode === 38) {
                sliding = 'right'
                slide = this.current_slide.previousElementSibling
                if (slide === null) {
                    slide = this.lastElementChild
                }
            }
            else {
                return
            }
            slide.active(sliding)
        }
    }

    /**
     * Handle the click event on a dot navigation.
     * @param {MouseEvent} event 
     */
    onClickDot(e) {
        const id = e.srcElement.dataset['id']
        const slide = document.getElementById(id)
        const index_current_slide = getIndexOfElement(this.current_slide)
        const index_new_slide = getIndexOfElement(slide)
        if (index_new_slide > index_current_slide) {
            slide.active('left')
        } else {
            slide.active('right')
        }
    }

}
