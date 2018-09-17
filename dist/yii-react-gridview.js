(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["YiiReactGridView"] = factory(require("prop-types"), require("react"));
	else
		root["YiiReactGridView"] = factory(root["PropTypes"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react","umd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_ = __webpack_require__(1);
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_);

// CONCATENATED MODULE: ./table/components/Caption.js


class Caption_Caption extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {
  render() {
    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
      'caption',
      this.props.options,
      this.props.text
    );
  }
}

/* harmony default export */ var components_Caption = (Caption_Caption);
// EXTERNAL MODULE: external {"root":"PropTypes","commonjs2":"prop-types","commonjs":"prop-types","amd":"prop-types","umd":"prop-types"}
var external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_ = __webpack_require__(0);
var external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_);

// CONCATENATED MODULE: ./table/components/cell/content/SelectionCheckbox.js



class SelectionCheckbox_SelectionCheckbox extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.selectRow = (callback, e) => callback(e.target.checked), _temp;
  }

  render() {
    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement('input', {
      type: this.props.type,
      checked: this.props.checked,
      onChange: this.selectRow.bind(this, this.props.selectionChange)
    });
  }
}

SelectionCheckbox_SelectionCheckbox.propTypes = {
  type: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  checked: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.bool,
  selectionChange: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func
};
/* harmony default export */ var content_SelectionCheckbox = (SelectionCheckbox_SelectionCheckbox);
// CONCATENATED MODULE: ./table/components/cell/content/SortLink.js



class SortLink_SortLink extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.setSort = e => {
      e.preventDefault();
      let sort;
      if (!this.props.sort) {
        sort = 'ASC';
      } else if (this.props.sort === 'ASC') {
        sort = 'DESC';
      } else {
        sort = null;
      }
      this.props.setSort(e.target.getAttribute('data-column'), sort);
    }, _temp;
  }

  render() {
    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
      'a',
      { className: this.props.sort, onClick: this.setSort, 'data-column': this.props.column },
      this.props.value
    );
  }
}

SortLink_SortLink.propTypes = {
  column: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  value: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  sort: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  setSort: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func
};
/* harmony default export */ var content_SortLink = (SortLink_SortLink);
// CONCATENATED MODULE: ./table/components/cell/index.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






class cell_Cell extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._prepareContent = cellOptions => {
      if (typeof cellOptions.rule === 'function') {
        return cellOptions.rule(cellOptions.cellData, cellOptions.rowId);
      }
      if (cellOptions.rule === 'serial' && cellOptions.idx !== undefined) {
        return this.props.currentPage * this.props.pageSize + 1 + cellOptions.idx;
      }
      if (cellOptions.rule === 'checkbox' && (this.props.rowSelect || this.props.allRowsSelect)) {
        return {
          type: 'checkbox',
          selectionChange: checked => {
            if (cellOptions.rowId !== undefined) {
              this.props.rowSelect && this.props.rowSelect(cellOptions.rowId, checked);
            } else {
              this.props.allRowsSelect && this.props.allRowsSelect(checked);
            }
          },
          checked: cellOptions.checked
        };
      }
      return cellOptions.cellData;
    }, _temp;
  }

  render() {
    let content = this.props.content;
    if (content.value) {
      if (content.enableSorting) {
        content = external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(content_SortLink, _extends({}, content, { setSort: this.props.setSort }));
      } else {
        if (typeof content.value === 'object') {
          content = this._prepareContent(content.value);
        } else {
          content = content.value;
        }
      }
    }
    if (content.type) {
      if (content.type === 'checkbox') {
        content = external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(content_SelectionCheckbox, content);
      }
    }
    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
      'td',
      null,
      content
    );
  }
}

cell_Cell.propTypes = {
  content: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string, external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.node, external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object]),
  setSort: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func
};
/* harmony default export */ var components_cell = (cell_Cell);
// CONCATENATED MODULE: ./table/components/Row.js
var Row_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




