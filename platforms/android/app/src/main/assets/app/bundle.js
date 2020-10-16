require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));
global.registerModule("@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/blue.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "}],"parsingErrors":[]}};;
    if (false) {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_feature_notebook_notebook_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/feature/notebook/notebook.component.ts");
/* harmony import */ var _src_app_feature_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/feature/calendar/calendar.component.ts");






const routes = [
    { path: 'notebook', component: _src_app_feature_notebook_notebook_component__WEBPACK_IMPORTED_MODULE_2__["NotebookComponent"] },
    { path: 'calendar', component: _src_app_feature_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]], exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
                exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.component.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");



const _c0 = function () { return ["/notebook"]; };
class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [["text", "Cuaderno", "pageTransition", "slide", 3, "nsRouterLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "page-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NSRouterLink"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["PageRouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_app_app_routing_module_tns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app-routing.module.tns.ts");
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.component.tns.ts");
/* harmony import */ var _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/auto-generated/auto-generated.component.ts");
/* harmony import */ var _src_app_core_core_module_tns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/core/core.module.tns.ts");
/* harmony import */ var _src_app_feature_feature_module_tns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/feature/feature.module.tns.ts");
/* harmony import */ var _src_app_shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/shared/shared.module.tns.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2___default.a);
// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'es-CO' }
    ], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
            _src_app_app_routing_module_tns__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _src_app_feature_feature_module_tns__WEBPACK_IMPORTED_MODULE_7__["FeatureModule"],
            _src_app_core_core_module_tns__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _src_app_shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_5__["AutoGeneratedComponent"]], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
        _src_app_app_routing_module_tns__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _src_app_feature_feature_module_tns__WEBPACK_IMPORTED_MODULE_7__["FeatureModule"],
        _src_app_core_core_module_tns__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
        _src_app_shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_5__["AutoGeneratedComponent"],
                ],
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                    _src_app_app_routing_module_tns__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _src_app_feature_feature_module_tns__WEBPACK_IMPORTED_MODULE_7__["FeatureModule"],
                    _src_app_core_core_module_tns__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                    _src_app_shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
                ],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'es-CO' }
                ],
                bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/auto-generated/auto-generated.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoGeneratedComponent", function() { return AutoGeneratedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AutoGeneratedComponent {
    constructor() { }
    ngOnInit() {
    }
}
AutoGeneratedComponent.ɵfac = function AutoGeneratedComponent_Factory(t) { return new (t || AutoGeneratedComponent)(); };
AutoGeneratedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutoGeneratedComponent, selectors: [["app-auto-generated"]], decls: 1, vars: 0, consts: [["text", "auto-generated works!", 1, "btn", "btn-primary"]], template: function AutoGeneratedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "Button", 0);
    } }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoGeneratedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auto-generated',
                templateUrl: './auto-generated.component.html',
                styleUrls: ['./auto-generated.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/core/core.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_core_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/core/task.service.ts");
/* harmony import */ var _src_app_core_ui_kit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/core/ui-kit.service.ts");
/* harmony import */ var _src_app_core_flatpickr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/core/flatpickr.service.ts");
/* harmony import */ var _src_app_core_fuse_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/core/fuse.service.ts");







class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        _src_app_core_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
        _src_app_core_ui_kit_service__WEBPACK_IMPORTED_MODULE_3__["UiKitService"],
        _src_app_core_flatpickr_service__WEBPACK_IMPORTED_MODULE_4__["FlatpickrService"],
        _src_app_core_fuse_service__WEBPACK_IMPORTED_MODULE_5__["FuseService"]
    ], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"]
                ],
                declarations: [],
                providers: [
                    _src_app_core_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
                    _src_app_core_ui_kit_service__WEBPACK_IMPORTED_MODULE_3__["UiKitService"],
                    _src_app_core_flatpickr_service__WEBPACK_IMPORTED_MODULE_4__["FlatpickrService"],
                    _src_app_core_fuse_service__WEBPACK_IMPORTED_MODULE_5__["FuseService"]
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/core/flatpickr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatpickrService", function() { return FlatpickrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_l10n_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/flatpickr/dist/l10n/es.js");
/* harmony import */ var flatpickr_dist_l10n_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es__WEBPACK_IMPORTED_MODULE_2__);




class FlatpickrService {
    constructor() { }
    localizeSpanish() {
        flatpickr__WEBPACK_IMPORTED_MODULE_1___default.a.localize(flatpickr_dist_l10n_es__WEBPACK_IMPORTED_MODULE_2__["Spanish"]);
    }
}
FlatpickrService.ɵfac = function FlatpickrService_Factory(t) { return new (t || FlatpickrService)(); };
FlatpickrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FlatpickrService, factory: FlatpickrService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlatpickrService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/core/fuse.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseService", function() { return FuseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/fuse.js/dist/fuse.esm.js");



class FuseService {
    constructor() {
        this.options = { ignoreLocation: true, threshold: 0.2 };
    }
    searchFromList(pattern, list, keys) {
        this.options.keys = keys;
        const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_1__["default"](list, this.options);
        return fuse.search(pattern).map(result => result.item);
    }
}
FuseService.ɵfac = function FuseService_Factory(t) { return new (t || FuseService)(); };
FuseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FuseService, factory: FuseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FuseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/core/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class TaskService {
    constructor(http) {
        this.http = http;
        this.tasksEndpoint = 'http://10.0.2.2:8080/api/v1/tasks';
    }
    getTasks() {
        return this.http.get(this.tasksEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(tasks => this.formatAllTasksDateAndTime(tasks)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(tasks => tasks.reverse()));
    }
    formatAllTasksDateAndTime(tasks) {
        tasks.map(task => this.formatTaskDateAndTime(task));
        return tasks;
    }
    formatTaskDateAndTime(task) {
        // The server returns the date as an array of year, month and day
        if (task.date && Array.isArray(task.date)) {
            task.date = new Date(task.date);
        }
        // The server returns the time as a number (timestamp)
        if (task.time && Number.isInteger(task.time)) {
            task.time = new Date(task.time * 1000);
        }
        return task;
    }
    postTask(task) {
        return this.http.post(this.tasksEndpoint, task)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(task => this.formatTaskDateAndTime(task)));
    }
    deleteTask(task) {
        return this.http.delete(`${this.tasksEndpoint}/${task.id}`);
    }
    toggleTaskAsDone(task) {
        return this.http.put(`${this.tasksEndpoint}/${task.id}?action=toggleAsDone`, task);
    }
    editTask(task) {
        return this.http.put(`${this.tasksEndpoint}/${task.id}?action=edit`, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(task => this.formatTaskDateAndTime(task)));
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./app/core/ui-kit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiKitService", function() { return UiKitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/uikit/dist/js/uikit.js");
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uikit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/uikit/dist/js/uikit-icons.js");
/* harmony import */ var uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_2__);




class UiKitService {
    constructor() { }
    useUIkitIcons() {
        // @ts-ignore
        uikit__WEBPACK_IMPORTED_MODULE_1___default.a.use(uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_2___default.a);
    }
    createConfirmationModal(message) {
        return uikit__WEBPACK_IMPORTED_MODULE_1___default.a.modal.confirm(message);
    }
}
UiKitService.ɵfac = function UiKitService_Factory(t) { return new (t || UiKitService)(); };
UiKitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UiKitService, factory: UiKitService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiKitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/feature/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CalendarComponent {
    constructor() { }
    ngOnInit() {
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], decls: 4, vars: 0, consts: [["text", "CalendarComponent works", "textWrap", "true"], ["text", "This is a migrated component", "textWrap", "true"], ["text", "Update it to provide the UI elements required in your mobile app", "textWrap", "true"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "StackLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calendar',
                templateUrl: './calendar.component.html',
                styleUrls: ['./calendar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/feature/calendar/calendar.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_feature_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/feature/calendar/calendar.component.ts");




class CalendarModule {
}
CalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalendarModule });
CalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalendarModule_Factory(t) { return new (t || CalendarModule)(); }, providers: [], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarModule, { declarations: [_src_app_feature_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]], exports: [_src_app_feature_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]
                ],
                declarations: [
                    _src_app_feature_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]
                ],
                providers: [],
                exports: [_src_app_feature_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/feature/feature.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return FeatureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/shared.module.tns.ts");
/* harmony import */ var _src_app_feature_calendar_calendar_module_tns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/feature/calendar/calendar.module.tns.ts");
/* harmony import */ var _src_app_feature_notebook_notebook_module_tns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/feature/notebook/notebook.module.tns.ts");






class FeatureModule {
}
FeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeatureModule });
FeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeatureModule_Factory(t) { return new (t || FeatureModule)(); }, providers: [
        _src_app_shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _src_app_feature_notebook_notebook_module_tns__WEBPACK_IMPORTED_MODULE_4__["NotebookModule"],
        _src_app_feature_calendar_calendar_module_tns__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]
    ], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeatureModule, { imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]
                ],
                declarations: [],
                providers: [
                    _src_app_shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _src_app_feature_notebook_notebook_module_tns__WEBPACK_IMPORTED_MODULE_4__["NotebookModule"],
                    _src_app_feature_calendar_calendar_module_tns__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/feature/notebook/notebook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebookComponent", function() { return NotebookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _src_app_core_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/core/task.service.ts");
