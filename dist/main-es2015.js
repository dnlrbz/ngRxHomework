(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-resorts-widget></app-resorts-widget>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/footer/footer.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/footer/footer.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"copy-right\">\n  <p>© 2015 Hot Weather Widget. All rights reserved | Design by  <a href=\"http://w3layouts.com/\" target=\"_blank\">  W3layouts </a></p>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-info-detail/resort-info-detail.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-info-detail/resort-info-detail.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"element-right\">\n  <ng-container *ngIf=\"currentResort\">\n    <app-weather [object]=\"currentResort?.weather\"></app-weather>\n    <app-social-info [object]=\"currentResort?.social_info\"></app-social-info>\n  </ng-container>\n</div>\n<div class=\"clear\"> </div>\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-info-detail/social-info/social-info.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-info-detail/social-info/social-info.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"object != null\">\n  <div class=\"teddy-bear\">\n    <div class=\"teddy-text\">\n      <h4>{{object.title}}</h4>\n      <span class=\"w-line\"> </span>\n      <img [src]=\"object.img | imgUrl\" alt=\"\"  class=\"img-responsive\">\n    </div>\n    <div class=\"teddy-follow\">\n      <ul>\n        <li class=\"folw-h\"><h3>{{object.followers}}</h3>\n          <p>Followers</p>\n        </li>\n        <li><h3>{{object.following}}</h3>\n          <p>Following</p>\n        </li>\n      </ul>\n    </div>\n  </div>\n</ng-container>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-info-detail/weather/temperature/temperature.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-info-detail/weather/temperature/temperature.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content><sup class=\"degree\">°</sup>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-info-detail/weather/weather.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-info-detail/weather/weather.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-container *ngIf=\"object != null\">\n  <div class=\"temperatur\">\n    <h5>{{object.title}}</h5>\n    <span class=\"w-line\"> </span>\n    <span [class]=\"object.icon\"> </span>\n    <h2><app-temperature>{{object.temperature}}</app-temperature></h2>\n    <h6>Water <app-temperature>{{object.water}}</app-temperature></h6>\n  </div>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-list/resort-info-brief/resort-info-brief.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-list/resort-info-brief/resort-info-brief.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"object != null\">\n  <div class=\"activity-row\">\n    <div class=\"activity-desc\">\n      <h5>Resort Address</h5>\n      <p>{{object.address}}</p>\n      <p>{{object?.weather?.title}}</p>\n      <h6>{{object?.phone | telephone}}</h6>\n    </div>\n    <div class=\"activity-img\">\n      <ul>\n        <li><img [src]='object.social_info.img | imgUrl: \"small\"'  alt=\"\"/></li>\n        <li><img [src]='object.img | imgUrl: \"small\"'  alt=\"\"/></li>\n      </ul>\n    </div>\n    <div class=\"clear\"> </div>\n  </div>\n</ng-container>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-list/resort-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-list/resort-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"element-left\">\n  <div class=\"element-bg-img\"><img [src]=\"this.currResort?.img | imgUrl\" alt=\"\" class=\"img-responsive\"> </div>\n  <div class=\"element-left-bottom\">\n    <div class=\"ele-strip\">\n      <ul>\n        <li *ngFor=\"let resortType of resortTypes; let last=last\" [className]=\"last ? 'anc-bor' : '' \">\n          <a href=\"#\" (click)=\"filter(resortType)\">{{resortType}}</a></li>\n      </ul>\n    </div>\n    <div class=\"village\">\n      <h3>Righteous indignation & like</h3>\n      <span class=\"line\"> </span>\n      <div class=\"activity_box\">\n        <div class=\"scrollbar\" id=\"style-2\">\n\n          <app-resort-info-brief *ngFor=\"let item of this.filteredResorts\" [object]=\"item\" (click)=\"selectResort(item)\">\n          </app-resort-info-brief>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resorts-widget.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resorts-widget.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Hot Weather Widget</h1>\n<ng-container *ngIf=\"this.resortList | async as resorts; else loading\">\n  <div class=\"element\">\n    <app-resorts-list [resortList]=\"resorts\" (currResortChange)=\"changeResort($event)\"></app-resorts-list>\n    <app-resort-info-detail [currentResort]=\"resorts[0]\"></app-resort-info-detail>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n    <mat-spinner class=\"center\" color=\"accent\"></mat-spinner>\n</ng-template>\n<app-footer></app-footer>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ngHomework1';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resorts_widget_resort_info_detail_weather_weather_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resorts-widget/resort-info-detail/weather/weather.component */ "./src/app/resorts-widget/resort-info-detail/weather/weather.component.ts");
/* harmony import */ var _resorts_widget_resort_info_detail_social_info_social_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resorts-widget/resort-info-detail/social-info/social-info.component */ "./src/app/resorts-widget/resort-info-detail/social-info/social-info.component.ts");
/* harmony import */ var _resorts_widget_resort_info_detail_resort_info_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resorts-widget/resort-info-detail/resort-info-detail.component */ "./src/app/resorts-widget/resort-info-detail/resort-info-detail.component.ts");
/* harmony import */ var _resorts_widget_resorts_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resorts-widget/resorts-widget.component */ "./src/app/resorts-widget/resorts-widget.component.ts");
/* harmony import */ var _resorts_widget_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resorts-widget/footer/footer.component */ "./src/app/resorts-widget/footer/footer.component.ts");
/* harmony import */ var _resorts_widget_resort_list_resort_info_brief_resort_info_brief_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resorts-widget/resort-list/resort-info-brief/resort-info-brief.component */ "./src/app/resorts-widget/resort-list/resort-info-brief/resort-info-brief.component.ts");
/* harmony import */ var _shared_pipes_telephone_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pipes/telephone.pipe */ "./src/app/shared/pipes/telephone.pipe.ts");
/* harmony import */ var _resorts_widget_resort_info_detail_weather_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resorts-widget/resort-info-detail/weather/temperature/temperature.component */ "./src/app/resorts-widget/resort-info-detail/weather/temperature/temperature.component.ts");
/* harmony import */ var _shared_pipes_imgUrl_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/pipes/imgUrl.pipe */ "./src/app/shared/pipes/imgUrl.pipe.ts");
/* harmony import */ var _resorts_widget_resort_list_resort_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resorts-widget/resort-list/resort-list.component */ "./src/app/resorts-widget/resort-list/resort-list.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _store_reducers_resorts_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/reducers/resorts.reducer */ "./src/app/store/reducers/resorts.reducer.ts");
/* harmony import */ var _store_effects_resort_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/effects/resort.effects */ "./src/app/store/effects/resort.effects.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _resorts_widget_resort_info_detail_weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"],
            _resorts_widget_resort_info_detail_social_info_social_info_component__WEBPACK_IMPORTED_MODULE_6__["SocialInfoComponent"],
            _resorts_widget_resort_info_detail_resort_info_detail_component__WEBPACK_IMPORTED_MODULE_7__["ResortInfoDetailComponent"],
            _resorts_widget_resorts_widget_component__WEBPACK_IMPORTED_MODULE_8__["ResortsWidgetComponent"],
            _resorts_widget_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _resorts_widget_resort_list_resort_info_brief_resort_info_brief_component__WEBPACK_IMPORTED_MODULE_10__["ResortInfoBriefComponent"],
            _shared_pipes_telephone_pipe__WEBPACK_IMPORTED_MODULE_11__["TelephonePipe"],
            _resorts_widget_resort_info_detail_weather_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_12__["TemperatureComponent"],
            _shared_pipes_imgUrl_pipe__WEBPACK_IMPORTED_MODULE_13__["ImgUrlPipe"],
            _resorts_widget_resort_list_resort_list_component__WEBPACK_IMPORTED_MODULE_14__["ResortListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forRoot([_store_effects_resort_effects__WEBPACK_IMPORTED_MODULE_19__["ResortEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forRoot({ resortReducer: _store_reducers_resorts_reducer__WEBPACK_IMPORTED_MODULE_18__["reducer"] }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production,
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
        ],
        providers: [
            _store_effects_resort_effects__WEBPACK_IMPORTED_MODULE_19__["ResortEffects"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/resorts-widget/footer/footer.component.css":
/*!************************************************************!*\
  !*** ./src/app/resorts-widget/footer/footer.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc29ydHMtd2lkZ2V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/resorts-widget/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/resorts-widget/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/resorts-widget/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/resorts-widget/resort-info-detail/resort-info-detail.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/resorts-widget/resort-info-detail/resort-info-detail.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc29ydHMtd2lkZ2V0L3Jlc29ydC1pbmZvLWRldGFpbC9yZXNvcnQtaW5mby1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/resorts-widget/resort-info-detail/resort-info-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/resorts-widget/resort-info-detail/resort-info-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ResortInfoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResortInfoDetailComponent", function() { return ResortInfoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResortInfoDetailComponent = class ResortInfoDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResortInfoDetailComponent.prototype, "currentResort", void 0);
ResortInfoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resort-info-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resort-info-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-info-detail/resort-info-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resort-info-detail.component.css */ "./src/app/resorts-widget/resort-info-detail/resort-info-detail.component.css")).default]
    })
], ResortInfoDetailComponent);



