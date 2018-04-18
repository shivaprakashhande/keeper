webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var landing_component_1 = __webpack_require__("./src/app/landing/landing.component.ts");
var read_user_component_1 = __webpack_require__("./src/app/read/read-user.component.ts");
var create_user_component_1 = __webpack_require__("./src/app/create/create-user.component.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var keeper_service_1 = __webpack_require__("./src/app/services/keeper.service.ts");
var sign_in_component_1 = __webpack_require__("./src/app/signin/sign-in.component.ts");
var fields_service_1 = __webpack_require__("./src/app/services/fields.service.ts");
var forms_2 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var routes = [
    { path: 'landing', component: landing_component_1.LandingComponent },
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'signup', component: create_user_component_1.CreateUserComponent },
    { path: 'signin', component: sign_in_component_1.SignInComponent },
    { path: 'read', component: read_user_component_1.ReadUserComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                landing_component_1.LandingComponent,
                read_user_component_1.ReadUserComponent,
                create_user_component_1.CreateUserComponent,
                sign_in_component_1.SignInComponent
            ],
            imports: [
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes),
                ng_bootstrap_1.NgbModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
            ],
            providers: [keeper_service_1.KeeperService, fields_service_1.FieldsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/create/create-user.component.css":
/***/ (function(module, exports) {

module.exports = ".form-group{\n    width:800px;\n    height: 100%;\n    margin-left: 118px;\n    padding-top: 80px;\n    padding-bottom: 80px;\n}\n\n.user{\n    background-image: url('landing.c5693eaf9d33cae4e5c2.jpg');\n    background-size: 77%;\n    height: 100%;\n}\n\n.form-control{\n    -webkit-transition-property: initial;\n    transition-property: initial\n}"

/***/ }),

/***/ "./src/app/create/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{messageTitle}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{messageBody}}&hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<div class=\"user\">\n  <div class=\"container\">\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f,content)\">\n      <div class=\"form-group\">\n        <input class=\"form-control\" id=\"user\" name=\"userName\" placeholder=\"User Name\" type=\"text\" [(ngModel)]=\"userName\">\n        <br/>\n\n        <input class=\"form-control\" placeholder=\"Email\" type=\"email\" name=\"eMail\" [(ngModel)]=\"eMail\">\n        <br/>\n        <input class=\"form-control\" placeholder=\"Cellphone\" type=\"number\" name=\"cell\" [(ngModel)]=\"cell\">\n\n        <br/>\n        <input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n\n        <br/>\n        <input class=\"form-control\" type=\"password\" placeholder=\"Re-enter password\" name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\">\n        <br/>\n        <button class=\"btn btn-submit\">Sign Up</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/create/create-user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var keeper_service_1 = __webpack_require__("./src/app/services/keeper.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(keeper, modalService, router) {
        this.keeper = keeper;
        this.modalService = modalService;
        this.router = router;
        this.recordExists = false;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent.prototype.open = function (content, redirectFlg) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            if (redirectFlg)
                _this.router.navigate(['/landing']);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            if (redirectFlg)
                _this.router.navigate(['/landing']);
        });
    };
    CreateUserComponent.prototype.getDismissReason = function (r) {
    };
    CreateUserComponent.prototype.validateFields = function () {
        if (!this.userName || !this.eMail || !this.cell || !this.password || !this.confirmPassword) {
            this.messageBody = "Please enter all the fields!";
            return false;
        }
        else if (this.password !== this.confirmPassword) {
            this.messageBody = "Passwords should match!";
            return false;
        }
        else {
            return true;
        }
    };
    CreateUserComponent.prototype.onSubmit = function (f, c) {
        var _this = this;
        if (!this.validateFields()) {
            this.messageTitle = "Alert";
            this.open(c, false);
        }
        else {
            this.keeper.getUser(f.value.eMail).subscribe(function (res) {
                _this.result = res.toString();
                if (_this.result != "true") {
                    _this.keeper.createUser(f).subscribe(function (res) {
                        f.resetForm();
                        _this.messageTitle = "Success";
                        _this.messageBody = "Sign up success! Login to continue";
                        _this.open(c, true);
                    });
                }
                if (_this.result == "true") {
                    _this.messageTitle = "Alert";
                    _this.messageBody = "This Email is already registered";
                    _this.open(c, false);
                }
            });
        }
    };
    CreateUserComponent = __decorate([
        core_1.Component({
            selector: 'app-create-user',
            template: __webpack_require__("./src/app/create/create-user.component.html"),
            styles: [__webpack_require__("./src/app/create/create-user.component.css")]
        }),
        __metadata("design:paramtypes", [keeper_service_1.KeeperService,
            ng_bootstrap_1.NgbModal,
            router_1.Router])
    ], CreateUserComponent);
    return CreateUserComponent;
}());
exports.CreateUserComponent = CreateUserComponent;


/***/ }),

