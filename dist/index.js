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
/* harmony export */   ELEM: () => (/* binding */ ELEM),
/* harmony export */   KEYS: () => (/* binding */ KEYS)
/* harmony export */ });
const KEYS = {
  API: 'https://63f239144f17278c9a22d1cd.mockapi.io/api/v1/item',
};

const ELEM = {
  ADD_ITEM: document.querySelector('.add-item'),
  ALL_ITEMS: document.querySelector('.all-items'),
  BAT_ACTIONS_ITEMS: document.querySelector('.bat-actions-items'),
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
/* harmony export */   toActionBat: () => (/* binding */ toActionBat),
/* harmony export */   toActions: () => (/* binding */ toActions)
/* harmony export */ });
/* harmony import */ var _ActionIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionIcon */ "./src/app/modules/ActionIcon.js");


const toAppendIconActions = (box, el) => {
  box.appendChild(
    (0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `<i id="${el}" title="Save" class="d-none fas fa-cart-arrow-down"></i>`),
  );
  box.appendChild(
    (0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `<i id="${el}" title="Edit" class="fas fa-pen-square"></i>`),
  );
  box.appendChild((0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `<i id="${el}" title="Delete" class="fas fa-trash"></i>`));
};

const toActions = (element) => {
  const boxActions = document.createElement('span');
  boxActions.className = 'box-actions';

  toAppendIconActions(boxActions, element);

  return boxActions;
};

const toActionBat = () => {
  const boxActions = document.createElement('span');
  boxActions.className = 'bat-actions-items';
  boxActions.appendChild((0,_ActionIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `<i title="Delete" class="fas fa-square-minus"></i>`));
  return boxActions;
};




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
const toCheckbox = (value, id) => {
  const elemCheckBox = document.createElement('input');
  elemCheckBox.type = 'checkbox';
  elemCheckBox.value = value;
  elemCheckBox.id = id;
  elemCheckBox.className = 'check';
  elemCheckBox.addEventListener('change', () => {
    elemCheckBox.className = elemCheckBox.checked ? 'check checked' : 'check';
  });
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
/* harmony export */   toEditingItems: () => (/* binding */ toEditingItems)
/* harmony export */ });
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI */ "./src/app/modules/fetchAPI.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/constants.js");



const toEdited = ({ parentNodeReference, itemNodeReference, toEditedItemI, el }) => {
  itemNodeReference.removeAttribute('contentEditable');
  toEditedItemI.classList.add('d-none');
  el.classList.remove('d-none');
  parentNodeReference.classList.remove('bg-light', 'shadow', 'text-primary');
};

const toInEdit = ({ parentNodeReference, itemNodeReference, toEditedItemI, el }) => {
  toEditedItemI.classList.remove('d-none');
  el.classList.add('d-none');
  parentNodeReference.classList.add('bg-light', 'shadow', 'text-primary');
  itemNodeReference.setAttribute('contentEditable', true);
  itemNodeReference.focus();
};