/***/ }),

/***/ "./src/app/resorts-widget/resort-info-detail/social-info/social-info.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/resorts-widget/resort-info-detail/social-info/social-info.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc29ydHMtd2lkZ2V0L3Jlc29ydC1pbmZvLWRldGFpbC9zb2NpYWwtaW5mby9zb2NpYWwtaW5mby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/resorts-widget/resort-info-detail/social-info/social-info.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/resorts-widget/resort-info-detail/social-info/social-info.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SocialInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialInfoComponent", function() { return SocialInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SocialInfoComponent = class SocialInfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SocialInfoComponent.prototype, "object", void 0);
SocialInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-info-detail/social-info/social-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-info.component.css */ "./src/app/resorts-widget/resort-info-detail/social-info/social-info.component.css")).default]
    })
], SocialInfoComponent);



/***/ }),

/***/ "./src/app/resorts-widget/resort-info-detail/weather/temperature/temperature.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/resorts-widget/resort-info-detail/weather/temperature/temperature.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc29ydHMtd2lkZ2V0L3Jlc29ydC1pbmZvLWRldGFpbC93ZWF0aGVyL3RlbXBlcmF0dXJlL3RlbXBlcmF0dXJlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/resorts-widget/resort-info-detail/weather/temperature/temperature.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/resorts-widget/resort-info-detail/weather/temperature/temperature.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TemperatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureComponent", function() { return TemperatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TemperatureComponent = class TemperatureComponent {
    constructor() { }
    ngOnInit() {
    }
};
TemperatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-temperature',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./temperature.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-info-detail/weather/temperature/temperature.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./temperature.component.css */ "./src/app/resorts-widget/resort-info-detail/weather/temperature/temperature.component.css")).default]
    })
], TemperatureComponent);



