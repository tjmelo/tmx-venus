/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/app.js":
/*!****************************!*\
  !*** ./src/classes/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/classes/constants.js");


class App {
  constructor() {
    this.toListItems();
    this.toAddList(_constants__WEBPACK_IMPORTED_MODULE_0__.ELEM.ADD_ITEM);
  }

  async #toFetchAPI(api, params = {}) {
    this.api = await fetch(api, params);
    this.data = await this.api.json();
    return this.data;
  }

  async toListItems() {
    this.list = await this.#toFetchAPI(_constants__WEBPACK_IMPORTED_MODULE_0__.KEYS.API);
    _constants__WEBPACK_IMPORTED_MODULE_0__.ELEM.ALL_ITEMS.innerHTML = '';

    this.list.forEach((item) => {
      const nodeItem = document.createElement('li');
      nodeItem.className = 'border-list list-group-item';
      nodeItem.innerHTML = `<span class="item">${item.description}</span>`;
      nodeItem.appendChild(this.#toCheckbox(item.description));
      nodeItem.appendChild(this.#toActions(item.id));
      return _constants__WEBPACK_IMPORTED_MODULE_0__.ELEM.ALL_ITEMS.appendChild(nodeItem);
    });

    this.toEdit();
    this.toRemoveItem();
  }

  #toCheckbox(value) {
    this.elemCheck = document.createElement('input');
    this.elemCheck.type = 'checkbox';
    this.elemCheck.value = value;
    this.elemCheck.className = 'check';
    return this.elemCheck;
  }

  #toActionIcon(element, icon) {
    this.actionIcon = document.createElement(element);
    this.actionIcon.innerHTML = icon;
    return this.actionIcon;
  }

  #toActions(element) {
    const boxActions = document.createElement('span');
    boxActions.className = 'box-actions';
    boxActions.appendChild(this.#toActionIcon('button', `<i id="${element}" title="Save" class="d-none fas fa-cart-arrow-down"></i>`));
    boxActions.appendChild(this.#toActionIcon('button', `<i id="${element}" title="Edit" class="fas fa-pen-square"></i>`));
    boxActions.appendChild(this.#toActionIcon('button', `<i id="${element}" title="Delete" class="fas fa-trash"></i>`));
    return boxActions;
  }

  toAddList(elemAdd) {
    elemAdd.addEventListener('click', async (e) => {
      const elementValue = document.querySelector('.value-item');
      e.preventDefault();
      const newItem = elementValue.value;
      this.#toFetchAPI(_constants__WEBPACK_IMPORTED_MODULE_0__.KEYS.API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: newItem }),
      })
        .then(() => {
          this.toListItems();
          elementValue.value = '';
        })
        .catch((error) => console.error(error));
    });
  }

  toEdit() {
    const toEditItem = document.querySelectorAll('.fa-pen-square');
    const toEditeditem = document.querySelectorAll('.fa-cart-arrow-down');
    toEditItem.forEach((el, idx) => {
      el.addEventListener('click', ({ target }) => {
        const { id } = target;
        const reference = el.parentNode.parentNode.parentNode;
        const itemReference = reference.querySelector('.item');
        reference.classList.add('bg-light');
        itemReference.setAttribute('contentEditable', true);

        toEditeditem[idx].classList.remove('d-none');
        el.classList.add('d-none');
        reference.classList.add('shadow', 'text-primary');
        itemReference.focus();

        toEditeditem[idx].addEventListener('click', () => {
          this.#toFetchAPI(`${_constants__WEBPACK_IMPORTED_MODULE_0__.KEYS.API}/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ description: itemReference.textContent }),
          }).then(() => this.toListItems());
        });
      });
    });
  }

  toRemoveItem() {
    const item = document.querySelectorAll('.fa-trash');
    item.forEach((el) => {
      el.addEventListener('click', ({ target }) => {
        const { id } = target;
        const exclude = () => {
          this.#toFetchAPI(`${_constants__WEBPACK_IMPORTED_MODULE_0__.KEYS.API}/${id}`, {
            method: 'DELETE',
          }).then(() => this.toListItems());
        };
        if (window.confirm('Are you sure want to exclude that item?')) { //eslint-disable-line
          exclude();
        }
      });
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/classes/constants.js":
/*!**********************************!*\
  !*** ./src/classes/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ELEM": () => (/* binding */ ELEM),
/* harmony export */   "KEYS": () => (/* binding */ KEYS)
/* harmony export */ });
const KEYS = {
  API: 'https://63f239144f17278c9a22d1cd.mockapi.io/api/v1/item',
};