class Row_Row extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._prepareData = rowOptions => {
      let readyRow = [];
      for (let column in this.props.columns) {
        let cell = {
          value: {
            cellData: rowOptions.row[column],
            idx: rowOptions.idx,
            rowId: rowOptions.rowId,
            rule: this.props.columns[column],
            checked: rowOptions.checked
          },
          column
        };
        if (rowOptions.isTh && column !== 'checkbox') {
          if (rowOptions.row[column]) {
            cell = rowOptions.row[column];
            if (typeof cell === 'string') {
              cell = {
                value: cell,
                enableSorting: true,
                column
              };
            }
            cell.sort = this.props.sort[column];
          } else {
            let title = column.replace(/([A-Z])/g, ' $1');
            cell = (title.charAt(0).toUpperCase() + title.slice(1)).replace(/_/g, ' ');
          }
        }
        if (!cell) {
          cell = this.props.notSetText;
        }
        readyRow.push(cell);
      }
      return readyRow;
    }, _temp;
  }

  render() {
    let optionalProps = {};
    if (this.props.setSort) {
      optionalProps['setSort'] = this.props.setSort;
    }
    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
      'tr',
      this.props.options,
      this._prepareData(this.props.data).map((cell, idx) => external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(components_cell, Row_extends({
        key: `${this.props.id}-td-${idx}`,
        content: cell,
        currentPage: this.props.currentPage,
        pageSize: this.props.pageSize,
        rowSelect: this.props.rowSelect,
        allRowsSelect: this.props.allRowsSelect
      }, optionalProps)))
    );
  }
}

Row_Row.defaultProps = {
  notSetText: ''
};
/* harmony default export */ var components_Row = (Row_Row);
// CONCATENATED MODULE: ./table/components/Filter.js
var Filter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




class Filter_Filter extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {
  constructor(props) {
    super(props);

    this._renderFilters = () => {
      let readyFilters = { row: {} };
      Object.keys(this.props.columns).forEach(columnName => {
        readyFilters.row[columnName] = this._prepareFilter(columnName, this.props.filters[columnName]);
      });
      return readyFilters;
    };

    this._getFieldName = column => {
      return `search-${this.props.tableId}-${column}`;
    };

    this._renderFilter = (column, type, options = {}) => {
      const name = this._getFieldName(column);
      let filterOptions = Filter_extends({}, options, { onChange: this.applyFilter });
      switch (type) {
        case 'text':
          {
            let textInputOptions = Filter_extends({ className: 'form-control', name, type }, filterOptions);
            return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement('input', textInputOptions);
          }
        case 'checkbox':
          return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement('input', Filter_extends({ name, type }, filterOptions));
        case 'select':
          {
            let opts = [];
            if (!filterOptions.data) {
              throw new Error('Filter select has no options');
            }
            let idx = 0;
            for (let val in filterOptions.data) {
              opts.push(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
                'option',
                { key: `${name}-${idx++}`, value: val },
                filterOptions.data[val]
              ));
            }
            delete filterOptions.data;
            return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
              'select',
              Filter_extends({ name: name }, filterOptions),
              opts
            );
          }
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
        return filter(this._getFieldName(column), this.applyFilter);
      }
      throw new Error('Invalid filter param');
    };

    this.applyFilter = e => {
      let column = e.target.name.split('-').pop();
      let value = e.target.type === 'checkbox' && e.target.checked.toString() || e.target.value;
      this.props.applyFilter(column, value);
    };

    this.id = `filter-${this.props.id}`;
  }

  render() {
    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(components_Row, {
      data: this._renderFilters(),
      id: this.id,
      columns: this.props.columns,
      key: this.id
    });
  }
}

/* harmony default export */ var components_Filter = (Filter_Filter);
// CONCATENATED MODULE: ./table/components/Header.js





class Header_Header extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {
  constructor(props) {
    super(props);
    this.filterTimeout = null;
    this.id = `th-${this.props.tableId}`;
  }

  render() {
    let tableHeader = [external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(components_Row, {
      data: {
        row: this.props.headerCells,
        idx: 0,
        isTh: true,
        checked: this.props.allRowsChecked
      },
      options: this.props.options,
      columns: this.props.columns,
      sort: this.props.sort,
      allRowsSelect: this.props.allRowsSelect,
      id: this.id,
      key: this.id,
      setSort: this.props.setSort
    })];
    if (this.props.filters) {
      tableHeader.push(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(components_Filter, {
        key: `${this.id}-filters`,
        id: this.id,
        sort: this.sort,
        filters: this.props.filters,
        columns: this.props.columns,
        tableId: this.props.tableId,
        applyFilter: this.props.applyFilter
      }));
    }
    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
      'thead',
      null,
      tableHeader
    );
  }
}

