!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],t):"object"==typeof exports?exports.YiiReactGridView=t(require("prop-types"),require("react")):e.YiiReactGridView=t(e.PropTypes,e.React)}(window,function(e,t){return function(e){var t={};function s(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=3)}([function(t,s){t.exports=e},function(e,s){e.exports=t},function(e,t,s){"use strict";var a="0123456789",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",o="!$%^&*()_+|~-=`{}[]:;<>?,./";e.exports=function(e){var t,s,i="",l=(e=function(e){return e||(e={}),{length:e.length||8,numeric:"boolean"!=typeof e.numeric||e.numeric,letters:"boolean"!=typeof e.letters||e.letters,special:"boolean"==typeof e.special&&e.special,exclude:Array.isArray(e.exclude)?e.exclude:[]}}(e)).length,n=(e.exclude,function(e){var t="";e.numeric&&(t+=a),e.letters&&(t+=r),e.special&&(t+=o);for(var s=0;s<=e.exclude.length;s++)t=t.replace(e.exclude[s],"");return t}(e));for(t=1;t<=l;t++)i+=n.substring(s=Math.floor(Math.random()*n.length),s+1);return i}},function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a);var o=class extends a.Component{render(){return r.a.createElement("caption",this.props.options,this.props.text)}},i=s(0),l=s.n(i);class n extends a.Component{constructor(...e){var t;return t=super(...e),this.selectRow=((e,t)=>e(t.target.checked)),t}render(){return r.a.createElement("input",{type:this.props.type,checked:this.props.checked,onChange:this.selectRow.bind(this,this.props.selectionChange)})}}n.propTypes={type:l.a.string,checked:l.a.bool,selectionChange:l.a.func};var p=n;class c extends a.Component{constructor(...e){var t;return t=super(...e),this.setSort=(e=>{let t;e.preventDefault(),t=this.props.sort?"ASC"===this.props.sort?"DESC":null:"ASC",this.props.setSort(e.target.getAttribute("data-column"),t)}),t}render(){return r.a.createElement("a",{className:this.props.sort,onClick:this.setSort,"data-column":this.props.column},this.props.value)}}c.propTypes={column:l.a.string,value:l.a.string,sort:l.a.string,setSort:l.a.func};var h=c,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e};class u extends a.Component{render(){let e=this.props.content;return e.value&&(e=e.enableSorting?r.a.createElement(h,d({},e,{setSort:this.props.setSort})):e.value),e.type&&"checkbox"===e.type&&(e=r.a.createElement(p,e)),r.a.createElement("td",null,e)}}u.propTypes={content:l.a.oneOfType([l.a.string,l.a.node,l.a.object]),setSort:l.a.func};var g=u,C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e};var f=class extends a.Component{render(){let e={};return this.props.setSort&&(e.setSort=this.props.setSort),r.a.createElement("tr",this.props.options,this.props.cells.map((t,s)=>r.a.createElement(g,C({key:`${this.props.id}-td-${s}`,content:t},e))))}},b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e};var P=class extends a.Component{constructor(e){super(e),this._renderFilters=(()=>{let e=[];for(let t in this.props.filters){let s=this.props.filters[t];e.push(this._prepareFilter(t,s))}return e}),this._getFieldName=(e=>`search-${this.props.tableId}-${e}`),this._renderFilter=((e,t,s={})=>{const a=this._getFieldName(e);switch(t){case"text":{let e=b({className:"form-control"},s);return r.a.createElement("input",b({name:a,type:"text"},e,{onChange:this.applyFilter}))}case"checkbox":return r.a.createElement("input",b({name:a,type:"checkbox"},s,{onChange:this.applyFilter}));case"select":{let t=[];if(!s.data)throw new Error("Filter select has no options");let o=0;for(let e in s.data)t.push(r.a.createElement("option",{key:`${a}-${o++}`,value:e},s.data[e]));return delete s.data,r.a.createElement("select",b({name:this._getFieldName(e),onChange:this.applyFilter},s),t)}}return null}),this._prepareFilter=((e,t=null)=>{if(!t)return"";if("string"==typeof t)return this._renderFilter(e,t);if("object"==typeof t)return this._renderFilter(e,t.type,t.options||{});if("function"==typeof t)return t(this._getFieldName(e));throw new Error("Invalid filter param")}),this.applyFilter=(e=>{let t=e.target.name.split("-").pop();this.props.applyFilter(t,e.target.value)}),this.id=`filter-${this.props.id}`}render(){return r.a.createElement(f,{cells:this._renderFilters(),id:this.id,key:this.id})}};class m extends a.Component{constructor(e){super(e),this.filterTimeout=null,this.applyFilter=((e,t)=>{this.filterTimeout&&clearTimeout(this.filterTimeout),this.filterTimeout=setTimeout(()=>this.props.applyFilter(e,t),1e3*this.props.filterDelay)}),this.id=`th-${this.props.tableId}`}render(){let e=[r.a.createElement(f,{cells:this.props.headerCells,options:this.props.options,id:this.id,key:this.id,setSort:this.props.setSort})];return this.props.filters&&e.push(r.a.createElement(P,{key:`${this.id}-filters`,id:this.id,filters:this.props.filters,tableId:this.props.tableId,applyFilter:this.applyFilter})),r.a.createElement("thead",null,e)}}m.propTypes={tableId:l.a.string,onFilterChange:l.a.func,filterDelay:l.a.number,headerCells:l.a.array,options:l.a.object,filters:l.a.object,setSort:l.a.func};var v=m;class y extends a.Component{render(){let e=[];for(let t in this.props.data)e.push(r.a.createElement(f,{cells:this.props.data[t],options:this.props.options,id:t,key:`tr-${this.props.tableId}-${t}`}));return r.a.createElement("tbody",null,e)}}y.propTypes={tableId:l.a.string,data:l.a.object,options:l.a.object},y.defaultProps={options:{}};var w=y;class x extends a.Component{constructor(e){super(e),this.id=`tf-${this.props.tableId}`}render(){return r.a.createElement("tfoot",null,r.a.createElement(f,{cells:this.props.footerCells,key:this.id,id:this.id}))}}x.propTypes={tableId:l.a.string,footerCells:l.a.array};var S=x;class O extends a.Component{constructor(...e){var t;return t=super(...e),this._prepareCellData=(e=>"function"==typeof e.rule?e.rule(e.cellData,e.idx):"serial"===e.rule?this.props.currentPage*this.props.pageSize+1+e.idx:"checkbox"===e.rule&&this.props.rowSelect?{type:"checkbox",selectionChange:t=>{void 0!==e.rowId?this.props.rowSelect(e.rowId,t):this.props.allRowsSelect(t)},checked:e.checked}:e.cellData),this._prepareRowData=(e=>{let t=[];for(let s in this.props.columns){let a=this._prepareCellData({cellData:e.row[s],idx:e.idx,rowId:e.rowId,rule:this.props.columns[s],checked:e.checked});if(e.isTh&&"checkbox"!==s)if(e.row[s])"string"==typeof(a=e.row[s])&&(a={value:a,enableSorting:!0,column:s}),a.sort=this.props.sort[s];else{let e=s.replace(/([A-Z])/g," $1");a=(e.charAt(0).toUpperCase()+e.slice(1)).replace(/_/g," ")}a||(a=this.props.notSetText),t.push(a)}return t}),this._prepareFilters=(()=>{let e={};for(let t in this.props.columns)e[t]=this.props.filters[t];return e}),t}render(){let e=[],t=!0;if(this.props.data.length){let t={};this.props.data.forEach((e,s)=>{let a=e[this.props.rowIdColumn];t[a]=this._prepareRowData({row:e,rowId:a,idx:s,checked:-1!==this.props.selectedRowIds.indexOf(a)})}),e.push(r.a.createElement(w,{data:t,options:this.props.rowOptions,tableId:this.props.tableId,key:`tbody-${this.props.tableId}`}))}else t=!1;if(this.props.showHeader&&e.unshift(r.a.createElement(v,{headerCells:this._prepareRowData({row:this.props.headerCells,idx:0,isTh:!0,checked:this.props.allRowsChecked}),options:this.props.headerRowOptions,tableId:this.props.tableId,filters:this.props.filters?this._prepareFilters():null,applyFilter:this.props.applyFilter,filterDelay:this.props.filterDelay,key:`thead-${this.props.tableId}`,setSort:this.props.setSort})),this.props.caption||!t){let s={options:this.props.captionOptions,key:`tcaption-${this.props.tableId}`,text:t?this.props.caption:this.props.emptyCaption};e[t?"unshift":"push"](r.a.createElement(o,s))}if(this.props.showFooter){let t=r.a.createElement(S,{footerCells:this.props.footerCells,options:this.props.footerRowOptions,tableId:this.props.tableId,key:`tfoot-${this.props.tableId}`});this.placeFooterAfterBody?e.push(t):e.unshift(t)}return r.a.createElement("table",this.props.tableOptions,e)}}O.defaultProps={data:[],headerCells:{},footerCells:[],captionOptions:{},tableOptions:{},showHeader:!0,showFooter:!1,headerRowOptions:{},footerRowOptions:{},rowOptions:{},filters:null,filterDelay:1,notSetText:"(not set)",emptyCaption:"Nothing found",allRowsChecked:!1};var _=O,k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e};class j extends a.Component{constructor(...e){var t;return t=super(...e),this.clickTag=(e=>{e.preventDefault(),this.props.disabled||this.props.onPageButtonClick(this.props.page)}),t}render(){let e=this.props.pageTag,t="a",s={};return s.className=this.props.className,"string"==typeof s.className?s.className=s.className.split(" "):s.className=[],this.props.isNextPage&&s.className.push(this.props.nextPageCssClass),this.props.isPrevPage&&s.className.push(this.props.prevPageCssClass),this.props.isLastPage&&s.className.push(this.props.lastPageCssClass),this.props.isFirstPage&&s.className.push(this.props.firstPageCssClass),this.props.active&&s.className.push(this.props.activePageCssClass),this.props.disabled&&(s.className.push(this.props.disabledPageCssClass),t="span"),s.className.length?s.className=s.className.join(" "):delete s.className,r.a.createElement(e,null,r.a.createElement(t,k({onClick:this.clickTag},s),this.props.content))}}j.defaultProps={pageTag:"li",activePageCssClass:"active",disabledPageCssClass:"disabled",nextPageCssClass:"next",prevPageCssClass:"prev",firstPageCssClass:"first",lastPageCssClass:"last",onPageButtonClick:null};var I=j;class R extends a.Component{constructor(e){super(e),this._addButton=((e,t)=>{let s=Object.assign({},this.generalOptions,t,this.buttonSettings);s.key=`pg-${this.props.tableId}-${t.idx}`,e.push(r.a.createElement(I,s))}),this._addFirstButton=(e=>{let t=0===this.props.currentPage;this._addButton(e,{page:0,content:this.props.firstPageLabel,active:t,disabled:t,isFirstPage:!0,idx:"f"})}),this._addLastButton=(e=>{this._addButton(e,{page:this.pageCount-1,content:this.props.lastPageLabel||this.pageCount,active:!1,disabled:this.props.currentPage>=this.pageCount-1,isLastPage:!0,idx:"l"})}),this._addPrevButton=(e=>{let t;(t=this.props.currentPage-1)<0&&(t=0),this._addButton(e,{page:t,content:this.props.prevPageLabel,active:!1,disabled:this.props.currentPage<=0,isPrevPage:!0,idx:"p"})}),this._addNextButton=(e=>{let t,s=this.pageCount-1;(t=+this.props.currentPage+1)>=s&&(t=s),this._addButton(e,{page:t,content:this.props.nextPageLabel,active:!1,disabled:this.props.currentPage>=s,isNextPage:!0,idx:"n"})}),this._addButtons=(e=>{let t=Math.max(0,this.props.currentPage-Math.round(this.props.maxButtonCount/2)),s=t+this.props.maxButtonCount-1;s>=this.pageCount&&(s=this.pageCount-1,t=Math.max(0,s-this.props.maxButtonCount+1));for(let a=t,r=0;a<=s;++a){let t=this.props.currentPage==a;this._addButton(e,{page:a,content:a+1,active:t,disabled:t,idx:r++})}}),this.buttonSettings={},({activePageCssClass:this.buttonSettings.activePageCssClass,disabledPageCssClass:this.buttonSettings.disabledPageCssClass,nextPageCssClass:this.buttonSettings.nextPageCssClass,prevPageCssClass:this.buttonSettings.prevPageCssClass,lastPageCssClass:this.buttonSettings.lastPageCssClass,firstPageCssClass:this.buttonSettings.firstPageCssClass,pageTag:this.buttonSettings.pageTag,onPageButtonClick:this.buttonSettings.onPageButtonClick}=this.props),this.generalOptions={isFirstPage:!1,isLastPage:!1,isPrevPage:!1,isNextPage:!1}}render(){this.pageCount=Math.ceil(this.props.totalCount/this.props.pageSize)||0;let e=this.props.pagerTag,t=[];return this.props.firstPageLabel&&this._addFirstButton(t),this.props.prevPageLabel&&this._addPrevButton(t),this._addButtons(t),this.props.nextPageLabel&&this._addNextButton(t),this.props.lastPageLabel&&this._addLastButton(t),r.a.createElement(e,this.props.pagerOptions,t)}}R.defaultProps={maxButtonCount:10,pageSize:20,pagerTag:"ul",nextPageLabel:"»",prevPageLabel:"«",firstPageLabel:null,lastPageLabel:null};var F=R,E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e};class T extends a.Component{constructor(e){super(e),this._setConditionalState=((e,t=!0)=>{let s={};return void 0===this.props.selectedRowIds&&e.selectedRowIds&&(s.selectedRowIds=e.selectedRowIds),void 0===this.props.allRowsChecked&&void 0!==e.allRowsChecked&&(s.allRowsChecked=e.allRowsChecked),void 0===this.props.sort&&e.sort&&(s.sort=e.sort),void 0===this.props.filterData&&e.filterData&&(s.filterData=e.filterData),t&&Object.keys(s).length&&this.setState(s),s}),this._getPrevStateVar=(e=>{let t;return t=void 0!==this.props[e]?this.props[e]:this.state[e]}),this.setSort=((e,t)=>{if(this.props.onSortChange){let s=this._getPrevStateVar("sort");if("object"!=typeof s)throw new Error(`sort must be an object, ${typeof s} provided`);let a=E({},s);t?a[e]=t:delete a[e],this.props.onSortChange(a),this._setConditionalState(E({},this.defaultSelectionState,{sort:a}))}}),this.rowSelect=((e,t)=>{let s=this._getPrevStateVar("selectedRowIds");if(!Array.isArray(s))throw new Error(`selectedRowIds must be an array, ${typeof s} provided`);let a=[...s];if(t)a.push(e);else{let t=a.indexOf(e);-1!==t&&a.splice(t,1)}this.props.onSelectionChange(a),this._setConditionalState({selectedRowIds:a})}),this.allRowsSelect=(e=>{let t=[];e&&this.props.data.forEach(e=>{t.push(e[this.props.rowIdColumn])}),this.props.onSelectionChange(t),this._setConditionalState({selectedRowIds:t,allRowsChecked:e})}),this.pageButtonClick=(e=>{this.props.onPageButtonClick(e),this._setConditionalState(this.defaultSelectionState)}),this.applyFilter=((e,t)=>{let s=this._getPrevStateVar("filterData");if("object"!=typeof s)throw new Error(`filterData must be an object, ${typeof s} provided`);let a=E({},s);t?a[e]=t:delete a[e],this.props.onFilterChange(a),this._setConditionalState(E({},this.defaultSelectionState,{filterData:a}))}),this.id=s(2)(),this.defaultSelectionState={selectedRowIds:[],allRowsChecked:!1},this.state=this._setConditionalState(E({sort:{},filterData:{}},this.defaultSelectionState),!1)}render(){const e={currentPage:this.props.currentPage,pageSize:this.props.pageSize,tableId:this.id};let t={},s={};var a=this.props;return({pagerOptions:t.pagerOptions,totalCount:t.totalCount,maxButtonCount:t.maxButtonCount,pagerTag:t.pagerTag,pageTag:t.pageTag,activePageCssClass:t.activePageCssClass,disabledPageCssClass:t.disabledPageCssClass,nextPageCssClass:t.nextPageCssClass,prevPageCssClass:t.prevPageCssClass,firstPageCssClass:t.firstPageCssClass,lastPageCssClass:t.lastPageCssClass,nextPageLabel:t.nextPageLabel,prevPageLabel:t.prevPageLabel,firstPageLabel:t.firstPageLabel,lastPageLabel:t.lastPageLabel}=a),(s=function(e,t){var s={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a]);return s}(a,["pagerOptions","totalCount","maxButtonCount","pagerTag","pageTag","activePageCssClass","disabledPageCssClass","nextPageCssClass","prevPageCssClass","firstPageCssClass","lastPageCssClass","nextPageLabel","prevPageLabel","firstPageLabel","lastPageLabel"])).sort=this._getPrevStateVar("sort"),s.setSort=this.setSort,s.rowSelect=this.rowSelect,s.allRowsSelect=this.allRowsSelect,s.allRowsChecked=this._getPrevStateVar("allRowsChecked"),s.selectedRowIds=this._getPrevStateVar("selectedRowIds"),delete s.onPageButtonClick,t.onPageButtonClick=this.pageButtonClick,delete s.onFilterChange,s.applyFilter=this.applyFilter,r.a.createElement("div",this.props.containerOptions,r.a.createElement(_,E({},e,s)),r.a.createElement(F,E({},e,t)))}}T.propTypes={data:l.a.array,headerCells:l.a.object,footerCells:l.a.array,caption:l.a.string,captionOptions:l.a.object,containerOptions:l.a.object,tableOptions:l.a.object,showHeader:l.a.bool,showFooter:l.a.bool,headerRowOptions:l.a.object,footerRowOptions:l.a.object,rowOptions:l.a.object,columns:l.a.object,filters:l.a.object,onSortChange:l.a.func,onFilterChange:l.a.func,filterDelay:l.a.number,pagerOptions:l.a.object,currentPage:l.a.number,totalCount:l.a.number,maxButtonCount:l.a.number,pageSize:l.a.number,pagerTag:l.a.string,pageTag:l.a.string,activePageCssClass:l.a.string,disabledPageCssClass:l.a.string,nextPageCssClass:l.a.string,prevPageCssClass:l.a.string,firstPageCssClass:l.a.string,lastPageCssClass:l.a.string,nextPageLabel:l.a.string,prevPageLabel:l.a.string,firstPageLabel:l.a.string,lastPageLabel:l.a.string,onPageButtonClick:l.a.func,notSetText:l.a.string,emptyCaption:l.a.string,rowIdColumn:l.a.string,onSelectionChange:l.a.func,selectedRowIds:l.a.array,allRowsChecked:l.a.bool,sort:l.a.object,filterData:l.a.object},T.defaultProps={containerOptions:{className:"grid-view"},tableOptions:{className:["table","table-striped","table-bordered"].join(" ")},rowIdColumn:"id"};t.default=T}])});