/***/ "./src/app/landing/landing.component.css":
/***/ (function(module, exports) {

module.exports = "/* @font-face {\n    font-family: \"Open Sans\";\n    src: url(\"/fonts/OpenSans-Regular-webfont.woff2\") format(\"woff2\"),\n         url(\"/fonts/OpenSans-Regular-webfont.woff\") format(\"woff\");\n  \n} */\n.btn-block{\n    font-size : 30px;\n}\n.welcome-block{\n    -webkit-margin-after: 30px;\n            margin-block-end: 30px;\n    text-align: center;\n    text-justify: distribute;\n    -webkit-text-decoration: bisque;\n            text-decoration: bisque;\n    height: 400px;\n    background-image: url('landing.c5693eaf9d33cae4e5c2.jpg');\n    background-size: 77%;\n}\n.welcome-header{\n    padding-top: 227px;\n    padding-left: 213px;\n    font-family: \"Open Sans\" !important;   \n    font-weight: bold;\n    font-style: italic;\n}"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"welcome-block\">\n    <h1 class=\"welcome-header\">\n      Welcome \n      <br/>\n      to \n      <br/>\n      Keeper!\n    </h1>\n  </div>\n\n  <div style=\"text-align: center\">\n    <button type=\"button\" class=\"btn btn-primary btn-lg rounded\" (click)=\"onSignIn()\">SIGN IN</button>\n   \n    <button type=\"button\" class=\"btn btn-secondary  btn-lg rounded\" (click)=\"onSignUp()\">SIGN UP</button>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var LandingComponent = /** @class */ (function () {
    function LandingComponent(router) {
        this.router = router;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.onSignUp = function () {
        this.router.navigate(['/signup']);
    };
    LandingComponent.prototype.onSignIn = function () {
        this.router.navigate(['/signin']);
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'app-landing',
            template: __webpack_require__("./src/app/landing/landing.component.html"),
            styles: [__webpack_require__("./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;


/***/ }),

/***/ "./src/app/read/read-user.component.css":
/***/ (function(module, exports) {

module.exports = "\n.user-info{\n    height: 100%;\n    color: wheat\n}\n\n.form-control{\n    -webkit-transition-property: initial;\n    transition-property: initial\n}\n\n"

/***/ }),

/***/ "./src/app/read/read-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"user-info\">\n    <label>Welcome, {{userName}}</label>\n  </div>\n\n  <div *ngIf=\"noteDetails && noteDetails.length==0\">\n    <label>You don't have any notes!!</label>\n  </div>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{messageTitle}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <input type=\"text\" [(ngModel)]=\"title\" placeholder=\"Title\">\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<div class=\"modal fade\" id=\"addNote\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">New Note</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f,content)\">\n          <div class=\"form-group\">\n            <label for=\"noteTitle\" class=\"col-form-label\">Title:</label>\n            \n            <input type=\"text\" name=\"title\" [(ngModel)]=\"title\" class=\"form-control\" id=\"noteTitle\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"note\" class=\"col-form-label\">Note:</label>\n            <textarea class=\"form-control\" name=\"note\" [(ngModel)]=\"note\" id=\"note\"></textarea>\n          </div>\n\n\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" #closeButton>Close</button>\n            <button type=\"submit\" class=\"btn btn-primary\">Add Note</button>\n          </div>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"submitSuccess\" class=\"alert alert-success\" role=\"alert\">\n  Note Added!\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item list-group-item-action\" *ngFor=\"let note of noteDetails\">\n          <div class=\"card-columns\">\n            <div class=\"card\" style=\"width: 100%\">\n              <h5 class=\"card-header\">{{note.title}}</h5>\n              <div class=\"card-body\">\n                <p class=\"card-text\">{{note.content}}</p>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item list-group-item-action\">\n          <div class=\"card-columns\">\n            <div class=\"card\" style=\"width: 100%\">\n              <a style=\"cursor: pointer;\" data-toggle=\"modal\" data-target=\"#addNote\" (click)=\"openModal()\">\n                <div class=\"card-body\">\n                  <img class=\"card-img-top\" src=\"../../assets/plus.png\" style=\"height: 50px; width: 50px\" alt=\"Add Note\" />\n                </div>\n              </a>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/read/read-user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var fields_service_1 = __webpack_require__("./src/app/services/fields.service.ts");
var keeper_service_1 = __webpack_require__("./src/app/services/keeper.service.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var modal_1 = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var ReadUserComponent = /** @class */ (function () {
    function ReadUserComponent(fields, keeper, modalService, router, ngModalService) {
        this.fields = fields;
        this.keeper = keeper;
        this.modalService = modalService;
        this.router = router;
        this.ngModalService = ngModalService;
        this.submitSuccess = false;
    }
    ReadUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fields.userDetails$.subscribe(function (res) {
            _this.userName = res[0].userName;
            _this.eMail = res[0].eMail;
            _this.cell = res[0].cell;
        });
        this.getNotes(this.eMail);
    };
    ReadUserComponent.prototype.getNotes = function (e) {
        var _this = this;
        this.keeper.getNoteDetails(this.eMail).subscribe(function (res) {
            _this.noteDetails = res;
        });
    };
    ReadUserComponent.prototype.closeModal = function () {
        this.closeBtn.nativeElement.click();
    };
    ReadUserComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ReadUserComponent.prototype.getDismissReason = function (r) {
    };
    ReadUserComponent.prototype.onSubmit = function (f, c) {
        var _this = this;
        console.log("submit function");
        this.keeper.createNote(f, this.eMail).subscribe(function (res) {
            f.resetForm();
            _this.closeModal();
            _this.getNotes(_this.eMail);
        });
    };
    __decorate([
        core_1.ViewChild('closeButton'),
        __metadata("design:type", core_1.ElementRef)
    ], ReadUserComponent.prototype, "closeBtn", void 0);
    ReadUserComponent = __decorate([
        core_1.Component({
            selector: 'app-read-user',
            template: __webpack_require__("./src/app/read/read-user.component.html"),
            styles: [__webpack_require__("./src/app/read/read-user.component.css")]
        }),
        __metadata("design:paramtypes", [fields_service_1.FieldsService, keeper_service_1.KeeperService,
            ng_bootstrap_1.NgbModal,
            router_1.Router,
            modal_1.BsModalService])
    ], ReadUserComponent);
    return ReadUserComponent;
}());
exports.ReadUserComponent = ReadUserComponent;


/***/ }),