Header_Header.propTypes = {
  tableId: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  onFilterChange: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func,
  headerCells: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  options: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  columns: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  setSort: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func,
  allRowsChecked: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.bool,
  allRowsSelect: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func,
  sort: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object
};
/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./table/components/Body.js




class Body_Body extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {
  render() {
    let content = [];
    let preparedData = {};
    this.props.data.forEach((item, idx) => {
      let rowId = item[this.props.rowIdColumn] || idx;
      preparedData[rowId] = {
        row: item,
        rowId,
        idx,
        checked: this.props.selectedRowIds.indexOf(rowId) !== -1
      };
    });
    for (let rowId in preparedData) {
      content.push(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(components_Row, {
        currentPage: this.props.currentPage,
        rowSelect: this.props.rowSelect,
        pageSize: this.props.pageSize,
        data: preparedData[rowId],
        options: this.props.options,
        columns: this.props.columns,
        id: rowId,
        key: `tr-${this.props.tableId}-${rowId}`
      }));
    }
    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
      'tbody',
      null,
      content
    );
  }
}

Body_Body.propTypes = {
  tableId: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  data: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.array,
  options: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  rowIdColumn: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  selectedRowIds: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.array,
  columns: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  rowSelect: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func
};
Body_Body.defaultProps = {
  options: {}
};
/* harmony default export */ var components_Body = (Body_Body);
// CONCATENATED MODULE: ./table/components/Footer.js




class Footer_Footer extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {
  constructor(props) {
    super(props);
    this.id = `tf-${this.props.tableId}`;
  }

  render() {
    let row = {};
    Object.keys(this.props.columns).forEach((column, idx) => {
      row[column] = this.props.footerCells[idx];
    });
    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
      'tfoot',
      null,
      external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(components_Row, {
        data: { row },
        key: this.id, id: this.id,
        columns: this.props.columns
      })
    );
  }
}

Footer_Footer.propTypes = {
  tableId: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  footerCells: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.array,
  columns: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object
};
/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./table/index.js






class table_Table extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {

  render() {
    let tableContent = [];
    let somethingFound = true;
    if (this.props.data.length) {
      tableContent.push(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(components_Body, {
        data: this.props.data,
        options: this.props.rowOptions,
        rowIdColumn: this.props.rowIdColumn,
        selectedRowIds: this.props.selectedRowIds,
        rowSelect: this.props.rowSelect,
        notSetText: this.props.notSetText,
        currentPage: this.props.currentPage,
        pageSize: this.props.pageSize,
        tableId: this.props.tableId,
        columns: this.props.columns,
        key: `tbody-${this.props.tableId}`
      }));
    } else {
      somethingFound = false;
    }

    if (this.props.showHeader) {
      tableContent.unshift(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(components_Header, {
        headerCells: this.props.headerCells,
        allRowsChecked: this.props.allRowsChecked,
        allRowsSelect: this.props.allRowsSelect,
        options: this.props.headerRowOptions,
        tableId: this.props.tableId,
        columns: this.props.columns,
        sort: this.props.sort,
        filters: this.props.filters,
        applyFilter: this.props.applyFilter,
        key: `thead-${this.props.tableId}`,
        setSort: this.props.setSort
      }));
    }
    if (this.props.caption || !somethingFound) {
      let captionProps = {
        options: this.props.captionOptions,
        key: `tcaption-${this.props.tableId}`,
        text: somethingFound ? this.props.caption : this.props.emptyCaption
      };
      tableContent[somethingFound ? 'unshift' : 'push'](external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(components_Caption, captionProps));
    }
    if (this.props.showFooter) {
      let footer = external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(components_Footer, {
        footerCells: this.props.footerCells,
        options: this.props.footerRowOptions,
        columns: this.props.columns,
        tableId: this.props.tableId,
        key: `tfoot-${this.props.tableId}`
      });
      this.placeFooterAfterBody ? tableContent.push(footer) : tableContent.unshift(footer);
    }
    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
      'table',
      this.props.tableOptions,
      tableContent
    );
  }
}

table_Table.defaultProps = {
  data: [],
  headerCells: {},
  footerCells: [],
  captionOptions: {},
  tableOptions: {},
  showHeader: true,
  showFooter: false,
  headerRowOptions: {},
  footerRowOptions: {},
  rowOptions: {},
  filters: null,
  notSetText: '(not set)',
  emptyCaption: 'Nothing found',
  allRowsChecked: false
};
/* harmony default export */ var table = (table_Table);
// CONCATENATED MODULE: ./pager/components/Button.js
var Button_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