/***/ }),

/***/ "./src/app/resorts-widget/resort-info-detail/weather/weather.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/resorts-widget/resort-info-detail/weather/weather.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc29ydHMtd2lkZ2V0L3Jlc29ydC1pbmZvLWRldGFpbC93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/resorts-widget/resort-info-detail/weather/weather.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/resorts-widget/resort-info-detail/weather/weather.component.ts ***!
  \********************************************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherComponent = class WeatherComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WeatherComponent.prototype, "object", void 0);
WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weather.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-info-detail/weather/weather.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weather.component.css */ "./src/app/resorts-widget/resort-info-detail/weather/weather.component.css")).default]
    })
], WeatherComponent);



/***/ }),

/***/ "./src/app/resorts-widget/resort-list/resort-info-brief/resort-info-brief.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/resorts-widget/resort-list/resort-info-brief/resort-info-brief.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc29ydHMtd2lkZ2V0L3Jlc29ydC1saXN0L3Jlc29ydC1pbmZvLWJyaWVmL3Jlc29ydC1pbmZvLWJyaWVmLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/resorts-widget/resort-list/resort-info-brief/resort-info-brief.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/resorts-widget/resort-list/resort-info-brief/resort-info-brief.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ResortInfoBriefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResortInfoBriefComponent", function() { return ResortInfoBriefComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResortInfoBriefComponent = class ResortInfoBriefComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResortInfoBriefComponent.prototype, "object", void 0);
ResortInfoBriefComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resort-info-brief',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resort-info-brief.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-list/resort-info-brief/resort-info-brief.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resort-info-brief.component.css */ "./src/app/resorts-widget/resort-list/resort-info-brief/resort-info-brief.component.css")).default]
    })
], ResortInfoBriefComponent);



/***/ }),

/***/ "./src/app/resorts-widget/resort-list/resort-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/resorts-widget/resort-list/resort-list.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc29ydHMtd2lkZ2V0L3Jlc29ydC1saXN0L3Jlc29ydC1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/resorts-widget/resort-list/resort-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/resorts-widget/resort-list/resort-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResortListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResortListComponent", function() { return ResortListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_model_resortInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/model/resortInfo */ "./src/app/shared/model/resortInfo.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");




