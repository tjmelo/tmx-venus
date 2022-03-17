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

/***/ "./src/controller/addlist.js":
/*!***********************************!*\
  !*** ./src/controller/addlist.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddList\": () => (/* binding */ AddList)\n/* harmony export */ });\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules */ \"./src/modules/index.js\");\n/* harmony import */ var _listitem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listitem */ \"./src/controller/listitem.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n// Add items list\n\n\n\n\n\n\n\nconst AddList = (elemAdd, elemValue) => {\n    (0,_services__WEBPACK_IMPORTED_MODULE_2__.eventListener)(elemAdd, 'click', async (e) => {\n        e.preventDefault();\n        const vItem = elemValue.value;\n        (0,_modules__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(_modules__WEBPACK_IMPORTED_MODULE_0__.api, {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ item: vItem }),\n        })\n        .then(() => (0,_listitem__WEBPACK_IMPORTED_MODULE_1__.ListItem)())\n        .catch(e => console.error(e));\n    });\n};\n\n\n\n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/controller/addlist.js?");

/***/ }),

/***/ "./src/controller/editlist.js":
/*!************************************!*\
  !*** ./src/controller/editlist.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EditList\": () => (/* binding */ EditList)\n/* harmony export */ });\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules */ \"./src/modules/index.js\");\n/* harmony import */ var _listitem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listitem */ \"./src/controller/listitem.js\");\n\n\n\n\n// Edit List\nconst EditList = () => {\n  const eItem = document.querySelectorAll('.fa-pen-square');\n  const sItem = document.querySelectorAll('.fa-cart-arrow-down');\n  eItem.forEach((el, idx) => {\n    el.addEventListener('click', ({ target }) => {\n      const { id } = target;\n      const reference = el.parentNode.parentNode.parentNode;\n      const iRef = reference.querySelector('.item');\n\n      iRef.setAttribute('contentEditable', true);\n      sItem[idx].classList.remove('d-none');\n      el.classList.add('d-none');\n      reference.classList.add('shadow', 'rounded', 'border');\n      iRef.classList.add('text-warning');\n      iRef.focus();\n\n      sItem[idx].addEventListener('click', () => {\n        // console.log(id)\n        (0,_modules__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(`${_modules__WEBPACK_IMPORTED_MODULE_0__.api}/${id}`, {\n          method: 'PUT',\n          headers: { 'Content-Type': 'application/json' },\n          body: JSON.stringify({ item: iRef.textContent }),\n        }).then(() => (0,_listitem__WEBPACK_IMPORTED_MODULE_1__.ListItem)());\n      });\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/controller/editlist.js?");

/***/ }),

/***/ "./src/controller/index.js":
/*!*********************************!*\
  !*** ./src/controller/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddList\": () => (/* reexport safe */ _addlist__WEBPACK_IMPORTED_MODULE_1__.AddList),\n/* harmony export */   \"EditList\": () => (/* reexport safe */ _editlist__WEBPACK_IMPORTED_MODULE_2__.EditList),\n/* harmony export */   \"ListItem\": () => (/* reexport safe */ _listitem__WEBPACK_IMPORTED_MODULE_4__.ListItem),\n/* harmony export */   \"MountStructure\": () => (/* reexport safe */ _structure__WEBPACK_IMPORTED_MODULE_0__.MountStructure),\n/* harmony export */   \"RemoveList\": () => (/* reexport safe */ _removelist__WEBPACK_IMPORTED_MODULE_3__.RemoveList)\n/* harmony export */ });\n/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure */ \"./src/controller/structure.js\");\n/* harmony import */ var _addlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addlist */ \"./src/controller/addlist.js\");\n/* harmony import */ var _editlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editlist */ \"./src/controller/editlist.js\");\n/* harmony import */ var _removelist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removelist */ \"./src/controller/removelist.js\");\n/* harmony import */ var _listitem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listitem */ \"./src/controller/listitem.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/controller/index.js?");

/***/ }),

/***/ "./src/controller/listitem.js":
/*!************************************!*\
  !*** ./src/controller/listitem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListItem\": () => (/* binding */ ListItem)\n/* harmony export */ });\n/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure */ \"./src/controller/structure.js\");\n/* harmony import */ var _removelist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removelist */ \"./src/controller/removelist.js\");\n/* harmony import */ var _editlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editlist */ \"./src/controller/editlist.js\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules */ \"./src/modules/index.js\");\n// List all items..\n\n\n\n\n\n\nconst ListItem = async () => {\n    (0,_modules__WEBPACK_IMPORTED_MODULE_3__.fetchAPI)(_modules__WEBPACK_IMPORTED_MODULE_3__.api).then((list) => {\n        let cItem;\n        _modules__WEBPACK_IMPORTED_MODULE_3__.ELEM.ALLITEMS.innerHTML = '';\n        list.forEach((item) => {\n        const lItem = document.createElement('li');\n        lItem.className = 'border-list';\n        lItem.innerHTML = `<span class=\"item\">${item.item}</span>`;\n        lItem.appendChild(_structure__WEBPACK_IMPORTED_MODULE_0__.MountStructure.checkbox(item.item));\n        lItem.appendChild(_structure__WEBPACK_IMPORTED_MODULE_0__.MountStructure.actions(item.id));\n        cItem = _modules__WEBPACK_IMPORTED_MODULE_3__.ELEM.ALLITEMS.appendChild(lItem);\n        });\n        return cItem;\n    })\n    .then(_removelist__WEBPACK_IMPORTED_MODULE_1__.RemoveList)\n    .then(_editlist__WEBPACK_IMPORTED_MODULE_2__.EditList)\n    .catch(e => console.error(e));\n};\n\n\n  \n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/controller/listitem.js?");

