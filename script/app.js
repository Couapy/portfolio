import Slider from './elements/Slider.js'
import Slide from './elements/Slide.js'
import Menu from './elements/Menu.js'
import { activeSlideFromURI, linkMenuItemsToSlides } from './functions.js'


customElements.define('div-slider', Slider, { extends: 'div' })
customElements.define('div-slide', Slide, { extends: 'div' })
customElements.define('nav-menu', Menu, { extends: 'nav' })

document.addEventListener('DOMContentLoaded', () => {
    activeSlideFromURI()
    linkMenuItemsToSlides()
})