const ELEM = {
  ADD_ITEM: document.querySelector('.add-item'),
  ALL_ITEMS: document.querySelector('.all-items'),
};


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/app */ "./src/classes/app.js");


const startApp = new _classes_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
startApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG14LXZlbnVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFhO0FBQ2hDOztBQUVBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxnREFBUTtBQUMvQyxJQUFJLGdFQUF3Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0EsYUFBYSxrRUFBMEI7QUFDdkMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsUUFBUTtBQUMxRSxrRUFBa0UsUUFBUTtBQUMxRSxrRUFBa0UsUUFBUTtBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQVE7QUFDL0I7QUFDQSxtQkFBbUIsb0NBQW9DO0FBQ3ZELCtCQUErQixzQkFBc0I7QUFDckQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDLGdCQUFnQixLQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLGdEQUFRLENBQUMsR0FBRyxHQUFHO0FBQzdDO0FBQ0EsdUJBQXVCLG9DQUFvQztBQUMzRCxtQ0FBbUMsd0NBQXdDO0FBQzNFLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QyxnQkFBZ0IsS0FBSztBQUNyQjtBQUNBLDhCQUE4QixnREFBUSxDQUFDLEdBQUcsR0FBRztBQUM3QztBQUNBLFdBQVc7QUFDWDtBQUNBLHlFQUF5RTtBQUN6RTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIWjtBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7VUNQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdDOztBQUVoQyxxQkFBcUIsb0RBQUc7QUFDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2NsYXNzZXMvYXBwLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvY2xhc3Nlcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS0VZUywgRUxFTSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b0xpc3RJdGVtcygpO1xuICAgIHRoaXMudG9BZGRMaXN0KEVMRU0uQUREX0lURU0pO1xuICB9XG5cbiAgYXN5bmMgI3RvRmV0Y2hBUEkoYXBpLCBwYXJhbXMgPSB7fSkge1xuICAgIHRoaXMuYXBpID0gYXdhaXQgZmV0Y2goYXBpLCBwYXJhbXMpO1xuICAgIHRoaXMuZGF0YSA9IGF3YWl0IHRoaXMuYXBpLmpzb24oKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgYXN5bmMgdG9MaXN0SXRlbXMoKSB7XG4gICAgdGhpcy5saXN0ID0gYXdhaXQgdGhpcy4jdG9GZXRjaEFQSShLRVlTLkFQSSk7XG4gICAgRUxFTS5BTExfSVRFTVMuaW5uZXJIVE1MID0gJyc7XG5cbiAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbm9kZUl0ZW0uY2xhc3NOYW1lID0gJ2JvcmRlci1saXN0IGxpc3QtZ3JvdXAtaXRlbSc7XG4gICAgICBub2RlSXRlbS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJpdGVtXCI+JHtpdGVtLmRlc2NyaXB0aW9ufTwvc3Bhbj5gO1xuICAgICAgbm9kZUl0ZW0uYXBwZW5kQ2hpbGQodGhpcy4jdG9DaGVja2JveChpdGVtLmRlc2NyaXB0aW9uKSk7XG4gICAgICBub2RlSXRlbS5hcHBlbmRDaGlsZCh0aGlzLiN0b0FjdGlvbnMoaXRlbS5pZCkpO1xuICAgICAgcmV0dXJuIEVMRU0uQUxMX0lURU1TLmFwcGVuZENoaWxkKG5vZGVJdGVtKTtcbiAgICB9KTtcblxuICAgIHRoaXMudG9FZGl0KCk7XG4gICAgdGhpcy50b1JlbW92ZUl0ZW0oKTtcbiAgfVxuXG4gICN0b0NoZWNrYm94KHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRoaXMuZWxlbUNoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIHRoaXMuZWxlbUNoZWNrLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5lbGVtQ2hlY2suY2xhc3NOYW1lID0gJ2NoZWNrJztcbiAgICByZXR1cm4gdGhpcy5lbGVtQ2hlY2s7XG4gIH1cblxuICAjdG9BY3Rpb25JY29uKGVsZW1lbnQsIGljb24pIHtcbiAgICB0aGlzLmFjdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIHRoaXMuYWN0aW9uSWNvbi5pbm5lckhUTUwgPSBpY29uO1xuICAgIHJldHVybiB0aGlzLmFjdGlvbkljb247XG4gIH1cblxuICAjdG9BY3Rpb25zKGVsZW1lbnQpIHtcbiAgICBjb25zdCBib3hBY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGJveEFjdGlvbnMuY2xhc3NOYW1lID0gJ2JveC1hY3Rpb25zJztcbiAgICBib3hBY3Rpb25zLmFwcGVuZENoaWxkKHRoaXMuI3RvQWN0aW9uSWNvbignYnV0dG9uJywgYDxpIGlkPVwiJHtlbGVtZW50fVwiIHRpdGxlPVwiU2F2ZVwiIGNsYXNzPVwiZC1ub25lIGZhcyBmYS1jYXJ0LWFycm93LWRvd25cIj48L2k+YCkpO1xuICAgIGJveEFjdGlvbnMuYXBwZW5kQ2hpbGQodGhpcy4jdG9BY3Rpb25JY29uKCdidXR0b24nLCBgPGkgaWQ9XCIke2VsZW1lbnR9XCIgdGl0bGU9XCJFZGl0XCIgY2xhc3M9XCJmYXMgZmEtcGVuLXNxdWFyZVwiPjwvaT5gKSk7XG4gICAgYm94QWN0aW9ucy5hcHBlbmRDaGlsZCh0aGlzLiN0b0FjdGlvbkljb24oJ2J1dHRvbicsIGA8aSBpZD1cIiR7ZWxlbWVudH1cIiB0aXRsZT1cIkRlbGV0ZVwiIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPmApKTtcbiAgICByZXR1cm4gYm94QWN0aW9ucztcbiAgfVxuXG4gIHRvQWRkTGlzdChlbGVtQWRkKSB7XG4gICAgZWxlbUFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmFsdWUtaXRlbScpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbmV3SXRlbSA9IGVsZW1lbnRWYWx1ZS52YWx1ZTtcbiAgICAgIHRoaXMuI3RvRmV0Y2hBUEkoS0VZUy5BUEksIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGRlc2NyaXB0aW9uOiBuZXdJdGVtIH0pLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMudG9MaXN0SXRlbXMoKTtcbiAgICAgICAgICBlbGVtZW50VmFsdWUudmFsdWUgPSAnJztcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9FZGl0KCkge1xuICAgIGNvbnN0IHRvRWRpdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtcGVuLXNxdWFyZScpO1xuICAgIGNvbnN0IHRvRWRpdGVkaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1jYXJ0LWFycm93LWRvd24nKTtcbiAgICB0b0VkaXRJdGVtLmZvckVhY2goKGVsLCBpZHgpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gdGFyZ2V0O1xuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgaXRlbVJlZmVyZW5jZSA9IHJlZmVyZW5jZS5xdWVyeVNlbGVjdG9yKCcuaXRlbScpO1xuICAgICAgICByZWZlcmVuY2UuY2xhc3NMaXN0LmFkZCgnYmctbGlnaHQnKTtcbiAgICAgICAgaXRlbVJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsIHRydWUpO1xuXG4gICAgICAgIHRvRWRpdGVkaXRlbVtpZHhdLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgcmVmZXJlbmNlLmNsYXNzTGlzdC5hZGQoJ3NoYWRvdycsICd0ZXh0LXByaW1hcnknKTtcbiAgICAgICAgaXRlbVJlZmVyZW5jZS5mb2N1cygpO1xuXG4gICAgICAgIHRvRWRpdGVkaXRlbVtpZHhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuI3RvRmV0Y2hBUEkoYCR7S0VZUy5BUEl9LyR7aWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkZXNjcmlwdGlvbjogaXRlbVJlZmVyZW5jZS50ZXh0Q29udGVudCB9KSxcbiAgICAgICAgICB9KS50aGVuKCgpID0+IHRoaXMudG9MaXN0SXRlbXMoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB0b1JlbW92ZUl0ZW0oKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS10cmFzaCcpO1xuICAgIGl0ZW0uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gdGFyZ2V0O1xuICAgICAgICBjb25zdCBleGNsdWRlID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuI3RvRmV0Y2hBUEkoYCR7S0VZUy5BUEl9LyR7aWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICB9KS50aGVuKCgpID0+IHRoaXMudG9MaXN0SXRlbXMoKSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHdhbnQgdG8gZXhjbHVkZSB0aGF0IGl0ZW0/JykpIHsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgZXhjbHVkZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJleHBvcnQgY29uc3QgS0VZUyA9IHtcbiAgQVBJOiAnaHR0cHM6Ly82M2YyMzkxNDRmMTcyNzhjOWEyMmQxY2QubW9ja2FwaS5pby9hcGkvdjEvaXRlbScsXG59O1xuXG5leHBvcnQgY29uc3QgRUxFTSA9IHtcbiAgQUREX0lURU06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbScpLFxuICBBTExfSVRFTVM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtaXRlbXMnKSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcHAgZnJvbSAnLi9jbGFzc2VzL2FwcCc7XG5cbmNvbnN0IHN0YXJ0QXBwID0gbmV3IEFwcCgpO1xuc3RhcnRBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==