let ResortListComponent = class ResortListComponent {
    constructor(store) {
        this.store = store;
        this.resortTypes = [_shared_model_resortInfo__WEBPACK_IMPORTED_MODULE_2__["ResortInfoType"].hotel, _shared_model_resortInfo__WEBPACK_IMPORTED_MODULE_2__["ResortInfoType"].fishing, _shared_model_resortInfo__WEBPACK_IMPORTED_MODULE_2__["ResortInfoType"].tour, _shared_model_resortInfo__WEBPACK_IMPORTED_MODULE_2__["ResortInfoType"].weather];
        this.currResort = null;
        this.currResortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set resortList(list) {
        this.resorts = list;
        this.filteredResorts = list;
    }
    ngOnInit() {
        this.store.select(state => this.currResort = state.currentResort);
    }
    selectResort(obj) {
        this.currResortChange.emit(obj);
    }
    filter(resortType) {
        this.filteredResorts = this.resorts.filter(item => item.type === resortType);
    }
};
ResortListComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResortListComponent.prototype, "resortList", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ResortListComponent.prototype, "currResortChange", void 0);
ResortListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resorts-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resort-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resort-list/resort-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resort-list.component.css */ "./src/app/resorts-widget/resort-list/resort-list.component.css")).default]
    })
], ResortListComponent);



/***/ }),

/***/ "./src/app/resorts-widget/resorts-widget.component.css":
/*!*************************************************************!*\
  !*** ./src/app/resorts-widget/resorts-widget.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3J0cy13aWRnZXQvcmVzb3J0cy13aWRnZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZXNvcnRzLXdpZGdldC9yZXNvcnRzLXdpZGdldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/resorts-widget/resorts-widget.component.ts":
/*!************************************************************!*\
  !*** ./src/app/resorts-widget/resorts-widget.component.ts ***!
  \************************************************************/
/*! exports provided: ResortsWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResortsWidgetComponent", function() { return ResortsWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_resort_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/resort.actions */ "./src/app/store/actions/resort.actions.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/data.service */ "./src/app/shared/services/data.service.ts");





let ResortsWidgetComponent = class ResortsWidgetComponent {
    constructor(dataService, store) {
        this.dataService = dataService;
        this.store = store;
        this.resortList = this.store.select('resorts');
    }
    ngOnInit() {
        this.store.dispatch(Object(_store_actions_resort_actions__WEBPACK_IMPORTED_MODULE_3__["requestResorts"])());
    }
    changeResort(resort) {
        this.store.dispatch(Object(_store_actions_resort_actions__WEBPACK_IMPORTED_MODULE_3__["resetCurrentResort"])({ newCurrentResort: resort }));
    }
};
ResortsWidgetComponent.ctorParameters = () => [
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ResortsWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resorts-widget',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resorts-widget.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resorts-widget/resorts-widget.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resorts-widget.component.css */ "./src/app/resorts-widget/resorts-widget.component.css")).default]
    })
], ResortsWidgetComponent);



/***/ }),

/***/ "./src/app/shared/model/resortInfo.ts":
/*!********************************************!*\
  !*** ./src/app/shared/model/resortInfo.ts ***!
  \********************************************/
/*! exports provided: ResortInfoType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResortInfoType", function() { return ResortInfoType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ResortInfoType {
}
ResortInfoType.hotel = 'Hotel';
ResortInfoType.fishing = 'Fishing';
ResortInfoType.tour = 'Tour';
ResortInfoType.weather = 'Weather';


/***/ }),

/***/ "./src/app/shared/pipes/imgUrl.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/imgUrl.pipe.ts ***!
  \*********************************************/
/*! exports provided: ImgUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgUrlPipe", function() { return ImgUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let ImgUrlPipe = class ImgUrlPipe {
    constructor(domSanitar) {
        this.domSanitar = domSanitar;
    }
    transform(shortImgUrl, size) {
        let img = shortImgUrl;
        if (size) {
            if (size === 'small') {
                img = 'sm_' + shortImgUrl;
            }
        }
        return this.domSanitar.bypassSecurityTrustUrl('./assets/images/' + img);
    }
};
ImgUrlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
ImgUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'imgUrl'
    })
], ImgUrlPipe);



/***/ }),

/***/ "./src/app/shared/pipes/telephone.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/telephone.pipe.ts ***!
  \************************************************/
