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
  boxActions.appendChild((0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `<i id="${element}" title="Save" class="d-none fas fa-cart-arrow-down"></i>`));
  boxActions.appendChild((0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `<i id="${element}" title="Edit" class="fas fa-pen-square"></i>`));
  boxActions.appendChild((0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `<i id="${element}" title="Delete" class="fas fa-trash"></i>`));
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI */ "./src/app/modules/fetchAPI.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/constants.js");



const toEditingItems = (itemNodeReferences, statusEdit) => {
  const {
    parentNodeReference, itemNodeReference, toEditedItemI, el,
  } = itemNodeReferences;

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
          body: JSON.stringify({ description: itemNodeReference.textContent }),
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
      if (window.confirm('Are you sure want to exclude that item?')) { //eslint-disable-line
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONEI7O0FBRTVCLDJCQUEyQixnREFBRztBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvbW9kdWxlcy9BY3Rpb25JY29uLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21vZHVsZXMvQWN0aW9uc0l0ZW1zLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21vZHVsZXMvQWRkTGlzdEl0ZW1zLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21vZHVsZXMvQ2hlY2tib3hJdGVtcy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tb2R1bGVzL0VkaXRJdGVtcy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tb2R1bGVzL0xpc3RJdGVtcy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tb2R1bGVzL1JlbW92ZUl0ZW1zLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21vZHVsZXMvZmV0Y2hBUEkuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUxFTSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IHRvQWRkTGlzdCBmcm9tICcuL21vZHVsZXMvQWRkTGlzdEl0ZW1zJztcbmltcG9ydCB0b0xpc3RJdGVtcyBmcm9tICcuL21vZHVsZXMvTGlzdEl0ZW1zJztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b0xpc3RJdGVtcyA9IHRvTGlzdEl0ZW1zKCk7XG4gICAgdGhpcy50b0FkZExpc3QgPSB0b0FkZExpc3QoRUxFTS5BRERfSVRFTSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiZXhwb3J0IGNvbnN0IEtFWVMgPSB7XG4gIEFQSTogJ2h0dHBzOi8vNjNmMjM5MTQ0ZjE3Mjc4YzlhMjJkMWNkLm1vY2thcGkuaW8vYXBpL3YxL2l0ZW0nLFxufTtcblxuZXhwb3J0IGNvbnN0IEVMRU0gPSB7XG4gIEFERF9JVEVNOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0nKSxcbiAgQUxMX0lURU1TOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWl0ZW1zJyksXG59O1xuIiwiY29uc3QgdG9BY3Rpb25JY29uID0gKGVsZW1lbnQsIGljb24pID0+IHtcbiAgY29uc3QgYWN0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGFjdGlvbkljb24uaW5uZXJIVE1MID0gaWNvbjtcbiAgcmV0dXJuIGFjdGlvbkljb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0FjdGlvbkljb247XG4iLCJpbXBvcnQgdG9BY3Rpb25JY29uIGZyb20gJy4vQWN0aW9uSWNvbic7XG5cbmNvbnN0IHRvQWN0aW9ucyA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGJveEFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGJveEFjdGlvbnMuY2xhc3NOYW1lID0gJ2JveC1hY3Rpb25zJztcbiAgYm94QWN0aW9ucy5hcHBlbmRDaGlsZCh0b0FjdGlvbkljb24oJ2J1dHRvbicsIGA8aSBpZD1cIiR7ZWxlbWVudH1cIiB0aXRsZT1cIlNhdmVcIiBjbGFzcz1cImQtbm9uZSBmYXMgZmEtY2FydC1hcnJvdy1kb3duXCI+PC9pPmApKTtcbiAgYm94QWN0aW9ucy5hcHBlbmRDaGlsZCh0b0FjdGlvbkljb24oJ2J1dHRvbicsIGA8aSBpZD1cIiR7ZWxlbWVudH1cIiB0aXRsZT1cIkVkaXRcIiBjbGFzcz1cImZhcyBmYS1wZW4tc3F1YXJlXCI+PC9pPmApKTtcbiAgYm94QWN0aW9ucy5hcHBlbmRDaGlsZCh0b0FjdGlvbkljb24oJ2J1dHRvbicsIGA8aSBpZD1cIiR7ZWxlbWVudH1cIiB0aXRsZT1cIkRlbGV0ZVwiIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPmApKTtcbiAgcmV0dXJuIGJveEFjdGlvbnM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0FjdGlvbnM7XG4iLCJpbXBvcnQgdG9MaXN0SXRlbXMgZnJvbSAnLi9MaXN0SXRlbXMnO1xuaW1wb3J0IHRvRmV0Y2hBUEkgZnJvbSAnLi9mZXRjaEFQSSc7XG5cbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCB0b0FkZExpc3QgPSAoZWxlbUFkZCkgPT4ge1xuICBlbGVtQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmFsdWUtaXRlbScpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5ld0l0ZW0gPSBlbGVtZW50VmFsdWUudmFsdWU7XG5cbiAgICB0b0ZldGNoQVBJKEtFWVMuQVBJLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkZXNjcmlwdGlvbjogbmV3SXRlbSB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0b0xpc3RJdGVtcygpO1xuICAgICAgICBlbGVtZW50VmFsdWUudmFsdWUgPSAnJztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvQWRkTGlzdDtcbiIsImNvbnN0IHRvQ2hlY2tib3ggPSAodmFsdWUpID0+IHtcbiAgY29uc3QgZWxlbUNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZWxlbUNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICBlbGVtQ2hlY2tCb3gudmFsdWUgPSB2YWx1ZTtcbiAgZWxlbUNoZWNrQm94LmNsYXNzTmFtZSA9ICdjaGVjayc7XG4gIHJldHVybiBlbGVtQ2hlY2tCb3g7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0NoZWNrYm94O1xuIiwiaW1wb3J0IHRvRmV0Y2hBUEkgZnJvbSAnLi9mZXRjaEFQSSc7XG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgdG9FZGl0aW5nSXRlbXMgPSAoaXRlbU5vZGVSZWZlcmVuY2VzLCBzdGF0dXNFZGl0KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwYXJlbnROb2RlUmVmZXJlbmNlLCBpdGVtTm9kZVJlZmVyZW5jZSwgdG9FZGl0ZWRJdGVtSSwgZWwsXG4gIH0gPSBpdGVtTm9kZVJlZmVyZW5jZXM7XG5cbiAgaWYgKHN0YXR1c0VkaXQpIHtcbiAgICB0b0VkaXRlZEl0ZW1JLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgIHBhcmVudE5vZGVSZWZlcmVuY2UuY2xhc3NMaXN0LmFkZCgnYmctbGlnaHQnLCAnc2hhZG93JywgJ3RleHQtcHJpbWFyeScpO1xuICAgIGl0ZW1Ob2RlUmVmZXJlbmNlLnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgdHJ1ZSk7XG4gICAgaXRlbU5vZGVSZWZlcmVuY2UuZm9jdXMoKTtcbiAgfSBlbHNlIHtcbiAgICBpdGVtTm9kZVJlZmVyZW5jZS5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScpO1xuICAgIHRvRWRpdGVkSXRlbUkuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgcGFyZW50Tm9kZVJlZmVyZW5jZS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1saWdodCcsICdzaGFkb3cnLCAndGV4dC1wcmltYXJ5Jyk7XG4gIH1cbn07XG5cbmNvbnN0IHRvRWRpdEl0ZW1zID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0b0VkaXRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXBlbi1zcXVhcmUnKTtcbiAgY29uc3QgdG9FZGl0ZWRpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNhcnQtYXJyb3ctZG93bicpO1xuXG4gIHRvRWRpdEl0ZW0uZm9yRWFjaCgoZWwsIGlkeCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHRhcmdldDtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGVSZWZlcmVuY2UgPSBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IGl0ZW1Ob2RlUmVmZXJlbmNlID0gcGFyZW50Tm9kZVJlZmVyZW5jZS5xdWVyeVNlbGVjdG9yKCcuaXRlbScpO1xuXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHBhcmVudE5vZGVSZWZlcmVuY2UsXG4gICAgICAgIGl0ZW1Ob2RlUmVmZXJlbmNlLFxuICAgICAgICB0b0VkaXRlZEl0ZW1JOiB0b0VkaXRlZGl0ZW1baWR4XSxcbiAgICAgICAgZWwsXG4gICAgICB9O1xuXG4gICAgICB0b0VkaXRpbmdJdGVtcyhwYXJhbXMsIHRydWUpO1xuXG4gICAgICB0b0VkaXRlZGl0ZW1baWR4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdG9GZXRjaEFQSShgJHtLRVlTLkFQSX0vJHtpZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGRlc2NyaXB0aW9uOiBpdGVtTm9kZVJlZmVyZW5jZS50ZXh0Q29udGVudCB9KSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB0b0VkaXRpbmdJdGVtcyhwYXJhbXMsIGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0VkaXRJdGVtcztcbiIsImltcG9ydCB0b0FjdGlvbnMgZnJvbSAnLi9BY3Rpb25zSXRlbXMnO1xuaW1wb3J0IHRvQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveEl0ZW1zJztcbmltcG9ydCB0b0ZldGNoQVBJIGZyb20gJy4vZmV0Y2hBUEknO1xuXG5pbXBvcnQgeyBLRVlTLCBFTEVNIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB0b0VkaXRJdGVtcyBmcm9tICcuL0VkaXRJdGVtcyc7XG5pbXBvcnQgdG9SZW1vdmVJdGVtcyBmcm9tICcuL1JlbW92ZUl0ZW1zJztcblxuY29uc3QgdG9MaXN0SXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpc3RJdGVtc0J5QVBJID0gYXdhaXQgdG9GZXRjaEFQSShLRVlTLkFQSSk7XG4gIEVMRU0uQUxMX0lURU1TLmlubmVySFRNTCA9ICcnO1xuXG4gIGxpc3RJdGVtc0J5QVBJLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBub2RlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbm9kZUl0ZW0uY2xhc3NOYW1lID0gJ2JvcmRlci1saXN0IGxpc3QtZ3JvdXAtaXRlbSc7XG4gICAgbm9kZUl0ZW0uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiaXRlbVwiPiR7aXRlbS5kZXNjcmlwdGlvbn08L3NwYW4+YDtcbiAgICBub2RlSXRlbS5hcHBlbmRDaGlsZCh0b0NoZWNrYm94KGl0ZW0uZGVzY3JpcHRpb24pKTtcbiAgICBub2RlSXRlbS5hcHBlbmRDaGlsZCh0b0FjdGlvbnMoaXRlbS5pZCkpO1xuICAgIHJldHVybiBFTEVNLkFMTF9JVEVNUy5hcHBlbmRDaGlsZChub2RlSXRlbSk7XG4gIH0pO1xuXG4gIHRvRWRpdEl0ZW1zKCk7XG4gIHRvUmVtb3ZlSXRlbXMoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvTGlzdEl0ZW1zO1xuIiwiaW1wb3J0IHRvRmV0Y2hBUEkgZnJvbSAnLi9mZXRjaEFQSSc7XG5cbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCB0b1JlbW92ZUl0ZW1zID0gKCkgPT4ge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXRyYXNoJyk7XG5cbiAgaXRlbS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZUVsZW1lbnRUb1JlbW92ZSA9IGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgY29uc3QgeyBpZCB9ID0gdGFyZ2V0O1xuICAgICAgY29uc3QgZXhjbHVkZSA9ICgpID0+IHtcbiAgICAgICAgdG9GZXRjaEFQSShgJHtLRVlTLkFQSX0vJHtpZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgfSkudGhlbigoKSA9PiByZWZlcmVuY2VFbGVtZW50VG9SZW1vdmUucmVtb3ZlKCkpO1xuICAgICAgfTtcbiAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHdhbnQgdG8gZXhjbHVkZSB0aGF0IGl0ZW0/JykpIHsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGV4Y2x1ZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b1JlbW92ZUl0ZW1zO1xuIiwiY29uc3QgdG9GZXRjaEFQSSA9IGFzeW5jIChhcGksIHBhcmFtcykgPT4ge1xuICBjb25zdCBnZXRBUEkgPSBhd2FpdCBmZXRjaChhcGksIHBhcmFtcyk7XG4gIGNvbnN0IGdldERhdGFBUEkgPSBhd2FpdCBnZXRBUEkuanNvbigpO1xuICByZXR1cm4gZ2V0RGF0YUFQSTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvRmV0Y2hBUEk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAvYXBwJztcblxuY29uc3Qgc3RhcnRBcHAgPSAoKSA9PiBuZXcgQXBwKCk7XG5zdGFydEFwcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9