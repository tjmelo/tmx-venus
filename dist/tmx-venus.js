/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/app/constants.js");
/* harmony import */ var _methods_AddListItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/AddListItems */ "./src/app/methods/AddListItems.js");
/* harmony import */ var _methods_ListItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/ListItems */ "./src/app/methods/ListItems.js");
/* harmony import */ var _methods_RemoveItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/RemoveItems */ "./src/app/methods/RemoveItems.js");






class App {
  constructor() {
    (async () => {
      this.toListItems = await (0,_methods_ListItems__WEBPACK_IMPORTED_MODULE_2__["default"])();
      this.toAddList = (0,_methods_AddListItems__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_0__.ELEM.ADD_ITEM);
      this.toRemoveItems = (0,_methods_RemoveItems__WEBPACK_IMPORTED_MODULE_3__["default"])();
    })(this);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/app/constants.js":
/*!******************************!*\
  !*** ./src/app/constants.js ***!
  \******************************/
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


/***/ }),

/***/ "./src/app/methods/ActionIcon.js":
/*!***************************************!*\
  !*** ./src/app/methods/ActionIcon.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toActionIcon = (element, icon) => {
  const actionIcon = document.createElement(element);
  actionIcon.innerHTML = icon;
  return actionIcon;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toActionIcon);


/***/ }),

/***/ "./src/app/methods/ActionsItems.js":
/*!*****************************************!*\
  !*** ./src/app/methods/ActionsItems.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionIcon */ "./src/app/methods/ActionIcon.js");


const toActions = (element) => {
  const boxActions = document.createElement('span');
  boxActions.className = 'box-actions';
  boxActions.appendChild((0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `<i id="${element}" title="Save" class="d-none fas fa-cart-arrow-down"></i>`));
  boxActions.appendChild((0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `<i id="${element}" title="Edit" class="fas fa-pen-square"></i>`));
  boxActions.appendChild((0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `<i id="${element}" title="Delete" class="fas fa-trash"></i>`));
  return boxActions;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toActions);


/***/ }),

/***/ "./src/app/methods/AddListItems.js":
/*!*****************************************!*\
  !*** ./src/app/methods/AddListItems.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItems */ "./src/app/methods/ListItems.js");
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchAPI */ "./src/app/methods/fetchAPI.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/constants.js");





const toAddList = (elemAdd) => {
  elemAdd.addEventListener('click', async (e) => {
    const elementValue = document.querySelector('.value-item');
    e.preventDefault();

    const newItem = elementValue.value;

    (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: newItem }),
    })
      .then(() => {
        (0,_ListItems__WEBPACK_IMPORTED_MODULE_0__["default"])();
        elementValue.value = '';
      })
      .catch((error) => console.error(error)); //eslint-disable-line
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toAddList);


/***/ }),

/***/ "./src/app/methods/CheckboxItems.js":
/*!******************************************!*\
  !*** ./src/app/methods/CheckboxItems.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toCheckbox = (value) => {
  const elemCheck = document.createElement('input');
  elemCheck.type = 'checkbox';
  elemCheck.value = value;
  elemCheck.className = 'check';
  return elemCheck;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toCheckbox);


/***/ }),

/***/ "./src/app/methods/EditItems.js":
/*!**************************************!*\
  !*** ./src/app/methods/EditItems.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI */ "./src/app/methods/fetchAPI.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/constants.js");



const toEditingItems = (itemNodeReferences, status) => {
  const {
    parentNodeReference, itemNodeReference, toEditedItemI, el,
  } = itemNodeReferences;

  if (status) {
    toEditedItemI.classList.remove('d-none');
    el.classList.add('d-none');
    parentNodeReference.classList.add('bg-light', 'shadow', 'text-primary');
    itemNodeReference.setAttribute('contentEditable', true);
    itemNodeReference.focus();
  } else {
    itemNodeReference.removeAttribute('contentEditable');
    toEditedItemI.classList.add('d-none');
    el.classList.remove('d-none');
    parentNodeReference.classList.remove('bg-light', 'shadow', 'text-primary');
  }
};

