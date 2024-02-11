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
/* harmony import */ var _modules_AddListItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/AddListItems */ "./src/app/modules/AddListItems.js");
/* harmony import */ var _modules_ListItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ListItems */ "./src/app/modules/ListItems.js");





class App {
  constructor() {
    this.toListItems = (0,_modules_ListItems__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.toAddList = (0,_modules_AddListItems__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_0__.ELEM.ADD_ITEM);
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

/***/ "./src/app/modules/ActionIcon.js":
/*!***************************************!*\
  !*** ./src/app/modules/ActionIcon.js ***!
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

/***/ "./src/app/modules/ActionsItems.js":
/*!*****************************************!*\
  !*** ./src/app/modules/ActionsItems.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionIcon */ "./src/app/modules/ActionIcon.js");


const toActions = (element) => {
  const boxActions = document.createElement('span');
  boxActions.className = 'box-actions';
  boxActions.appendChild(
    (0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(
      'button',
      `<i id="${element}" title="Save" class="d-none fas fa-cart-arrow-down"></i>`,
    ),
  );
  boxActions.appendChild(
    (0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `<i id="${element}" title="Edit" class="fas fa-pen-square"></i>`),
  );
  boxActions.appendChild(
    (0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `<i id="${element}" title="Delete" class="fas fa-trash"></i>`),
  );
  return boxActions;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toActions);


/***/ }),

/***/ "./src/app/modules/AddListItems.js":
/*!*****************************************!*\
  !*** ./src/app/modules/AddListItems.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItems */ "./src/app/modules/ListItems.js");
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchAPI */ "./src/app/modules/fetchAPI.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/constants.js");





const toAddList = (elemAdd) => {
  return elemAdd.addEventListener('click', (e) => {
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

/***/ "./src/app/modules/CheckboxItems.js":
/*!******************************************!*\
  !*** ./src/app/modules/CheckboxItems.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toCheckbox = (value) => {
  const elemCheckBox = document.createElement('input');
  elemCheckBox.type = 'checkbox';
  elemCheckBox.value = value;
  elemCheckBox.className = 'check';
  return elemCheckBox;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toCheckbox);


/***/ }),

/***/ "./src/app/modules/EditItems.js":
/*!**************************************!*\
  !*** ./src/app/modules/EditItems.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "toEditingItems": () => (/* binding */ toEditingItems)
/* harmony export */ });
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI */ "./src/app/modules/fetchAPI.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/constants.js");



const toEditingItems = (itemNodeReferences, statusEdit) => {
  const { parentNodeReference, itemNodeReference, toEditedItemI, el } = itemNodeReferences;

  if (statusEdit) {
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
          body: JSON.stringify({
            description: itemNodeReference.textContent,
          }),
        }).then(() => toEditingItems(params, false));
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toEditItems);


/***/ }),

/***/ "./src/app/modules/ListItems.js":
/*!**************************************!*\
  !*** ./src/app/modules/ListItems.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionsItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionsItems */ "./src/app/modules/ActionsItems.js");
/* harmony import */ var _CheckboxItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxItems */ "./src/app/modules/CheckboxItems.js");
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchAPI */ "./src/app/modules/fetchAPI.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.js");
/* harmony import */ var _EditItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditItems */ "./src/app/modules/EditItems.js");
/* harmony import */ var _RemoveItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RemoveItems */ "./src/app/modules/RemoveItems.js");








const toListItems = async () => {
  const listItemsByAPI = await (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_2__["default"])(_constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.API);
  _constants__WEBPACK_IMPORTED_MODULE_3__.ELEM.ALL_ITEMS.innerHTML = '';

  listItemsByAPI.forEach((item) => {
    const nodeItem = document.createElement('li');
    nodeItem.className = 'border-list list-group-item';
    nodeItem.innerHTML = `<span class="item">${item.description}</span>`;
    nodeItem.appendChild((0,_CheckboxItems__WEBPACK_IMPORTED_MODULE_1__["default"])(item.description));
    nodeItem.appendChild((0,_ActionsItems__WEBPACK_IMPORTED_MODULE_0__["default"])(item.id));
    return _constants__WEBPACK_IMPORTED_MODULE_3__.ELEM.ALL_ITEMS.appendChild(nodeItem);
  });

  (0,_EditItems__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_RemoveItems__WEBPACK_IMPORTED_MODULE_5__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toListItems);


/***/ }),

