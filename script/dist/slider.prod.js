"use strict";window.addEventListener("DOMContentLoaded",function(){var l=document.querySelector(".slider"),n=l.querySelector(".slide.active"),i=l.querySelectorAll(".slide"),s=document.querySelector(".dots"),d=!1;function a(e,t){n!==e&&!1===d&&(previous_slide=n,n=e,s.querySelector(".active").classList.remove("active"),s.querySelector('[data-id="'+e.id+'"]').classList.add("active"),previous_slide.classList.remove("active"),previous_slide.classList.add("sliding-"+t),e.classList.add("active"),"right"===t&&e.classList.add("inverse-animation"),d=!0,setTimeout(function(){d=!1,previous_slide.classList.remove("active"),previous_slide.classList.remove("sliding-"+t),previous_slide.classList.remove("inverse-animation"),previous_slide.classList.remove("ready"),e.classList.add("ready")},1e3))}function t(e){var t,i;""!==this.hash&&(t=this.hash.substr(1),a(i=document.getElementById(t),o(n)<o(i)?"left":"right"))}function r(e){var t=this.dataset.id,i=document.getElementById(t);a(i,o(n)<o(i)?"left":"right")}function o(e){for(var t=0;null!==(e=e.previousElementSibling);)++t;return t}window.addEventListener("mousewheel",function(e){var t,i;!1===d&&(t=null,i=n,0<e.deltaY||0<e.deltaX?(t="left",null===(i=i.nextElementSibling)&&(i=n.parentElement.firstElementChild)):(t="right",null===(i=i.previousElementSibling)&&(i=n.parentElement.lastElementChild)),a(i,t))}),window.addEventListener("keydown",function(e){if(!1===d){var t=null,i=null;if(39===e.keyCode||40===e.keyCode)i="left",null===(t=n.nextElementSibling)&&(t=l.firstElementChild);else{if(37!==e.keyCode&&38!==e.keyCode)return;i="right",null===(t=n.previousElementSibling)&&(t=l.lastElementChild)}a(t,i)}}),document.querySelectorAll("nav.menu a").forEach(function(e){e.addEventListener("click",t)}),function(){for(var e=0;e<i.length;e++){var t=document.createElement("div");s.appendChild(t),t.classList.add("dot"),0===e&&t.classList.add("active"),t.dataset.id=i[e].id,t.addEventListener("click",r)}}(),console.log("[SLIDER] Loaded")});