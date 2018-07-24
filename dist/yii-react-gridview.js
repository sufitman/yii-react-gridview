(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["YiiReactGridView"] = factory(require("react"));
	else
		root["YiiReactGridView"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableCell__ = __webpack_require__(10);



class TableRow extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return React.createElement(
      'tr',
      this.props.options,
      this.props.cells.map((cell, idx) => React.createElement(__WEBPACK_IMPORTED_MODULE_1__TableCell__["a" /* default */], {
        key: `${this.props.id}-td-${idx}`,
        cell: cell }))
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TableRow);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PageButton__ = __webpack_require__(9);



class Pager extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this._addPageButton = (buttons, pageButtonOptions) => {
      let options = Object.assign({}, this.generalOptions, pageButtonOptions);
      options.key = `pg-${this.props.tableId}-${pageButtonOptions.idx}`;
      buttons.push(React.createElement(__WEBPACK_IMPORTED_MODULE_1__PageButton__["a" /* default */], options));
    };

    this._addFirstPageButton = buttons => {
      let page = 0;
      let isActive = this.props.currentPage === page;
      this._addPageButton(buttons, {
        page: page,
        content: this.props.firstPageLabel,
        active: isActive,
        disabled: isActive,
        isFirstPage: true,
        idx: 'f'
      });
    };

    this._addLastPageButton = buttons => {
      this._addPageButton(buttons, {
        page: this.pageCount - 1,
        content: this.props.lastPageLabel || this.pageCount,
        active: false,
        disabled: this.props.currentPage >= this.pageCount - 1,
        isLastPage: true,
        idx: 'l'
      });
    };

    this._addPrevPageButton = buttons => {
      let page;
      if ((page = this.props.currentPage - 1) < 0) {
        page = 0;
      }
      this._addPageButton(buttons, {
        page: page,
        content: this.props.prevPageLabel,
        active: false,
        disabled: this.props.currentPage <= 0,
        isPrevPage: true,
        idx: 'p'
      });
    };

    this._addNextPageButton = buttons => {
      let page;
      let penultimate = this.pageCount - 1;
      if ((page = this.props.currentPage + 1) >= penultimate) {
        page = penultimate;
      }
      this._addPageButton(buttons, {
        page: page,
        content: this.props.nextPageLabel,
        active: false,
        disabled: this.props.currentPage >= penultimate,
        isNextPage: true,
        idx: 'n'
      });
    };

    this._addPages = buttons => {
      let beginPage = Math.max(0, this.props.currentPage - Math.round(this.props.maxButtonCount / 2));
      let endPage = beginPage + this.props.maxButtonCount - 1;
      if (endPage >= this.pageCount) {
        endPage = this.pageCount - 1;
        beginPage = Math.max(0, endPage - this.props.maxButtonCount + 1);
      }

      for (let i = beginPage; i <= endPage; ++i) {
        let isActive = this.props.currentPage === i;
        this._addPageButton(buttons, {
          page: i,
          content: i + 1,
          active: isActive,
          disabled: isActive,
          idx: i
        });
      }
    };

    this.generalOptions = {
      onButtonClick: this.props.onButtonClick,
      activePageCssClass: this.props.activePageCssClass,
      disabledPageCssClass: this.props.disabledPageCssClass,
      nextPageCssClass: this.props.nextPageCssClass,
      prevPageCssClass: this.props.prevPageCssClass,
      lastPageCssClass: this.props.lastPageCssClass,
      firstPageCssClass: this.props.firstPageCssClass,
      isFirstPage: false,
      isLastPage: false,
      isPrevPage: false,
      isNextPage: false,
      tag: this.props.pageTag
    };
    this.pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
  }

  render() {
    let Tag = this.props.pagerTag;
    let buttons = [];
    if (this.props.firstPageLabel) {
      this._addFirstPageButton(buttons);
    }
    if (this.props.prevPageLabel) {
      this._addPrevPageButton(buttons);
    }
    this._addPages(buttons);
    if (this.props.nextPageLabel) {
      this._addNextPageButton(buttons);
    }
    if (this.props.lastPageLabel) {
      this._addLastPageButton(buttons);
    }
    return React.createElement(
      Tag,
      this.props.options,
      buttons
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Pager);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableRow__ = __webpack_require__(1);



class TableBody extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return React.createElement(
      'tbody',
      null,
      this.props.data.map((item, idx) => {
        let id = `tr-${this.props.tableId}-${idx}`;
        return React.createElement(__WEBPACK_IMPORTED_MODULE_1__TableRow__["a" /* default */], {
          cells: item,
          options: this.props.options,
          id: id,
          key: id
        });
      })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TableBody);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class TableCaption extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return React.createElement(
      'caption',
      this.props.options,
      this.props.text
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TableCaption);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableRow__ = __webpack_require__(1);



class TableFooter extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.id = `tf-${this.props.tableId}`;
  }

  render() {
    return React.createElement(
      'tfoot',
      null,
      React.createElement(__WEBPACK_IMPORTED_MODULE_1__TableRow__["a" /* default */], { cells: this.props.footerCells, key: this.id, id: this.id })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TableFooter);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableRow__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TableFilter__ = __webpack_require__(11);




class TableHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.filterTimeout = null;

    this.filterChanged = filters => {
      if (this.filterTimeout) {
        clearTimeout(this.filterTimeout);
      }
      this.filterTimeout = setTimeout(() => this.props.onFilterChange(filters), this.props.filterDelay * 1000);
    };

    this.id = `th-${this.props.tableId}`;
  }


  render() {
    let tableHeader = [React.createElement(__WEBPACK_IMPORTED_MODULE_1__TableRow__["a" /* default */], {
      cells: this.props.headerCells,
      options: this.props.options,
      id: this.id,
      key: this.id
    })];
    if (this.props.filters) {
      tableHeader.push(React.createElement(__WEBPACK_IMPORTED_MODULE_2__TableFilter__["a" /* default */], { filters: this.props.filters, tableId: this.props.tableId, onFilterChange: this.filterChanged }));
    }
    return React.createElement(
      'thead',
      null,
      tableHeader
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TableHeader);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * random-string
 * https://github.com/valiton/node-random-string
 *
 * Copyright (c) 2013 Valiton GmbH, Bastian 'hereandnow' Behrens
 * Licensed under the MIT license.
 */



var numbers = '0123456789',
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    specials = '!$%^&*()_+|~-=`{}[]:;<>?,./';


function _defaults (opts) {
  opts || (opts = {});
  return {
    length: opts.length || 8,
    numeric: typeof opts.numeric === 'boolean' ? opts.numeric : true,
    letters: typeof opts.letters === 'boolean' ? opts.letters : true,
    special: typeof opts.special === 'boolean' ? opts.special : false,
    exclude: Array.isArray(opts.exclude)       ? opts.exclude : []
  };
}

function _buildChars (opts) {
  var chars = '';
  if (opts.numeric) { chars += numbers; }
  if (opts.letters) { chars += letters; }
  if (opts.special) { chars += specials; }
  for (var i = 0; i <= opts.exclude.length; i++){
    chars = chars.replace(opts.exclude[i], "");
  }
  return chars;
}

module.exports = function randomString(opts) {
  opts = _defaults(opts);
  var i, rn,
      rnd = '',
      len = opts.length,
      exclude = opts.exclude,
      randomChars = _buildChars(opts);
  for (i = 1; i <= len; i++) {
    rnd += randomChars.substring(rn = Math.floor(Math.random() * randomChars.length), rn + 1);
  }
  return rnd;
};



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableCaption__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TableHeader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TableBody__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TableFooter__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Pager__ = __webpack_require__(2);







class GridView extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this._setDefault = (prop, defaultValue) => {
      if (typeof this.props[prop] !== 'undefined') {
        this[prop] = this.props[prop];
      } else {
        this[prop] = defaultValue;
      }
    };

    this._prepareCell = (cell, idx, rule) => {
      if (typeof rule === 'function') {
        return rule(cell, idx);
      }
      if (rule === 'serial') {
        return this.props.currentPage * this.props.pageSize + 1 + idx;
      }
      // ToDo improve formatting logic
      return cell;
    };

    this._prepareRow = (row, idx, isTh = false) => {
      let readyRow = [];
      for (let column in this.props.columns) {
        let cell = this._prepareCell(row[column], idx, this.props.columns[column]);
        if (!cell) {
          if (isTh) {
            let title = column.replace(/([A-Z])/g, " $1");
            cell = (title.charAt(0).toUpperCase() + title.slice(1)).replace(/_/g, ' ');
          } else {
            cell = this.notSetText;
          }
        }
        readyRow.push(cell);
      }
      return readyRow;
    };

    this._prepareFilters = () => {
      let filters = {};
      for (let column in this.props.columns) {
        filters[column] = this.filters[column] || null;
      }
      return filters;
    };

    this.id = __webpack_require__(7)();
    this._setDefault('showHeader', true);
    this._setDefault('showFooter', false);
    this._setDefault('placeFooterAfterBody', false);
    this.options = this.props.options || { className: 'grid-view' };
    this.captionOptions = this.props.captionOptions || {};
    this.headerRowOptions = this.props.headerRowOptions || {};
    this.footerRowOptions = this.props.footerRowOptions || {};
    this.rowOptions = this.props.rowOptions || {};
    this.tableOptions = this.props.tableOptions || {
      className: ['table', 'table-striped', 'table-bordered'].join(' ')
    };
    this.notSetText = this.props.notSetText || '(not set)';
    this.filters = this.props.filters || null;
    this.emptyCaption = this.props.emptyCaption || 'Nothing found';
  }

  render() {
    let tableContent,
        somethingFound = true;
    if (this.props.data && this.props.data.length) {
      tableContent = [React.createElement(__WEBPACK_IMPORTED_MODULE_3__TableBody__["a" /* default */], {
        data: this.props.data.map((item, idx) => this._prepareRow(item, idx)),
        options: this.rowOptions,
        tableId: this.id,
        key: `tbody-${this.id}`
      })];
    } else {
      tableContent = [];
      somethingFound = false;
    }

    if (this.showHeader) {
      tableContent.unshift(React.createElement(__WEBPACK_IMPORTED_MODULE_2__TableHeader__["a" /* default */], {
        headerCells: this._prepareRow(this.props.headerCells || {}, null, true),
        options: this.headerRowOptions,
        tableId: this.id,
        filters: this.filters ? this._prepareFilters() : null,
        onFilterChange: this.props.onFilterChange,
        filterDelay: this.props.filterDelay || 3,
        key: `thead-${this.id}`
      }));
    }
    if (this.props.caption || !somethingFound) {
      let captionProps = {
        options: this.captionOptions,
        key: `tcaption-${this.id}`,
        text: somethingFound ? this.props.caption : this.emptyCaption
      };
      tableContent[somethingFound ? 'unshift' : 'push'](React.createElement(__WEBPACK_IMPORTED_MODULE_1__TableCaption__["a" /* default */], captionProps));
    }
    if (this.showFooter) {
      let footer = React.createElement(__WEBPACK_IMPORTED_MODULE_4__TableFooter__["a" /* default */], { footerCells: ['d', 'e', 'f'], options: this.footerRowOptions, tableId: this.id });
      this.placeFooterAfterBody ? tableContent.push(footer) : tableContent.unshift(footer);
    }
    return React.createElement(
      'div',
      this.options,
      React.createElement(
        'table',
        this.tableOptions,
        tableContent
      ),
      React.createElement(__WEBPACK_IMPORTED_MODULE_5__Pager__["a" /* default */], {
        options: this.props.pagerOptions,
        currentPage: this.props.currentPage,
        totalCount: this.props.totalCount,
        onButtonClick: this.props.onPageButtonClick,
        maxButtonCount: this.props.maxButtonCount || 10,
        pageSize: this.props.pageSize || 20,
        pagerTag: this.props.pagerTag || 'ul',
        pageTag: this.props.pageTag || 'li',
        activePageCssClass: this.props.activePageCssClass || 'active',
        disabledPageCssClass: this.props.disabledPageCssClass || 'disabled',
        nextPageCssClass: this.props.nextPageCssClass || 'next',
        prevPageCssClass: this.props.prevPageCssClass || 'prev',
        firstPageCssClass: this.props.firstPageCssClass || 'first',
        lastPageCssClass: this.props.lastPageCssClass || 'last',
        nextPageLabel: this.props.nextPageLabel || '»',
        prevPageLabel: this.props.prevPageLabel || '«',
        firstPageLabel: this.props.firstPageLabel || null,
        lastPageLabel: this.props.lastPageLabel || null,
        tableId: this.id
      })
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (GridView);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



class PageButton extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.clickTag = e => {
      e.preventDefault();
      if (this.props.disabled) {
        return;
      }
      this.props.onButtonClick(this.props.page);
    }, _temp;
  }

  render() {
    let Tag = this.props.tag;
    let LinkTag = 'a';
    let options = {};
    options.className = this.props.className;

    if (typeof options.className === 'string') {
      options.className = options.className.split(' ');
    } else {
      options.className = [];
    }

    if (this.props.isNextPage) {
      options.className.push(this.props.nextPageCssClass);
    }
    if (this.props.isPrevPage) {
      options.className.push(this.props.prevPageCssClass);
    }
    if (this.props.isLastPage) {
      options.className.push(this.props.lastPageCssClass);
    }
    if (this.props.isFirstPage) {
      options.className.push(this.props.firstPageCssClass);
    }
    if (this.props.active) {
      options.className.push(this.props.activePageCssClass);
    }
    if (this.props.disabled) {
      options.className.push(this.props.disabledPageCssClass);
      LinkTag = 'span';
    }
    if (options.className.length) {
      options.className = options.className.join(' ');
    } else {
      delete options.className;
    }
    return React.createElement(
      Tag,
      null,
      React.createElement(
        LinkTag,
        _extends({
          onClick: this.clickTag
        }, options),
        this.props.content
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (PageButton);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class TableCell extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return React.createElement(
      'td',
      null,
      this.props.cell
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TableCell);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableRow__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




class TableFilter extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this._renderFilters = () => {
      let readyFilters = [];
      for (let column in this.props.filters) {
        let filter = this.props.filters[column];
        readyFilters.push(this._prepareFilter(column, filter));
      }
      return readyFilters;
    };

    this._getFieldName = column => {
      return `search-${this.props.tableId}-${column}`;
    };

    this._renderFilter = (column, type, options = {}) => {
      const name = this._getFieldName(column);
      switch (type) {
        case 'text':
          return React.createElement('input', _extends({ name: name, type: 'text' }, options, { onChange: this.applyFilters }));
        case 'checkbox':
          return React.createElement('input', _extends({ name: name, type: 'checkbox' }, options, { onChange: this.applyFilters }));
        case 'select':
          let opts = [];
          if (!options.data) {
            throw new Error('Filter select has no options');
          }
          let idx = 0;
          for (let val in options.data) {
            opts.push(React.createElement(
              'option',
              { key: `${name}-${idx++}`, value: val },
              options.data[val]
            ));
          }
          delete options.data;
          return React.createElement(
            'select',
            _extends({ name: this._getFieldName(column), onChange: this.applyFilters }, options),
            opts
          );
      }
      return null;
    };

    this._prepareFilter = (column, filter = null) => {
      if (!filter) {
        return '';
      }
      if (typeof filter === 'string') {
        return this._renderFilter(column, filter);
      }
      if (typeof filter === 'object') {
        return this._renderFilter(column, filter.type, filter.options || {});
      }
      if (typeof filter === 'function') {
        return filter(this._getFieldName(column));
      }
      throw new Error('Invalid filter param');
    };

    this.applyFilters = e => {
      let filters = Object.assign({}, this.state.filters);
      let property = e.target.name.split('-').pop();
      filters[property] = e.target.value;
      this.setState({ filters: filters }, () => this.props.onFilterChange(this.state.filters));
    };

    this.state = {
      filters: {}
    };
  }

  render() {
    return React.createElement(__WEBPACK_IMPORTED_MODULE_1__TableRow__["a" /* default */], {
      cells: this._renderFilters(),
      id: this.id,
      key: this.id
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TableFilter);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })
/******/ ]);
});