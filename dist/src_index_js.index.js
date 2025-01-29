"use strict";
(self["webpackChunk_tjmelo_tmx_venus"] = self["webpackChunk_tjmelo_tmx_venus"] || []).push([["src_index_js"],{

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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ "./src/app/app.js");


const startApp = () => new _app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
startApp();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEyQixnREFBRztBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL0B0am1lbG8vdG14LXZlbnVzLy4vc3JjL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vQHRqbWVsby90bXgtdmVudXMvLi9zcmMvYXBwL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9AdGptZWxvL3RteC12ZW51cy8uL3NyYy9hcHAvbW9kdWxlcy9BY3Rpb25JY29uLmpzIiwid2VicGFjazovL0B0am1lbG8vdG14LXZlbnVzLy4vc3JjL2FwcC9tb2R1bGVzL0FjdGlvbnNJdGVtcy5qcyIsIndlYnBhY2s6Ly9AdGptZWxvL3RteC12ZW51cy8uL3NyYy9hcHAvbW9kdWxlcy9BZGRMaXN0SXRlbXMuanMiLCJ3ZWJwYWNrOi8vQHRqbWVsby90bXgtdmVudXMvLi9zcmMvYXBwL21vZHVsZXMvQ2hlY2tib3hJdGVtcy5qcyIsIndlYnBhY2s6Ly9AdGptZWxvL3RteC12ZW51cy8uL3NyYy9hcHAvbW9kdWxlcy9FZGl0SXRlbXMuanMiLCJ3ZWJwYWNrOi8vQHRqbWVsby90bXgtdmVudXMvLi9zcmMvYXBwL21vZHVsZXMvTGlzdEl0ZW1zLmpzIiwid2VicGFjazovL0B0am1lbG8vdG14LXZlbnVzLy4vc3JjL2FwcC9tb2R1bGVzL1JlbW92ZUl0ZW1zLmpzIiwid2VicGFjazovL0B0am1lbG8vdG14LXZlbnVzLy4vc3JjL2FwcC9tb2R1bGVzL2ZldGNoQVBJLmpzIiwid2VicGFjazovL0B0am1lbG8vdG14LXZlbnVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVMRU0gfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmltcG9ydCB0b0FkZExpc3QgZnJvbSAnLi9tb2R1bGVzL0FkZExpc3RJdGVtcyc7XG5pbXBvcnQgdG9MaXN0SXRlbXMgZnJvbSAnLi9tb2R1bGVzL0xpc3RJdGVtcyc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9MaXN0SXRlbXMgPSB0b0xpc3RJdGVtcygpO1xuICAgIHRoaXMudG9BZGRMaXN0ID0gdG9BZGRMaXN0KEVMRU0uQUREX0lURU0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImV4cG9ydCBjb25zdCBLRVlTID0ge1xuICBBUEk6ICdodHRwczovLzYzZjIzOTE0NGYxNzI3OGM5YTIyZDFjZC5tb2NrYXBpLmlvL2FwaS92MS9pdGVtJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFTEVNID0ge1xuICBBRERfSVRFTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtJyksXG4gIEFMTF9JVEVNUzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1pdGVtcycpLFxufTtcbiIsImNvbnN0IHRvQWN0aW9uSWNvbiA9IChlbGVtZW50LCBpY29uKSA9PiB7XG4gIGNvbnN0IGFjdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBhY3Rpb25JY29uLmlubmVySFRNTCA9IGljb247XG4gIHJldHVybiBhY3Rpb25JY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9BY3Rpb25JY29uO1xuIiwiaW1wb3J0IHRvQWN0aW9uSWNvbiBmcm9tICcuL0FjdGlvbkljb24nO1xuXG5jb25zdCB0b0FwcGVuZEljb25BY3Rpb25zID0gKGJveCwgZWwpID0+IHtcbiAgYm94LmFwcGVuZENoaWxkKFxuICAgIHRvQWN0aW9uSWNvbignYnV0dG9uJywgYDxpIGlkPVwiJHtlbH1cIiB0aXRsZT1cIlNhdmVcIiBjbGFzcz1cImQtbm9uZSBmYXMgZmEtY2FydC1hcnJvdy1kb3duXCI+PC9pPmApLFxuICApO1xuICBib3guYXBwZW5kQ2hpbGQoXG4gICAgdG9BY3Rpb25JY29uKCdidXR0b24nLCBgPGkgaWQ9XCIke2VsfVwiIHRpdGxlPVwiRWRpdFwiIGNsYXNzPVwiZmFzIGZhLXBlbi1zcXVhcmVcIj48L2k+YCksXG4gICk7XG4gIGJveC5hcHBlbmRDaGlsZCh0b0FjdGlvbkljb24oJ2J1dHRvbicsIGA8aSBpZD1cIiR7ZWx9XCIgdGl0bGU9XCJEZWxldGVcIiBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT5gKSk7XG59O1xuXG5jb25zdCB0b0FjdGlvbnMgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBib3hBY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBib3hBY3Rpb25zLmNsYXNzTmFtZSA9ICdib3gtYWN0aW9ucyc7XG5cbiAgdG9BcHBlbmRJY29uQWN0aW9ucyhib3hBY3Rpb25zLCBlbGVtZW50KTtcblxuICByZXR1cm4gYm94QWN0aW9ucztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvQWN0aW9ucztcbiIsImltcG9ydCB0b0xpc3RJdGVtcyBmcm9tICcuL0xpc3RJdGVtcyc7XG5pbXBvcnQgdG9GZXRjaEFQSSBmcm9tICcuL2ZldGNoQVBJJztcblxuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHRvQWRkTGlzdCA9IChlbGVtQWRkKSA9PiB7XG4gIHJldHVybiBlbGVtQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmFsdWUtaXRlbScpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5ld0l0ZW0gPSBlbGVtZW50VmFsdWUudmFsdWU7XG5cbiAgICB0b0ZldGNoQVBJKEtFWVMuQVBJLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkZXNjcmlwdGlvbjogbmV3SXRlbSB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0b0xpc3RJdGVtcygpO1xuICAgICAgICBlbGVtZW50VmFsdWUudmFsdWUgPSAnJztcbiAgICAgICAgJ3ZpYnJhdGUnIGluIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudmlicmF0ZSgxMDApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9BZGRMaXN0O1xuIiwiY29uc3QgdG9DaGVja2JveCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBlbGVtQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBlbGVtQ2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XG4gIGVsZW1DaGVja0JveC52YWx1ZSA9IHZhbHVlO1xuICBlbGVtQ2hlY2tCb3guY2xhc3NOYW1lID0gJ2NoZWNrJztcbiAgcmV0dXJuIGVsZW1DaGVja0JveDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvQ2hlY2tib3g7XG4iLCJpbXBvcnQgdG9GZXRjaEFQSSBmcm9tICcuL2ZldGNoQVBJJztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCB0b0VkaXRlZCA9ICh7IHBhcmVudE5vZGVSZWZlcmVuY2UsIGl0ZW1Ob2RlUmVmZXJlbmNlLCB0b0VkaXRlZEl0ZW1JLCBlbCB9KSA9PiB7XG4gIGl0ZW1Ob2RlUmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJyk7XG4gIHRvRWRpdGVkSXRlbUkuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICBwYXJlbnROb2RlUmVmZXJlbmNlLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWxpZ2h0JywgJ3NoYWRvdycsICd0ZXh0LXByaW1hcnknKTtcbn07XG5cbmNvbnN0IHRvSW5FZGl0ID0gKHsgcGFyZW50Tm9kZVJlZmVyZW5jZSwgaXRlbU5vZGVSZWZlcmVuY2UsIHRvRWRpdGVkSXRlbUksIGVsIH0pID0+IHtcbiAgdG9FZGl0ZWRJdGVtSS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgZWwuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gIHBhcmVudE5vZGVSZWZlcmVuY2UuY2xhc3NMaXN0LmFkZCgnYmctbGlnaHQnLCAnc2hhZG93JywgJ3RleHQtcHJpbWFyeScpO1xuICBpdGVtTm9kZVJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsIHRydWUpO1xuICBpdGVtTm9kZVJlZmVyZW5jZS5mb2N1cygpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvRWRpdGluZ0l0ZW1zID0gKGl0ZW1Ob2RlUmVmZXJlbmNlcywgc3RhdHVzRWRpdCkgPT4ge1xuICBzdGF0dXNFZGl0ID8gdG9JbkVkaXQoaXRlbU5vZGVSZWZlcmVuY2VzKSA6IHRvRWRpdGVkKGl0ZW1Ob2RlUmVmZXJlbmNlcyk7XG59O1xuXG5jb25zdCB0b0VkaXRJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdG9FZGl0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1wZW4tc3F1YXJlJyk7XG4gIGNvbnN0IHRvRWRpdGVkaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1jYXJ0LWFycm93LWRvd24nKTtcblxuICB0b0VkaXRJdGVtLmZvckVhY2goKGVsLCBpZHgpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICBjb25zdCB7IGlkIH0gPSB0YXJnZXQ7XG4gICAgICBjb25zdCBwYXJlbnROb2RlUmVmZXJlbmNlID0gZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCBpdGVtTm9kZVJlZmVyZW5jZSA9IHBhcmVudE5vZGVSZWZlcmVuY2UucXVlcnlTZWxlY3RvcignLml0ZW0nKTtcblxuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBwYXJlbnROb2RlUmVmZXJlbmNlLFxuICAgICAgICBpdGVtTm9kZVJlZmVyZW5jZSxcbiAgICAgICAgdG9FZGl0ZWRJdGVtSTogdG9FZGl0ZWRpdGVtW2lkeF0sXG4gICAgICAgIGVsLFxuICAgICAgfTtcblxuICAgICAgdG9FZGl0aW5nSXRlbXMocGFyYW1zLCB0cnVlKTtcblxuICAgICAgdG9FZGl0ZWRpdGVtW2lkeF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRvRmV0Y2hBUEkoYCR7S0VZUy5BUEl9LyR7aWR9YCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW1Ob2RlUmVmZXJlbmNlLnRleHRDb250ZW50LFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KS50aGVuKCgpID0+IHRvRWRpdGluZ0l0ZW1zKHBhcmFtcywgZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvRWRpdEl0ZW1zO1xuIiwiaW1wb3J0IHRvQWN0aW9ucyBmcm9tICcuL0FjdGlvbnNJdGVtcyc7XG5pbXBvcnQgdG9DaGVja2JveCBmcm9tICcuL0NoZWNrYm94SXRlbXMnO1xuaW1wb3J0IHRvRmV0Y2hBUEkgZnJvbSAnLi9mZXRjaEFQSSc7XG5cbmltcG9ydCB7IEtFWVMsIEVMRU0gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHRvRWRpdEl0ZW1zIGZyb20gJy4vRWRpdEl0ZW1zJztcbmltcG9ydCB0b1JlbW92ZUl0ZW1zIGZyb20gJy4vUmVtb3ZlSXRlbXMnO1xuXG5jb25zdCB0b0xpc3RJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlzdEl0ZW1zQnlBUEkgPSBhd2FpdCB0b0ZldGNoQVBJKEtFWVMuQVBJKTtcbiAgRUxFTS5BTExfSVRFTVMuaW5uZXJIVE1MID0gJyc7XG5cbiAgbGlzdEl0ZW1zQnlBUEkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG5vZGVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBub2RlSXRlbS5jbGFzc05hbWUgPSAnYm9yZGVyLWxpc3QgbGlzdC1ncm91cC1pdGVtJztcbiAgICBub2RlSXRlbS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJpdGVtXCI+JHtpdGVtLmRlc2NyaXB0aW9ufTwvc3Bhbj5gO1xuICAgIG5vZGVJdGVtLmFwcGVuZENoaWxkKHRvQ2hlY2tib3goaXRlbS5kZXNjcmlwdGlvbikpO1xuICAgIG5vZGVJdGVtLmFwcGVuZENoaWxkKHRvQWN0aW9ucyhpdGVtLmlkKSk7XG4gICAgcmV0dXJuIEVMRU0uQUxMX0lURU1TLmFwcGVuZENoaWxkKG5vZGVJdGVtKTtcbiAgfSk7XG5cbiAgdG9FZGl0SXRlbXMoKTtcbiAgdG9SZW1vdmVJdGVtcygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9MaXN0SXRlbXM7XG4iLCJpbXBvcnQgdG9GZXRjaEFQSSBmcm9tICcuL2ZldGNoQVBJJztcblxuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHRvUmVtb3ZlSXRlbXMgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtdHJhc2gnKTtcblxuICBpdGVtLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlRWxlbWVudFRvUmVtb3ZlID0gZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCB7IGlkIH0gPSB0YXJnZXQ7XG4gICAgICBjb25zdCBleGNsdWRlID0gKCkgPT4ge1xuICAgICAgICB0b0ZldGNoQVBJKGAke0tFWVMuQVBJfS8ke2lkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZWZlcmVuY2VFbGVtZW50VG9SZW1vdmUucmVtb3ZlKCk7XG4gICAgICAgICAgJ3ZpYnJhdGUnIGluIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudmlicmF0ZSgxMDApO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBpZiAod2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB3YW50IHRvIGV4Y2x1ZGUgdGhhdCBpdGVtPycpKSB7XG4gICAgICAgIC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBleGNsdWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9SZW1vdmVJdGVtcztcbiIsImNvbnN0IHRvRmV0Y2hBUEkgPSBhc3luYyAoYXBpLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgZ2V0QVBJID0gYXdhaXQgZmV0Y2goYXBpLCBwYXJhbXMpO1xuICBjb25zdCBnZXREYXRhQVBJID0gYXdhaXQgZ2V0QVBJLmpzb24oKTtcbiAgcmV0dXJuIGdldERhdGFBUEk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0ZldGNoQVBJO1xuIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcC9hcHAnO1xuXG5jb25zdCBzdGFydEFwcCA9ICgpID0+IG5ldyBBcHAoKTtcbnN0YXJ0QXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=