(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _info_page_info_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-page/info-page.component */ "./src/app/info-page/info-page.component.ts");


var appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'infoPage' },
    { path: 'infoPage', component: _info_page_info_page_component__WEBPACK_IMPORTED_MODULE_1__["InfoPageComponent"] },
    { path: '**', redirectTo: 'infoPage', pathMatch: 'full' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: false });


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-roller {\r\n    top:50%;\r\n    left:50%;\r\n    position: fixed;\r\n    width: 84px;\r\n    height: 84px;\r\n  }\r\n  .lds-roller div {\r\n    -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n            animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    -webkit-transform-origin: 32px 32px;\r\n            transform-origin: 32px 32px;\r\n  }\r\n  .lds-roller div:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background: #337AB7;\r\n    margin: -3px 0 0 -3px;\r\n  }\r\n  .lds-roller div:nth-child(1) {\r\n    -webkit-animation-delay: -0.036s;\r\n            animation-delay: -0.036s;\r\n  }\r\n  .lds-roller div:nth-child(1):after {\r\n    top: 50px;\r\n    left: 50px;\r\n  }\r\n  .lds-roller div:nth-child(2) {\r\n    -webkit-animation-delay: -0.072s;\r\n            animation-delay: -0.072s;\r\n  }\r\n  .lds-roller div:nth-child(2):after {\r\n    top: 54px;\r\n    left: 45px;\r\n  }\r\n  .lds-roller div:nth-child(3) {\r\n    -webkit-animation-delay: -0.108s;\r\n            animation-delay: -0.108s;\r\n  }\r\n  .lds-roller div:nth-child(3):after {\r\n    top: 57px;\r\n    left: 39px;\r\n  }\r\n  .lds-roller div:nth-child(4) {\r\n    -webkit-animation-delay: -0.144s;\r\n            animation-delay: -0.144s;\r\n  }\r\n  .lds-roller div:nth-child(4):after {\r\n    top: 58px;\r\n    left: 32px;\r\n  }\r\n  .lds-roller div:nth-child(5) {\r\n    -webkit-animation-delay: -0.18s;\r\n            animation-delay: -0.18s;\r\n  }\r\n  .lds-roller div:nth-child(5):after {\r\n    top: 57px;\r\n    left: 25px;\r\n  }\r\n  .lds-roller div:nth-child(6) {\r\n    -webkit-animation-delay: -0.216s;\r\n            animation-delay: -0.216s;\r\n  }\r\n  .lds-roller div:nth-child(6):after {\r\n    top: 54px;\r\n    left: 19px;\r\n  }\r\n  .lds-roller div:nth-child(7) {\r\n    -webkit-animation-delay: -0.252s;\r\n            animation-delay: -0.252s;\r\n  }\r\n  .lds-roller div:nth-child(7):after {\r\n    top: 50px;\r\n    left: 14px;\r\n  }\r\n  .lds-roller div:nth-child(8) {\r\n    -webkit-animation-delay: -0.288s;\r\n            animation-delay: -0.288s;\r\n  }\r\n  .lds-roller div:nth-child(8):after {\r\n    top: 45px;\r\n    left: 10px;\r\n  }\r\n  @-webkit-keyframes lds-roller {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes lds-roller {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n<div *ngIf=\"showLoadingIndicator\" class=\"lds-roller\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        var _this = this;
        this._router = _router;
        this.title = 'MSWorkBench';
        this.showLoadingIndicator = true;
        this._router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.showLoadingIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
                routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                _this.showLoadingIndicator = false;
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _info_page_info_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./info-page/info-page.component */ "./src/app/info-page/info-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _info_page_info_page_component__WEBPACK_IMPORTED_MODULE_9__["InfoPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            providers: [{ provide: Window, useValue: window }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"footer\">\r\n                <footer class=\"container outerFooterPanel\">                   \r\n                   <div class=\"row\">\r\n                      <div class=\"col-md-5 dxcCityData\">\r\n                        <p style=\"color:white\"> <img src=\"assets/images/blankLogo.png\" alt=\"Logo\" class=\"footerlogo\" style=\"width:57px;\"/> Company Name here</p>\r\n                         <div class=\"row\">\r\n                            <img src=\"assets/images/city.png\" class=\"img-responsive building col-sm-4\" width= \"116px\" height=\"100px\" alt=\"DXCImage\">\r\n                            <p class=\"row col-sm-8\">Company Info goes here\r\n                            </p>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-sm-4 officeData\">\r\n                         <div class=\"row dxcOffice\">\r\n                            <p class=\"dxcTitle\">Company Name</p>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t  <li> <img src=\"assets/images/location.png\" class=\"img-responsive\" width= \"10\" height=\"16\" alt=\"DXCImage\">Company Address\r\n\t\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t\t\t  <li> <img src=\"assets/images/phone.png\" class=\"img-responsive\" width= \"12\" height=\"12\" alt=\"DXCImage\"> Phone number\r\n\t\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t\t\t   <li><img src=\"assets/images/landline.png\" class=\"img-responsive\" width= \"12\" height=\"12\" alt=\"DXCImage\">Office number\r\n\t\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t\t\t   <li><img src=\"assets/images/mail.png\" class=\"img-responsive\" width= \"12\" height=\"10\" alt=\"DXCImage\">company email address\r\n\t\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t\t\t</ul>\r\n                         </div>\r\n                         \r\n                         <div class=\"row dxcMedia\">\r\n                            <a href=\"#\"><img src=\"assets/images/ficon.png\" class=\"img-responsive\" width= \"22\" height=\"22\" alt=\"DXCImage\"></a>\r\n                            <a href=\"#\"><img src=\"assets/images/twitter.png\" class=\"img-responsive\"  width= \"22\" height=\"22\" alt=\"DXCImage\"></a>\r\n                            <a href=\"#\"><img src=\"assets/images/linkedin.png\" class=\"img-responsive\"  width= \"22\" height=\"22\" alt=\"DXCImage\"></a>\r\n                            <a href=\"#\"><img src=\"assets/images/googlePlus.png\" class=\"img-responsive\"  width= \"22\" height=\"22\" alt=\"DXCImage\"></a>\r\n                            <a href=\"#\"><img src=\"assets/images/circle.png\" class=\"img-responsive\"  width= \"22\" height=\"22\" alt=\"DXCImage\"></a>\r\n                            <a href=\"#\"><img src=\"assets/images/youtube.png\" class=\"img-responsive\"  width= \"22\" height=\"22\" alt=\"DXCImage\"></a>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2 dxcimplink\">\r\n                         <ul>\r\n\t\t\t\t\t\t\t <li><a href=\"#\">About Company</a></li>\r\n\t\t\t\t\t\t\t <li><a href=\"#\">Contact Us</a></li>\r\n\t\t\t\t\t\t\t <!--<li><a href=\"#\">Site Map</a></li>\r\n\t\t\t\t\t\t\t <li><a href=\"#\">Help</a></li>-->\r\n\t\t\t\t\t\t\t <li><a href=\"#\">Legal</a></li>\r\n\t\t\t\t\t\t\t <li><a href=\"#\">Privacy Policy</a></li>\r\n\t\t\t\t\t\t </ul>\r\n                  </div>\r\n\r\n                   </div>\r\n\r\n                  <!--<div class=\"row\">\r\n                        <p class=\"copyrights\">Copyright © 2018 DXC Technology</p>\r\n                     </div>-->\r\n                   <br>\r\n                </footer>\r\n             </div>\t \r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submenu{z-index: 1;}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headerbg\"> \r\n       <header class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t   <div class=\"col-sm-7\">\r\n\t\t\t\t   <p class=\"dxcLogo\" style=\"color:white\"><img src=\"assets/images/blankLogo.png\" alt=\"Logo\" class=\"headerlogo\"  style=\"width:57px;\"/>Company Name here</p>\r\n\t\t\t\t   <p class=\"headerTitle\">Title goes here</p>\r\n\t\t\t   </div>\r\n\t\t\t   <div class=\"col-sm-5 Headermenu\">\r\n\t\t\t\t\t<!-- <ul id=\"menu\">\r\n\t\t\t\t\t\t  <li><img [src]=\"headerprofilephotoURL\" alt=\"User Image\" class=\"userImage\"></li>\r\n\t\t\t\t\t\t  <li>\r\n\t\t\t\t\t\t\t<input id=\"check01\" type=\"checkbox\" name=\"menu\"/>\r\n\t\t\t\t\t\t\t<label class=\"topmenu\" for=\"check01\"> Welcome <span><strong>{{this.headerUsername}}</strong></span></label>\r\n\t\t\t\t\t\t\t<ul class=\"submenu\">\r\n\t\t\t\t\t\t\t  <li><a routerLink=\"/userprofile\" (click)=\"profile()\">View My Profile</a></li>\r\n\t\t\t\t\t\t\t   <li><a href=\"#\">User Preference/Settings</a></li> \r\n\t\t\t\t\t\t\t  <li><a routerLink=\"/logout\" (click)=\"logout()\">Log out</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t</ul>-->\r\n               </div>\r\n          </div>\r\n        </header>\r\n\t </div>\t"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/info-page/info-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/info-page/info-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/info-page/info-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/info-page/info-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mainPanel\">\n\t<div class=\"mainbox\">\n\t\t<div class=\"mainboxwhite\">\n        <h3 style=\"text-align: center;\n        vertical-align: middle;\n        line-height: 500px;\">{{displayMsg}}</h3>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/info-page/info-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/info-page/info-page.component.ts ***!
  \**************************************************/
/*! exports provided: InfoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageComponent", function() { return InfoPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoPageComponent = /** @class */ (function () {
    function InfoPageComponent(_service) {
        this._service = _service;
    }
    InfoPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getInfo()
            .subscribe(function (result) {
            console.log("Result:: " + result);
            _this.displayMsg = JSON.parse(result.toString());
        });
    };
    InfoPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-page',
            template: __webpack_require__(/*! ./info-page.component.html */ "./src/app/info-page/info-page.component.html"),
            styles: [__webpack_require__(/*! ./info-page.component.css */ "./src/app/info-page/info-page.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]])
    ], InfoPageComponent);
    return InfoPageComponent;
}());



/***/ }),

/***/ "./src/app/service.service.ts":
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ServiceService = /** @class */ (function () {
    function ServiceService(http, httpCall) {
        this.http = http;
        this.httpCall = httpCall;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
    }
    ServiceService.prototype.getInfo = function () {
		console.log("windows loc: " + window.location.host);
        var url = "/greet";
        console.log("url: " + url);
        return this.httpCall.get(url)
            .map(function (response) {
            console.log("response" + response);
            return response;
        })
            .catch(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err); });
    };
    ServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ServiceService);
    return ServiceService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eboopathy2\Documents\My Received Files\CloudCompliance-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map