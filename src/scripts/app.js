import ImagePreviewer from './customElements/ImagePreviewer.js'
import ImagePreviewable from './customElements/ImagePreviewable.js'
import Project from './customElements/Project.js'
import Menu from './customElements/Menu.js'
import revealAnimationSetup from './RevealAnimation.js'

window.customElements.define('div-menu', Menu, { extends: 'div' })
window.customElements.define('div-project', Project, { extends: 'div' })
window.customElements.define('div-image-previewer', ImagePreviewer, { extends: 'div' })
window.customElements.define('img-previewable', ImagePreviewable, { extends: 'img' })

revealAnimationSetup();
