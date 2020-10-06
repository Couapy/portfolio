window.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider')
    var current_slide = slider.querySelector('.slide.active')
    var slides = slider.querySelectorAll('.slide')
    const dots = document.querySelector('.dots')
    var animation = false

    /**
     * Handle the scroll on the page and apply actions on slider
     * @param {WheelEvent} event 
     */
    function scrollhandler(event) {
        if (animation === false) {
            let previous_slide = current_slide
            var sliding = null
            var slide = current_slide
            if (event.deltaY > 0 || event.deltaX > 0) {
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
            activeSlide(slide, sliding)
        }
    }

    /**
     * Active a slide and disable the slider during the animation
     * @param {HTMLElement} slide .slide
     * @param {string} sliding 'right' or 'left'
     */
    function activeSlide(slide, sliding) {
        if (current_slide !== slide && animation === false) {
            previous_slide = current_slide
            current_slide = slide
            // Select dot
            dots.querySelector('.active').classList.remove('active')
            dots.querySelector('[data-id="' + slide.id + '"]').classList.add('active')


            // Disable previous slide && enable the current slide
            previous_slide.classList.remove('active')
            previous_slide.classList.add('sliding-' + sliding)
            slide.classList.add('active')
            
            // Disable slider during animation
            animation = true
            setTimeout(() => {
                animation = false
                previous_slide.classList.remove('active')
                previous_slide.classList.remove('sliding-' + sliding)
                previous_slide.classList.remove('ready')
                slide.classList.add('ready')
            }, 750)
        }
    }

    /**
     * Create dots and add click event listener to them
     */
    function createDots() {
        for (let i = 0; i < slides.length; i++) {
            var dot = document.createElement('div')
            dots.appendChild(dot)
            dot.classList.add('dot')
            if (i === 0) {
                dot.classList.add('active')
            }
            dot.dataset['id'] = slides[i].id
            dot.addEventListener('click', () => {
                const index_current_slide = getIndexOfElement(current_slide)
                const index_new_slide = getIndexOfElement(slides[i])

                let sliding = null
                if (index_new_slide > index_current_slide) {
                    sliding = 'left';
                }
                else {
                    sliding = 'right';
                }
                activeSlide(slides[i], sliding)
            })
        }
    }

    function getIndexOfElement(element) {
        var i = 0
        while ((element = element.previousElementSibling) !== null) {
            ++i
        }
        return i
    }

    window.addEventListener('mousewheel', scrollhandler)
    createDots()
    


    console.log('[SLIDER] Loaded')
})