/***/ "./src/app/services/fields.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var FieldsService = /** @class */ (function () {
    function FieldsService() {
        this.userDetails = new BehaviorSubject_1.BehaviorSubject(this.userDetails);
        this.userDetails$ = this.userDetails.asObservable();
    }
    FieldsService.prototype.storeUserDetails = function (u) {
        this.userDetails.next(u);
    };
    FieldsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FieldsService);
    return FieldsService;
}());
exports.FieldsService = FieldsService;


/***/ }),

/***/ "./src/app/services/keeper.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var KeeperService = /** @class */ (function () {
    function KeeperService(http) {
        this.http = http;
    }
    KeeperService.prototype.createUser = function (f) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api', JSON.stringify(f.value), options).map(function (res) { return res.json(); });
    };
    KeeperService.prototype.createNote = function (f, e) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        f.value.email = e;
        return this.http.post('/api/addNote', JSON.stringify(f.value), options).map(function (res) { return res.json(); });
    };
    KeeperService.prototype.getUser = function (e) {
        return this.http.get('/api/' + e).map(function (res) { return res.json(); });
    };
    KeeperService.prototype.getUserDetails = function (e) {
        return this.http.get('/api/user/' + e).map(function (res) { return res.json(); });
    };
    KeeperService.prototype.getNoteDetails = function (e) {
        return this.http.get('/api/notes/' + e).map(function (res) { return res.json(); });
    };
    KeeperService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], KeeperService);
    return KeeperService;
}());
exports.KeeperService = KeeperService;


/***/ }),

/***/ "./src/app/signin/sign-in.component.css":
/***/ (function(module, exports) {

module.exports = ".form-group{\n    width:800px;\n    height: 100%;\n    margin-left: 118px;\n    padding-top: 80px;\n    padding-bottom: 80px;\n}\n\n.user{\n    background-image: url('landing.c5693eaf9d33cae4e5c2.jpg');\n    background-size: 77%;\n    height: 100%;\n}\n\n.form-control{\n    -webkit-transition-property: initial;\n    transition-property: initial\n}"

/***/ }),

/***/ "./src/app/signin/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{messageTitle}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{messageBody}}&hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<div class=\"user\">\n  <div class=\"container\">\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f,content)\">\n      <div class=\"form-group\">\n        <input class=\"form-control\" placeholder=\"Email\" type=\"email\" name=\"eMail\" [(ngModel)]=\"eMail\">\n        <br/>\n    \n        <input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n\n        <br/>\n       \n        <button class=\"btn btn-submit\">Sign In</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signin/sign-in.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var keeper_service_1 = __webpack_require__("./src/app/services/keeper.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var fields_service_1 = __webpack_require__("./src/app/services/fields.service.ts");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(keeper, modalService, router, fields) {
        this.keeper = keeper;
        this.modalService = modalService;
        this.router = router;
        this.fields = fields;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    SignInComponent.prototype.getDismissReason = function (r) {
    };
    SignInComponent.prototype.validateFields = function () {
        if (!this.eMail || !this.password) {
            this.messageBody = "Please enter all the fields!";
            return false;
        }
        else {
            return true;
        }
    };
    SignInComponent.prototype.onSubmit = function (f, c) {
        var _this = this;
        if (!this.validateFields()) {
            this.messageTitle = "Alert";
            this.open(c);
        }
        else {
            this.keeper.getUserDetails(f.value.eMail).subscribe(function (res) {
                _this.result = res;
                if (_this.result.length > 0) {
                    _this.fields.storeUserDetails(_this.result);
                    _this.router.navigateByUrl('/read');
                }
                else {
                    _this.messageTitle = "Alert";
                    _this.messageBody = "This Email is not registered!";
                    _this.open(c);
                }
            });
        }
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/signin/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/signin/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [keeper_service_1.KeeperService,
            ng_bootstrap_1.NgbModal,
            router_1.Router,
            fields_service_1.FieldsService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map