/***/ }),

/***/ "./src/controller/removelist.js":
/*!**************************************!*\
  !*** ./src/controller/removelist.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RemoveList\": () => (/* binding */ RemoveList)\n/* harmony export */ });\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules */ \"./src/modules/index.js\");\n/* harmony import */ var _listitem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listitem */ \"./src/controller/listitem.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n// Delete items\n\n\n\n\n\n\nconst DOM = () => {\n    return {\n        DITEM: document.querySelectorAll('.fa-trash')\n    }\n\n}\n\nconst RemoveList = () => {\n    DOM().DITEM.forEach((el) => {\n        ;(0,_services__WEBPACK_IMPORTED_MODULE_2__.eventListener)(el, 'click', ({ target }) => {\n        const { id } = target;\n        const exclude = () => {\n            (0,_modules__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(`${_modules__WEBPACK_IMPORTED_MODULE_0__.api}/${id}`, {\n            method: 'DELETE',\n            }).then(() => (0,_listitem__WEBPACK_IMPORTED_MODULE_1__.ListItem)());\n        };\n        if (window.confirm('Are you sure want to exclude that item?')) { //eslint-disable-line\n            exclude();\n        }\n        });\n    });\n};\n\n\n\n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/controller/removelist.js?");

/***/ }),

/***/ "./src/controller/structure.js":
/*!*************************************!*\
  !*** ./src/controller/structure.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MountStructure\": () => (/* binding */ MountStructure)\n/* harmony export */ });\nconst MountStructure = {\n    checkbox: (value) => {\n        const elemCheck = document.createElement('input');\n        elemCheck.type = 'checkbox';\n        elemCheck.value = value;\n        elemCheck.className = 'check';\n        return elemCheck;\n    },  \n    actionIcon: (element, icon) => {\n        const actionIcon = document.createElement(element);\n        actionIcon.innerHTML = icon;\n        return actionIcon;\n    },\n    actions: (el) => {\n        const boxActions = document.createElement('span');\n        boxActions.className = 'box-actions';\n        boxActions.appendChild(MountStructure.actionIcon('button', `<i id=\"${el}\" title=\"Save\" class=\"d-none fas fa-cart-arrow-down\"></i>`));\n        boxActions.appendChild(MountStructure.actionIcon('button', `<i id=\"${el}\" title=\"Edit\" class=\"fas fa-pen-square\"></i>`));\n        boxActions.appendChild(MountStructure.actionIcon('button', `<i id=\"${el}\" title=\"Delete\" class=\"fas fa-trash\"></i>`));\n\n        return boxActions;\n    },\n};\n\n\n\n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/controller/structure.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ \"./src/services/index.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ \"./src/controller/index.js\");\n\n\n\n\n\n\n(0,_services__WEBPACK_IMPORTED_MODULE_1__.eventListener)(window, 'load', (e) => {\n  e.preventDefault();\n  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.ListItem)();\n  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.AddList)(_modules__WEBPACK_IMPORTED_MODULE_0__.ELEM.ADDITEM, _modules__WEBPACK_IMPORTED_MODULE_0__.ELEM.VALUEITEM);\n  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.EditList)();\n});\n\n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api),\n/* harmony export */   \"fetchAPI\": () => (/* binding */ fetchAPI)\n/* harmony export */ });\nconst api = 'http://localhost:3000/lista';\n\n// Model fetch API..\nconst fetchAPI = (url, opt) => new Promise((resolve) => {\n  fetch(url, opt)\n    .then(data => data.ok ? data.json() : console.warn(data))\n    .then((res) => resolve(res))\n    .catch(e => console.error(e));\n});\n\n\n\n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ELEM\": () => (/* binding */ ELEM)\n/* harmony export */ });\nconst ELEM = {\n    VALUEITEM: document.querySelector('.value-item'),\n    ADDITEM: document.querySelector('.add-item'),\n    ALLITEMS: document.querySelector('.all-items'),\n};\n\n\n  \n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/modules/elements.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ELEM\": () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.ELEM),\n/* harmony export */   \"api\": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.api),\n/* harmony export */   \"fetchAPI\": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/modules/api.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/modules/index.js?");

/***/ }),

/***/ "./src/services/eventlistener.js":
/*!***************************************!*\
  !*** ./src/services/eventlistener.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventListener\": () => (/* binding */ eventListener)\n/* harmony export */ });\nconst eventListener = (el, event, fn) => el.addEventListener(event, fn);\n\n\n\n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/services/eventlistener.js?");

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventListener\": () => (/* reexport safe */ _eventlistener__WEBPACK_IMPORTED_MODULE_0__.eventListener)\n/* harmony export */ });\n/* harmony import */ var _eventlistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventlistener */ \"./src/services/eventlistener.js\");\n\n\n\n\n\n//# sourceURL=webpack://tmx-venus-shop-list/./src/services/index.js?");

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