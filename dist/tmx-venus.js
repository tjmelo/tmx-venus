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
        'vibrate' in navigator && navigator.vibrate(100);
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
        }).then(() => {
          referenceElementToRemove.remove();
          'vibrate' in navigator && navigator.vibrate(100);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFNUIsMkJBQTJCLGdEQUFHO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvYXBwLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tb2R1bGVzL0FjdGlvbkljb24uanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvbW9kdWxlcy9BY3Rpb25zSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvbW9kdWxlcy9BZGRMaXN0SXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvbW9kdWxlcy9DaGVja2JveEl0ZW1zLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21vZHVsZXMvRWRpdEl0ZW1zLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21vZHVsZXMvTGlzdEl0ZW1zLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21vZHVsZXMvUmVtb3ZlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvbW9kdWxlcy9mZXRjaEFQSS5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTEVNIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgdG9BZGRMaXN0IGZyb20gJy4vbW9kdWxlcy9BZGRMaXN0SXRlbXMnO1xuaW1wb3J0IHRvTGlzdEl0ZW1zIGZyb20gJy4vbW9kdWxlcy9MaXN0SXRlbXMnO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvTGlzdEl0ZW1zID0gdG9MaXN0SXRlbXMoKTtcbiAgICB0aGlzLnRvQWRkTGlzdCA9IHRvQWRkTGlzdChFTEVNLkFERF9JVEVNKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJleHBvcnQgY29uc3QgS0VZUyA9IHtcbiAgQVBJOiAnaHR0cHM6Ly82M2YyMzkxNDRmMTcyNzhjOWEyMmQxY2QubW9ja2FwaS5pby9hcGkvdjEvaXRlbScsXG59O1xuXG5leHBvcnQgY29uc3QgRUxFTSA9IHtcbiAgQUREX0lURU06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbScpLFxuICBBTExfSVRFTVM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtaXRlbXMnKSxcbn07XG4iLCJjb25zdCB0b0FjdGlvbkljb24gPSAoZWxlbWVudCwgaWNvbikgPT4ge1xuICBjb25zdCBhY3Rpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgYWN0aW9uSWNvbi5pbm5lckhUTUwgPSBpY29uO1xuICByZXR1cm4gYWN0aW9uSWNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvQWN0aW9uSWNvbjtcbiIsImltcG9ydCB0b0FjdGlvbkljb24gZnJvbSAnLi9BY3Rpb25JY29uJztcblxuY29uc3QgdG9BY3Rpb25zID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgYm94QWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYm94QWN0aW9ucy5jbGFzc05hbWUgPSAnYm94LWFjdGlvbnMnO1xuICBib3hBY3Rpb25zLmFwcGVuZENoaWxkKFxuICAgIHRvQWN0aW9uSWNvbihcbiAgICAgICdidXR0b24nLFxuICAgICAgYDxpIGlkPVwiJHtlbGVtZW50fVwiIHRpdGxlPVwiU2F2ZVwiIGNsYXNzPVwiZC1ub25lIGZhcyBmYS1jYXJ0LWFycm93LWRvd25cIj48L2k+YCxcbiAgICApLFxuICApO1xuICBib3hBY3Rpb25zLmFwcGVuZENoaWxkKFxuICAgIHRvQWN0aW9uSWNvbignYnV0dG9uJywgYDxpIGlkPVwiJHtlbGVtZW50fVwiIHRpdGxlPVwiRWRpdFwiIGNsYXNzPVwiZmFzIGZhLXBlbi1zcXVhcmVcIj48L2k+YCksXG4gICk7XG4gIGJveEFjdGlvbnMuYXBwZW5kQ2hpbGQoXG4gICAgdG9BY3Rpb25JY29uKCdidXR0b24nLCBgPGkgaWQ9XCIke2VsZW1lbnR9XCIgdGl0bGU9XCJEZWxldGVcIiBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT5gKSxcbiAgKTtcbiAgcmV0dXJuIGJveEFjdGlvbnM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0FjdGlvbnM7XG4iLCJpbXBvcnQgdG9MaXN0SXRlbXMgZnJvbSAnLi9MaXN0SXRlbXMnO1xuaW1wb3J0IHRvRmV0Y2hBUEkgZnJvbSAnLi9mZXRjaEFQSSc7XG5cbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCB0b0FkZExpc3QgPSAoZWxlbUFkZCkgPT4ge1xuICByZXR1cm4gZWxlbUFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZhbHVlLWl0ZW0nKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBuZXdJdGVtID0gZWxlbWVudFZhbHVlLnZhbHVlO1xuXG4gICAgdG9GZXRjaEFQSShLRVlTLkFQSSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGVzY3JpcHRpb246IG5ld0l0ZW0gfSksXG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdG9MaXN0SXRlbXMoKTtcbiAgICAgICAgZWxlbWVudFZhbHVlLnZhbHVlID0gJyc7XG4gICAgICAgICd2aWJyYXRlJyBpbiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnZpYnJhdGUoMTAwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvQWRkTGlzdDtcbiIsImNvbnN0IHRvQ2hlY2tib3ggPSAodmFsdWUpID0+IHtcbiAgY29uc3QgZWxlbUNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZWxlbUNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICBlbGVtQ2hlY2tCb3gudmFsdWUgPSB2YWx1ZTtcbiAgZWxlbUNoZWNrQm94LmNsYXNzTmFtZSA9ICdjaGVjayc7XG4gIHJldHVybiBlbGVtQ2hlY2tCb3g7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0NoZWNrYm94O1xuIiwiaW1wb3J0IHRvRmV0Y2hBUEkgZnJvbSAnLi9mZXRjaEFQSSc7XG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IHRvRWRpdGluZ0l0ZW1zID0gKGl0ZW1Ob2RlUmVmZXJlbmNlcywgc3RhdHVzRWRpdCkgPT4ge1xuICBjb25zdCB7IHBhcmVudE5vZGVSZWZlcmVuY2UsIGl0ZW1Ob2RlUmVmZXJlbmNlLCB0b0VkaXRlZEl0ZW1JLCBlbCB9ID0gaXRlbU5vZGVSZWZlcmVuY2VzO1xuXG4gIGlmIChzdGF0dXNFZGl0KSB7XG4gICAgdG9FZGl0ZWRJdGVtSS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICBwYXJlbnROb2RlUmVmZXJlbmNlLmNsYXNzTGlzdC5hZGQoJ2JnLWxpZ2h0JywgJ3NoYWRvdycsICd0ZXh0LXByaW1hcnknKTtcbiAgICBpdGVtTm9kZVJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsIHRydWUpO1xuICAgIGl0ZW1Ob2RlUmVmZXJlbmNlLmZvY3VzKCk7XG4gIH0gZWxzZSB7XG4gICAgaXRlbU5vZGVSZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnKTtcbiAgICB0b0VkaXRlZEl0ZW1JLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIHBhcmVudE5vZGVSZWZlcmVuY2UuY2xhc3NMaXN0LnJlbW92ZSgnYmctbGlnaHQnLCAnc2hhZG93JywgJ3RleHQtcHJpbWFyeScpO1xuICB9XG59O1xuXG5jb25zdCB0b0VkaXRJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdG9FZGl0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1wZW4tc3F1YXJlJyk7XG4gIGNvbnN0IHRvRWRpdGVkaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1jYXJ0LWFycm93LWRvd24nKTtcblxuICB0b0VkaXRJdGVtLmZvckVhY2goKGVsLCBpZHgpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICBjb25zdCB7IGlkIH0gPSB0YXJnZXQ7XG4gICAgICBjb25zdCBwYXJlbnROb2RlUmVmZXJlbmNlID0gZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCBpdGVtTm9kZVJlZmVyZW5jZSA9IHBhcmVudE5vZGVSZWZlcmVuY2UucXVlcnlTZWxlY3RvcignLml0ZW0nKTtcblxuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBwYXJlbnROb2RlUmVmZXJlbmNlLFxuICAgICAgICBpdGVtTm9kZVJlZmVyZW5jZSxcbiAgICAgICAgdG9FZGl0ZWRJdGVtSTogdG9FZGl0ZWRpdGVtW2lkeF0sXG4gICAgICAgIGVsLFxuICAgICAgfTtcblxuICAgICAgdG9FZGl0aW5nSXRlbXMocGFyYW1zLCB0cnVlKTtcblxuICAgICAgdG9FZGl0ZWRpdGVtW2lkeF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRvRmV0Y2hBUEkoYCR7S0VZUy5BUEl9LyR7aWR9YCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW1Ob2RlUmVmZXJlbmNlLnRleHRDb250ZW50LFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KS50aGVuKCgpID0+IHRvRWRpdGluZ0l0ZW1zKHBhcmFtcywgZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvRWRpdEl0ZW1zO1xuIiwiaW1wb3J0IHRvQWN0aW9ucyBmcm9tICcuL0FjdGlvbnNJdGVtcyc7XG5pbXBvcnQgdG9DaGVja2JveCBmcm9tICcuL0NoZWNrYm94SXRlbXMnO1xuaW1wb3J0IHRvRmV0Y2hBUEkgZnJvbSAnLi9mZXRjaEFQSSc7XG5cbmltcG9ydCB7IEtFWVMsIEVMRU0gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHRvRWRpdEl0ZW1zIGZyb20gJy4vRWRpdEl0ZW1zJztcbmltcG9ydCB0b1JlbW92ZUl0ZW1zIGZyb20gJy4vUmVtb3ZlSXRlbXMnO1xuXG5jb25zdCB0b0xpc3RJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlzdEl0ZW1zQnlBUEkgPSBhd2FpdCB0b0ZldGNoQVBJKEtFWVMuQVBJKTtcbiAgRUxFTS5BTExfSVRFTVMuaW5uZXJIVE1MID0gJyc7XG5cbiAgbGlzdEl0ZW1zQnlBUEkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG5vZGVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBub2RlSXRlbS5jbGFzc05hbWUgPSAnYm9yZGVyLWxpc3QgbGlzdC1ncm91cC1pdGVtJztcbiAgICBub2RlSXRlbS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJpdGVtXCI+JHtpdGVtLmRlc2NyaXB0aW9ufTwvc3Bhbj5gO1xuICAgIG5vZGVJdGVtLmFwcGVuZENoaWxkKHRvQ2hlY2tib3goaXRlbS5kZXNjcmlwdGlvbikpO1xuICAgIG5vZGVJdGVtLmFwcGVuZENoaWxkKHRvQWN0aW9ucyhpdGVtLmlkKSk7XG4gICAgcmV0dXJuIEVMRU0uQUxMX0lURU1TLmFwcGVuZENoaWxkKG5vZGVJdGVtKTtcbiAgfSk7XG5cbiAgdG9FZGl0SXRlbXMoKTtcbiAgdG9SZW1vdmVJdGVtcygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9MaXN0SXRlbXM7XG4iLCJpbXBvcnQgdG9GZXRjaEFQSSBmcm9tICcuL2ZldGNoQVBJJztcblxuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHRvUmVtb3ZlSXRlbXMgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtdHJhc2gnKTtcblxuICBpdGVtLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlRWxlbWVudFRvUmVtb3ZlID0gZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCB7IGlkIH0gPSB0YXJnZXQ7XG4gICAgICBjb25zdCBleGNsdWRlID0gKCkgPT4ge1xuICAgICAgICB0b0ZldGNoQVBJKGAke0tFWVMuQVBJfS8ke2lkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZWZlcmVuY2VFbGVtZW50VG9SZW1vdmUucmVtb3ZlKCk7XG4gICAgICAgICAgJ3ZpYnJhdGUnIGluIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudmlicmF0ZSgxMDApO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBpZiAod2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB3YW50IHRvIGV4Y2x1ZGUgdGhhdCBpdGVtPycpKSB7XG4gICAgICAgIC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBleGNsdWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9SZW1vdmVJdGVtcztcbiIsImNvbnN0IHRvRmV0Y2hBUEkgPSBhc3luYyAoYXBpLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgZ2V0QVBJID0gYXdhaXQgZmV0Y2goYXBpLCBwYXJhbXMpO1xuICBjb25zdCBnZXREYXRhQVBJID0gYXdhaXQgZ2V0QVBJLmpzb24oKTtcbiAgcmV0dXJuIGdldERhdGFBUEk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0ZldGNoQVBJO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwL2FwcCc7XG5cbmNvbnN0IHN0YXJ0QXBwID0gKCkgPT4gbmV3IEFwcCgpO1xuc3RhcnRBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==