/***/ "./src/app/modules/RemoveItems.js":
/*!****************************************!*\
  !*** ./src/app/modules/RemoveItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI */ "./src/app/modules/fetchAPI.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/constants.js");




const toRemoveItems = () => {
  const item = document.querySelectorAll('.fa-trash');

  item.forEach((el) => {
    el.addEventListener('click', ({ target }) => {
      const referenceElementToRemove = el.parentNode.parentNode.parentNode;
      const { id } = target;
      const exclude = () => {
        (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_0__["default"])(`${_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.API}/${id}`, {
          method: 'DELETE',
        }).then(() => referenceElementToRemove.remove());
      };
      if (window.confirm('Are you sure want to exclude that item?')) {
        //eslint-disable-line
        exclude();
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toRemoveItems);


/***/ }),

/***/ "./src/app/modules/fetchAPI.js":
/*!*************************************!*\
  !*** ./src/app/modules/fetchAPI.js ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRCOztBQUU1QiwyQkFBMkIsZ0RBQUc7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21vZHVsZXMvQWN0aW9uSWNvbi5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tb2R1bGVzL0FjdGlvbnNJdGVtcy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tb2R1bGVzL0FkZExpc3RJdGVtcy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tb2R1bGVzL0NoZWNrYm94SXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvbW9kdWxlcy9FZGl0SXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvbW9kdWxlcy9MaXN0SXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvbW9kdWxlcy9SZW1vdmVJdGVtcy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tb2R1bGVzL2ZldGNoQVBJLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVMRU0gfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmltcG9ydCB0b0FkZExpc3QgZnJvbSAnLi9tb2R1bGVzL0FkZExpc3RJdGVtcyc7XG5pbXBvcnQgdG9MaXN0SXRlbXMgZnJvbSAnLi9tb2R1bGVzL0xpc3RJdGVtcyc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9MaXN0SXRlbXMgPSB0b0xpc3RJdGVtcygpO1xuICAgIHRoaXMudG9BZGRMaXN0ID0gdG9BZGRMaXN0KEVMRU0uQUREX0lURU0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImV4cG9ydCBjb25zdCBLRVlTID0ge1xuICBBUEk6ICdodHRwczovLzYzZjIzOTE0NGYxNzI3OGM5YTIyZDFjZC5tb2NrYXBpLmlvL2FwaS92MS9pdGVtJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFTEVNID0ge1xuICBBRERfSVRFTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtJyksXG4gIEFMTF9JVEVNUzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1pdGVtcycpLFxufTtcbiIsImNvbnN0IHRvQWN0aW9uSWNvbiA9IChlbGVtZW50LCBpY29uKSA9PiB7XG4gIGNvbnN0IGFjdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBhY3Rpb25JY29uLmlubmVySFRNTCA9IGljb247XG4gIHJldHVybiBhY3Rpb25JY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9BY3Rpb25JY29uO1xuIiwiaW1wb3J0IHRvQWN0aW9uSWNvbiBmcm9tICcuL0FjdGlvbkljb24nO1xuXG5jb25zdCB0b0FjdGlvbnMgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBib3hBY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBib3hBY3Rpb25zLmNsYXNzTmFtZSA9ICdib3gtYWN0aW9ucyc7XG4gIGJveEFjdGlvbnMuYXBwZW5kQ2hpbGQoXG4gICAgdG9BY3Rpb25JY29uKFxuICAgICAgJ2J1dHRvbicsXG4gICAgICBgPGkgaWQ9XCIke2VsZW1lbnR9XCIgdGl0bGU9XCJTYXZlXCIgY2xhc3M9XCJkLW5vbmUgZmFzIGZhLWNhcnQtYXJyb3ctZG93blwiPjwvaT5gLFxuICAgICksXG4gICk7XG4gIGJveEFjdGlvbnMuYXBwZW5kQ2hpbGQoXG4gICAgdG9BY3Rpb25JY29uKCdidXR0b24nLCBgPGkgaWQ9XCIke2VsZW1lbnR9XCIgdGl0bGU9XCJFZGl0XCIgY2xhc3M9XCJmYXMgZmEtcGVuLXNxdWFyZVwiPjwvaT5gKSxcbiAgKTtcbiAgYm94QWN0aW9ucy5hcHBlbmRDaGlsZChcbiAgICB0b0FjdGlvbkljb24oJ2J1dHRvbicsIGA8aSBpZD1cIiR7ZWxlbWVudH1cIiB0aXRsZT1cIkRlbGV0ZVwiIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPmApLFxuICApO1xuICByZXR1cm4gYm94QWN0aW9ucztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvQWN0aW9ucztcbiIsImltcG9ydCB0b0xpc3RJdGVtcyBmcm9tICcuL0xpc3RJdGVtcyc7XG5pbXBvcnQgdG9GZXRjaEFQSSBmcm9tICcuL2ZldGNoQVBJJztcblxuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHRvQWRkTGlzdCA9IChlbGVtQWRkKSA9PiB7XG4gIHJldHVybiBlbGVtQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmFsdWUtaXRlbScpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5ld0l0ZW0gPSBlbGVtZW50VmFsdWUudmFsdWU7XG5cbiAgICB0b0ZldGNoQVBJKEtFWVMuQVBJLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkZXNjcmlwdGlvbjogbmV3SXRlbSB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0b0xpc3RJdGVtcygpO1xuICAgICAgICBlbGVtZW50VmFsdWUudmFsdWUgPSAnJztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvQWRkTGlzdDtcbiIsImNvbnN0IHRvQ2hlY2tib3ggPSAodmFsdWUpID0+IHtcbiAgY29uc3QgZWxlbUNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZWxlbUNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICBlbGVtQ2hlY2tCb3gudmFsdWUgPSB2YWx1ZTtcbiAgZWxlbUNoZWNrQm94LmNsYXNzTmFtZSA9ICdjaGVjayc7XG4gIHJldHVybiBlbGVtQ2hlY2tCb3g7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0NoZWNrYm94O1xuIiwiaW1wb3J0IHRvRmV0Y2hBUEkgZnJvbSAnLi9mZXRjaEFQSSc7XG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IHRvRWRpdGluZ0l0ZW1zID0gKGl0ZW1Ob2RlUmVmZXJlbmNlcywgc3RhdHVzRWRpdCkgPT4ge1xuICBjb25zdCB7IHBhcmVudE5vZGVSZWZlcmVuY2UsIGl0ZW1Ob2RlUmVmZXJlbmNlLCB0b0VkaXRlZEl0ZW1JLCBlbCB9ID0gaXRlbU5vZGVSZWZlcmVuY2VzO1xuXG4gIGlmIChzdGF0dXNFZGl0KSB7XG4gICAgdG9FZGl0ZWRJdGVtSS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICBwYXJlbnROb2RlUmVmZXJlbmNlLmNsYXNzTGlzdC5hZGQoJ2JnLWxpZ2h0JywgJ3NoYWRvdycsICd0ZXh0LXByaW1hcnknKTtcbiAgICBpdGVtTm9kZVJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsIHRydWUpO1xuICAgIGl0ZW1Ob2RlUmVmZXJlbmNlLmZvY3VzKCk7XG4gIH0gZWxzZSB7XG4gICAgaXRlbU5vZGVSZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnKTtcbiAgICB0b0VkaXRlZEl0ZW1JLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIHBhcmVudE5vZGVSZWZlcmVuY2UuY2xhc3NMaXN0LnJlbW92ZSgnYmctbGlnaHQnLCAnc2hhZG93JywgJ3RleHQtcHJpbWFyeScpO1xuICB9XG59O1xuXG5jb25zdCB0b0VkaXRJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdG9FZGl0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1wZW4tc3F1YXJlJyk7XG4gIGNvbnN0IHRvRWRpdGVkaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1jYXJ0LWFycm93LWRvd24nKTtcblxuICB0b0VkaXRJdGVtLmZvckVhY2goKGVsLCBpZHgpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICBjb25zdCB7IGlkIH0gPSB0YXJnZXQ7XG4gICAgICBjb25zdCBwYXJlbnROb2RlUmVmZXJlbmNlID0gZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCBpdGVtTm9kZVJlZmVyZW5jZSA9IHBhcmVudE5vZGVSZWZlcmVuY2UucXVlcnlTZWxlY3RvcignLml0ZW0nKTtcblxuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBwYXJlbnROb2RlUmVmZXJlbmNlLFxuICAgICAgICBpdGVtTm9kZVJlZmVyZW5jZSxcbiAgICAgICAgdG9FZGl0ZWRJdGVtSTogdG9FZGl0ZWRpdGVtW2lkeF0sXG4gICAgICAgIGVsLFxuICAgICAgfTtcblxuICAgICAgdG9FZGl0aW5nSXRlbXMocGFyYW1zLCB0cnVlKTtcblxuICAgICAgdG9FZGl0ZWRpdGVtW2lkeF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRvRmV0Y2hBUEkoYCR7S0VZUy5BUEl9LyR7aWR9YCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW1Ob2RlUmVmZXJlbmNlLnRleHRDb250ZW50LFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KS50aGVuKCgpID0+IHRvRWRpdGluZ0l0ZW1zKHBhcmFtcywgZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvRWRpdEl0ZW1zO1xuIiwiaW1wb3J0IHRvQWN0aW9ucyBmcm9tICcuL0FjdGlvbnNJdGVtcyc7XG5pbXBvcnQgdG9DaGVja2JveCBmcm9tICcuL0NoZWNrYm94SXRlbXMnO1xuaW1wb3J0IHRvRmV0Y2hBUEkgZnJvbSAnLi9mZXRjaEFQSSc7XG5cbmltcG9ydCB7IEtFWVMsIEVMRU0gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHRvRWRpdEl0ZW1zIGZyb20gJy4vRWRpdEl0ZW1zJztcbmltcG9ydCB0b1JlbW92ZUl0ZW1zIGZyb20gJy4vUmVtb3ZlSXRlbXMnO1xuXG5jb25zdCB0b0xpc3RJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlzdEl0ZW1zQnlBUEkgPSBhd2FpdCB0b0ZldGNoQVBJKEtFWVMuQVBJKTtcbiAgRUxFTS5BTExfSVRFTVMuaW5uZXJIVE1MID0gJyc7XG5cbiAgbGlzdEl0ZW1zQnlBUEkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG5vZGVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBub2RlSXRlbS5jbGFzc05hbWUgPSAnYm9yZGVyLWxpc3QgbGlzdC1ncm91cC1pdGVtJztcbiAgICBub2RlSXRlbS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJpdGVtXCI+JHtpdGVtLmRlc2NyaXB0aW9ufTwvc3Bhbj5gO1xuICAgIG5vZGVJdGVtLmFwcGVuZENoaWxkKHRvQ2hlY2tib3goaXRlbS5kZXNjcmlwdGlvbikpO1xuICAgIG5vZGVJdGVtLmFwcGVuZENoaWxkKHRvQWN0aW9ucyhpdGVtLmlkKSk7XG4gICAgcmV0dXJuIEVMRU0uQUxMX0lURU1TLmFwcGVuZENoaWxkKG5vZGVJdGVtKTtcbiAgfSk7XG5cbiAgdG9FZGl0SXRlbXMoKTtcbiAgdG9SZW1vdmVJdGVtcygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9MaXN0SXRlbXM7XG4iLCJpbXBvcnQgdG9GZXRjaEFQSSBmcm9tICcuL2ZldGNoQVBJJztcblxuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHRvUmVtb3ZlSXRlbXMgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtdHJhc2gnKTtcblxuICBpdGVtLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlRWxlbWVudFRvUmVtb3ZlID0gZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCB7IGlkIH0gPSB0YXJnZXQ7XG4gICAgICBjb25zdCBleGNsdWRlID0gKCkgPT4ge1xuICAgICAgICB0b0ZldGNoQVBJKGAke0tFWVMuQVBJfS8ke2lkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KS50aGVuKCgpID0+IHJlZmVyZW5jZUVsZW1lbnRUb1JlbW92ZS5yZW1vdmUoKSk7XG4gICAgICB9O1xuICAgICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgd2FudCB0byBleGNsdWRlIHRoYXQgaXRlbT8nKSkge1xuICAgICAgICAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgZXhjbHVkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvUmVtb3ZlSXRlbXM7XG4iLCJjb25zdCB0b0ZldGNoQVBJID0gYXN5bmMgKGFwaSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGdldEFQSSA9IGF3YWl0IGZldGNoKGFwaSwgcGFyYW1zKTtcbiAgY29uc3QgZ2V0RGF0YUFQSSA9IGF3YWl0IGdldEFQSS5qc29uKCk7XG4gIHJldHVybiBnZXREYXRhQVBJO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9GZXRjaEFQSTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcC9hcHAnO1xuXG5jb25zdCBzdGFydEFwcCA9ICgpID0+IG5ldyBBcHAoKTtcbnN0YXJ0QXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=