/* harmony import */ var _src_app_core_ui_kit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/core/ui-kit.service.ts");
/* harmony import */ var _src_app_core_flatpickr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/core/flatpickr.service.ts");
/* harmony import */ var _src_app_core_fuse_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/core/fuse.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = ["descriptionInput"];
const _c1 = ["editTaskDate"];
const _c2 = ["editTaskTime"];
function NotebookComponent_Label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "Label", 1);
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", task_r1.description);
} }
class NotebookComponent {
    constructor(taskService, uiKit, flatpickr, fuse) {
        this.taskService = taskService;
        this.uiKit = uiKit;
        this.flatpickr = flatpickr;
        this.fuse = fuse;
        this.newTaskFormArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        this.descriptionInputSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.editDateInputSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.editTimeInputSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.editTaskFormArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        this.searchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({ query: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('') });
        this.searchPattern = "";
    }
    ngOnInit() {
        this.uiKit.useUIkitIcons();
        this.flatpickr.localizeSpanish();
        this.taskService.getTasks().subscribe(tasks => {
            this.tasks = tasks;
            this.filterTasksByString(this.searchPattern);
            this.places = this.extractListOfTasksCommonProperties(tasks, 'place');
            this.tags = this.extractListOfTasksCommonProperties(tasks, 'tag');
            this.dates = this.extractListOfCommonDates(tasks);
            this.sortDatesDescending(this.dates);
        });
    }
    ngAfterViewInit() {
        this.descriptionInputSubscription = this.descriptionInputRef.
            changes.subscribe(res => {
            if (this.descriptionInputRef.length > 0) {
                this.descriptionInputRef.last.nativeElement.focus();
            }
        });
        this.editDateInputSubscription = this.editDateInputRef.changes.subscribe(res => {
            if (this.editDateInputRef.length > 0) {
                setTimeout(() => {
                    const date = this.editDateInputRef.last.config.defaultDate;
                    this.editDateInputRef.last.flatpickr.setDate(date, true);
                }, 100);
            }
        });
        this.editTimeInputSubscription = this.editTimeInputRef.changes.subscribe(res => {
            if (this.editTimeInputRef.length > 0) {
                setTimeout(() => {
                    const hour = this.editTimeInputRef.last.config.defaultHour;
                    const minutes = this.editTimeInputRef.last.config.defaultMinute;
                    if (hour === null || minutes === null) {
                        return;
                    }
                    const time = new Date().setHours(hour, minutes);
                    this.editTimeInputRef.last.flatpickr.setDate(time, true);
                }, 100);
            }
        });
    }
    ngOnDestroy() {
        this.descriptionInputSubscription.unsubscribe();
        this.editDateInputSubscription.unsubscribe();
        this.editTimeInputSubscription.unsubscribe();
    }
    filterTasksByString(pattern) {
        if (pattern && pattern.trim().length > 0) {
            this.searchPattern = pattern.trim();
            this.filteredTasks = this.fuse.searchFromList(this.searchPattern, this.tasks, ['description', 'place', 'tag']);
        }
        else {
            this.searchPattern = "";
            this.filteredTasks = this.tasks;
        }
        this.resetEditModeForTasks();
    }
    resetEditModeForTasks() {
        this.editModeForTasks = new Array(this.filteredTasks.length).fill(false);
    }
    extractListOfTasksCommonProperties(tasks, property) {
        return [...new Set(tasks.filter(task => task[property]).map(task => task[property]))];
    }
    extractListOfCommonDates(tasks) {
        return tasks.filter(task => task.date)
            .map(task => task.date)
            .filter((date, index, self) => index === self.findIndex(d => (d.getTime() === date.getTime())));
    }
    sortDatesDescending(dates) {
        return dates.sort((a, b) => b.getTime() - a.getTime());
    }
    promptForNewTask() {
        if (this.newTaskInputPromptExists()) {
            return;
        }
        const newFormGroup = this.createNewFormGroupForTask();
        this.newTaskFormArray.push(newFormGroup);
    }
    createNewFormGroupForTask(task) {
        task = task !== undefined ? task : '';
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](task.description || ''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](task.date || ''),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](task.time || ''),
            place: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](task.place || ''),
            tag: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](task.tag || '')
        });
    }
    newTaskInputPromptExists() {
        return this.newTaskFormArray.length > 0;
    }
    saveTask(newTask) {
        if (this.isTaskDescriptionEmpty(newTask)) {
            return;
        }
        newTask = this.formatTaskDateAndTime(newTask);
        newTask.done = false;
        this.taskService.postTask(newTask).subscribe(task => {
            this.tasks.unshift(task);
            this.filterTasksByString(this.searchPattern);
            this.addTaskPropertyToSuggestions(task, 'place', this.places);
            this.addTaskPropertyToSuggestions(task, 'tag', this.tags);
        });
        this.clearTaskChanges();
    }
    isTaskDescriptionEmpty(task) {
        return task.description.trim().length == 0;
    }
    formatTaskDateAndTime(task) {
        task.date = task.date[0];
        task.time = task.time[0];
        return task;
    }
    addTaskPropertyToSuggestions(task, property, suggestions) {
        if (task[property] && suggestions.indexOf(task[property]) === -1) {
            suggestions.push(task[property]);
        }
    }
    clearTaskChanges() {
        this.newTaskFormArray.clear();
    }
    showDeleteModalForTask(task) {
        this.uiKit.createConfirmationModal(`
          <span class="uk-text-lead">
              ¿Está seguro de que desea eliminar la tarea seleccionada?
          </span>
    `).then((confirm) => this.deleteTask(task), (cancel) => { });
    }
    deleteTask(task) {
        this.taskService.deleteTask(task).subscribe(() => {
            this.tasks = this.tasks.filter(otherTask => otherTask !== task);
            this.filterTasksByString(this.searchPattern);
            this.removeTaskPropertyFromSuggestions(task, 'place', this.places);
            this.removeTaskPropertyFromSuggestions(task, 'tag', this.tags);
        });
    }
    removeTaskPropertyFromSuggestions(task, property, suggestions) {
        if (this.isTaskPropertyNotPresentInAnyTask(task[property], property)) {
            const propertyToRemoveIndex = suggestions.findIndex(propertyToDelete => propertyToDelete === task[property]);
            suggestions.splice(propertyToRemoveIndex, 1);
        }
    }
    isTaskPropertyNotPresentInAnyTask(propertyValue, property) {
        return this.tasks
            .filter(task => task[property] === propertyValue).length == 0;
    }
    toggleTaskAsDone(task) {
        this.taskService.toggleTaskAsDone(task).subscribe(doneTask => {
            const doneTaskIndex = this.tasks.findIndex(taskToToggle => taskToToggle === task);
            this.tasks[doneTaskIndex].done = doneTask.done;
        });
    }
    toggleEditModeForTask(task) {
        if (!this.isTaskInEditMode(task))
            this.resetEditModeForTasks();
        const taskIndex = this.findTaskIndex(task);
        this.editModeForTasks[taskIndex] = !this.editModeForTasks[taskIndex];
    }
    findTaskIndex(task) {
        return this.filteredTasks.findIndex(taskToFind => taskToFind === task);
    }
    isTaskInEditMode(task) {
        const taskIndex = this.findTaskIndex(task);
        return this.editModeForTasks[taskIndex];
    }
    setFormControlForTask(task) {
        this.toggleEditModeForTask(task);
        if (this.isTaskInEditMode(task)) {
            const editFormGroup = this.createNewFormGroupForTask(task);
            this.editTaskFormArray.setControl(0, editFormGroup);
        }
        else {
            this.editTaskFormArray.clear();
        }
    }
    editTask(oldTask, editedTask) {
        if (this.isTaskDescriptionEmpty(editedTask)) {
            return;
        }
        editedTask.id = oldTask.id;
        editedTask.done = oldTask.done;
        editedTask = this.formatTaskDateAndTime(editedTask);
        this.taskService.editTask(editedTask).subscribe(editedTask => {
            this.toggleEditModeForTask(oldTask);
            this.editTaskFormArray.clear();
            const taskIndex = this.findTaskIndex(oldTask);
            this.filteredTasks[taskIndex] = editedTask;
            this.places = this.extractListOfTasksCommonProperties(this.tasks, 'place');
            this.tags = this.extractListOfTasksCommonProperties(this.tasks, 'tag');
        });
    }
}
NotebookComponent.ɵfac = function NotebookComponent_Factory(t) { return new (t || NotebookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_core_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_core_ui_kit_service__WEBPACK_IMPORTED_MODULE_4__["UiKitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_core_flatpickr_service__WEBPACK_IMPORTED_MODULE_5__["FlatpickrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_core_fuse_service__WEBPACK_IMPORTED_MODULE_6__["FuseService"])); };
NotebookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotebookComponent, selectors: [["app-notebook"]], viewQuery: function NotebookComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.descriptionInputRef = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editDateInputRef = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editTimeInputRef = _t);
    } }, decls: 2, vars: 1, consts: [[3, "text", 4, "ngFor", "ngForOf"], [3, "text"]], template: function NotebookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "StackLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotebookComponent_Label_1_Template, 1, 1, "Label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredTasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotebookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notebook',
                templateUrl: './notebook.component.html',
                styleUrls: ['./notebook.component.scss']
            }]
    }], function () { return [{ type: _src_app_core_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] }, { type: _src_app_core_ui_kit_service__WEBPACK_IMPORTED_MODULE_4__["UiKitService"] }, { type: _src_app_core_flatpickr_service__WEBPACK_IMPORTED_MODULE_5__["FlatpickrService"] }, { type: _src_app_core_fuse_service__WEBPACK_IMPORTED_MODULE_6__["FuseService"] }]; }, { descriptionInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['descriptionInput']
        }], editDateInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['editTaskDate']
        }], editTimeInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['editTaskTime']
        }] }); })();