class Button_Button extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.clickTag = e => {
      e.preventDefault();
      if (this.props.disabled) {
        return;
      }
      this.props.onPageButtonClick(this.props.page);
    }, _temp;
  }

  render() {
    let Tag = this.props.pageTag;
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
    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
      Tag,
      null,
      external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
        LinkTag,
        Button_extends({ onClick: this.clickTag }, options),
        this.props.content
      )
    );
  }
}

Button_Button.defaultProps = {
  pageTag: 'li',
  activePageCssClass: 'active',
  disabledPageCssClass: 'disabled',
  nextPageCssClass: 'next',
  prevPageCssClass: 'prev',
  firstPageCssClass: 'first',
  lastPageCssClass: 'last',
  onPageButtonClick: null
};
/* harmony default export */ var components_Button = (Button_Button);
// CONCATENATED MODULE: ./pager/index.js



class pager_Pager extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {
  constructor(props) {
    super(props);

    this._addButton = (buttons, pageButtonOptions) => {
      let options = Object.assign({}, this.generalOptions, pageButtonOptions, this.buttonSettings);
      options.key = `pg-${this.props.tableId}-${pageButtonOptions.idx}`;
      buttons.push(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(components_Button, options));
    };

    this._addFirstButton = buttons => {
      let page = 0;
      let isActive = this.props.currentPage === page;
      this._addButton(buttons, {
        page: page,
        content: this.props.firstPageLabel,
        active: isActive,
        disabled: isActive,
        isFirstPage: true,
        idx: 'f'
      });
    };

    this._addLastButton = buttons => {
      this._addButton(buttons, {
        page: this.pageCount - 1,
        content: this.props.lastPageLabel || this.pageCount,
        active: false,
        disabled: this.props.currentPage >= this.pageCount - 1,
        isLastPage: true,
        idx: 'l'
      });
    };

    this._addPrevButton = buttons => {
      let page;
      if ((page = this.props.currentPage - 1) < 0) {
        page = 0;
      }
      this._addButton(buttons, {
        page: page,
        content: this.props.prevPageLabel,
        active: false,
        disabled: this.props.currentPage <= 0,
        isPrevPage: true,
        idx: 'p'
      });
    };

    this._addNextButton = buttons => {
      let page;
      let penultimate = this.pageCount - 1;
      if ((page = +this.props.currentPage + 1) >= penultimate) {
        page = penultimate;
      }
      this._addButton(buttons, {
        page: page,
        content: this.props.nextPageLabel,
        active: false,
        disabled: this.props.currentPage >= penultimate,
        isNextPage: true,
        idx: 'n'
      });
    };

    this._addButtons = buttons => {
      let beginPage = Math.max(0, this.props.currentPage - Math.round(this.props.maxButtonCount / 2));
      let endPage = beginPage + this.props.maxButtonCount - 1;
      if (endPage >= this.pageCount) {
        endPage = this.pageCount - 1;
        beginPage = Math.max(0, endPage - this.props.maxButtonCount + 1);
      }

      for (let i = beginPage, idx = 0; i <= endPage; ++i) {
        let isActive = this.props.currentPage == i;
        this._addButton(buttons, {
          page: i,
          content: i + 1,
          active: isActive,
          disabled: isActive,
          idx: idx++
        });
      }
    };

    this.buttonSettings = {};
    ({
      activePageCssClass: this.buttonSettings.activePageCssClass,
      disabledPageCssClass: this.buttonSettings.disabledPageCssClass,
      nextPageCssClass: this.buttonSettings.nextPageCssClass,
      prevPageCssClass: this.buttonSettings.prevPageCssClass,
      lastPageCssClass: this.buttonSettings.lastPageCssClass,
      firstPageCssClass: this.buttonSettings.firstPageCssClass,
      pageTag: this.buttonSettings.pageTag,
      onPageButtonClick: this.buttonSettings.onPageButtonClick
    } = this.props);
    this.generalOptions = {
      isFirstPage: false,
      isLastPage: false,
      isPrevPage: false,
      isNextPage: false
    };
  }