const toEditItems = async () => {
  const toEditItem = document.querySelectorAll('.fa-pen-square');
  const toEditeditem = document.querySelectorAll('.fa-cart-arrow-down');

  toEditItem.forEach((el, idx) => {
    el.addEventListener('click', async ({ target }) => {
      const { id } = target;
      const parentNodeReference = el.parentNode.parentNode.parentNode;
      const itemNodeReference = parentNodeReference.querySelector('.item');

      const params = {
        parentNodeReference,
        itemNodeReference,
        toEditedItemI: toEditeditem[idx],
        el,
      };

      toEditingItems(params, true);

      toEditeditem[idx].addEventListener('click', async () => {
        await (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_0__["default"])(`${_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.API}/${id}`, {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ description: itemNodeReference.textContent }),
        }).then(() => toEditingItems(params, false));
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toEditItems);


/***/ }),

/***/ "./src/app/methods/ListItems.js":
/*!**************************************!*\
  !*** ./src/app/methods/ListItems.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionsItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionsItems */ "./src/app/methods/ActionsItems.js");
/* harmony import */ var _CheckboxItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxItems */ "./src/app/methods/CheckboxItems.js");
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchAPI */ "./src/app/methods/fetchAPI.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.js");
/* harmony import */ var _EditItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditItems */ "./src/app/methods/EditItems.js");






// import toRemoveItems from './RemoveItems';

const toListItems = async () => {
  const list = await (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_2__["default"])(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.API);
  _constants__WEBPACK_IMPORTED_MODULE_3__.ELEM.ALL_ITEMS.innerHTML = '';

  list.forEach((item) => {
    const nodeItem = document.createElement('li');
    nodeItem.className = 'border-list list-group-item';
    nodeItem.innerHTML = `<span class="item">${item.description}</span>`;
    nodeItem.appendChild((0,_CheckboxItems__WEBPACK_IMPORTED_MODULE_1__["default"])(item.description));
    nodeItem.appendChild((0,_ActionsItems__WEBPACK_IMPORTED_MODULE_0__["default"])(item.id));
    return _constants__WEBPACK_IMPORTED_MODULE_3__.ELEM.ALL_ITEMS.appendChild(nodeItem);
  });

  (0,_EditItems__WEBPACK_IMPORTED_MODULE_4__["default"])();
  // toRemoveItems()
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toListItems);


/***/ }),

/***/ "./src/app/methods/RemoveItems.js":
/*!****************************************!*\
  !*** ./src/app/methods/RemoveItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItems */ "./src/app/methods/ListItems.js");
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchAPI */ "./src/app/methods/fetchAPI.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/constants.js");





