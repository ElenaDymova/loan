/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
class Slider {
  //сво-ва характеризующие слайдер на начальном этапе
  //те вещи которые описывают слайдер еще до начала работы
  constructor(page, btns) {
    //страница на кот размещается слайдер и кнопки переключения
    //конструем св-ва нового объекта
    this.page = document.querySelector(page);
    this.slides = this.page.children; //блоки внутри page
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1; //определяет текущий слайд
  }

  //
  showSlides(n) {
    //n - отвечает за то куда двигается слайдер
    if (n > this.slides.length) {
      //если слайд долистали до последнего, то 
      this.slideIndex = 1; //показываем 1 слайд
    }
    if (n < 1) {
      //если слайдер долистан до первого слайда, то
      this.slideIndex = this.slides.length; //показываем последний слайд
    }

    //скрываем все элементы слайда
    [...this.slides].forEach(slide => {
      slide.style.display = 'none';
    });
    //и показываем первый
    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  //метод для кнопки вперед, которая есть на других страницах
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  //главный метод выполняющий самые главные действия на странице
  render() {
    this.btns.forEach(item => {
      //перебираем кнопки
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });
      item.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.showSlides(this.slideIndex); //первичая иницилизация слайдера
    //условия в функции showSlides скорее всего не сработают, и просто скроются все слайды, 
    //а затем покажет самый первый слайд
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");

window.addEventListener('DOMContentLoaded', () => {
  //на основе импортированного класса создаем новый объект, кот будем использовать
  const slider = new _modules_sliders__WEBPACK_IMPORTED_MODULE_0__["default"]('.page', '.next');
  slider.render();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map