  render() {
    this.pageCount = Math.ceil(this.props.totalCount / this.props.pageSize) || 0;
    let Tag = this.props.pagerTag;
    let buttons = [];
    if (this.props.firstPageLabel) {
      this._addFirstButton(buttons);
    }
    if (this.props.prevPageLabel) {
      this._addPrevButton(buttons);
    }
    this._addButtons(buttons);
    if (this.props.nextPageLabel) {
      this._addNextButton(buttons);
    }
    if (this.props.lastPageLabel) {
      this._addLastButton(buttons);
    }
    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
      Tag,
      this.props.pagerOptions,
      buttons
    );
  }
}

pager_Pager.defaultProps = {
  maxButtonCount: 10,
  pageSize: 20,
  pagerTag: 'ul',
  nextPageLabel: '»',
  prevPageLabel: '«',
  firstPageLabel: null,
  lastPageLabel: null
};
/* harmony default export */ var pager = (pager_Pager);
// CONCATENATED MODULE: ./GridView.js
var GridView_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






class GridView_GridView extends external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"] {
  constructor(props) {
    super(props);

    this._setConditionalState = (newState, setState = true) => {
      let state = {};
      if (this.props.selectedRowIds === undefined && newState.selectedRowIds) {
        state.selectedRowIds = newState.selectedRowIds;
      }
      if (this.props.allRowsChecked === undefined && newState.allRowsChecked !== undefined) {
        state.allRowsChecked = newState.allRowsChecked;
      }
      if (this.props.sort === undefined && newState.sort) {
        state.sort = newState.sort;
      }
      if (this.props.filterData === undefined && newState.filterData) {
        state.filterData = newState.filterData;
      }
      if (setState && Object.keys(state).length) {
        this.setState(state);
      }
      return state;
    };

    this._getPrevStateVar = key => {
      let prevStateVar;
      if (this.props[key] !== undefined) {
        prevStateVar = this.props[key];
      } else {
        prevStateVar = this.state[key];
      }
      return prevStateVar;
    };

    this.setSort = (column, sort) => {
      if (this.props.onSortChange) {
        let prevSort = this._getPrevStateVar('sort');
        if (typeof prevSort !== 'object') {
          throw new Error(`sort must be an object, ${typeof prevSort} provided`);
        }
        let newSort = GridView_extends({}, prevSort);
        if (sort) {
          newSort[column] = sort;
        } else {
          delete newSort[column];
        }
        this.props.onSortChange(newSort);
        this._setConditionalState(GridView_extends({}, this.defaultSelectionState, {
          sort: newSort
        }));
      }
    };

    this.rowSelect = (rowId, checked) => {
      let prevSelectedRowIds = this._getPrevStateVar('selectedRowIds');
      if (!Array.isArray(prevSelectedRowIds)) {
        throw new Error(`selectedRowIds must be an array, ${typeof prevSelectedRowIds} provided`);
      }
      let selectedRowIds = [...prevSelectedRowIds];
      if (checked) {
        selectedRowIds.push(rowId);
      } else {
        let idx = selectedRowIds.indexOf(rowId);
        if (idx !== -1) {
          selectedRowIds.splice(idx, 1);
        }
      }
      this.props.onSelectionChange(selectedRowIds);
      this._setConditionalState({ selectedRowIds });
    };

    this.allRowsSelect = checked => {
      let selectedRowIds = [];
      if (checked) {
        this.props.data.forEach((row, idx) => {
          selectedRowIds.push(row[this.props.rowIdColumn] || idx);
        });
      }
      this.props.onSelectionChange(selectedRowIds);
      this._setConditionalState({ selectedRowIds, allRowsChecked: checked });
    };

    this.pageButtonClick = currentPage => {
      this.props.onPageButtonClick(currentPage);
      this._setConditionalState(this.defaultSelectionState);
    };

    this.applyFilter = (column, value) => {
      let prevFilterData = this._getPrevStateVar('filterData');
      if (typeof prevFilterData !== 'object') {
        throw new Error(`filterData must be an object, ${typeof prevFilterData} provided`);
      }
      let filterData = GridView_extends({}, prevFilterData);
      if (value) {
        filterData[column] = value;
      } else {
        delete filterData[column];
      }
      this.props.onFilterChange(filterData);
      this._setConditionalState(GridView_extends({}, this.defaultSelectionState, { filterData }));
    };

    this.id = __webpack_require__(2)();
    this.defaultSelectionState = { selectedRowIds: [], allRowsChecked: false };
    this.state = this._setConditionalState(GridView_extends({
      sort: {},
      filterData: {}
    }, this.defaultSelectionState), false);
  }

  render() {
    const generalProps = {
      currentPage: this.props.currentPage,
      pageSize: this.props.pageSize,
      tableId: this.id
    };
    let pagerSpecificProps = {};
    let tableSpecificProps = {};
    var _props = this.props;
    ({
      pagerOptions: pagerSpecificProps.pagerOptions,
      totalCount: pagerSpecificProps.totalCount,
      maxButtonCount: pagerSpecificProps.maxButtonCount,
      pagerTag: pagerSpecificProps.pagerTag,
      pageTag: pagerSpecificProps.pageTag,
      activePageCssClass: pagerSpecificProps.activePageCssClass,
      disabledPageCssClass: pagerSpecificProps.disabledPageCssClass,
      nextPageCssClass: pagerSpecificProps.nextPageCssClass,
      prevPageCssClass: pagerSpecificProps.prevPageCssClass,
      firstPageCssClass: pagerSpecificProps.firstPageCssClass,
      lastPageCssClass: pagerSpecificProps.lastPageCssClass,
      nextPageLabel: pagerSpecificProps.nextPageLabel,
      prevPageLabel: pagerSpecificProps.prevPageLabel,
      firstPageLabel: pagerSpecificProps.firstPageLabel,
      lastPageLabel: pagerSpecificProps.lastPageLabel
    } = _props);
    tableSpecificProps = _objectWithoutProperties(_props, ['pagerOptions', 'totalCount', 'maxButtonCount', 'pagerTag', 'pageTag', 'activePageCssClass', 'disabledPageCssClass', 'nextPageCssClass', 'prevPageCssClass', 'firstPageCssClass', 'lastPageCssClass', 'nextPageLabel', 'prevPageLabel', 'firstPageLabel', 'lastPageLabel']);

    tableSpecificProps.sort = this._getPrevStateVar('sort');
    tableSpecificProps.setSort = this.setSort;
    tableSpecificProps.rowSelect = this.rowSelect;
    tableSpecificProps.allRowsSelect = this.allRowsSelect;
    tableSpecificProps.allRowsChecked = this._getPrevStateVar('allRowsChecked');
    tableSpecificProps.selectedRowIds = this._getPrevStateVar('selectedRowIds');
    delete tableSpecificProps.onPageButtonClick;
    pagerSpecificProps.onPageButtonClick = this.pageButtonClick;
    delete tableSpecificProps.onFilterChange;
    tableSpecificProps.applyFilter = this.applyFilter;

    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(
      'div',
      this.props.containerOptions,
      external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(table, GridView_extends({}, generalProps, tableSpecificProps)),
      external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(pager, GridView_extends({}, generalProps, pagerSpecificProps))
    );
  }
}