/***/ }),

/***/ "./app/feature/notebook/notebook.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebookModule", function() { return NotebookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_feature_notebook_notebook_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/feature/notebook/notebook.component.ts");
/* harmony import */ var _src_app_shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/shared.module.tns.ts");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/ng2-flatpickr/__ivy_ngcc__/fesm5/ng2-flatpickr.js");






class NotebookModule {
}
NotebookModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotebookModule });
NotebookModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotebookModule_Factory(t) { return new (t || NotebookModule)(); }, providers: [], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"],
            _src_app_shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ng2_flatpickr__WEBPACK_IMPORTED_MODULE_4__["Ng2FlatpickrModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotebookModule, { declarations: [_src_app_feature_notebook_notebook_component__WEBPACK_IMPORTED_MODULE_2__["NotebookComponent"]], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"],
        _src_app_shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        ng2_flatpickr__WEBPACK_IMPORTED_MODULE_4__["Ng2FlatpickrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotebookModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"],
                    _src_app_shared_shared_module_tns__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    ng2_flatpickr__WEBPACK_IMPORTED_MODULE_4__["Ng2FlatpickrModule"]
                ],
                declarations: [
                    _src_app_feature_notebook_notebook_component__WEBPACK_IMPORTED_MODULE_2__["NotebookComponent"]
                ],
                providers: [],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/shared/autocomplete.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteDirective", function() { return AutocompleteDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var autocompleter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/autocompleter/autocomplete.js");
/* harmony import */ var autocompleter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autocompleter__WEBPACK_IMPORTED_MODULE_1__);



class AutocompleteDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.fetch = (text, update) => {
            text = text.toLowerCase();
            let suggestions = this.options.filter(option => option.toLowerCase().startsWith(text));
            update(suggestions);
            return { text, suggestions };
        };
        this.autocomplete();
    }
    // Should these methods be private?
    autocomplete() {
        autocompleter__WEBPACK_IMPORTED_MODULE_1___default()({
            input: this.el.nativeElement,
            minLength: 1,
            fetch: this.fetch,
            onSelect: this.setValueOnSelect,
            render: this.render
        });
    }
    setValueOnSelect(item, input) {
        input.value = item;
        // Trigger input value change event to update model value
        input.dispatchEvent(new Event('input'));
        return input.value;
    }
    render(item, currentValue) {
        const itemElement = document.createElement("div");
        itemElement.textContent = item;
        return itemElement;
    }
}
AutocompleteDirective.ɵfac = function AutocompleteDirective_Factory(t) { return new (t || AutocompleteDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AutocompleteDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutocompleteDirective, selectors: [["", "appAutocomplete", ""]], inputs: { options: "options" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAutocomplete]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./app/shared/filter-by-date.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByDatePipe", function() { return FilterByDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterByDatePipe {
    transform(items, date) {
        if (!items) {
            return;
        }
        return items
            .filter(item => item.date && item.date.getTime() === date.getTime());
    }
}
FilterByDatePipe.ɵfac = function FilterByDatePipe_Factory(t) { return new (t || FilterByDatePipe)(); };
FilterByDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterByDate", type: FilterByDatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterByDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterByDate'
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/shared/shared.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _autocomplete_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/autocomplete.directive.ts");
/* harmony import */ var _filter_by_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/filter-by-date.pipe.ts");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_autocomplete_directive__WEBPACK_IMPORTED_MODULE_2__["AutocompleteDirective"],
        _filter_by_date_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterByDatePipe"]], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]], exports: [_autocomplete_directive__WEBPACK_IMPORTED_MODULE_2__["AutocompleteDirective"],
        _filter_by_date_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterByDatePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]
                ],
                declarations: [
                    _autocomplete_directive__WEBPACK_IMPORTED_MODULE_2__["AutocompleteDirective"],
                    _filter_by_date_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterByDatePipe"]
                ],
                providers: [],
                exports: [
                    _autocomplete_directive__WEBPACK_IMPORTED_MODULE_2__["AutocompleteDirective"],
                    _filter_by_date_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterByDatePipe"]
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./main.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.module.tns.ts");

        const isAndroid = __webpack_require__("../node_modules/@nativescript/core/index.js").isAndroid;
        if (isAndroid && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/index.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-angular.js")();
            
            
        if (false) {}
        
            
        
        // this import should be first in order to load some required settings (like globals and reflect-metadata)


// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
Object(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["platformNativeScriptDynamic"])().bootstrapModule(_src_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./main.tns.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hcHAubW9kdWxlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0by1nZW5lcmF0ZWQvYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9jb3JlLm1vZHVsZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvZmxhdHBpY2tyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvZnVzZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL3Rhc2suc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS91aS1raXQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZmVhdHVyZS9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZlYXR1cmUvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZlYXR1cmUvY2FsZW5kYXIvY2FsZW5kYXIubW9kdWxlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZmVhdHVyZS9mZWF0dXJlLm1vZHVsZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZlYXR1cmUvbm90ZWJvb2svbm90ZWJvb2suY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9mZWF0dXJlL25vdGVib29rL25vdGVib29rLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9mZWF0dXJlL25vdGVib29rL25vdGVib29rLm1vZHVsZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9hdXRvY29tcGxldGUuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvZmlsdGVyLWJ5LWRhdGUucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL21haW4udG5zLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIn4vcGFja2FnZS5qc29uXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7QUNaQSwrR0FBaUUsbUJBQU8sQ0FBQyxpSUFBK0Y7QUFDeEssZ0VBQWdFLG1CQUFPLENBQUMsaUlBQStGO0FBQ3ZLLGlFQUFpRSxtQkFBTyxDQUFDLGlJQUErRjtBQUN4SyxnRUFBZ0UsbUJBQU8sQ0FBQyxpSUFBK0YsR0FBRyxrQkFBa0Isa0NBQWtDLFVBQVUsaUVBQWlFLEVBQUUsaUVBQWlFLEVBQUUsMkpBQTJKO0FBQ3pnQixRQUFRLEtBQVUsRUFBRSxFQUtmOzs7Ozs7Ozs7O0FDVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDd0I7QUFJZ0I7QUFDQTs7O0FBRTFFLE1BQU0sTUFBTSxHQUFXO0lBQzVCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsOEZBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw4RkFBaUIsRUFBRTtDQUNuRCxDQUFDO0FBTUssTUFBTSxnQkFBZ0I7OytGQUFoQixnQkFBZ0I7MEpBQWhCLGdCQUFn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O2dCQUNELE9BQU8sRUFBRTtvQkFDUCw4REFBZ0I7aUJBQ2pCO2FBQ0Y7Ozs7Ozs7Ozs7QUN0QnlHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUcsT0FBTyxFQUFFLGtGQUFtQyxZQUF3QjtBQUVwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsd0ZBQWdGO0FBQ2hGLCtFQUEwRTtBQUMxRSxTQUE2SDtBQUNwRDtBQUN6RSxRQUF3RTtBQUN4RSxrSEFBbUY7QUFDbkYsWUFBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYekQsMkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvYXV0by1nZW5lcmF0ZWQvYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGVib29rQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvZmVhdHVyZS9ub3RlYm9vay9ub3RlYm9vay5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9mZWF0dXJlL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnbm90ZWJvb2snLCBjb21wb25lbnQ6IE5vdGVib29rQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2NhbGVuZGFyJywgY29tcG9uZW50OiBDYWxlbmRhckNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgXG59XG4iLCI8R3JpZExheW91dD5cbiAgPCEtLSBUaGlzIHdpbGwgY29udGFpbiBhbnkgYW5ndWxhciByb3V0ZXMgeW91IHNldHVwIC0tPlxuICA8QnV0dG9uIHRleHQ9XCJDdWFkZXJub1wiIFtuc1JvdXRlckxpbmtdPVwiWycvbm90ZWJvb2snXVwiIHBhZ2VUcmFuc2l0aW9uPVwic2xpZGVcIj5cbiAgPC9CdXR0b24+XG4gIDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XG5cbiAgXG4gIFxuPC9HcmlkTGF5b3V0PiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BLCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgbG9jYWxlRXMgZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2VzXCI7XG5yZWdpc3RlckxvY2FsZURhdGEobG9jYWxlRXMpO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRucyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dG9HZW5lcmF0ZWRDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BzcmMvYXBwL2NvcmUvY29yZS5tb2R1bGUudG5zJztcbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAc3JjL2FwcC9mZWF0dXJlL2ZlYXR1cmUubW9kdWxlLnRucyc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICdAc3JjL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50bnMnO1xuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGVEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmcgYW5kL29yIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgQXV0b0dlbmVyYXRlZENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIEZlYXR1cmVNb2R1bGUsXG4gICAgQ29yZU1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiAnZXMtQ08nIH1cbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWF1dG8tZ2VuZXJhdGVkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxCdXR0b24gdGV4dD1cImF1dG8tZ2VuZXJhdGVkIHdvcmtzIVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+PC9CdXR0b24+IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL2NvcmUvdGFzay5zZXJ2aWNlJztcbmltcG9ydCB7IFVpS2l0U2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL2NvcmUvdWkta2l0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmxhdHBpY2tyU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL2NvcmUvZmxhdHBpY2tyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRnVzZVNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9jb3JlL2Z1c2Uuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gIFRhc2tTZXJ2aWNlLFxuICBVaUtpdFNlcnZpY2UsXG4gIEZsYXRwaWNrclNlcnZpY2UsXG4gIEZ1c2VTZXJ2aWNlXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgZmxhdHBpY2tyIGZyb20gJ2ZsYXRwaWNrcic7XG5pbXBvcnQgeyBTcGFuaXNoIH0gZnJvbSAnZmxhdHBpY2tyL2Rpc3QvbDEwbi9lcydcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmxhdHBpY2tyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsb2NhbGl6ZVNwYW5pc2goKTogdm9pZCB7XG4gICAgZmxhdHBpY2tyLmxvY2FsaXplKFNwYW5pc2gpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgRnVzZSBmcm9tIFwiZnVzZS5qc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGdXNlU2VydmljZSB7XG4gIG9wdGlvbnM6IEZ1c2UuSUZ1c2VPcHRpb25zPGFueT4gPSB7IGlnbm9yZUxvY2F0aW9uOiB0cnVlLCB0aHJlc2hvbGQ6IDAuMiB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2VhcmNoRnJvbUxpc3QoXG4gICAgcGF0dGVybjogc3RyaW5nLCBsaXN0OiBhbnlbXSwga2V5czogc3RyaW5nW11cbiAgKTogYW55W10ge1xuICAgIHRoaXMub3B0aW9ucy5rZXlzID0ga2V5cztcbiAgICBjb25zdCBmdXNlID0gbmV3IEZ1c2UobGlzdCwgdGhpcy5vcHRpb25zKTtcbiAgICByZXR1cm4gZnVzZS5zZWFyY2gocGF0dGVybikubWFwKHJlc3VsdCA9PiByZXN1bHQuaXRlbSk7XG4gIH1cbiAgXG59XG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi9zaGFyZWQvdGFzayc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRhc2tTZXJ2aWNlIHtcbiAgdGFza3NFbmRwb2ludCA9ICdodHRwOi8vMTAuMC4yLjI6ODA4MC9hcGkvdjEvdGFza3MnO1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cbiAgXG4gIGdldFRhc2tzKCk6IE9ic2VydmFibGU8VGFza1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VGFza1tdPih0aGlzLnRhc2tzRW5kcG9pbnQpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKHRhc2tzID0+IHRoaXMuZm9ybWF0QWxsVGFza3NEYXRlQW5kVGltZSh0YXNrcykpLFxuICAgICAgICB0YXAodGFza3MgPT4gdGFza3MucmV2ZXJzZSgpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0QWxsVGFza3NEYXRlQW5kVGltZSh0YXNrczogVGFza1tdKTogVGFza1tdIHtcbiAgICB0YXNrcy5tYXAodGFzayA9PiB0aGlzLmZvcm1hdFRhc2tEYXRlQW5kVGltZSh0YXNrKSk7XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRUYXNrRGF0ZUFuZFRpbWUodGFzazogVGFzayk6IFRhc2sge1xuICAgIC8vIFRoZSBzZXJ2ZXIgcmV0dXJucyB0aGUgZGF0ZSBhcyBhbiBhcnJheSBvZiB5ZWFyLCBtb250aCBhbmQgZGF5XG4gICAgaWYgKHRhc2suZGF0ZSAmJiBBcnJheS5pc0FycmF5KHRhc2suZGF0ZSkpIHtcbiAgICAgIHRhc2suZGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgfVxuICAgIC8vIFRoZSBzZXJ2ZXIgcmV0dXJucyB0aGUgdGltZSBhcyBhIG51bWJlciAodGltZXN0YW1wKVxuICAgIGlmICh0YXNrLnRpbWUgJiYgTnVtYmVyLmlzSW50ZWdlcih0YXNrLnRpbWUpKSB7XG4gICAgICB0YXNrLnRpbWUgPSBuZXcgRGF0ZSh0YXNrLnRpbWUgYXMgYW55ICogMTAwMCk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrO1xuICB9XG5cbiAgcG9zdFRhc2sodGFzazogVGFzayk6IE9ic2VydmFibGU8VGFzaz4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUYXNrPih0aGlzLnRhc2tzRW5kcG9pbnQsIHRhc2spXG4gICAgICAucGlwZShtYXAodGFzayA9PiB0aGlzLmZvcm1hdFRhc2tEYXRlQW5kVGltZSh0YXNrKSkpO1xuICB9XG4gIFxuICBkZWxldGVUYXNrKHRhc2s6IFRhc2spOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTx2b2lkPihgJHt0aGlzLnRhc2tzRW5kcG9pbnR9LyR7dGFzay5pZH1gKTtcbiAgfVxuXG4gIHRvZ2dsZVRhc2tBc0RvbmUodGFzazogVGFzayk6IE9ic2VydmFibGU8VGFzaz4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFRhc2s+KFxuICAgICAgYCR7dGhpcy50YXNrc0VuZHBvaW50fS8ke3Rhc2suaWR9P2FjdGlvbj10b2dnbGVBc0RvbmVgLCB0YXNrXG4gICAgKTtcbiAgfVxuXG4gIGVkaXRUYXNrKHRhc2s6IFRhc2spOiBPYnNlcnZhYmxlPFRhc2s+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxUYXNrPihcbiAgICAgIGAke3RoaXMudGFza3NFbmRwb2ludH0vJHt0YXNrLmlkfT9hY3Rpb249ZWRpdGAsIHRhc2tcbiAgICApLnBpcGUobWFwKHRhc2sgPT4gdGhpcy5mb3JtYXRUYXNrRGF0ZUFuZFRpbWUodGFzaykpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgVUlraXQgZnJvbSAndWlraXQnO1xuaW1wb3J0IEljb25zIGZyb20gJ3Vpa2l0L2Rpc3QvanMvdWlraXQtaWNvbnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVaUtpdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgdXNlVUlraXRJY29ucygpOiB2b2lkIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgVUlraXQudXNlKEljb25zKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbmZpcm1hdGlvbk1vZGFsKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBVSWtpdC5tb2RhbC5jb25maXJtKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxTdGFja0xheW91dD5cbiAgPExhYmVsIHRleHQ9XCJDYWxlbmRhckNvbXBvbmVudCB3b3Jrc1wiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG4gIDxMYWJlbCB0ZXh0PVwiVGhpcyBpcyBhIG1pZ3JhdGVkIGNvbXBvbmVudFwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG4gIDxMYWJlbCB0ZXh0PVwiVXBkYXRlIGl0IHRvIHByb3ZpZGUgdGhlIFVJIGVsZW1lbnRzIHJlcXVpcmVkIGluIHlvdXIgbW9iaWxlIGFwcFwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG48L1N0YWNrTGF5b3V0PlxuXG48IS0tXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XG5cbjxwPmNhbGVuZGFyIHdvcmtzITwvcD5cblxuLS0+IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2ZlYXR1cmUvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgQ2FsZW5kYXJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgXSxcbiAgZXhwb3J0czogW0NhbGVuZGFyQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudG5zJztcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvZmVhdHVyZS9jYWxlbmRhci9jYWxlbmRhci5tb2R1bGUudG5zJztcbmltcG9ydCB7IE5vdGVib29rTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvZmVhdHVyZS9ub3RlYm9vay9ub3RlYm9vay5tb2R1bGUudG5zJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIE5vdGVib29rTW9kdWxlLFxuICAgIENhbGVuZGFyTW9kdWxlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGbGF0cGlja3JTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvY29yZS9mbGF0cGlja3Iuc2VydmljZSc7XG5pbXBvcnQgeyBGdXNlU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL2NvcmUvZnVzZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRhc2tTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvY29yZS90YXNrLnNlcnZpY2UnO1xuaW1wb3J0IHsgVWlLaXRTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvY29yZS91aS1raXQuc2VydmljZSc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnQHNyYy9hcHAvc2hhcmVkL3Rhc2snO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbm90ZWJvb2snLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90ZWJvb2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ub3RlYm9vay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5vdGVib29rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgdGFza3M6IFRhc2tbXTtcbiAgZmlsdGVyZWRUYXNrczogVGFza1tdO1xuICBwbGFjZXM6IHN0cmluZ1tdO1xuICB0YWdzOiBzdHJpbmdbXTtcbiAgZGF0ZXM6IERhdGVbXTtcbiAgXG4gIG5ld1Rhc2tGb3JtQXJyYXk6IEZvcm1BcnJheSA9IG5ldyBGb3JtQXJyYXkoW10pO1xuICBAVmlld0NoaWxkcmVuKCdkZXNjcmlwdGlvbklucHV0JykgZGVzY3JpcHRpb25JbnB1dFJlZjogUXVlcnlMaXN0PGFueT47XG4gIHByaXZhdGUgZGVzY3JpcHRpb25JbnB1dFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBAVmlld0NoaWxkcmVuKCdlZGl0VGFza0RhdGUnKSBlZGl0RGF0ZUlucHV0UmVmOiBRdWVyeUxpc3Q8YW55PjtcbiAgcHJpdmF0ZSBlZGl0RGF0ZUlucHV0U3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBAVmlld0NoaWxkcmVuKCdlZGl0VGFza1RpbWUnKSBlZGl0VGltZUlucHV0UmVmOiBRdWVyeUxpc3Q8YW55PjtcbiAgcHJpdmF0ZSBlZGl0VGltZUlucHV0U3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGVkaXRNb2RlRm9yVGFza3M6IGJvb2xlYW5bXTtcbiAgZWRpdFRhc2tGb3JtQXJyYXk6IEZvcm1BcnJheSA9IG5ldyBGb3JtQXJyYXkoW10pO1xuXG4gIHNlYXJjaEZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7IHF1ZXJ5OiBuZXcgRm9ybUNvbnRyb2woJycpIH0pO1xuICBzZWFyY2hQYXR0ZXJuOiBzdHJpbmcgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFza1NlcnZpY2U6IFRhc2tTZXJ2aWNlLFxuICAgIHByaXZhdGUgdWlLaXQ6IFVpS2l0U2VydmljZSxcbiAgICBwcml2YXRlIGZsYXRwaWNrcjogRmxhdHBpY2tyU2VydmljZSxcbiAgICBwcml2YXRlIGZ1c2U6IEZ1c2VTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7ICAgIFxuICAgIHRoaXMudWlLaXQudXNlVUlraXRJY29ucygpO1xuICAgIHRoaXMuZmxhdHBpY2tyLmxvY2FsaXplU3BhbmlzaCgpO1xuICAgIHRoaXMudGFza1NlcnZpY2UuZ2V0VGFza3MoKS5zdWJzY3JpYmUodGFza3MgPT4ge1xuICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgICAgdGhpcy5maWx0ZXJUYXNrc0J5U3RyaW5nKHRoaXMuc2VhcmNoUGF0dGVybik7XG4gICAgICB0aGlzLnBsYWNlcyA9IHRoaXMuZXh0cmFjdExpc3RPZlRhc2tzQ29tbW9uUHJvcGVydGllcyh0YXNrcywgJ3BsYWNlJyk7XG4gICAgICB0aGlzLnRhZ3MgPSB0aGlzLmV4dHJhY3RMaXN0T2ZUYXNrc0NvbW1vblByb3BlcnRpZXModGFza3MsICd0YWcnKTtcbiAgICAgIHRoaXMuZGF0ZXMgPSB0aGlzLmV4dHJhY3RMaXN0T2ZDb21tb25EYXRlcyh0YXNrcyk7XG4gICAgICB0aGlzLnNvcnREYXRlc0Rlc2NlbmRpbmcodGhpcy5kYXRlcyk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0U3Vic2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbklucHV0UmVmLlxuICAgICAgY2hhbmdlcy5zdWJzY3JpYmUoXG4gICAgICByZXMgPT4ge1xuICAgICAgICBpZiAodGhpcy5kZXNjcmlwdGlvbklucHV0UmVmLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRSZWYubGFzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5lZGl0RGF0ZUlucHV0U3Vic2NyaXB0aW9uID0gdGhpcy5lZGl0RGF0ZUlucHV0UmVmLmNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgcmVzID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdERhdGVJbnB1dFJlZi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5lZGl0RGF0ZUlucHV0UmVmLmxhc3QuY29uZmlnLmRlZmF1bHREYXRlO1xuICAgICAgICAgICAgdGhpcy5lZGl0RGF0ZUlucHV0UmVmLmxhc3QuZmxhdHBpY2tyLnNldERhdGUoZGF0ZSwgdHJ1ZSk7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLmVkaXRUaW1lSW5wdXRTdWJzY3JpcHRpb24gPSB0aGlzLmVkaXRUaW1lSW5wdXRSZWYuY2hhbmdlcy5zdWJzY3JpYmUoXG4gICAgICByZXMgPT4ge1xuICAgICAgICBpZiAodGhpcy5lZGl0VGltZUlucHV0UmVmLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSB0aGlzLmVkaXRUaW1lSW5wdXRSZWYubGFzdC5jb25maWcuZGVmYXVsdEhvdXI7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gdGhpcy5lZGl0VGltZUlucHV0UmVmLmxhc3QuY29uZmlnLmRlZmF1bHRNaW51dGU7XG4gICAgICAgICAgICBpZiAoaG91ciA9PT0gbnVsbCB8fCBtaW51dGVzID09PSBudWxsKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS5zZXRIb3Vycyhob3VyLCBtaW51dGVzKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdFRpbWVJbnB1dFJlZi5sYXN0LmZsYXRwaWNrci5zZXREYXRlKHRpbWUsIHRydWUpO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5lZGl0RGF0ZUlucHV0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5lZGl0VGltZUlucHV0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBmaWx0ZXJUYXNrc0J5U3RyaW5nKHBhdHRlcm46IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChwYXR0ZXJuICYmIHBhdHRlcm4udHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VhcmNoUGF0dGVybiA9IHBhdHRlcm4udHJpbSgpO1xuICAgICAgdGhpcy5maWx0ZXJlZFRhc2tzID0gdGhpcy5mdXNlLnNlYXJjaEZyb21MaXN0KFxuICAgICAgICB0aGlzLnNlYXJjaFBhdHRlcm4sIHRoaXMudGFza3MsIFsnZGVzY3JpcHRpb24nLCAncGxhY2UnLCAndGFnJ11cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoUGF0dGVybiA9IFwiXCI7XG4gICAgICB0aGlzLmZpbHRlcmVkVGFza3MgPSB0aGlzLnRhc2tzO1xuICAgIH1cbiAgICB0aGlzLnJlc2V0RWRpdE1vZGVGb3JUYXNrcygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEVkaXRNb2RlRm9yVGFza3MoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0TW9kZUZvclRhc2tzID0gbmV3IEFycmF5KHRoaXMuZmlsdGVyZWRUYXNrcy5sZW5ndGgpLmZpbGwoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0TGlzdE9mVGFza3NDb21tb25Qcm9wZXJ0aWVzKFxuICAgIHRhc2tzOiBUYXNrW10sIHByb3BlcnR5OiBzdHJpbmdcbiAgKTogYW55W10ge1xuICAgIHJldHVybiBbLi4ubmV3IFNldChcbiAgICAgIHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2tbcHJvcGVydHldKS5tYXAodGFzayA9PiB0YXNrW3Byb3BlcnR5XSlcbiAgICApXTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdExpc3RPZkNvbW1vbkRhdGVzKHRhc2tzOiBUYXNrW10pOiBEYXRlW10ge1xuICAgIHJldHVybiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmRhdGUpXG4gICAgICAubWFwKHRhc2sgPT4gdGFzay5kYXRlKVxuICAgICAgLmZpbHRlcigoZGF0ZSwgaW5kZXgsIHNlbGYpID0+IGluZGV4ID09PSBzZWxmLmZpbmRJbmRleChkID0+IChcbiAgICAgICAgZC5nZXRUaW1lKCkgPT09IGRhdGUuZ2V0VGltZSgpXG4gICAgICApKSk7XG4gIH1cblxuICBwcml2YXRlIHNvcnREYXRlc0Rlc2NlbmRpbmcoZGF0ZXM6IERhdGVbXSk6IERhdGVbXSB7XG4gICAgcmV0dXJuIGRhdGVzLnNvcnQoKGEsIGIpID0+IGIuZ2V0VGltZSgpIC0gYS5nZXRUaW1lKCkpO1xuICB9XG5cbiAgcHJvbXB0Rm9yTmV3VGFzaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZXdUYXNrSW5wdXRQcm9tcHRFeGlzdHMoKSkgeyByZXR1cm47IH1cbiAgICBjb25zdCBuZXdGb3JtR3JvdXAgPSB0aGlzLmNyZWF0ZU5ld0Zvcm1Hcm91cEZvclRhc2soKTtcbiAgICB0aGlzLm5ld1Rhc2tGb3JtQXJyYXkucHVzaChuZXdGb3JtR3JvdXApO1xuICB9IFxuXG4gIHByaXZhdGUgY3JlYXRlTmV3Rm9ybUdyb3VwRm9yVGFzayh0YXNrPzogYW55KTogRm9ybUdyb3VwIHtcbiAgICB0YXNrID0gdGFzayAhPT0gdW5kZWZpbmVkID8gdGFzayA6ICcnO1xuICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIGRlc2NyaXB0aW9uOiBuZXcgRm9ybUNvbnRyb2wodGFzay5kZXNjcmlwdGlvbiB8fCAnJyksXG4gICAgICBkYXRlOiBuZXcgRm9ybUNvbnRyb2wodGFzay5kYXRlIHx8ICcnKSxcbiAgICAgIHRpbWU6IG5ldyBGb3JtQ29udHJvbCh0YXNrLnRpbWUgfHwgJycpLFxuICAgICAgcGxhY2U6IG5ldyBGb3JtQ29udHJvbCh0YXNrLnBsYWNlIHx8ICcnKSxcbiAgICAgIHRhZzogbmV3IEZvcm1Db250cm9sKHRhc2sudGFnIHx8ICcnKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXdUYXNrSW5wdXRQcm9tcHRFeGlzdHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmV3VGFza0Zvcm1BcnJheS5sZW5ndGggPiAwO1xuICB9XG5cbiAgc2F2ZVRhc2sobmV3VGFzazogVGFzayk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVGFza0Rlc2NyaXB0aW9uRW1wdHkobmV3VGFzaykpIHsgcmV0dXJuOyB9XG4gICAgbmV3VGFzayA9IHRoaXMuZm9ybWF0VGFza0RhdGVBbmRUaW1lKG5ld1Rhc2spO1xuICAgIG5ld1Rhc2suZG9uZSA9IGZhbHNlO1xuICAgIHRoaXMudGFza1NlcnZpY2UucG9zdFRhc2sobmV3VGFzaykuc3Vic2NyaWJlKHRhc2sgPT4ge1xuICAgICAgdGhpcy50YXNrcy51bnNoaWZ0KHRhc2spO1xuICAgICAgdGhpcy5maWx0ZXJUYXNrc0J5U3RyaW5nKHRoaXMuc2VhcmNoUGF0dGVybik7XG4gICAgICB0aGlzLmFkZFRhc2tQcm9wZXJ0eVRvU3VnZ2VzdGlvbnModGFzaywgJ3BsYWNlJywgdGhpcy5wbGFjZXMpO1xuICAgICAgdGhpcy5hZGRUYXNrUHJvcGVydHlUb1N1Z2dlc3Rpb25zKHRhc2ssICd0YWcnLCB0aGlzLnRhZ3MpO1xuICAgIH0pO1xuICAgIHRoaXMuY2xlYXJUYXNrQ2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1Rhc2tEZXNjcmlwdGlvbkVtcHR5KHRhc2s6IFRhc2spOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGFzay5kZXNjcmlwdGlvbi50cmltKCkubGVuZ3RoID09IDA7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdFRhc2tEYXRlQW5kVGltZSh0YXNrOiBUYXNrKTogVGFzayB7XG4gICAgdGFzay5kYXRlID0gdGFzay5kYXRlWzBdO1xuICAgIHRhc2sudGltZSA9IHRhc2sudGltZVswXTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG4gIHByaXZhdGUgYWRkVGFza1Byb3BlcnR5VG9TdWdnZXN0aW9ucyhcbiAgICB0YXNrOiBUYXNrLCBwcm9wZXJ0eTogc3RyaW5nLCBzdWdnZXN0aW9uczogc3RyaW5nW11cbiAgKTogdm9pZCB7XG4gICAgaWYgKHRhc2tbcHJvcGVydHldICYmIHN1Z2dlc3Rpb25zLmluZGV4T2YodGFza1twcm9wZXJ0eV0pID09PSAtMSkge1xuICAgICAgc3VnZ2VzdGlvbnMucHVzaCh0YXNrW3Byb3BlcnR5XSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhclRhc2tDaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmV3VGFza0Zvcm1BcnJheS5jbGVhcigpO1xuICB9XG5cbiAgc2hvd0RlbGV0ZU1vZGFsRm9yVGFzayh0YXNrOiBUYXNrKTogdm9pZCB7XG4gICAgdGhpcy51aUtpdC5jcmVhdGVDb25maXJtYXRpb25Nb2RhbChgXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1ay10ZXh0LWxlYWRcIj5cbiAgICAgICAgICAgICAgwr9Fc3TDoSBzZWd1cm8gZGUgcXVlIGRlc2VhIGVsaW1pbmFyIGxhIHRhcmVhIHNlbGVjY2lvbmFkYT9cbiAgICAgICAgICA8L3NwYW4+XG4gICAgYCkudGhlbigoY29uZmlybSkgPT4gdGhpcy5kZWxldGVUYXNrKHRhc2spLCAoY2FuY2VsKSA9PiB7IH0pOyAgICBcbiAgfVxuXG4gIGRlbGV0ZVRhc2sodGFzazogVGFzayk6IHZvaWQge1xuICAgIHRoaXMudGFza1NlcnZpY2UuZGVsZXRlVGFzayh0YXNrKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKG90aGVyVGFzayA9PiBvdGhlclRhc2sgIT09IHRhc2spO1xuICAgICAgdGhpcy5maWx0ZXJUYXNrc0J5U3RyaW5nKHRoaXMuc2VhcmNoUGF0dGVybik7XG4gICAgICB0aGlzLnJlbW92ZVRhc2tQcm9wZXJ0eUZyb21TdWdnZXN0aW9ucyh0YXNrLCAncGxhY2UnLCB0aGlzLnBsYWNlcyk7XG4gICAgICB0aGlzLnJlbW92ZVRhc2tQcm9wZXJ0eUZyb21TdWdnZXN0aW9ucyh0YXNrLCAndGFnJywgdGhpcy50YWdzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlVGFza1Byb3BlcnR5RnJvbVN1Z2dlc3Rpb25zKFxuICAgIHRhc2s6IFRhc2ssIHByb3BlcnR5OiBzdHJpbmcsIHN1Z2dlc3Rpb25zOiBzdHJpbmdbXVxuICApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1Rhc2tQcm9wZXJ0eU5vdFByZXNlbnRJbkFueVRhc2sodGFza1twcm9wZXJ0eV0sIHByb3BlcnR5KSkge1xuICAgICAgY29uc3QgcHJvcGVydHlUb1JlbW92ZUluZGV4ID0gc3VnZ2VzdGlvbnMuZmluZEluZGV4KFxuICAgICAgICBwcm9wZXJ0eVRvRGVsZXRlID0+IHByb3BlcnR5VG9EZWxldGUgPT09IHRhc2tbcHJvcGVydHldXG4gICAgICApO1xuICAgICAgc3VnZ2VzdGlvbnMuc3BsaWNlKHByb3BlcnR5VG9SZW1vdmVJbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc1Rhc2tQcm9wZXJ0eU5vdFByZXNlbnRJbkFueVRhc2soXG4gICAgcHJvcGVydHlWYWx1ZTogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhc2tzXG4gICAgICAuZmlsdGVyKHRhc2sgPT4gdGFza1twcm9wZXJ0eV0gPT09IHByb3BlcnR5VmFsdWUpLmxlbmd0aCA9PSAwO1xuICB9XG5cbiAgdG9nZ2xlVGFza0FzRG9uZSh0YXNrOiBUYXNrKTogdm9pZCB7XG4gICAgdGhpcy50YXNrU2VydmljZS50b2dnbGVUYXNrQXNEb25lKHRhc2spLnN1YnNjcmliZShkb25lVGFzayA9PiB7XG4gICAgICBjb25zdCBkb25lVGFza0luZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgoXG4gICAgICAgIHRhc2tUb1RvZ2dsZSA9PiB0YXNrVG9Ub2dnbGUgPT09IHRhc2tcbiAgICAgICk7XG4gICAgICB0aGlzLnRhc2tzW2RvbmVUYXNrSW5kZXhdLmRvbmUgPSBkb25lVGFzay5kb25lO1xuICAgIH0pO1xuICB9XG4gIFxuICB0b2dnbGVFZGl0TW9kZUZvclRhc2sodGFzazogVGFzayk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1Rhc2tJbkVkaXRNb2RlKHRhc2spKSB0aGlzLnJlc2V0RWRpdE1vZGVGb3JUYXNrcygpO1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IHRoaXMuZmluZFRhc2tJbmRleCh0YXNrKTtcbiAgICB0aGlzLmVkaXRNb2RlRm9yVGFza3NbdGFza0luZGV4XSA9ICF0aGlzLmVkaXRNb2RlRm9yVGFza3NbdGFza0luZGV4XTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFRhc2tJbmRleCh0YXNrOiBUYXNrKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRUYXNrcy5maW5kSW5kZXgoXG4gICAgICB0YXNrVG9GaW5kID0+IHRhc2tUb0ZpbmQgPT09IHRhc2tcbiAgICApO1xuICB9XG5cbiAgaXNUYXNrSW5FZGl0TW9kZSh0YXNrOiBUYXNrKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdGFza0luZGV4ID0gdGhpcy5maW5kVGFza0luZGV4KHRhc2spO1xuICAgIHJldHVybiB0aGlzLmVkaXRNb2RlRm9yVGFza3NbdGFza0luZGV4XTtcbiAgfVxuXG4gIHNldEZvcm1Db250cm9sRm9yVGFzayh0YXNrOiBUYXNrKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVFZGl0TW9kZUZvclRhc2sodGFzayk7XG5cbiAgICBpZiAodGhpcy5pc1Rhc2tJbkVkaXRNb2RlKHRhc2spKSB7XG4gICAgICBjb25zdCBlZGl0Rm9ybUdyb3VwID0gdGhpcy5jcmVhdGVOZXdGb3JtR3JvdXBGb3JUYXNrKHRhc2spO1xuICAgICAgdGhpcy5lZGl0VGFza0Zvcm1BcnJheS5zZXRDb250cm9sKDAsIGVkaXRGb3JtR3JvdXApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVkaXRUYXNrRm9ybUFycmF5LmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgZWRpdFRhc2sob2xkVGFzazogVGFzaywgZWRpdGVkVGFzazogVGFzayk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVGFza0Rlc2NyaXB0aW9uRW1wdHkoZWRpdGVkVGFzaykpIHsgcmV0dXJuOyB9XG4gICAgZWRpdGVkVGFzay5pZCA9IG9sZFRhc2suaWQ7XG4gICAgZWRpdGVkVGFzay5kb25lID0gb2xkVGFzay5kb25lO1xuICAgIGVkaXRlZFRhc2sgPSB0aGlzLmZvcm1hdFRhc2tEYXRlQW5kVGltZShlZGl0ZWRUYXNrKTtcblxuICAgIHRoaXMudGFza1NlcnZpY2UuZWRpdFRhc2soZWRpdGVkVGFzaykuc3Vic2NyaWJlKGVkaXRlZFRhc2sgPT4ge1xuICAgICAgdGhpcy50b2dnbGVFZGl0TW9kZUZvclRhc2sob2xkVGFzayk7XG4gICAgICB0aGlzLmVkaXRUYXNrRm9ybUFycmF5LmNsZWFyKCk7XG5cbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHRoaXMuZmluZFRhc2tJbmRleChvbGRUYXNrKTtcbiAgICAgIHRoaXMuZmlsdGVyZWRUYXNrc1t0YXNrSW5kZXhdID0gZWRpdGVkVGFzaztcblxuICAgICAgdGhpcy5wbGFjZXMgPSB0aGlzLmV4dHJhY3RMaXN0T2ZUYXNrc0NvbW1vblByb3BlcnRpZXMoXG4gICAgICAgIHRoaXMudGFza3MsICdwbGFjZSdcbiAgICAgICk7XG4gICAgICB0aGlzLnRhZ3MgPSB0aGlzLmV4dHJhY3RMaXN0T2ZUYXNrc0NvbW1vblByb3BlcnRpZXModGhpcy50YXNrcywgJ3RhZycpO1xuICAgIH0pO1xuICB9XG5cbn1cbiIsIjxTdGFja0xheW91dD5cbiAgPExhYmVsICpuZ0Zvcj1cImxldCB0YXNrIG9mIGZpbHRlcmVkVGFza3NcIiB0ZXh0PVwie3sgdGFzay5kZXNjcmlwdGlvbiB9fVwiPjwvTGFiZWw+XG48L1N0YWNrTGF5b3V0PlxuXG48IS0tXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XG5cbjxkaXZcbiAgICBjbGFzcz1cInVrLXNlY3Rpb24gdWstc2VjdGlvbi1zbWFsbCB1ay1zZWN0aW9uLXByaW1hcnlcIlxuICAgIHVrLXN0aWNreT1cImFuaW1hdGlvbjogdWstYW5pbWF0aW9uLXNsaWRlLXRvcFwiXG4gICAgaWQ9XCJoZWFkZXJTZWN0aW9uXCJcbj4gIFxuICAgIDxkaXYgY2xhc3M9XCJ1ay1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVrLWNoaWxkLXdpZHRoLWV4cGFuZEBzXCIgdWstZ3JpZD5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1zZWFyY2ggdWstc2VhcmNoLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwic2VhcmNoRm9ybUdyb3VwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVrLXNlYXJjaC1pY29uLWZsaXBcIiB1ay1zZWFyY2gtaWNvbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInVrLXNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIHRhcmVhcyAocG9yIGRlc2NyaXBjacOzbiwgbHVnYXIgbyBldGlxdWV0YSlcIlxuICAgICAgICAgICAgICAgICAgICAoaW5wdXQpPVwiZmlsdGVyVGFza3NCeVN0cmluZyhzZWFyY2hJbnB1dC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAjc2VhcmNoSW5wdXRcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWstZmxleCB1ay1mbGV4LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJvbXB0Rm9yTmV3VGFzaygpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEHDsWFkaXIgdGFyZWFcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVrLWNoaWxkLXdpZHRoLWV4cGFuZEBzXCIgdWstZ3JpZD5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNvbnRyb2wgb2YgbmV3VGFza0Zvcm1BcnJheS5jb250cm9sczsgbGV0IGk9aW5kZXhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibmV3LXRhc2stZm9ybVwiXG4gICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJjb250cm9sXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1ay1tYXJnaW5cIiB1ay1tYXJnaW4+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1pbnB1dCB1ay1pbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIChrZXl1cC5lc2MpPVwiY2xlYXJUYXNrQ2hhbmdlcygpXCJcbiAgICAgICAgICAgICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFc2NyaWJhIHN1IHRhcmVhIGFxdcOtXCJcbiAgICAgICAgICAgICAgICAgICAgI2Rlc2NyaXB0aW9uSW5wdXRcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1mb3JtLWljb24gdWstZm9ybS1pY29uLWZsaXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdWstaWNvbj1cImljb246ICBjYWxlbmRhclwiXG4gICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxuZzItZmxhdHBpY2tyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZENsYXNzPVwidWstaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGZWNoYVwiXG4gICAgICAgICAgICAgICAgICAgID4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9uZzItZmxhdHBpY2tyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1ay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidWstZm9ybS1pY29uIHVrLWZvcm0taWNvbi1mbGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVrLWljb249XCJpY29uOiAgY2xvY2tcIlxuICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8bmcyLWZsYXRwaWNrclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcz1cInVrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVRpbWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9DYWxlbmRhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiAnSDppJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lXzI0aHI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93SW5wdXQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3JhXCJcbiAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L25nMi1mbGF0cGlja3I+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1mb3JtLWljb24gdWstZm9ybS1pY29uLWZsaXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdWstaWNvbj1cImljb246ICBsb2NhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwbGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMdWdhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cInBsYWNlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1mb3JtLWljb24gdWstZm9ybS1pY29uLWZsaXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdWstaWNvbj1cImljb246ICB0YWdcIlxuICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidWstaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGFnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3LDrWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJ0YWdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNhdmVUYXNrKGNvbnRyb2wudmFsdWUpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHVrLWljb249XCJpY29uOiAgY2hlY2tcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRpc21pc3MtbmV3LXRhc2stYnV0dG9uIHVrLWJ1dHRvbiB1ay1idXR0b24tZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xlYXJUYXNrQ2hhbmdlcygpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHVrLWljb249XCJpY29uOiAgY2xvc2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInVrLXNlY3Rpb24gdWstc2VjdGlvbi1tdXRlZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1ay1jb250YWluZXJcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwidGFzay1saXN0IHVrLWxpc3QgdWstbGlzdC1kaXZpZGVyXCI+XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdGFzayBvZiBmaWx0ZXJlZFRhc2tzXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInRhc2staXRlbSB1ay1jaGlsZC13aWR0aC1leHBhbmRAcyB1ay10ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgdWstZ3JpZFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0YXNrLWZpZWxkIHRhc2stZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3Rhc2stZG9uZSc6IHRhc2suZG9uZX1cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlVGFza0FzRG9uZSh0YXNrKVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWlzVGFza0luRWRpdE1vZGUodGFzaylcIlxuICAgICAgICAgICAgICAgID57eyB0YXNrLmRlc2NyaXB0aW9uIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFpc1Rhc2tJbkVkaXRNb2RlKHRhc2spXCIgY2xhc3M9XCJ0YXNrLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHRhc2suZGF0ZSB8IGRhdGU6IFwiZGQvTU0veXlcIiB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhaXNUYXNrSW5FZGl0TW9kZSh0YXNrKVwiIGNsYXNzPVwidGFzay1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyB0YXNrLnRpbWUgfCBkYXRlOiBcInNob3J0VGltZVwiIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFpc1Rhc2tJbkVkaXRNb2RlKHRhc2spXCIgY2xhc3M9XCJ0YXNrLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHRhc2sucGxhY2UgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWlzVGFza0luRWRpdE1vZGUodGFzaylcIiBjbGFzcz1cInRhc2stZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsndWstYmFkZ2UnOiB0YXNrLnRhZyB9XCJcbiAgICAgICAgICAgICAgICAgICAgPiB7eyB0YXNrLnRhZyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY29udHJvbCBvZiBlZGl0VGFza0Zvcm1BcnJheS5jb250cm9sczsgbGV0IGk9aW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJjb250cm9sXCJcbiAgICAgICAgICAgICAgICA+ICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzVGFza0luRWRpdE1vZGUodGFzaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1pbnB1dCB1ay1pbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXNjcmliYSBzdSB0YXJlYSBhcXXDrVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWlubGluZVwiICpuZ0lmPVwiaXNUYXNrSW5FZGl0TW9kZSh0YXNrKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInVrLWZvcm0taWNvbiB1ay1mb3JtLWljb24tZmxpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWstaWNvbj1cImljb246ICBjYWxlbmRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nMi1mbGF0cGlja3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcz1cInVrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZlY2hhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdERhdGU6IHRhc2suZGF0ZSA/IHRhc2suZGF0ZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93SW5wdXQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZWRpdFRhc2tEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nMi1mbGF0cGlja3I+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWstaW5saW5lXCIgKm5nSWY9XCJpc1Rhc2tJbkVkaXRNb2RlKHRhc2spXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidWstZm9ybS1pY29uIHVrLWZvcm0taWNvbi1mbGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ay1pY29uPVwiaWNvbjogIGNsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmcyLWZsYXRwaWNrclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENsYXNzPVwiZWRpdC10YXNrLXRpbWUgdWstaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG9yYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVRpbWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vQ2FsZW5kYXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ6ICdIOmknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lXzI0aHI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0lucHV0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SG91cjogdGFzay50aW1lID8gdGFzay50aW1lLmdldEhvdXJzKCkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWludXRlOiB0YXNrLnRpbWUgPyB0YXNrLnRpbWUuZ2V0TWludXRlcygpIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlZGl0VGFza1RpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgID4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmcyLWZsYXRwaWNrcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1ay1pbmxpbmVcIiAqbmdJZj1cImlzVGFza0luRWRpdE1vZGUodGFzaylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1mb3JtLWljb24gdWstZm9ybS1pY29uLWZsaXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVrLWljb249XCJpY29uOiAgbG9jYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInVrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwbGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkx1Z2FyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJwbGFjZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1ay1pbmxpbmVcIiAqbmdJZj1cImlzVGFza0luRWRpdE1vZGUodGFzaylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1mb3JtLWljb24gdWstZm9ybS1pY29uLWZsaXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVrLWljb249XCJpY29uOiAgdGFnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGFnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2F0ZWdvcsOtYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwQXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwidGFnc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzYXZlLWVkaXRlZC10YXNrIHVrLWJ1dHRvbiB1ay1idXR0b24tZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJlZGl0VGFzayh0YXNrLCBjb250cm9sLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzVGFza0luRWRpdE1vZGUodGFzaylcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB1ay1pY29uPVwiaWNvbjogIGNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR3VhcmRhciB0YXJlYSBhY3R1YWxpemFkYVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWZsZXggdWstZmxleC1hcm91bmQgIHVrLXdpZHRoLTEtNkBtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZWRpdC10YXNrLWJ1dHRvbiB1ay1idXR0b24gdWstYnV0dG9uLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNldEZvcm1Db250cm9sRm9yVGFzayh0YXNrKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHVrLWljb249XCJpY29uOiBwZW5jaWxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInVrLWJ1dHRvbiB1ay1idXR0b24tdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2hvd0RlbGV0ZU1vZGFsRm9yVGFzayh0YXNrKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHVrLWljb249XCJpY29uOiAgdHJhc2hcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0gPGxpICpuZ0Zvcj1cImxldCBkYXRlIG9mIGRhdGVzXCI+XG4gICAgICAgICAgICAgICAgPGRpdj57eyBkYXRlIHwgZGF0ZTonZnVsbERhdGUnIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgdGFzayBvZiBmaWx0ZXJlZFRhc2tzIHwgZmlsdGVyQnlEYXRlOiBkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3sgdGFzay5kZXNjcmlwdGlvbiB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT4gLT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG4tLT4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBOb3RlYm9va0NvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2ZlYXR1cmUvbm90ZWJvb2svbm90ZWJvb2suY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJ0BzcmMvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRucyc7XG5pbXBvcnQgeyBOZzJGbGF0cGlja3JNb2R1bGUgfSBmcm9tICduZzItZmxhdHBpY2tyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgTmcyRmxhdHBpY2tyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICBOb3RlYm9va0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5vdGVib29rTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgYXV0b2NvbXBsZXRlLCB7IEF1dG9jb21wbGV0ZUl0ZW0gfSBmcm9tICdhdXRvY29tcGxldGVyJztcbnR5cGUgT3B0aW9uID0gc3RyaW5nICYgQXV0b2NvbXBsZXRlSXRlbTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcEF1dG9jb21wbGV0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgb3B0aW9uczogc3RyaW5nW107XG5cbiAgZmV0Y2g6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZldGNoID0gKHRleHQ6IHN0cmluZywgdXBkYXRlOiAoaXRlbXM6IHN0cmluZ1tdKSA9PiB2b2lkKSA9PiB7XG4gICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgbGV0IHN1Z2dlc3Rpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihcbiAgICAgICAgb3B0aW9uID0+IG9wdGlvbi50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGV4dClcbiAgICAgICk7XG4gICAgICB1cGRhdGUoc3VnZ2VzdGlvbnMpO1xuICAgICAgcmV0dXJuIHsgdGV4dCwgc3VnZ2VzdGlvbnMgfTtcbiAgICB9O1xuXG4gICAgdGhpcy5hdXRvY29tcGxldGUoKTtcbiAgfVxuXG4gIC8vIFNob3VsZCB0aGVzZSBtZXRob2RzIGJlIHByaXZhdGU/XG5cbiAgYXV0b2NvbXBsZXRlKCk6IHZvaWQge1xuICAgIGF1dG9jb21wbGV0ZTxPcHRpb24+KHtcbiAgICAgIGlucHV0OiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICBmZXRjaDogdGhpcy5mZXRjaCxcbiAgICAgIG9uU2VsZWN0OiB0aGlzLnNldFZhbHVlT25TZWxlY3QsXG4gICAgICByZW5kZXI6IHRoaXMucmVuZGVyXG4gICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZU9uU2VsZWN0KGl0ZW06IHN0cmluZywgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiBzdHJpbmcge1xuICAgICAgaW5wdXQudmFsdWUgPSBpdGVtO1xuICAgICAgLy8gVHJpZ2dlciBpbnB1dCB2YWx1ZSBjaGFuZ2UgZXZlbnQgdG8gdXBkYXRlIG1vZGVsIHZhbHVlXG4gICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XG4gICAgICByZXR1cm4gaW5wdXQudmFsdWU7XG4gIH1cblxuICByZW5kZXIoaXRlbTogc3RyaW5nLCBjdXJyZW50VmFsdWU6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGl0ZW1FbGVtZW50LnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgIHJldHVybiBpdGVtRWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmaWx0ZXJCeURhdGUnXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckJ5RGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBkYXRlOiBEYXRlKTogYW55W10ge1xuICAgIGlmICghaXRlbXMpIHsgcmV0dXJuOyB9XG4gICAgcmV0dXJuIGl0ZW1zXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5kYXRlICYmIGl0ZW0uZGF0ZS5nZXRUaW1lKCkgPT09IGRhdGUuZ2V0VGltZSgpKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcbmltcG9ydCB7IEF1dG9jb21wbGV0ZURpcmVjdGl2ZSB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXJCeURhdGVQaXBlIH0gZnJvbSAnLi9maWx0ZXItYnktZGF0ZS5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBdXRvY29tcGxldGVEaXJlY3RpdmUsXG4gICAgRmlsdGVyQnlEYXRlUGlwZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEF1dG9jb21wbGV0ZURpcmVjdGl2ZSxcbiAgICBGaWx0ZXJCeURhdGVQaXBlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvYXBwLm1vZHVsZSc7XG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsXG4vLyBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOiBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwifi9wYWNrYWdlLmpzb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==