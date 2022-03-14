/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model/index.js\");\n\n\nconst elem = {\n  valueItem: document.querySelector('.value-item'),\n  addItem: document.querySelector('.add-item'),\n  allItems: document.querySelector('.all-items'),\n};\nconst {\n  valueItem, addItem, allItems,\n} = elem;\n\nconst eventListener = (el, event, fn) => el.addEventListener(event, fn);\n\nconst MountStructure = {\n  checkbox: (value) => {\n    const elemCheck = document.createElement('input');\n    elemCheck.type = 'checkbox';\n    elemCheck.value = value;\n    elemCheck.className = 'check';\n    return elemCheck;\n  },\n  actionIcon: (element, icon) => {\n    const actionIcon = document.createElement(element);\n    actionIcon.innerHTML = icon;\n    return actionIcon;\n  },\n  actions: (el) => {\n    const boxActions = document.createElement('span');\n    boxActions.className = 'box-actions';\n    boxActions.appendChild(MountStructure.actionIcon('button', `<i id=\"${el}\" title=\"Save\" class=\"d-none fas fa-cart-arrow-down\"></i>`));\n    boxActions.appendChild(MountStructure.actionIcon('button', `<i id=\"${el}\" title=\"Edit\" class=\"fas fa-pen-square\"></i>`));\n    boxActions.appendChild(MountStructure.actionIcon('button', `<i id=\"${el}\" title=\"Delete\" class=\"fas fa-trash\"></i>`));\n\n    return boxActions;\n  },\n};\n\nlet listItem;\nlet editList;\n\n// Delete items\nconst removeList = () => {\n  const dItem = document.querySelectorAll('.fa-trash');\n  dItem.forEach((el) => {\n    el.addEventListener('click', ({ target }) => {\n      const { id } = target;\n      const exclude = () => {\n        (0,_model__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(`${api}/${id}`, {\n          method: 'DELETE',\n        }).then(() => listItem());\n      };\n      if (window.confirm('Are you sure want to exclude that item?')) { //eslint-disable-line\n        exclude();\n      }\n    });\n  });\n};\n\n// List all items..\nlistItem = async () => {\n  (0,_model__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(api).then((list) => {\n    let cItem;\n    allItems.innerHTML = '';\n    list.forEach((item) => {\n      const lItem = document.createElement('li');\n      lItem.className = 'border-list';\n      lItem.innerHTML = `<span class=\"item\">${item.item}</span>`;\n      lItem.appendChild(MountStructure.checkbox(item.item));\n      lItem.appendChild(MountStructure.actions(item.id));\n      cItem = allItems.appendChild(lItem);\n    });\n    return cItem;\n  })\n    .then(removeList)\n    .then(editList);\n};\n\n// Add items list\nconst addList = (elemAdd, elemValue) => {\n  eventListener(elemAdd, 'click', async (e) => {\n    e.preventDefault();\n    const vItem = elemValue.value;\n    (0,_model__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(api, {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ item: vItem }),\n    })\n      .then(() => listItem());\n  });\n};\n\n// Edit List\neditList = () => {\n  const eItem = document.querySelectorAll('.fa-pen-square');\n  const sItem = document.querySelectorAll('.fa-cart-arrow-down');\n  eItem.forEach((el, idx) => {\n    el.addEventListener('click', ({ target }) => {\n      const { id } = target;\n      const reference = el.parentNode.parentNode.parentNode;\n      const iRef = reference.querySelector('.item');\n\n      iRef.setAttribute('contentEditable', true);\n      sItem[idx].classList.remove('d-none');\n      el.classList.add('d-none');\n      reference.classList.add('shadow', 'rounded', 'border');\n      iRef.classList.add('text-warning');\n      iRef.focus();\n\n      sItem[idx].addEventListener('click', () => {\n        // console.log(id)\n        (0,_model__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(`${api}/${id}`, {\n          method: 'PUT',\n          headers: { 'Content-Type': 'application/json' },\n          body: JSON.stringify({ item: iRef.textContent }),\n        }).then(() => listItem());\n      });\n    });\n  });\n};\n\neventListener(window, 'load', (e) => {\n  e.preventDefault();\n  addList(addItem, valueItem);\n  listItem();\n});\n\n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/index.js?");

/***/ }),

/***/ "./src/model/index.js":
/*!****************************!*\
  !*** ./src/model/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAPI\": () => (/* binding */ fetchAPI)\n/* harmony export */ });\nconst api = 'http://localhost:3000/lista';\n\n// Model fetch API..\nconst fetchAPI = (url, opt) => new Promise((resolve) => {\n  fetch(url, opt)\n    .then((json) => json.json())\n    .then((res) => resolve(res));\n});\n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/model/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;