GridView_GridView.propTypes = {
  data: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.array,
  headerCells: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  footerCells: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.array,
  caption: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  captionOptions: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  containerOptions: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  tableOptions: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  showHeader: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.bool,
  showFooter: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.bool,
  headerRowOptions: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  footerRowOptions: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  rowOptions: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  columns: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  filters: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  onSortChange: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func,
  onFilterChange: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func,
  pagerOptions: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  currentPage: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.number,
  totalCount: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.number,
  maxButtonCount: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.number,
  pageSize: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.number,
  pagerTag: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  pageTag: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  activePageCssClass: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  disabledPageCssClass: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  nextPageCssClass: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  prevPageCssClass: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  firstPageCssClass: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  lastPageCssClass: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  nextPageLabel: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  prevPageLabel: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  firstPageLabel: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  lastPageLabel: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  onPageButtonClick: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func,
  notSetText: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  emptyCaption: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  rowIdColumn: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  onSelectionChange: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func,
  selectedRowIds: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.array,
  allRowsChecked: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.bool,
  sort: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object,
  filterData: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.object
};
GridView_GridView.defaultProps = {
  containerOptions: { className: 'grid-view' },
  tableOptions: {
    className: ['table', 'table-striped', 'table-bordered'].join(' ')
  },
  pagerOptions: { className: 'pagination' },
  rowIdColumn: 'id'
};
/* harmony default export */ var GridView_0 = __webpack_exports__["default"] = (GridView_GridView);

/***/ })
/******/ ]);
});