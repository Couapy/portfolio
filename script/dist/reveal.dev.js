"use strict";

function intersectionHandler(entries, observer) {
  entries.forEach(function (entry) {
    console.log(entry);

    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove('reveal');
      observer.unobserve(entry.target);
    }
  });
}

var options = {
  root: null,
  rootMargin: '0px',
  threshold: 1
};
var observer = new IntersectionObserver(intersectionHandler, options);
var elements = document.querySelectorAll('.reveal');
window.addEventListener('DOMContentLoaded', function () {
  elements.forEach(function (element) {
    observer.observe(element);
  });
  console.log('[REVEALER] Loaded');
});