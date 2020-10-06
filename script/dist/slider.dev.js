"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.slider');
  var current_slide = slider.querySelector('.slide.active');
  var slides = slider.querySelectorAll('.slide');
  var dots = document.querySelector('.dots');
  var animation = false;
  /**
   * Handle the scroll on the page and apply actions on slider
   * @param {WheelEvent} event 
   */

  function scrollhandler(event) {
    if (animation === false) {
      var _previous_slide = current_slide;
      var sliding = null;
      var slide = current_slide;

      if (event.deltaY > 0 || event.deltaX > 0) {
        slide = slide.nextElementSibling;
        sliding = 'left';

        if (slide === null) {
          slide = _previous_slide.parentElement.firstElementChild;
        }
      } else {
        slide = slide.previousElementSibling;
        sliding = 'right';

        if (slide === null) {
          slide = _previous_slide.parentElement.lastElementChild;
        }
      }

      activeSlide(slide, sliding);
    }
  }
  /**
   * Active a slide and disable the slider during the animation
   * @param {HTMLElement} slide .slide
   * @param {string} sliding 'right' or 'left'
   */


  function activeSlide(slide, sliding) {
    if (current_slide !== slide && animation === false) {
      previous_slide = current_slide;
      current_slide = slide; // Select dot

      dots.querySelector('.active').classList.remove('active');
      dots.querySelector('[data-id="' + slide.id + '"]').classList.add('active'); // Disable previous slide && enable the current slide

      previous_slide.classList.remove('active');
      previous_slide.classList.add('sliding-' + sliding);
      slide.classList.add('active'); // Disable slider during animation

      animation = true;
      setTimeout(function () {
        animation = false;
        previous_slide.classList.remove('active');
        previous_slide.classList.remove('sliding-' + sliding);
        previous_slide.classList.remove('ready');
        slide.classList.add('ready');
      }, 750);
    }
  }
  /**
   * Create dots and add click event listener to them
   */


  function createDots() {
    var _loop = function _loop(i) {
      dot = document.createElement('div');
      dots.appendChild(dot);
      dot.classList.add('dot');

      if (i === 0) {
        dot.classList.add('active');
      }

      dot.dataset['id'] = slides[i].id;
      dot.addEventListener('click', function () {
        var index_current_slide = getIndexOfElement(current_slide);
        var index_new_slide = getIndexOfElement(slides[i]);
        var sliding = null;

        if (index_new_slide > index_current_slide) {
          sliding = 'left';
        } else {
          sliding = 'right';
        }

        activeSlide(slides[i], sliding);
      });
    };

    for (var i = 0; i < slides.length; i++) {
      var dot;

      _loop(i);
    }
  }

  function getIndexOfElement(element) {
    var i = 0;

    while ((element = element.previousElementSibling) !== null) {
      ++i;
    }

    return i;
  }

  window.addEventListener('mousewheel', scrollhandler);
  createDots();
  console.log('[SLIDER] Loaded');
});