/*! exports provided: TelephonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelephonePipe", function() { return TelephonePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TelephonePipe = class TelephonePipe {
    transform(value) {
        const match = value.toString().match(/^(\d{4})(\d{3})(\d{3})$/);
        const formattedPhone = match ? (match[1] + ' ' + match[2] + ' ' + match[3]) : ' wrong number';
        return 'Tel. +' + formattedPhone;
    }
};
TelephonePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'telephone'
    })
], TelephonePipe);



/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _model_resortInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/resortInfo */ "./src/app/shared/model/resortInfo.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let DataService = class DataService {
    constructor() { }
    getResorts() {
        const mockData = [
            {
                img: '1.jpg',
                address: 'Sed perspiciatis',
                phone: 1285968685,
                weather: {
                    title: 'Et harum quidem',
                    icon: 'cloud',
                    water: 26,
                    temperature: 27
                },
                social_info: {
                    title: 'Nam libero voluptatem',
                    img: 'b1.jpg',
                    followers: 2850,
                    following: 675,
                },
                type: _model_resortInfo__WEBPACK_IMPORTED_MODULE_3__["ResortInfoType"].hotel
            },
            {
                img: '3.jpg',
                address: 'Sed perspiciatis2',
                phone: 1274858693,
                weather: {
                    title: 'Et harum quidem2',
                    icon: 'cloud',
                    water: 10,
                    temperature: 16
                },
                social_info: {
                    title: 'Nam libero voluptatem2',
                    img: 'b3.jpg',
                    followers: 3283,
                    following: 3459,
                },
                type: _model_resortInfo__WEBPACK_IMPORTED_MODULE_3__["ResortInfoType"].hotel
            },
            {
                img: '3.jpg',
                address: 'Sed perspiciatis2',
                phone: 1274858693,
                weather: {
                    title: 'Et harum quidem2',
                    icon: 'cloud',
                    water: 10,
                    temperature: 16
                },
                social_info: {
                    title: 'Nam libero voluptatem2',
                    img: 'b3.jpg',
                    followers: 3283,
                    following: 3459,
                },
                type: _model_resortInfo__WEBPACK_IMPORTED_MODULE_3__["ResortInfoType"].tour
            },
            {
                img: '3.jpg',
                address: 'Sed perspiciatis2',
                phone: 1274858693,
                weather: {
                    title: 'Et harum quidem2',
                    icon: 'cloud',
                    water: 10,
                    temperature: 16
                },
                social_info: {
                    title: 'Nam libero voluptatem2',
                    img: 'b3.jpg',
                    followers: 3283,
                    following: 3459,
                },
                type: _model_resortInfo__WEBPACK_IMPORTED_MODULE_3__["ResortInfoType"].fishing
            }
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(mockData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500));
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/store/actions/resort.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/resort.actions.ts ***!
  \*************************************************/
/*! exports provided: requestResorts, resetCurrentResort, requestResortsSuccessful */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestResorts", function() { return requestResorts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCurrentResort", function() { return resetCurrentResort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestResortsSuccessful", function() { return requestResortsSuccessful; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const requestResorts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Resorts widget] requesting resorts');
const resetCurrentResort = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Resorts widget] resetting current resort', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const requestResortsSuccessful = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Resorts widget] got resorts successfully', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/store/effects/resort.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/store/effects/resort.effects.ts ***!
  \*************************************************/
/*! exports provided: ResortEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResortEffects", function() { return ResortEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _actions_resort_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/resort.actions */ "./src/app/store/actions/resort.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");







let ResortEffects = class ResortEffects {
    constructor(actions, dataService) {
        this.actions = actions;
        this.dataService = dataService;
        this.loadResorts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions_resort_actions__WEBPACK_IMPORTED_MODULE_2__["requestResorts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.dataService.getResorts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resorts) => Object(_actions_resort_actions__WEBPACK_IMPORTED_MODULE_2__["requestResortsSuccessful"])({ newResorts: resorts })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
            console.log('error');
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
        })))));
    }
};
ResortEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Actions"] },
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
ResortEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ResortEffects);



/***/ }),

/***/ "./src/app/store/reducers/resorts.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/resorts.reducer.ts ***!
  \***************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_resort_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/resort.actions */ "./src/app/store/actions/resort.actions.ts");



const initialState = {
    resorts: [],
    currentResort: undefined,
};
const resortsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_resort_actions__WEBPACK_IMPORTED_MODULE_2__["resetCurrentResort"], (state, { newCurrentResort }) => (Object.assign({}, state, { currentResort: newCurrentResort }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_resort_actions__WEBPACK_IMPORTED_MODULE_2__["requestResortsSuccessful"], (state, { newResorts }) => {
    return Object.assign({}, state, { resorts: newResorts, currentResort: newResorts[0] });
}));
function reducer(state, action) {
    return resortsReducer(state, action);
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daniil/Desktop/development/ngRxHomework/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map