const toEditingItems = (itemNodeReferences, statusEdit) => {
  statusEdit ? toInEdit(itemNodeReferences) : toEdited(itemNodeReferences);
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
  _constants__WEBPACK_IMPORTED_MODULE_3__.ELEM.BAT_ACTIONS_ITEMS.innerHTML = '';

  _constants__WEBPACK_IMPORTED_MODULE_3__.ELEM.BAT_ACTIONS_ITEMS.appendChild((0,_ActionsItems__WEBPACK_IMPORTED_MODULE_0__.toActionBat)());

  listItemsByAPI.forEach((item) => {
    const nodeItem = document.createElement('li');
    nodeItem.className = 'border-list list-group-item';
    nodeItem.innerHTML = `<span class="item">${item.description}</span>`;
    nodeItem.appendChild((0,_CheckboxItems__WEBPACK_IMPORTED_MODULE_1__["default"])(item.description, item.id));
    nodeItem.appendChild((0,_ActionsItems__WEBPACK_IMPORTED_MODULE_0__.toActions)(item.id));
    return _constants__WEBPACK_IMPORTED_MODULE_3__.ELEM.ALL_ITEMS.appendChild(nodeItem);
  });

  (0,_EditItems__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_RemoveItems__WEBPACK_IMPORTED_MODULE_5__.toRemoveItems)();
  (0,_RemoveItems__WEBPACK_IMPORTED_MODULE_5__.toRemoveBat)();
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
/* harmony export */   toRemoveBat: () => (/* binding */ toRemoveBat),
/* harmony export */   toRemoveItems: () => (/* binding */ toRemoveItems)
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

const toRemoveBat = () => {
  const batAction = document.querySelector('.bat-actions-items');
  const inputChecked = document.querySelectorAll('.check');

  batAction.addEventListener('click', () => {
    inputChecked.forEach((el) => {
      const referenceElementToRemove = el.parentNode;
      if (el.checked) {
        (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_0__["default"])(`${_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.API}/${el.id}`, {
          method: 'DELETE',
        }).then(() => {
          referenceElementToRemove.remove();
          'vibrate' in navigator && navigator.vibrate(100);
        });
      }
    });
  });
};



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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVUsSUFBSSw0Q0FBSSxLQUFLLEdBQUcsTUFBTTtBQUN4QztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ04xQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFNUIsMkJBQTJCLGdEQUFHO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRqbWVsby90bXgtdmVudXMvLi9zcmMvYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly9AdGptZWxvL3RteC12ZW51cy8uL3NyYy9hcHAvY29uc3RhbnRzLmpzIiwid2VicGFjazovL0B0am1lbG8vdG14LXZlbnVzLy4vc3JjL2FwcC9tb2R1bGVzL0FjdGlvbkljb24uanMiLCJ3ZWJwYWNrOi8vQHRqbWVsby90bXgtdmVudXMvLi9zcmMvYXBwL21vZHVsZXMvQWN0aW9uc0l0ZW1zLmpzIiwid2VicGFjazovL0B0am1lbG8vdG14LXZlbnVzLy4vc3JjL2FwcC9tb2R1bGVzL0FkZExpc3RJdGVtcy5qcyIsIndlYnBhY2s6Ly9AdGptZWxvL3RteC12ZW51cy8uL3NyYy9hcHAvbW9kdWxlcy9DaGVja2JveEl0ZW1zLmpzIiwid2VicGFjazovL0B0am1lbG8vdG14LXZlbnVzLy4vc3JjL2FwcC9tb2R1bGVzL0VkaXRJdGVtcy5qcyIsIndlYnBhY2s6Ly9AdGptZWxvL3RteC12ZW51cy8uL3NyYy9hcHAvbW9kdWxlcy9MaXN0SXRlbXMuanMiLCJ3ZWJwYWNrOi8vQHRqbWVsby90bXgtdmVudXMvLi9zcmMvYXBwL21vZHVsZXMvUmVtb3ZlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vQHRqbWVsby90bXgtdmVudXMvLi9zcmMvYXBwL21vZHVsZXMvZmV0Y2hBUEkuanMiLCJ3ZWJwYWNrOi8vQHRqbWVsby90bXgtdmVudXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHRqbWVsby90bXgtdmVudXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0B0am1lbG8vdG14LXZlbnVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHRqbWVsby90bXgtdmVudXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AdGptZWxvL3RteC12ZW51cy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTEVNIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgdG9BZGRMaXN0IGZyb20gJy4vbW9kdWxlcy9BZGRMaXN0SXRlbXMnO1xuaW1wb3J0IHRvTGlzdEl0ZW1zIGZyb20gJy4vbW9kdWxlcy9MaXN0SXRlbXMnO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvTGlzdEl0ZW1zID0gdG9MaXN0SXRlbXMoKTtcbiAgICB0aGlzLnRvQWRkTGlzdCA9IHRvQWRkTGlzdChFTEVNLkFERF9JVEVNKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJleHBvcnQgY29uc3QgS0VZUyA9IHtcbiAgQVBJOiAnaHR0cHM6Ly82M2YyMzkxNDRmMTcyNzhjOWEyMmQxY2QubW9ja2FwaS5pby9hcGkvdjEvaXRlbScsXG59O1xuXG5leHBvcnQgY29uc3QgRUxFTSA9IHtcbiAgQUREX0lURU06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbScpLFxuICBBTExfSVRFTVM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtaXRlbXMnKSxcbiAgQkFUX0FDVElPTlNfSVRFTVM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXQtYWN0aW9ucy1pdGVtcycpLFxufTtcbiIsImNvbnN0IHRvQWN0aW9uSWNvbiA9IChlbGVtZW50LCBpY29uKSA9PiB7XG4gIGNvbnN0IGFjdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBhY3Rpb25JY29uLmlubmVySFRNTCA9IGljb247XG4gIHJldHVybiBhY3Rpb25JY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9BY3Rpb25JY29uO1xuIiwiaW1wb3J0IHRvQWN0aW9uSWNvbiBmcm9tICcuL0FjdGlvbkljb24nO1xuXG5jb25zdCB0b0FwcGVuZEljb25BY3Rpb25zID0gKGJveCwgZWwpID0+IHtcbiAgYm94LmFwcGVuZENoaWxkKFxuICAgIHRvQWN0aW9uSWNvbignYnV0dG9uJywgYDxpIGlkPVwiJHtlbH1cIiB0aXRsZT1cIlNhdmVcIiBjbGFzcz1cImQtbm9uZSBmYXMgZmEtY2FydC1hcnJvdy1kb3duXCI+PC9pPmApLFxuICApO1xuICBib3guYXBwZW5kQ2hpbGQoXG4gICAgdG9BY3Rpb25JY29uKCdidXR0b24nLCBgPGkgaWQ9XCIke2VsfVwiIHRpdGxlPVwiRWRpdFwiIGNsYXNzPVwiZmFzIGZhLXBlbi1zcXVhcmVcIj48L2k+YCksXG4gICk7XG4gIGJveC5hcHBlbmRDaGlsZCh0b0FjdGlvbkljb24oJ2J1dHRvbicsIGA8aSBpZD1cIiR7ZWx9XCIgdGl0bGU9XCJEZWxldGVcIiBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT5gKSk7XG59O1xuXG5jb25zdCB0b0FjdGlvbnMgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBib3hBY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBib3hBY3Rpb25zLmNsYXNzTmFtZSA9ICdib3gtYWN0aW9ucyc7XG5cbiAgdG9BcHBlbmRJY29uQWN0aW9ucyhib3hBY3Rpb25zLCBlbGVtZW50KTtcblxuICByZXR1cm4gYm94QWN0aW9ucztcbn07XG5cbmNvbnN0IHRvQWN0aW9uQmF0ID0gKCkgPT4ge1xuICBjb25zdCBib3hBY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBib3hBY3Rpb25zLmNsYXNzTmFtZSA9ICdiYXQtYWN0aW9ucy1pdGVtcyc7XG4gIGJveEFjdGlvbnMuYXBwZW5kQ2hpbGQodG9BY3Rpb25JY29uKCdidXR0b24nLCBgPGkgdGl0bGU9XCJEZWxldGVcIiBjbGFzcz1cImZhcyBmYS1zcXVhcmUtbWludXNcIj48L2k+YCkpO1xuICByZXR1cm4gYm94QWN0aW9ucztcbn07XG5cbmV4cG9ydCB7IHRvQWN0aW9ucywgdG9BY3Rpb25CYXQgfTtcbiIsImltcG9ydCB0b0xpc3RJdGVtcyBmcm9tICcuL0xpc3RJdGVtcyc7XG5pbXBvcnQgdG9GZXRjaEFQSSBmcm9tICcuL2ZldGNoQVBJJztcblxuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHRvQWRkTGlzdCA9IChlbGVtQWRkKSA9PiB7XG4gIHJldHVybiBlbGVtQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmFsdWUtaXRlbScpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5ld0l0ZW0gPSBlbGVtZW50VmFsdWUudmFsdWU7XG5cbiAgICB0b0ZldGNoQVBJKEtFWVMuQVBJLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkZXNjcmlwdGlvbjogbmV3SXRlbSB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0b0xpc3RJdGVtcygpO1xuICAgICAgICBlbGVtZW50VmFsdWUudmFsdWUgPSAnJztcbiAgICAgICAgJ3ZpYnJhdGUnIGluIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudmlicmF0ZSgxMDApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9BZGRMaXN0O1xuIiwiY29uc3QgdG9DaGVja2JveCA9ICh2YWx1ZSwgaWQpID0+IHtcbiAgY29uc3QgZWxlbUNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZWxlbUNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICBlbGVtQ2hlY2tCb3gudmFsdWUgPSB2YWx1ZTtcbiAgZWxlbUNoZWNrQm94LmlkID0gaWQ7XG4gIGVsZW1DaGVja0JveC5jbGFzc05hbWUgPSAnY2hlY2snO1xuICBlbGVtQ2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGVsZW1DaGVja0JveC5jbGFzc05hbWUgPSBlbGVtQ2hlY2tCb3guY2hlY2tlZCA/ICdjaGVjayBjaGVja2VkJyA6ICdjaGVjayc7XG4gIH0pO1xuICByZXR1cm4gZWxlbUNoZWNrQm94O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9DaGVja2JveDtcbiIsImltcG9ydCB0b0ZldGNoQVBJIGZyb20gJy4vZmV0Y2hBUEknO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHRvRWRpdGVkID0gKHsgcGFyZW50Tm9kZVJlZmVyZW5jZSwgaXRlbU5vZGVSZWZlcmVuY2UsIHRvRWRpdGVkSXRlbUksIGVsIH0pID0+IHtcbiAgaXRlbU5vZGVSZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnKTtcbiAgdG9FZGl0ZWRJdGVtSS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gIHBhcmVudE5vZGVSZWZlcmVuY2UuY2xhc3NMaXN0LnJlbW92ZSgnYmctbGlnaHQnLCAnc2hhZG93JywgJ3RleHQtcHJpbWFyeScpO1xufTtcblxuY29uc3QgdG9JbkVkaXQgPSAoeyBwYXJlbnROb2RlUmVmZXJlbmNlLCBpdGVtTm9kZVJlZmVyZW5jZSwgdG9FZGl0ZWRJdGVtSSwgZWwgfSkgPT4ge1xuICB0b0VkaXRlZEl0ZW1JLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICBlbC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgcGFyZW50Tm9kZVJlZmVyZW5jZS5jbGFzc0xpc3QuYWRkKCdiZy1saWdodCcsICdzaGFkb3cnLCAndGV4dC1wcmltYXJ5Jyk7XG4gIGl0ZW1Ob2RlUmVmZXJlbmNlLnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgdHJ1ZSk7XG4gIGl0ZW1Ob2RlUmVmZXJlbmNlLmZvY3VzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdG9FZGl0aW5nSXRlbXMgPSAoaXRlbU5vZGVSZWZlcmVuY2VzLCBzdGF0dXNFZGl0KSA9PiB7XG4gIHN0YXR1c0VkaXQgPyB0b0luRWRpdChpdGVtTm9kZVJlZmVyZW5jZXMpIDogdG9FZGl0ZWQoaXRlbU5vZGVSZWZlcmVuY2VzKTtcbn07XG5cbmNvbnN0IHRvRWRpdEl0ZW1zID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0b0VkaXRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXBlbi1zcXVhcmUnKTtcbiAgY29uc3QgdG9FZGl0ZWRpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNhcnQtYXJyb3ctZG93bicpO1xuXG4gIHRvRWRpdEl0ZW0uZm9yRWFjaCgoZWwsIGlkeCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHRhcmdldDtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGVSZWZlcmVuY2UgPSBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IGl0ZW1Ob2RlUmVmZXJlbmNlID0gcGFyZW50Tm9kZVJlZmVyZW5jZS5xdWVyeVNlbGVjdG9yKCcuaXRlbScpO1xuXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHBhcmVudE5vZGVSZWZlcmVuY2UsXG4gICAgICAgIGl0ZW1Ob2RlUmVmZXJlbmNlLFxuICAgICAgICB0b0VkaXRlZEl0ZW1JOiB0b0VkaXRlZGl0ZW1baWR4XSxcbiAgICAgICAgZWwsXG4gICAgICB9O1xuXG4gICAgICB0b0VkaXRpbmdJdGVtcyhwYXJhbXMsIHRydWUpO1xuXG4gICAgICB0b0VkaXRlZGl0ZW1baWR4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdG9GZXRjaEFQSShgJHtLRVlTLkFQSX0vJHtpZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbU5vZGVSZWZlcmVuY2UudGV4dENvbnRlbnQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLnRoZW4oKCkgPT4gdG9FZGl0aW5nSXRlbXMocGFyYW1zLCBmYWxzZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9FZGl0SXRlbXM7XG4iLCJpbXBvcnQgeyB0b0FjdGlvbnMsIHRvQWN0aW9uQmF0IH0gZnJvbSAnLi9BY3Rpb25zSXRlbXMnO1xuaW1wb3J0IHRvQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveEl0ZW1zJztcbmltcG9ydCB0b0ZldGNoQVBJIGZyb20gJy4vZmV0Y2hBUEknO1xuXG5pbXBvcnQgeyBLRVlTLCBFTEVNIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB0b0VkaXRJdGVtcyBmcm9tICcuL0VkaXRJdGVtcyc7XG5pbXBvcnQgeyB0b1JlbW92ZUl0ZW1zLCB0b1JlbW92ZUJhdCB9IGZyb20gJy4vUmVtb3ZlSXRlbXMnO1xuXG5jb25zdCB0b0xpc3RJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlzdEl0ZW1zQnlBUEkgPSBhd2FpdCB0b0ZldGNoQVBJKEtFWVMuQVBJKTtcbiAgRUxFTS5BTExfSVRFTVMuaW5uZXJIVE1MID0gJyc7XG4gIEVMRU0uQkFUX0FDVElPTlNfSVRFTVMuaW5uZXJIVE1MID0gJyc7XG5cbiAgRUxFTS5CQVRfQUNUSU9OU19JVEVNUy5hcHBlbmRDaGlsZCh0b0FjdGlvbkJhdCgpKTtcblxuICBsaXN0SXRlbXNCeUFQSS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3Qgbm9kZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG5vZGVJdGVtLmNsYXNzTmFtZSA9ICdib3JkZXItbGlzdCBsaXN0LWdyb3VwLWl0ZW0nO1xuICAgIG5vZGVJdGVtLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIml0ZW1cIj4ke2l0ZW0uZGVzY3JpcHRpb259PC9zcGFuPmA7XG4gICAgbm9kZUl0ZW0uYXBwZW5kQ2hpbGQodG9DaGVja2JveChpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmlkKSk7XG4gICAgbm9kZUl0ZW0uYXBwZW5kQ2hpbGQodG9BY3Rpb25zKGl0ZW0uaWQpKTtcbiAgICByZXR1cm4gRUxFTS5BTExfSVRFTVMuYXBwZW5kQ2hpbGQobm9kZUl0ZW0pO1xuICB9KTtcblxuICB0b0VkaXRJdGVtcygpO1xuICB0b1JlbW92ZUl0ZW1zKCk7XG4gIHRvUmVtb3ZlQmF0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0xpc3RJdGVtcztcbiIsImltcG9ydCB0b0ZldGNoQVBJIGZyb20gJy4vZmV0Y2hBUEknO1xuXG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgdG9SZW1vdmVJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS10cmFzaCcpO1xuXG4gIGl0ZW0uZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VFbGVtZW50VG9SZW1vdmUgPSBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHRhcmdldDtcbiAgICAgIGNvbnN0IGV4Y2x1ZGUgPSAoKSA9PiB7XG4gICAgICAgIHRvRmV0Y2hBUEkoYCR7S0VZUy5BUEl9LyR7aWR9YCwge1xuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnRUb1JlbW92ZS5yZW1vdmUoKTtcbiAgICAgICAgICAndmlicmF0ZScgaW4gbmF2aWdhdG9yICYmIG5hdmlnYXRvci52aWJyYXRlKDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHdhbnQgdG8gZXhjbHVkZSB0aGF0IGl0ZW0/JykpIHtcbiAgICAgICAgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGV4Y2x1ZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCB0b1JlbW92ZUJhdCA9ICgpID0+IHtcbiAgY29uc3QgYmF0QWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdC1hY3Rpb25zLWl0ZW1zJyk7XG4gIGNvbnN0IGlucHV0Q2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpO1xuXG4gIGJhdEFjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbnB1dENoZWNrZWQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZUVsZW1lbnRUb1JlbW92ZSA9IGVsLnBhcmVudE5vZGU7XG4gICAgICBpZiAoZWwuY2hlY2tlZCkge1xuICAgICAgICB0b0ZldGNoQVBJKGAke0tFWVMuQVBJfS8ke2VsLmlkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZWZlcmVuY2VFbGVtZW50VG9SZW1vdmUucmVtb3ZlKCk7XG4gICAgICAgICAgJ3ZpYnJhdGUnIGluIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudmlicmF0ZSgxMDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyB0b1JlbW92ZUl0ZW1zLCB0b1JlbW92ZUJhdCB9OyIsImNvbnN0IHRvRmV0Y2hBUEkgPSBhc3luYyAoYXBpLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgZ2V0QVBJID0gYXdhaXQgZmV0Y2goYXBpLCBwYXJhbXMpO1xuICBjb25zdCBnZXREYXRhQVBJID0gYXdhaXQgZ2V0QVBJLmpzb24oKTtcbiAgcmV0dXJuIGdldERhdGFBUEk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0ZldGNoQVBJO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwL2FwcCc7XG5cbmNvbnN0IHN0YXJ0QXBwID0gKCkgPT4gbmV3IEFwcCgpO1xuc3RhcnRBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==