const toRemoveItems = () => {
  const item = document.querySelectorAll('.fa-trash');

  item.forEach((el) => {
    el.addEventListener('click', ({ target }) => {
      const { id } = target;
      const exclude = () => {
        (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.API}/${id}`, {
          method: 'DELETE',
        }).then(() => (0,_ListItems__WEBPACK_IMPORTED_MODULE_0__["default"])());
      };
      if (window.confirm('Are you sure want to exclude that item?')) { //eslint-disable-line
        exclude();
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toRemoveItems);


/***/ }),

/***/ "./src/app/methods/fetchAPI.js":
/*!*************************************!*\
  !*** ./src/app/methods/fetchAPI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toFetchAPI = async (api, params) => {
  const getAPI = await fetch(api, params);
  const getDataAPI = await getAPI.json();
  return getDataAPI;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFetchAPI);


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
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ "./src/app/app.js");


const startApp = () => new _app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
startApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONEI7O0FBRTVCLDJCQUEyQixnREFBRztBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvbWV0aG9kcy9BY3Rpb25JY29uLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21ldGhvZHMvQWN0aW9uc0l0ZW1zLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21ldGhvZHMvQWRkTGlzdEl0ZW1zLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21ldGhvZHMvQ2hlY2tib3hJdGVtcy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tZXRob2RzL0VkaXRJdGVtcy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tZXRob2RzL0xpc3RJdGVtcy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tZXRob2RzL1JlbW92ZUl0ZW1zLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21ldGhvZHMvZmV0Y2hBUEkuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUxFTSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IHRvQWRkTGlzdCBmcm9tICcuL21ldGhvZHMvQWRkTGlzdEl0ZW1zJztcbmltcG9ydCB0b0xpc3RJdGVtcyBmcm9tICcuL21ldGhvZHMvTGlzdEl0ZW1zJztcbmltcG9ydCB0b1JlbW92ZUl0ZW1zIGZyb20gJy4vbWV0aG9kcy9SZW1vdmVJdGVtcyc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICB0aGlzLnRvTGlzdEl0ZW1zID0gYXdhaXQgdG9MaXN0SXRlbXMoKTtcbiAgICAgIHRoaXMudG9BZGRMaXN0ID0gdG9BZGRMaXN0KEVMRU0uQUREX0lURU0pO1xuICAgICAgdGhpcy50b1JlbW92ZUl0ZW1zID0gdG9SZW1vdmVJdGVtcygpO1xuICAgIH0pKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImV4cG9ydCBjb25zdCBLRVlTID0ge1xuICBBUEk6ICdodHRwczovLzYzZjIzOTE0NGYxNzI3OGM5YTIyZDFjZC5tb2NrYXBpLmlvL2FwaS92MS9pdGVtJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFTEVNID0ge1xuICBBRERfSVRFTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtJyksXG4gIEFMTF9JVEVNUzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1pdGVtcycpLFxufTtcbiIsImNvbnN0IHRvQWN0aW9uSWNvbiA9IChlbGVtZW50LCBpY29uKSA9PiB7XG4gIGNvbnN0IGFjdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBhY3Rpb25JY29uLmlubmVySFRNTCA9IGljb247XG4gIHJldHVybiBhY3Rpb25JY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9BY3Rpb25JY29uO1xuIiwiaW1wb3J0IHRvQWN0aW9uSWNvbiBmcm9tICcuL0FjdGlvbkljb24nO1xuXG5jb25zdCB0b0FjdGlvbnMgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBib3hBY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBib3hBY3Rpb25zLmNsYXNzTmFtZSA9ICdib3gtYWN0aW9ucyc7XG4gIGJveEFjdGlvbnMuYXBwZW5kQ2hpbGQodG9BY3Rpb25JY29uKCdidXR0b24nLCBgPGkgaWQ9XCIke2VsZW1lbnR9XCIgdGl0bGU9XCJTYXZlXCIgY2xhc3M9XCJkLW5vbmUgZmFzIGZhLWNhcnQtYXJyb3ctZG93blwiPjwvaT5gKSk7XG4gIGJveEFjdGlvbnMuYXBwZW5kQ2hpbGQodG9BY3Rpb25JY29uKCdidXR0b24nLCBgPGkgaWQ9XCIke2VsZW1lbnR9XCIgdGl0bGU9XCJFZGl0XCIgY2xhc3M9XCJmYXMgZmEtcGVuLXNxdWFyZVwiPjwvaT5gKSk7XG4gIGJveEFjdGlvbnMuYXBwZW5kQ2hpbGQodG9BY3Rpb25JY29uKCdidXR0b24nLCBgPGkgaWQ9XCIke2VsZW1lbnR9XCIgdGl0bGU9XCJEZWxldGVcIiBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT5gKSk7XG4gIHJldHVybiBib3hBY3Rpb25zO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9BY3Rpb25zO1xuIiwiaW1wb3J0IHRvTGlzdEl0ZW1zIGZyb20gJy4vTGlzdEl0ZW1zJztcbmltcG9ydCB0b0ZldGNoQVBJIGZyb20gJy4vZmV0Y2hBUEknO1xuXG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgdG9BZGRMaXN0ID0gKGVsZW1BZGQpID0+IHtcbiAgZWxlbUFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZhbHVlLWl0ZW0nKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBuZXdJdGVtID0gZWxlbWVudFZhbHVlLnZhbHVlO1xuXG4gICAgdG9GZXRjaEFQSShLRVlTLkFQSSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGVzY3JpcHRpb246IG5ld0l0ZW0gfSksXG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdG9MaXN0SXRlbXMoKTtcbiAgICAgICAgZWxlbWVudFZhbHVlLnZhbHVlID0gJyc7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpOyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0FkZExpc3Q7XG4iLCJjb25zdCB0b0NoZWNrYm94ID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IGVsZW1DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGVsZW1DaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgZWxlbUNoZWNrLnZhbHVlID0gdmFsdWU7XG4gIGVsZW1DaGVjay5jbGFzc05hbWUgPSAnY2hlY2snO1xuICByZXR1cm4gZWxlbUNoZWNrO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9DaGVja2JveDtcbiIsImltcG9ydCB0b0ZldGNoQVBJIGZyb20gJy4vZmV0Y2hBUEknO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHRvRWRpdGluZ0l0ZW1zID0gKGl0ZW1Ob2RlUmVmZXJlbmNlcywgc3RhdHVzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwYXJlbnROb2RlUmVmZXJlbmNlLCBpdGVtTm9kZVJlZmVyZW5jZSwgdG9FZGl0ZWRJdGVtSSwgZWwsXG4gIH0gPSBpdGVtTm9kZVJlZmVyZW5jZXM7XG5cbiAgaWYgKHN0YXR1cykge1xuICAgIHRvRWRpdGVkSXRlbUkuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgcGFyZW50Tm9kZVJlZmVyZW5jZS5jbGFzc0xpc3QuYWRkKCdiZy1saWdodCcsICdzaGFkb3cnLCAndGV4dC1wcmltYXJ5Jyk7XG4gICAgaXRlbU5vZGVSZWZlcmVuY2Uuc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCB0cnVlKTtcbiAgICBpdGVtTm9kZVJlZmVyZW5jZS5mb2N1cygpO1xuICB9IGVsc2Uge1xuICAgIGl0ZW1Ob2RlUmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJyk7XG4gICAgdG9FZGl0ZWRJdGVtSS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICBwYXJlbnROb2RlUmVmZXJlbmNlLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWxpZ2h0JywgJ3NoYWRvdycsICd0ZXh0LXByaW1hcnknKTtcbiAgfVxufTtcblxuY29uc3QgdG9FZGl0SXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRvRWRpdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtcGVuLXNxdWFyZScpO1xuICBjb25zdCB0b0VkaXRlZGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtY2FydC1hcnJvdy1kb3duJyk7XG5cbiAgdG9FZGl0SXRlbS5mb3JFYWNoKChlbCwgaWR4KSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgY29uc3QgeyBpZCB9ID0gdGFyZ2V0O1xuICAgICAgY29uc3QgcGFyZW50Tm9kZVJlZmVyZW5jZSA9IGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgY29uc3QgaXRlbU5vZGVSZWZlcmVuY2UgPSBwYXJlbnROb2RlUmVmZXJlbmNlLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtJyk7XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgcGFyZW50Tm9kZVJlZmVyZW5jZSxcbiAgICAgICAgaXRlbU5vZGVSZWZlcmVuY2UsXG4gICAgICAgIHRvRWRpdGVkSXRlbUk6IHRvRWRpdGVkaXRlbVtpZHhdLFxuICAgICAgICBlbCxcbiAgICAgIH07XG5cbiAgICAgIHRvRWRpdGluZ0l0ZW1zKHBhcmFtcywgdHJ1ZSk7XG5cbiAgICAgIHRvRWRpdGVkaXRlbVtpZHhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0b0ZldGNoQVBJKGAke0tFWVMuQVBJfS8ke2lkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGVzY3JpcHRpb246IGl0ZW1Ob2RlUmVmZXJlbmNlLnRleHRDb250ZW50IH0pLFxuICAgICAgICB9KS50aGVuKCgpID0+IHRvRWRpdGluZ0l0ZW1zKHBhcmFtcywgZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvRWRpdEl0ZW1zO1xuIiwiaW1wb3J0IHRvQWN0aW9ucyBmcm9tICcuL0FjdGlvbnNJdGVtcyc7XG5pbXBvcnQgdG9DaGVja2JveCBmcm9tICcuL0NoZWNrYm94SXRlbXMnO1xuaW1wb3J0IHRvRmV0Y2hBUEkgZnJvbSAnLi9mZXRjaEFQSSc7XG5cbmltcG9ydCB7IEtFWVMsIEVMRU0gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHRvRWRpdEl0ZW1zIGZyb20gJy4vRWRpdEl0ZW1zJztcbi8vIGltcG9ydCB0b1JlbW92ZUl0ZW1zIGZyb20gJy4vUmVtb3ZlSXRlbXMnO1xuXG5jb25zdCB0b0xpc3RJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlzdCA9IGF3YWl0IHRvRmV0Y2hBUEkoS0VZUy5BUEkpO1xuICBFTEVNLkFMTF9JVEVNUy5pbm5lckhUTUwgPSAnJztcblxuICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBub2RlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbm9kZUl0ZW0uY2xhc3NOYW1lID0gJ2JvcmRlci1saXN0IGxpc3QtZ3JvdXAtaXRlbSc7XG4gICAgbm9kZUl0ZW0uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiaXRlbVwiPiR7aXRlbS5kZXNjcmlwdGlvbn08L3NwYW4+YDtcbiAgICBub2RlSXRlbS5hcHBlbmRDaGlsZCh0b0NoZWNrYm94KGl0ZW0uZGVzY3JpcHRpb24pKTtcbiAgICBub2RlSXRlbS5hcHBlbmRDaGlsZCh0b0FjdGlvbnMoaXRlbS5pZCkpO1xuICAgIHJldHVybiBFTEVNLkFMTF9JVEVNUy5hcHBlbmRDaGlsZChub2RlSXRlbSk7XG4gIH0pO1xuXG4gIHRvRWRpdEl0ZW1zKCk7XG4gIC8vIHRvUmVtb3ZlSXRlbXMoKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9MaXN0SXRlbXM7XG4iLCJpbXBvcnQgdG9MaXN0SXRlbXMgZnJvbSAnLi9MaXN0SXRlbXMnO1xuaW1wb3J0IHRvRmV0Y2hBUEkgZnJvbSAnLi9mZXRjaEFQSSc7XG5cbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCB0b1JlbW92ZUl0ZW1zID0gKCkgPT4ge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXRyYXNoJyk7XG5cbiAgaXRlbS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHRhcmdldDtcbiAgICAgIGNvbnN0IGV4Y2x1ZGUgPSAoKSA9PiB7XG4gICAgICAgIHRvRmV0Y2hBUEkoYCR7S0VZUy5BUEl9LyR7aWR9YCwge1xuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIH0pLnRoZW4oKCkgPT4gdG9MaXN0SXRlbXMoKSk7XG4gICAgICB9O1xuICAgICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgd2FudCB0byBleGNsdWRlIHRoYXQgaXRlbT8nKSkgeyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgZXhjbHVkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvUmVtb3ZlSXRlbXM7XG4iLCJjb25zdCB0b0ZldGNoQVBJID0gYXN5bmMgKGFwaSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGdldEFQSSA9IGF3YWl0IGZldGNoKGFwaSwgcGFyYW1zKTtcbiAgY29uc3QgZ2V0RGF0YUFQSSA9IGF3YWl0IGdldEFQSS5qc29uKCk7XG4gIHJldHVybiBnZXREYXRhQVBJO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9GZXRjaEFQSTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcC9hcHAnO1xuXG5jb25zdCBzdGFydEFwcCA9ICgpID0+IG5ldyBBcHAoKTtcbnN0YXJ0QXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=