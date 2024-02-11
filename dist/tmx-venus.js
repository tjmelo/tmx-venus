/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/app/app.js':
      /*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./constants */ './src/app/constants.js',
        );
        /* harmony import */ var _modules_AddListItems__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./modules/AddListItems */ './src/app/modules/AddListItems.js');
        /* harmony import */ var _modules_ListItems__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./modules/ListItems */ './src/app/modules/ListItems.js');

        class App {
          constructor() {
            this.toListItems = (0, _modules_ListItems__WEBPACK_IMPORTED_MODULE_2__['default'])();
            this.toAddList = (0, _modules_AddListItems__WEBPACK_IMPORTED_MODULE_1__['default'])(
              _constants__WEBPACK_IMPORTED_MODULE_0__.ELEM.ADD_ITEM,
            );
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = App;

        /***/
      },

    /***/ './src/app/constants.js':
      /*!******************************!*\
  !*** ./src/app/constants.js ***!
  \******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ELEM: () => /* binding */ ELEM,
          /* harmony export */ KEYS: () => /* binding */ KEYS,
          /* harmony export */
        });
        const KEYS = {
          API: 'https://63f239144f17278c9a22d1cd.mockapi.io/api/v1/item',
        };

        const ELEM = {
          ADD_ITEM: document.querySelector('.add-item'),
          ALL_ITEMS: document.querySelector('.all-items'),
        };

        /***/
      },

    /***/ './src/app/modules/ActionIcon.js':
      /*!***************************************!*\
  !*** ./src/app/modules/ActionIcon.js ***!
  \***************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        const toActionIcon = (element, icon) => {
          const actionIcon = document.createElement(element);
          actionIcon.innerHTML = icon;
          return actionIcon;
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = toActionIcon;

        /***/
      },

    /***/ './src/app/modules/ActionsItems.js':
      /*!*****************************************!*\
  !*** ./src/app/modules/ActionsItems.js ***!
  \*****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _ActionIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./ActionIcon */ './src/app/modules/ActionIcon.js',
        );

        const toActions = (element) => {
          const boxActions = document.createElement('span');
          boxActions.className = 'box-actions';
          boxActions.appendChild(
            (0, _ActionIcon__WEBPACK_IMPORTED_MODULE_0__['default'])(
              'button',
              `<i id="${element}" title="Save" class="d-none fas fa-cart-arrow-down"></i>`,
            ),
          );
          boxActions.appendChild(
            (0, _ActionIcon__WEBPACK_IMPORTED_MODULE_0__['default'])(
              'button',
              `<i id="${element}" title="Edit" class="fas fa-pen-square"></i>`,
            ),
          );
          boxActions.appendChild(
            (0, _ActionIcon__WEBPACK_IMPORTED_MODULE_0__['default'])(
              'button',
              `<i id="${element}" title="Delete" class="fas fa-trash"></i>`,
            ),
          );
          return boxActions;
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = toActions;

        /***/
      },

    /***/ './src/app/modules/AddListItems.js':
      /*!*****************************************!*\
  !*** ./src/app/modules/AddListItems.js ***!
  \*****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _ListItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./ListItems */ './src/app/modules/ListItems.js',
        );
        /* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./fetchAPI */ './src/app/modules/fetchAPI.js',
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../constants */ './src/app/constants.js',
        );

        const toAddList = (elemAdd) => {
          return elemAdd.addEventListener('click', (e) => {
            const elementValue = document.querySelector('.value-item');
            e.preventDefault();

            const newItem = elementValue.value;

            (0, _fetchAPI__WEBPACK_IMPORTED_MODULE_1__['default'])(
              _constants__WEBPACK_IMPORTED_MODULE_2__.KEYS.API,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description: newItem }),
              },
            )
              .then(() => {
                (0, _ListItems__WEBPACK_IMPORTED_MODULE_0__['default'])();
                elementValue.value = '';
              })
              .catch((error) => console.error(error)); //eslint-disable-line
          });
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = toAddList;

        /***/
      },

    /***/ './src/app/modules/CheckboxItems.js':
      /*!******************************************!*\
  !*** ./src/app/modules/CheckboxItems.js ***!
  \******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        const toCheckbox = (value) => {
          const elemCheckBox = document.createElement('input');
          elemCheckBox.type = 'checkbox';
          elemCheckBox.value = value;
          elemCheckBox.className = 'check';
          return elemCheckBox;
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = toCheckbox;

        /***/
      },

    /***/ './src/app/modules/EditItems.js':
      /*!**************************************!*\
  !*** ./src/app/modules/EditItems.js ***!
  \**************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./fetchAPI */ './src/app/modules/fetchAPI.js',
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../constants */ './src/app/constants.js',
        );

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

          return toEditItem.forEach((el, idx) => {
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
                await (0, _fetchAPI__WEBPACK_IMPORTED_MODULE_0__['default'])(
                  `${_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.API}/${id}`,
                  {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({
                      description: itemNodeReference.textContent,
                    }),
                  },
                ).then(() => toEditingItems(params, false));
              });
            });
          });
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = toEditItems;

        /***/
      },

    /***/ './src/app/modules/ListItems.js':
      /*!**************************************!*\
  !*** ./src/app/modules/ListItems.js ***!
  \**************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _ActionsItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./ActionsItems */ './src/app/modules/ActionsItems.js',
        );
        /* harmony import */ var _CheckboxItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./CheckboxItems */ './src/app/modules/CheckboxItems.js',
        );
        /* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./fetchAPI */ './src/app/modules/fetchAPI.js',
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../constants */ './src/app/constants.js',
        );
        /* harmony import */ var _EditItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./EditItems */ './src/app/modules/EditItems.js',
        );
        /* harmony import */ var _RemoveItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./RemoveItems */ './src/app/modules/RemoveItems.js',
        );

        const toListItems = async () => {
          const listItemsByAPI = await (0, _fetchAPI__WEBPACK_IMPORTED_MODULE_2__['default'])(
            _constants__WEBPACK_IMPORTED_MODULE_3__.KEYS.API,
          );
          _constants__WEBPACK_IMPORTED_MODULE_3__.ELEM.ALL_ITEMS.innerHTML = '';

          listItemsByAPI.forEach((item) => {
            const nodeItem = document.createElement('li');
            nodeItem.className = 'border-list list-group-item';
            nodeItem.innerHTML = `<span class="item">${item.description}</span>`;
            nodeItem.appendChild(
              (0, _CheckboxItems__WEBPACK_IMPORTED_MODULE_1__['default'])(item.description),
            );
            nodeItem.appendChild(
              (0, _ActionsItems__WEBPACK_IMPORTED_MODULE_0__['default'])(item.id),
            );
            return _constants__WEBPACK_IMPORTED_MODULE_3__.ELEM.ALL_ITEMS.appendChild(nodeItem);
          });

          (0, _EditItems__WEBPACK_IMPORTED_MODULE_4__['default'])();
          (0, _RemoveItems__WEBPACK_IMPORTED_MODULE_5__['default'])();
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = toListItems;

        /***/
      },

    /***/ './src/app/modules/RemoveItems.js':
      /*!****************************************!*\
  !*** ./src/app/modules/RemoveItems.js ***!
  \****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./fetchAPI */ './src/app/modules/fetchAPI.js',
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../constants */ './src/app/constants.js',
        );

        const toRemoveItems = () => {
          const item = document.querySelectorAll('.fa-trash');

          item.forEach((el) => {
            el.addEventListener('click', ({ target }) => {
              const referenceElementToRemove = el.parentNode.parentNode.parentNode;
              const { id } = target;
              const exclude = () => {
                (0, _fetchAPI__WEBPACK_IMPORTED_MODULE_0__['default'])(
                  `${_constants__WEBPACK_IMPORTED_MODULE_1__.KEYS.API}/${id}`,
                  {
                    method: 'DELETE',
                  },
                ).then(() => referenceElementToRemove.remove());
              };
              if (window.confirm('Are you sure want to exclude that item?')) {
                //eslint-disable-line
                exclude();
              }
            });
          });
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = toRemoveItems;

        /***/
      },

    /***/ './src/app/modules/fetchAPI.js':
      /*!*************************************!*\
  !*** ./src/app/modules/fetchAPI.js ***!
  \*************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        const toFetchAPI = async (api, params) => {
          const getAPI = await fetch(api, params);
          const getDataAPI = await getAPI.json();
          return getDataAPI;
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = toFetchAPI;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app */ './src/app/app.js',
    );

    const startApp = () => new _app_app__WEBPACK_IMPORTED_MODULE_0__['default']();
    startApp();
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRCOztBQUU1QiwyQkFBMkIsZ0RBQUc7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3QvLi9zcmMvYXBwL21vZHVsZXMvQWN0aW9uSWNvbi5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tb2R1bGVzL0FjdGlvbnNJdGVtcy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tb2R1bGVzL0FkZExpc3RJdGVtcy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tb2R1bGVzL0NoZWNrYm94SXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvbW9kdWxlcy9FZGl0SXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvbW9kdWxlcy9MaXN0SXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC8uL3NyYy9hcHAvbW9kdWxlcy9SZW1vdmVJdGVtcy5qcyIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2FwcC9tb2R1bGVzL2ZldGNoQVBJLmpzIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG14LXZlbnVzLXNob3AtbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RteC12ZW51cy1zaG9wLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90bXgtdmVudXMtc2hvcC1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVMRU0gfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmltcG9ydCB0b0FkZExpc3QgZnJvbSAnLi9tb2R1bGVzL0FkZExpc3RJdGVtcyc7XG5pbXBvcnQgdG9MaXN0SXRlbXMgZnJvbSAnLi9tb2R1bGVzL0xpc3RJdGVtcyc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9MaXN0SXRlbXMgPSB0b0xpc3RJdGVtcygpO1xuICAgIHRoaXMudG9BZGRMaXN0ID0gdG9BZGRMaXN0KEVMRU0uQUREX0lURU0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImV4cG9ydCBjb25zdCBLRVlTID0ge1xuICBBUEk6ICdodHRwczovLzYzZjIzOTE0NGYxNzI3OGM5YTIyZDFjZC5tb2NrYXBpLmlvL2FwaS92MS9pdGVtJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFTEVNID0ge1xuICBBRERfSVRFTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtJyksXG4gIEFMTF9JVEVNUzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1pdGVtcycpLFxufTtcbiIsImNvbnN0IHRvQWN0aW9uSWNvbiA9IChlbGVtZW50LCBpY29uKSA9PiB7XG4gIGNvbnN0IGFjdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBhY3Rpb25JY29uLmlubmVySFRNTCA9IGljb247XG4gIHJldHVybiBhY3Rpb25JY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9BY3Rpb25JY29uO1xuIiwiaW1wb3J0IHRvQWN0aW9uSWNvbiBmcm9tICcuL0FjdGlvbkljb24nO1xuXG5jb25zdCB0b0FjdGlvbnMgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBib3hBY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBib3hBY3Rpb25zLmNsYXNzTmFtZSA9ICdib3gtYWN0aW9ucyc7XG4gIGJveEFjdGlvbnMuYXBwZW5kQ2hpbGQoXG4gICAgdG9BY3Rpb25JY29uKFxuICAgICAgJ2J1dHRvbicsXG4gICAgICBgPGkgaWQ9XCIke2VsZW1lbnR9XCIgdGl0bGU9XCJTYXZlXCIgY2xhc3M9XCJkLW5vbmUgZmFzIGZhLWNhcnQtYXJyb3ctZG93blwiPjwvaT5gLFxuICAgICksXG4gICk7XG4gIGJveEFjdGlvbnMuYXBwZW5kQ2hpbGQoXG4gICAgdG9BY3Rpb25JY29uKFxuICAgICAgJ2J1dHRvbicsXG4gICAgICBgPGkgaWQ9XCIke2VsZW1lbnR9XCIgdGl0bGU9XCJFZGl0XCIgY2xhc3M9XCJmYXMgZmEtcGVuLXNxdWFyZVwiPjwvaT5gLFxuICAgICksXG4gICk7XG4gIGJveEFjdGlvbnMuYXBwZW5kQ2hpbGQoXG4gICAgdG9BY3Rpb25JY29uKFxuICAgICAgJ2J1dHRvbicsXG4gICAgICBgPGkgaWQ9XCIke2VsZW1lbnR9XCIgdGl0bGU9XCJEZWxldGVcIiBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT5gLFxuICAgICksXG4gICk7XG4gIHJldHVybiBib3hBY3Rpb25zO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9BY3Rpb25zO1xuIiwiaW1wb3J0IHRvTGlzdEl0ZW1zIGZyb20gJy4vTGlzdEl0ZW1zJztcbmltcG9ydCB0b0ZldGNoQVBJIGZyb20gJy4vZmV0Y2hBUEknO1xuXG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgdG9BZGRMaXN0ID0gKGVsZW1BZGQpID0+IHtcbiAgcmV0dXJuIGVsZW1BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52YWx1ZS1pdGVtJyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbmV3SXRlbSA9IGVsZW1lbnRWYWx1ZS52YWx1ZTtcblxuICAgIHRvRmV0Y2hBUEkoS0VZUy5BUEksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGRlc2NyaXB0aW9uOiBuZXdJdGVtIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRvTGlzdEl0ZW1zKCk7XG4gICAgICAgIGVsZW1lbnRWYWx1ZS52YWx1ZSA9ICcnO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9BZGRMaXN0O1xuIiwiY29uc3QgdG9DaGVja2JveCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBlbGVtQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBlbGVtQ2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XG4gIGVsZW1DaGVja0JveC52YWx1ZSA9IHZhbHVlO1xuICBlbGVtQ2hlY2tCb3guY2xhc3NOYW1lID0gJ2NoZWNrJztcbiAgcmV0dXJuIGVsZW1DaGVja0JveDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvQ2hlY2tib3g7XG4iLCJpbXBvcnQgdG9GZXRjaEFQSSBmcm9tICcuL2ZldGNoQVBJJztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCB0b0VkaXRpbmdJdGVtcyA9IChpdGVtTm9kZVJlZmVyZW5jZXMsIHN0YXR1c0VkaXQpID0+IHtcbiAgY29uc3QgeyBwYXJlbnROb2RlUmVmZXJlbmNlLCBpdGVtTm9kZVJlZmVyZW5jZSwgdG9FZGl0ZWRJdGVtSSwgZWwgfSA9XG4gICAgaXRlbU5vZGVSZWZlcmVuY2VzO1xuXG4gIGlmIChzdGF0dXNFZGl0KSB7XG4gICAgdG9FZGl0ZWRJdGVtSS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICBwYXJlbnROb2RlUmVmZXJlbmNlLmNsYXNzTGlzdC5hZGQoJ2JnLWxpZ2h0JywgJ3NoYWRvdycsICd0ZXh0LXByaW1hcnknKTtcbiAgICBpdGVtTm9kZVJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsIHRydWUpO1xuICAgIGl0ZW1Ob2RlUmVmZXJlbmNlLmZvY3VzKCk7XG4gIH0gZWxzZSB7XG4gICAgaXRlbU5vZGVSZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnKTtcbiAgICB0b0VkaXRlZEl0ZW1JLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIHBhcmVudE5vZGVSZWZlcmVuY2UuY2xhc3NMaXN0LnJlbW92ZSgnYmctbGlnaHQnLCAnc2hhZG93JywgJ3RleHQtcHJpbWFyeScpO1xuICB9XG59O1xuXG5jb25zdCB0b0VkaXRJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdG9FZGl0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1wZW4tc3F1YXJlJyk7XG4gIGNvbnN0IHRvRWRpdGVkaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1jYXJ0LWFycm93LWRvd24nKTtcblxuICByZXR1cm4gdG9FZGl0SXRlbS5mb3JFYWNoKChlbCwgaWR4KSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgY29uc3QgeyBpZCB9ID0gdGFyZ2V0O1xuICAgICAgY29uc3QgcGFyZW50Tm9kZVJlZmVyZW5jZSA9IGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgY29uc3QgaXRlbU5vZGVSZWZlcmVuY2UgPSBwYXJlbnROb2RlUmVmZXJlbmNlLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtJyk7XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgcGFyZW50Tm9kZVJlZmVyZW5jZSxcbiAgICAgICAgaXRlbU5vZGVSZWZlcmVuY2UsXG4gICAgICAgIHRvRWRpdGVkSXRlbUk6IHRvRWRpdGVkaXRlbVtpZHhdLFxuICAgICAgICBlbCxcbiAgICAgIH07XG5cbiAgICAgIHRvRWRpdGluZ0l0ZW1zKHBhcmFtcywgdHJ1ZSk7XG5cbiAgICAgIHRvRWRpdGVkaXRlbVtpZHhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0b0ZldGNoQVBJKGAke0tFWVMuQVBJfS8ke2lkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtTm9kZVJlZmVyZW5jZS50ZXh0Q29udGVudCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB0b0VkaXRpbmdJdGVtcyhwYXJhbXMsIGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0VkaXRJdGVtcztcbiIsImltcG9ydCB0b0FjdGlvbnMgZnJvbSAnLi9BY3Rpb25zSXRlbXMnO1xuaW1wb3J0IHRvQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveEl0ZW1zJztcbmltcG9ydCB0b0ZldGNoQVBJIGZyb20gJy4vZmV0Y2hBUEknO1xuXG5pbXBvcnQgeyBLRVlTLCBFTEVNIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB0b0VkaXRJdGVtcyBmcm9tICcuL0VkaXRJdGVtcyc7XG5pbXBvcnQgdG9SZW1vdmVJdGVtcyBmcm9tICcuL1JlbW92ZUl0ZW1zJztcblxuY29uc3QgdG9MaXN0SXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpc3RJdGVtc0J5QVBJID0gYXdhaXQgdG9GZXRjaEFQSShLRVlTLkFQSSk7XG4gIEVMRU0uQUxMX0lURU1TLmlubmVySFRNTCA9ICcnO1xuXG4gIGxpc3RJdGVtc0J5QVBJLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBub2RlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbm9kZUl0ZW0uY2xhc3NOYW1lID0gJ2JvcmRlci1saXN0IGxpc3QtZ3JvdXAtaXRlbSc7XG4gICAgbm9kZUl0ZW0uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiaXRlbVwiPiR7aXRlbS5kZXNjcmlwdGlvbn08L3NwYW4+YDtcbiAgICBub2RlSXRlbS5hcHBlbmRDaGlsZCh0b0NoZWNrYm94KGl0ZW0uZGVzY3JpcHRpb24pKTtcbiAgICBub2RlSXRlbS5hcHBlbmRDaGlsZCh0b0FjdGlvbnMoaXRlbS5pZCkpO1xuICAgIHJldHVybiBFTEVNLkFMTF9JVEVNUy5hcHBlbmRDaGlsZChub2RlSXRlbSk7XG4gIH0pO1xuXG4gIHRvRWRpdEl0ZW1zKCk7XG4gIHRvUmVtb3ZlSXRlbXMoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvTGlzdEl0ZW1zO1xuIiwiaW1wb3J0IHRvRmV0Y2hBUEkgZnJvbSAnLi9mZXRjaEFQSSc7XG5cbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCB0b1JlbW92ZUl0ZW1zID0gKCkgPT4ge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXRyYXNoJyk7XG5cbiAgaXRlbS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZUVsZW1lbnRUb1JlbW92ZSA9IGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgY29uc3QgeyBpZCB9ID0gdGFyZ2V0O1xuICAgICAgY29uc3QgZXhjbHVkZSA9ICgpID0+IHtcbiAgICAgICAgdG9GZXRjaEFQSShgJHtLRVlTLkFQSX0vJHtpZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgfSkudGhlbigoKSA9PiByZWZlcmVuY2VFbGVtZW50VG9SZW1vdmUucmVtb3ZlKCkpO1xuICAgICAgfTtcbiAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHdhbnQgdG8gZXhjbHVkZSB0aGF0IGl0ZW0/JykpIHtcbiAgICAgICAgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGV4Y2x1ZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b1JlbW92ZUl0ZW1zO1xuIiwiY29uc3QgdG9GZXRjaEFQSSA9IGFzeW5jIChhcGksIHBhcmFtcykgPT4ge1xuICBjb25zdCBnZXRBUEkgPSBhd2FpdCBmZXRjaChhcGksIHBhcmFtcyk7XG4gIGNvbnN0IGdldERhdGFBUEkgPSBhd2FpdCBnZXRBUEkuanNvbigpO1xuICByZXR1cm4gZ2V0RGF0YUFQSTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvRmV0Y2hBUEk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAvYXBwJztcblxuY29uc3Qgc3RhcnRBcHAgPSAoKSA9PiBuZXcgQXBwKCk7XG5zdGFydEFwcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
