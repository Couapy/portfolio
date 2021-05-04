import Project from './customElements/Project.js'
import Menu from './customElements/Menu.js'

window.customElements.define('div-project', Project, { extends: 'div' })
window.customElements.define('div-menu', Menu, { extends: 'div' })
