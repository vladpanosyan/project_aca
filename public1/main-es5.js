function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cover/cover.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cover/cover.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCoverCoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"list-type5\">\n    <!-- <pre>{{ portalData | json }}</pre> -->\n    <ol *ngFor=\"let item of portalData\">\n        <li *ngIf=\"item.private\" (click)=\"item.isStarted && openModal(item, true)\" [ngClass]=\"{disabled: !item.isStarted}\" class=\"d-flex\">\n            <span >{{ item.name }}</span>\n            <i class=\"fas fa-lock\"></i>\n            <span style=\" color: azure;\"> {{ item.isStarted ? 'In Process' : 'Started at ' + (item.start | date: 'medium')}}</span>\n            <!-- {{item.private ? '-private' : '-public'}} ------ {{ item.userId }} -->\n        </li>\n        <li *ngIf=\"!item.private\" (click)=\"item.isStarted && openModal(item, false)\" [ngClass]=\"{disabled: !item.isStarted}\" class=\"d-flex\">\n            <span>{{ item.name }}</span>\n            <i class=\"fas fa-lock-open\"></i>\n            <span style=\"color: azure;\">{{ item.isStarted ? 'In Process' : 'Started at ' + (item.start | date: 'medium')}}</span>\n            <!-- {{item.private ? '-private' : '-public'}}  ------ {{ item.userId }} -->\n        </li>\n    </ol>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent d-flex justify-content-end\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\" [routerLinkActive]=\"['is-active']\">\n          <a class=\"nav-link\" routerLink=\"/\"><span class=\"sr-only\">(current)</span>Main</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['is-active']\">\n          <a *ngIf=\"isLoggedIn\" class=\"nav-link\" routerLink=\"/api/users/home\">Home</a>\n        </li>\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\" [routerLinkActive]=\"['is-active']\">\n          <a class=\"nav-link\" [routerLink]=\"['/api/users/profile', currentUser.id]\">MyProfile</a>\n        </li>\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\" [routerLinkActive]=\"['is-active']\">\n          <a class=\"nav-link\" routerLink=\"api/portals\">Portals</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['is-active']\">\n          <a *ngIf=\"!isLoggedIn\" class=\"nav-link\" routerLink=\"api/users/register\">Registration</a>\n        </li>\n       \n        <li *ngIf=\"!isLoggedIn\" class=\"nav-item\" [routerLinkActive]=\"['is-active']\">\n          <a class=\"nav-link\" routerLink=\"api/users/login\">Login</a>\n        </li>\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"logout()\" href=\"#\">LogOut</a>\n        </li>\n         <li>\n          <a class=\"nav-link\" [routerLink]=\"['/api/portals/active']\">TEST</a> \n        </li>\n         <li *ngIf=\"isLoggedIn\" class=\"d-flex align-items-center\">\n          <!-- <a class=\"nav-link\" [routerLink]=\"['/api/users/profile', '40']\">TEST</a> -->\n          <img [src]=\"currentUser?.img\" alt=\"\" width=\"30\" height=\"30\" class=\"rounded\">\n        </li>\n      </ul>\n    </div>\n  </nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <h2>To add Portal Click here</h2> -->\n<!-- <ngbd-datepicker-popup></ngbd-datepicker-popup> -->\n<app-portal-modal></app-portal-modal>\n<!-- <app-send-mail-modal></app-send-mail-modal> -->\n<table class=\"table\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Tittle</th>\n        <th scope=\"col\">Start</th>\n        <th scope=\"col\">link</th>\n        <th scope=\"col\">Status</th>\n        <th scope=\"col\">Share</th>\n        <th scope=\"col\">GO</th>\n        <th scope=\"col\">Remove</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of portalData; let i = index;\" [ngClass]=\"\">\n        <th scope=\"row\">{{ i + 1 }}</th>\n        <td>{{ item.name }}</td>\n        <td>{{ item.start }}</td>\n        <td>{{ portalUrlPath+item.token }}</td>\n        <td *ngIf=\"(item.counter | async) as timeOfStart\">{{ timeOfStart }}</td>\n        <td *ngIf=\"!item.isFinished && !(item.counter | async) as timeOfStart\">Started</td>\n        <td *ngIf=\"item.isFinished && !(item.counter | async) as timeOfStart\">Finished</td>\n        <!-- <td *ngIf=\"item.isFinished\">Finished</td> -->\n        <td><button [ngClass]=\"{'ni_active':item.isFinished}\"><app-send-mail-modal [url]=\"portalUrlPath+item.token\"></app-send-mail-modal></button></td>\n        <td><button [disabled]=\"(item.counter | async) || item.isStarted\" class=\"btn btn-success\" (click)=\"startEvent(item.id, item.token)\">Start</button></td>\n        <td><button class=\"btn btn-danger\" [attr.data-portal]=\"item.id\">Remove</button></td>\n      </tr>\n    </tbody>\n  </table>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/portal-modal/portal-modal.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/portal-modal/portal-modal.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomePortalModalPortalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"portalForm\">\n      <!-- tittle -->\n      <div class=\"form-group\">\n        <label for=\"portalTitle\">Title</label>\n        <div class=\"input-group\">\n          <input id=\"portalTitle\" class=\"form-control\" formControlName=\"title\" name=\"title\" type=\"text\" #title>\n          <!-- <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary calendar\" type=\"button\"></button>\n          </div> -->\n        </div>\n        <!-- date -->\n        <label for=\"dateOfStart\">Date of start</label>\n        <ngbd-datepicker-popup [formControl]=\"portalForm.controls['date']\"></ngbd-datepicker-popup>\n        <!-- <div class=\"input-group\">\n          <input id=\"dateOfStart\" class=\"form-control\" formControlName=\"date\" name=\"dp\" type=\"date\" #dp>\n        </div> -->\n        <!-- time -->\n        <label for=\"timeOfStart\">Time of start</label>\n        <div class=\"input-group\">\n          <input id=\"timeOfStart\" class=\"form-control\" formControlName=\"time\" name=\"time\" type=\"time\" #time>\n        </div>\n        <!-- private -->\n        <label for=\"timeOfStart\">Create Private Event</label>\n        <div class=\"input-group\">\n          <input id=\"checkPrivate\" class=\"\" formControlName=\"private\" name=\"private\" type=\"checkbox\" #prcheck>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close(portalForm)\">Save</button>\n  </div>\n</ng-template>\n<div class=\"d-flex justify-content-center mt-3\">\n  <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Add Portal</button>\n</div>\n\n<hr>\n\n<pre>{{closeResult}}</pre>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/send-mail-modal/send-mail-modal.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/send-mail-modal/send-mail-modal.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeSendMailModalSendMailModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Send Portal adresses</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"sendMailForm\">\n        <p class=\"url\">{{ url }}</p>\n        <p [ngStyle]=\"{'color': 'red'}\" *ngIf=\"fails\">Wrong Email Format </p>\n        <div formArrayName=\"emails\">\n          <div *ngFor=\"let item of inpArray.controls; let inputIndex=index; let i=index\" [formGroupName]=\"inputIndex\"  class=\"form-group\">\n            <label for=\"dateOfBirth\"></label>\n            <div class=\"input-group\">\n              <input id=\"sendMail\" class=\"form-control\" formControlName=\"email\" name=\"mail\" placeholder=\"Email\">\n              <span (click)=\"removeEmail(inputIndex)\"><i class=\"far fa-trash-alt\"></i></span>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer d-flex\">\n      <div class=\"add\"><i class=\"fas fa-plus-circle\" (click)=\"addInput()\"></i></div>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"checkFormValid(sendMailForm) && modal.close(sendMailForm.controls.emails)\">Send</button>\n    </div>\n  </ng-template>\n  \n  <button class=\"btn btn-warning\" (click)=\"open(content)\">Share</button>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/user-login/user-login.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/user-login/user-login.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginUserLoginUserLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <hr>\n    <div class=\"card bg-light\">\n        <article class=\"card-body mx-auto\" style=\"width: 400px;\">\n            <h4 class=\"card-title mt-3 text-center\">Create Account</h4>\n            <p class=\"text-center\">Get started with your free account</p>\n            <p>\n                <a href=\"\" class=\"btn btn-block btn-twitter\"> <i class=\"fab fa-twitter\"></i>   Login via Twitter</a>\n                <a href=\"\" class=\"btn btn-block btn-facebook\"> <i class=\"fab fa-facebook-f\"></i>   Login via\n                    facebook</a>\n            </p>\n            <p class=\"divider-text\">\n                <span class=\"bg-light\">OR</span>\n            </p>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"userLogin()\"> \n                <!-- form-group// -->\n                <div class=\"form-group input-group\" [ngClass]=\"detectClass('email')\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n                    </div>\n                    <input name=\"\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email address\">\n                </div> \n\n                <!-- form-group end.// -->\n                <div class=\"form-group input-group\" [ngClass]=\"detectClass('password')\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n                    </div>\n                    <input class=\"form-control\" formControlName=\"password\" placeholder=\"Create password\" >\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-primary btn-block\"> LogIn </button>\n                </div> <!-- form-group// -->\n               \n            </form>\n        </article>\n    </div> <!-- card.// -->\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ngbootstrap/datepicker/datepicker-popup.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ngbootstrap/datepicker/datepicker-popup.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNgbootstrapDatepickerDatepickerPopupHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-group\">\r\n    <div class=\"input-group\">\r\n      <input class=\"form-control\" placeholder=\"Choose Date Of Start Event\" [(ngModel)]=\"value\"\r\n      (ngModelChange)=\"bsValueChange($event)\"\r\n             name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/chat-list/chat-list.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/chat-list/chat-list.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPortalPortalDetailChatListChatListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"wrapper\"> -->\n    <div class=\"ch_list_header\">\n        <h4>Answer To Questions</h4>\n    </div>\n    <!-- {{ portalData | json}} -->\n    <div class=\"list scrollbar scrollbar-near-moon\" #scrollMe>\n        <ul class=\"\">\n            <div class=\"force-overflow\"></div>\n            <li *ngFor=\"let item of answers\">\n                <!-- {{item | json}} -->\n                <!-- {{ item.answerToQuestion.question }} - {{ item.answer }} -->\n                <div class=\"item\">\n                    <div class=\"question d-flex flex-column\">\n                        <div class=\"q_data d-flex\">\n                            <span><img [src]=\"item.answerToQuestion.nickss.image\" alt=\"\"></span>\n                            <span>{{ item.answerToQuestion.nickss.name }}</span>\n                        </div>\n                        <div class=\"q_q d-flex\">\n                            <div class=\"current_question\">{{ item.answerToQuestion.question }}</div>\n                        </div>\n                    </div>\n                    <div class=\"answer\">\n                        <div class=\"a_data d-flex\">\n                            <span><img [src]=\"inUserPortal ? userData.img : nickData.image \" alt=\"\"></span>\n                            <span *ngIf=\"inUserPortal\">{{ userData.firstName }}</span>\n                            <span *ngIf=\"!inUserPortal\">{{ nickData.name }}</span>\n                        </div>\n                        <div class=\"current_answer d-flex flex-column\">\n                            {{ item.answer }}\n                        </div>\n                        <span>{{ item.time | date: 'medium' }}</span>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n<!-- </div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/message/message.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/message/message.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPortalPortalDetailMessageMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text_container d-flex\">\n    <div class=\"reciever\">\n        <div class=\"rec_wrap\"  *ngIf=\"currTop10Nick?.id\">\n            <!-- {{ currTop10Nick|json }} -->\n            <img [src]=\"currTop10Nick.nickss.image\" alt=\"\">\n            <h4>{{ currTop10Nick.nickss.name }}</h4>\n        </div>\n    </div>\n    <div class=\"txt_area\">\n        <textarea [disabled]=\"!currTop10Nick && isUserInSelfPortal\" (keydown.enter)=\"isUserInSelfPortal ? sendMessgeQuestion(msg.value) : sendMessage(msg.value)\" class=\"form-control form-rounded msg\" rows=\"3\" #msg [(ngModel)]=\"message\" [placeholder]=\"(!currTop10Nick && isUserInSelfPortal) ? '... Choose the one you need to answer the question': ''\"></textarea>\n    </div>\n    <div class=\"sendbtn\">\n        <button [disabled]=\"!currTop10Nick && isUserInSelfPortal\" class=\"btn btn-dark\" (click)=\"isUserInSelfPortal ? sendMessgeQuestion(msg.value) : sendMessage(msg.value)\">Send</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/portal-detail.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/portal-detail.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPortalPortalDetailPortalDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <!-- <pre *ngIf=\"nickData?.id\">{{ nickData | json}}</pre>  -->\n <!-- <pre *ngIf=\"userData?.id\">{{ userData | json}}</pre> -->\n <!-- <pre *ngIf=\"userData?.id\">{{ portalData | json}}</pre> -->\n<!-- <p>{{ token }}</p> -->\n<div class=\"nick_header d-flex\">\n    <div class=\"nick_data d-flex\">\n        <h4> {{inUserPortal ? userData.firstName : nickData.name}} </h4>\n        <img [src]=\"inUserPortal ? userData.img : nickData.image\" alt=\"\">\n    </div>\n    <ngbd-dropdown-basic *ngIf=\"!inUserPortal\" (ChangedAvatar)=\"ChangedAvatar($event)\" [portalId]=\"portalData.id\" [nickDataId]=\"nickData.id\"></ngbd-dropdown-basic>\n    <div class=\"portal_data\"><h1>{{ portalData.name }}</h1></div>\n</div>\n<div class=\"wrapper d-flex\">\n    <div class=\"messages d-flex\">\n        <div class=\"top d-flex\">\n            <div class=\"chat_list\">\n                <app-chat-list [answer]=\"answer.asObservable()\" [userData]=\"userData\" [inUserPortal]=\"inUserPortal\" [nickData]=\"nickData\"></app-chat-list>\n            </div>\n            <div class=\"top10_list\">\n                <app-top10-list [inUserPortal]=\"inUserPortal\"></app-top10-list>\n            </div>\n        </div>\n        <div class=\"wrote_messages\">\n            <app-message [nickData]=\"nickData\" [userData]=\"userData\"></app-message>\n        </div>\n    </div>\n    <!-- #scrollMe [scrollTop]=\"scrollMe.scrollHeight\" -->\n\n    <!-- <div class=\"questions scrollbar scrollbar-near-moon\">\n        <div class=\"force-overflow\"></div> -->\n    <div class=\"questions\">\n        <!-- <div class=\"force-overflow\"></div> -->\n        <!-- [question]=\"messages\" [nickData]=\"nickData\" [userData]=\"userData\" [inUserPortal]=\"inUserPortal\" -->\n        <app-question [question]=\"messages\" [nickData]=\"nickData\" [userData]=\"userData\" [inUserPortal]=\"inUserPortal\" [portalId]=\"portalData.id\"></app-question>\n    </div>       \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/question/question.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/question/question.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPortalPortalDetailQuestionQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <pre>{{ userData | json}}</pre> -->\n<!-- <pre>{{ nickData | json}}</pre> -->\n\n<div class=\"comp_container\">\n    <div class=\"card-header\">\n        <div class=\"d-flex bd-highlight\">\n            <div class=\"img_cont\">\n                <img [src]=\"inUserPortal ? userData.img : nickData.nickToPortal.portalToUser.img\" class=\"rounded-circle user_img\">\n                <span class=\"online_icon\"></span>\n            </div>\n            <div class=\"user_info\">\n                <span>Chat with {{ inUserPortal ? userData.firstName : nickData.nickToPortal.portalToUser.firstName }}</span>\n                <p>1767 Messages</p>\n            </div>\n             <i *ngIf=\"inUserPortal\" (click)=\"finishPortal()\" class=\"finish far fa-stop-circle\"></i>\n        </div>\n    </div>\n    <div class=\"msg_cont \">\n        <!-- <h1>{{ ggg() }}</h1> -->\n        <ul class=\"card-body msg_card_body scrollbar scrollbar-near-moon\" #scrollMe>\n            <div class=\"force-overflow\"></div>\n            <li *ngFor=\"let item of questions; let i=index\"\n                class=\"d-flex justify-content-start mb-4 flex-column\">\n                <!-- {{ item | json }}  -->\n                <div class=\"name\" style=\"color: #AAB8C2\">{{ item.nickss.name }}</div>\n                <div class=\"img_name d-flex flex-column\">\n                    <div class=\"img_msg_wrap d-flex\">\n                        <div class=\"img_cont_msg\">\n                            <img [src]=\"item.nickss.image\" alt=\"\" class=\"rounded-circle user_img_msg\">\n                        </div>\n                        <div class=\"msg_cotainer\">\n                            {{ item.question }}\n                        </div>\n                    </div>\n                    <div class=\"metta d-flex\">\n                        <span class=\"msg_time\">{{ item.time | date: 'medium' }}</span>\n                        <span [class.is-active]=\"item.isLiked || isNickLiked(item)\" class=\"like-btn\" (click)=\"action(item, i)\"></span>\n                        <span class=\"like_count\" style=\"color:#FAD00E\">{{ item.likes ? item.likes : item.likes === undefined ? item.questionManyLikes : null }}</span>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/settings/settings.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/settings/settings.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPortalPortalDetailSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col\">\n        <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Set Avatar</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"avatars\">\n                <ul>\n                    <button>\n                        <li *ngFor=\"let item of avatars\" (click)=\"updateAvatar(item)\">\n                            <img [src]=\"item\" alt=\"\">\n                        </li>\n                    </button>\n                </ul>\n                <!-- <button ngbDropdownItem>Action - 1</button>\n                <button ngbDropdownItem>Another Action</button>\n                <button ngbDropdownItem>Something else is here</button> -->\n            </div>\n        </div>\n    </div>\n    <!-- <div class=\"col\">\n        <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic2\" ngbDropdownToggle>Set Avatar</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <button ngbDropdownItem>Action - 1</button>\n                <button ngbDropdownItem>Another Action</button>\n                <button ngbDropdownItem>Something else is here</button>\n            </div>\n        </div>\n    </div>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/top10-list/top10-list.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/top10-list/top10-list.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPortalPortalDetailTop10ListTop10ListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top_10header\">\n    <h4 class=\"\">Top 10 Liked Questions</h4>\n</div>\n<div class=\"wrapper scrollbar-near-moon\">\n    <ul>\n        <div class=\"force-overflow\"></div>\n        <li *ngFor=\"let item of top10data; let i=index\">\n            <div class=\"scope d-flex flex-column\">\n                <div class=\"rait d-flex\"><span>{{ i+1 }}</span><i class=\"fas fa-star\"></i></div>\n                <div class=\"data d-flex\" (click)=\"inUserPortal && prepForAnswer(item)\">\n                    <div class=\"img\">\n                        <img [src]=\"item.nickss.image\" alt=\"\" class=\"is-active\">\n                    </div>\n                    <div class=\"name\">{{ item.nickss.name }}</div>\n                </div>\n                <div class=\"question d-flex flex-column\">\n                    <div class=\"q_q d-flex\">\n                        <div class=\"msg_cotainer\">{{ item.question }}</div>\n                    </div>\n                    <!-- <div class=\"\"></div> -->\n                    <div class=\"like likes ml-auto d-flex align-items-center is-active\">{{ item.likeTotal }}</div>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPortalPortalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Active Portals</h1>\n<!-- <pre>{{ portals | json }}</pre> -->\n<!-- <ng-container class=\"text-center\" *ngIf=\"portals?.length\"> -->\n    <div *ngFor=\"let item of portals\"> \n        <span (click)=\"goToPortal(item)\">{{ item.name }}</span>\n    </div>\n<!-- </ng-container> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <img [src]=\"(data | async)?.img\" alt=\"\"> -->\n<img [src]=\"data?.img\" alt=\"\" width=\"200\" height=\"200\">\n<h1>hello</h1>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/user-registration/user-registration.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/user-registration/user-registration.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegistrationUserRegistrationUserRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h1 *ngIf=\"user\">{{user.name}}</h1>\n\n    <hr>\n    <div class=\"card bg-light\">\n        <article class=\"card-body mx-auto\" style=\"width: 400px;\">\n            <h4 class=\"card-title mt-3 text-center\">Create Account</h4>\n            <p class=\"text-center\">Get started with your free account</p>\n            <p>\n                <a href=\"#\" class=\"btn btn-block btn-twitter\"> <i class=\"fab fa-twitter\"></i>   Login via Twitter</a>\n                <a (click)=\"signInWithFB()\" class=\"btn btn-block btn-facebook\"> <i class=\"fab fa-facebook-f\"></i>   Login via\n                    facebook</a>\n                <!-- <a href=\"api/users/auth/facebook\" class=\"btn btn-block btn-facebook\"> <i class=\"fab fa-facebook-f\"></i>   Login via\n                    facebook</a> -->\n            </p>\n            <p class=\"divider-text\">\n                <span class=\"bg-light\">OR</span>\n            </p>\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\"> \n                <!-- form-group// -->\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\" [ngClass]=\"detectClass('firstName')\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-user\" ></i> </span>\n                    </div>\n                    <input name=\"\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"First name\" type=\"text\">\n                </div>\n                <!-- form-group// -->\n                <div class=\"form-group input-group\" [ngClass]=\"detectClass('lastName')\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n                    </div>\n                    <input name=\"\" class=\"form-control\" formControlName=\"lastName\" placeholder=\"Last name\" type=\"text\">\n                </div>\n                <!-- form-group// -->\n                <div class=\"form-group input-group\" [ngClass]=\"detectClass('email')\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n                    </div>\n                    <input name=\"\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email address\" type=\"email\">\n                </div> \n\n                <!-- form-group end.// -->\n                <div class=\"form-group input-group\" [ngClass]=\"detectClass('password')\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n                    </div>\n                    <input class=\"form-control\" formControlName=\"password\" placeholder=\"Create password\" type=\"password\">\n                </div>\n\n                <div class=\"form-group input-group\" [ngClass]=\"detectClass('confPassword')\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n                    </div>\n                    <input class=\"form-control\" formControlName=\"confPassword\" placeholder=\"Repeat password\" type=\"password\">\n                </div> <!-- form-group// -->\n                <div class=\"form-group\">\n                    <button [disabled]=\"registerForm.invalid\" class=\"btn btn-primary btn-block\"> Create Account </button>\n                </div> <!-- form-group// -->\n                <p class=\"text-center\">Have an account? <a href=\"\">Log In</a> </p>\n            </form>\n        </article>\n    </div> <!-- card.// -->\n\n</div>\n<!--container end.//-->\n<p>{{ user }}</p>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/HELPERS/backwardTimer.ts":
  /*!******************************************!*\
    !*** ./src/app/HELPERS/backwardTimer.ts ***!
    \******************************************/

  /*! exports provided: timer */

  /***/
  function srcAppHELPERSBackwardTimerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "timer", function () {
      return timer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function timer(countDownDate) {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000);

      if (distance < 0) {
        return;
      }

      return (days ? days + "d " : "") + (hours ? hours + "h " : "") + (minutes ? minutes + "m " : "0m ") + (seconds ? seconds + "s " : "0s");
    }
    /***/

  },

  /***/
  "./src/app/HELPERS/extractLikes.ts":
  /*!*****************************************!*\
    !*** ./src/app/HELPERS/extractLikes.ts ***!
    \*****************************************/

  /*! exports provided: extractLikes */

  /***/
  function srcAppHELPERSExtractLikesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "extractLikes", function () {
      return extractLikes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function extractLikes(item) {
      console.log(item, 4444); // return 10

      if (item.likes || item.likes === 0) {
        return item.likes;
      } else if (item.questionManyLikes) {
        return item.questionManyLikes;
      } else {
        return null;
      }
    }
    /***/

  },

  /***/
  "./src/app/HELPERS/mutch.ts":
  /*!**********************************!*\
    !*** ./src/app/HELPERS/mutch.ts ***!
    \**********************************/

  /*! exports provided: MustMatch */

  /***/
  function srcAppHELPERSMutchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // custom validator to check that two fields match


    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/HELPERS/portalTimeCreator.ts":
  /*!**********************************************!*\
    !*** ./src/app/HELPERS/portalTimeCreator.ts ***!
    \**********************************************/

  /*! exports provided: UTCtimeCreator, isValidDate */

  /***/
  function srcAppHELPERSPortalTimeCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UTCtimeCreator", function () {
      return UTCtimeCreator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isValidDate", function () {
      return isValidDate;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function UTCtimeCreator(date, time) {
      var datePart = [date.year, date.month, date.day];
      var timePart = time.split(":");
      return new Date(date.year, date.month - 1, date.day, +timePart[0], +timePart[1]);
    }

    function isValidDate(date, time) {
      var dateNOw = UTCtimeCreator(date, time).getTime();

      if (dateNOw - 60 * 60 * 12 < Date.now()) {
        // half day
        return;
      }

      return true;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _datepicker_popup_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./datepicker-popup.module */
    "./src/app/datepicker-popup.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var _services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts");
    /* harmony import */


    var _services_portal_portal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts");
    /* harmony import */


    var _services_nickName_nick_name_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/nickName/nick-name.service */
    "./src/app/services/nickName/nick-name.service.ts");
    /* harmony import */


    var _services_answer_answer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/answer/answer.service */
    "./src/app/services/answer/answer.service.ts");
    /* harmony import */


    var _services_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/interceptor/interceptor.service */
    "./src/app/services/interceptor/interceptor.service.ts");
    /* harmony import */


    var _services_interceptor_interceptorJWT_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/interceptor/interceptorJWT.service */
    "./src/app/services/interceptor/interceptorJWT.service.ts");
    /* harmony import */


    var _services_question_question_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/question/question.service */
    "./src/app/services/question/question.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_registration_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/registration/user-registration/user-registration.component */
    "./src/app/components/registration/user-registration/user-registration.component.ts");
    /* harmony import */


    var _components_login_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/login/user-login/user-login.component */
    "./src/app/components/login/user-login/user-login.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var src_app_components_portal_portal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! src/app/components/portal/portal.component */
    "./src/app/components/portal/portal.component.ts");
    /* harmony import */


    var src_app_components_portal_portal_detail_portal_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! src/app/components/portal/portal-detail/portal-detail.component */
    "./src/app/components/portal/portal-detail/portal-detail.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_cover_cover_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/cover/cover.component */
    "./src/app/components/cover/cover.component.ts");
    /* harmony import */


    var _components_home_portal_modal_portal_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/home/portal-modal/portal-modal.component */
    "./src/app/components/home/portal-modal/portal-modal.component.ts");
    /* harmony import */


    var src_app_components_home_send_mail_modal_send_mail_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! src/app/components/home/send-mail-modal/send-mail-modal.component */
    "./src/app/components/home/send-mail-modal/send-mail-modal.component.ts");
    /* harmony import */


    var _components_portal_portal_detail_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/portal/portal-detail/chat-list/chat-list.component */
    "./src/app/components/portal/portal-detail/chat-list/chat-list.component.ts");
    /* harmony import */


    var _components_portal_portal_detail_top10_list_top10_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/portal/portal-detail/top10-list/top10-list.component */
    "./src/app/components/portal/portal-detail/top10-list/top10-list.component.ts");
    /* harmony import */


    var _components_portal_portal_detail_message_message_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/portal/portal-detail/message/message.component */
    "./src/app/components/portal/portal-detail/message/message.component.ts");
    /* harmony import */


    var _components_portal_portal_detail_question_question_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/portal/portal-detail/question/question.component */
    "./src/app/components/portal/portal-detail/question/question.component.ts");
    /* harmony import */


    var _components_portal_portal_detail_settings_settings_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/portal/portal-detail/settings/settings.component */
    "./src/app/components/portal/portal-detail/settings/settings.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _guards_subscriber_guard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./guards/subscriber.guard */
    "./src/app/guards/subscriber.guard.ts"); // services
    // import { ChatService } from "./services/chat/chat.service";
    // forms
    // components
    // guard


    var routes = [{
      path: "",
      redirectTo: "api/cover",
      pathMatch: "full"
    }, {
      path: "api/cover",
      component: _components_cover_cover_component__WEBPACK_IMPORTED_MODULE_22__["CoverComponent"]
    }, {
      path: "api/users/home",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]]
    }, {
      path: "api/users/register",
      component: _components_registration_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_16__["UserRegistrationComponent"]
    }, {
      path: "api/users/login",
      component: _components_login_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_17__["UserLoginComponent"]
    }, {
      path: "api/portals/:token",
      component: src_app_components_portal_portal_detail_portal_detail_component__WEBPACK_IMPORTED_MODULE_20__["PortalDetailComponent"],
      canActivate: [_guards_subscriber_guard__WEBPACK_IMPORTED_MODULE_31__["SubscriberGuard"]]
    }, {
      path: "api/portals",
      component: src_app_components_portal_portal_component__WEBPACK_IMPORTED_MODULE_19__["PortalComponent"]
    }, // {
    //   path: "api/users/auth/facebook",
    //   component: ProfileComponent
    // },
    {
      path: "api/users/profile/:id",
      // redirectTo: "api/users/profile",
      // pathMatch: "full",
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_registration_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_16__["UserRegistrationComponent"], _components_login_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_17__["UserLoginComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"], src_app_components_portal_portal_component__WEBPACK_IMPORTED_MODULE_19__["PortalComponent"], src_app_components_portal_portal_detail_portal_detail_component__WEBPACK_IMPORTED_MODULE_20__["PortalDetailComponent"], _components_cover_cover_component__WEBPACK_IMPORTED_MODULE_22__["CoverComponent"], _components_home_portal_modal_portal_modal_component__WEBPACK_IMPORTED_MODULE_23__["PortalModalComponent"], src_app_components_home_send_mail_modal_send_mail_modal_component__WEBPACK_IMPORTED_MODULE_24__["SendMailModalComponent"], _components_portal_portal_detail_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_25__["ChatListComponent"], _components_portal_portal_detail_top10_list_top10_list_component__WEBPACK_IMPORTED_MODULE_26__["Top10ListComponent"], _components_portal_portal_detail_message_message_component__WEBPACK_IMPORTED_MODULE_27__["MessageComponent"], _components_portal_portal_detail_question_question_component__WEBPACK_IMPORTED_MODULE_28__["QuestionComponent"], _components_portal_portal_detail_settings_settings_component__WEBPACK_IMPORTED_MODULE_29__["SettingsComponent"]],
      imports: [_datepicker_popup_module__WEBPACK_IMPORTED_MODULE_5__["NgbdDatepickerPopupModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
      providers: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_8__["UserAuthService"], _services_portal_portal_service__WEBPACK_IMPORTED_MODULE_9__["PortalService"], _services_nickName_nick_name_service__WEBPACK_IMPORTED_MODULE_10__["NickNameService"], _services_answer_answer_service__WEBPACK_IMPORTED_MODULE_11__["AnswerService"], // ChatService,
      _services_question_question_service__WEBPACK_IMPORTED_MODULE_14__["QuestionService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _services_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["InterceptorService"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _services_interceptor_interceptorJWT_service__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"],
        multi: true
      }],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts"); // import { UserAuthService } from "src/app/services/user/user.service";
    // services
    // import { UserAuthService } from "./services/auth/user-auth.service";


    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(userAuthService, socket) {
        _classCallCheck(this, AppComponent);

        this.userAuthService = userAuthService;
        this.socket = socket; // const source = fromEvent(window, "storage");
        // // source.pipe(map(event => ))
        // source.subscribe( (e: any) => {
        //   // if (!e.key && !e.newValue) {
        //   //   this.userAuthService.logout();
        //   //   this.userAuthService.signOut();
        //   // }
        //   console.log(e, 23232323);
        // });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.socket.connect();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"]
      }, {
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: provideConfig, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "provideConfig", function () {
      return provideConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/angularx-social-login.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts"); // Import social login module
    // Import login providers
    // import { PortalRowDirective } from './directives/portal-row.directive';
    // import { HomeComponent } from "./components/home/home.component";


    var socketConfig = {
      url: "http://localhost:3000",
      options: {}
    };
    var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthServiceConfig"]([{
      id: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"].PROVIDER_ID,
      provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"]("831828400593240")
    }]);

    function provideConfig() {
      return config;
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["SocialLoginModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["SocketIoModule"].forRoot(socketConfig)],
      providers: [{
        provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthServiceConfig"],
        useFactory: provideConfig
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/cover/cover.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/cover/cover.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCoverCoverComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n  background-origin: padding-box;\n  list-style: none;\n}\n\nli {\n    cursor: pointer;\n}\n\nli.disabled {\n  /* pointer-events: none; */\n  cursor: default;\n  \n}\n\n.list-type5 {\n  /* width: 410px; */\n  margin: 30px;\n\n}\n\n.list-type5 ol {\n  list-style-type: none;\n  margin: 0;\n  margin-left: 1em;\n  padding: 0;\n  /* counter-reset: li-counter; */\n}\n\n.list-type5 ol li {\n  position: relative;\n  margin-bottom: 1.5em;\n  padding: 0.5em;\n  background-color: #f0d756;\n  padding-left: 58px;\n  transition: box-shadow 0.4s;\n  -webkit-transition: box-shadow 0.4s; /* For Safari 3.1 to 6.0 */\n}\n\n.list-type5 ol li span:first-child {\n  text-decoration: none;\n  color: black;\n  font-size: 15px;\n  font-family: \"Raleway\", sans-serif;\n}\n\n.list-type5 li:hover {\n  box-shadow: inset -90em 0 #93C775;\n}\n\n.list-type5 li.disabled:hover {\n  box-shadow: inset -90em 0 #fc7470;\n}\n\n.list-type5 ol li i {\n  position: absolute;\n  top: -0.3em;\n  left: -0.5em;\n  width: 1.8em;\n  height: 1.8em;\n  font-size: 2em;\n  border-radius: 50%;\n  border: 2px solid #93C775;\n  line-height: 1.5;\n  font-weight: bold;\n  text-align: center;\n  color: #93C775;\n  background-color: #555555;\n  transform: rotate(-20deg);\n  -ms-transform: rotate(-20deg);\n  -webkit-transform: rotate(-20deg);\n  z-index: 99;\n  overflow: hidden;\n  /* content: counter(li-counter); */\n  /* counter-increment: li-counter; */\n}\n\n.list-type5 ol li.disabled i {\n    border: 2px solid #fc7470;\n    color: fc7470;\n}\n\nol li > *{\n  flex: 1 1 20em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Zlci9jb3Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlOztBQUVqQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLCtCQUErQjtBQUNqQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLG1DQUFtQyxFQUFFLDBCQUEwQjtBQUNqRTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxtQ0FBbUM7QUFDckM7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdmVyL2NvdmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3g7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmxpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5saS5kaXNhYmxlZCB7XG4gIC8qIHBvaW50ZXItZXZlbnRzOiBub25lOyAqL1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIFxufVxuLmxpc3QtdHlwZTUge1xuICAvKiB3aWR0aDogNDEwcHg7ICovXG4gIG1hcmdpbjogMzBweDtcblxufVxuLmxpc3QtdHlwZTUgb2wge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgcGFkZGluZzogMDtcbiAgLyogY291bnRlci1yZXNldDogbGktY291bnRlcjsgKi9cbn1cbi5saXN0LXR5cGU1IG9sIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGQ3NTY7XG4gIHBhZGRpbmctbGVmdDogNThweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjRzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC40czsgLyogRm9yIFNhZmFyaSAzLjEgdG8gNi4wICovXG59XG5cbi5saXN0LXR5cGU1IG9sIGxpIHNwYW46Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5saXN0LXR5cGU1IGxpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTkwZW0gMCAjOTNDNzc1O1xufVxuLmxpc3QtdHlwZTUgbGkuZGlzYWJsZWQ6aG92ZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAtOTBlbSAwICNmYzc0NzA7XG59XG5cbi5saXN0LXR5cGU1IG9sIGxpIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuM2VtO1xuICBsZWZ0OiAtMC41ZW07XG4gIHdpZHRoOiAxLjhlbTtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzkzQzc3NTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM5M0M3NzU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gIHotaW5kZXg6IDk5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBjb250ZW50OiBjb3VudGVyKGxpLWNvdW50ZXIpOyAqL1xuICAvKiBjb3VudGVyLWluY3JlbWVudDogbGktY291bnRlcjsgKi9cbn1cbi5saXN0LXR5cGU1IG9sIGxpLmRpc2FibGVkIGkge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmYzc0NzA7XG4gICAgY29sb3I6IGZjNzQ3MDtcbn1cblxub2wgbGkgPiAqe1xuICBmbGV4OiAxIDEgMjBlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/cover/cover.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/cover/cover.component.ts ***!
    \*****************************************************/

  /*! exports provided: CoverComponent */

  /***/
  function srcAppComponentsCoverCoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoverComponent", function () {
      return CoverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_portal_portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts");
    /* harmony import */


    var src_app_services_nickName_nick_name_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/nickName/nick-name.service */
    "./src/app/services/nickName/nick-name.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts");
    /* harmony import */


    var src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");

    var CoverComponent =
    /*#__PURE__*/
    // [routerLink]="['/api/portals', item.token]"
    function () {
      function CoverComponent(userAuthService, portalService, router, nickNameService, chatService) {
        var _this = this;

        _classCallCheck(this, CoverComponent);

        this.userAuthService = userAuthService;
        this.portalService = portalService;
        this.router = router;
        this.nickNameService = nickNameService;
        this.chatService = chatService;
        this.portalData = [];
        this.currentUserPortals = [];
        this.portalService.portal.subscribe(function (portal) {
          _this.portalData.push(portal);
        });
      } // async openModal(item.id, token, privatePortal, item.userId) {


      _createClass(CoverComponent, [{
        key: "openModal",
        value: function openModal(item, privatePortal) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var userId, issubLoggedIn;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.portalService.currentPortalIdSubject.next(item.id);
                    this.portalService.currentPortalSubject.next(item);
                    userId = this.userAuthService.currentUserValue && this.userAuthService.currentUserValue.id;
                    _context4.next = 5;
                    return this.nickNameService.isSubAuth(item.id);

                  case 5:
                    issubLoggedIn = _context4.sent;

                    if (issubLoggedIn && issubLoggedIn.currentNicId || userId === item.userId) {
                      this.router.navigate(["api/portals", item.token]);
                    } else if (issubLoggedIn === false) {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "false token!",
                        footer: "<a href>Why do I have this issue?</a>"
                      });
                    } else {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.mixin({
                        input: "text",
                        confirmButtonText: "Next &rarr;",
                        showCancelButton: true,
                        progressSteps: ["1", "2"]
                      }).queue([{
                        title: "Step 1",
                        text: !privatePortal ? "Press Next Button To Continue" : "Enter your subscribtion token",
                        showLoaderOnConfirm: true,
                        inputValue: !privatePortal && item.token,
                        // tslint:disable-next-line: no-shadowed-variable
                        preConfirm: function preConfirm(token) {
                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee() {
                            var isValidToken;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.prev = 0;
                                    _context.next = 3;
                                    return this.portalService.checkPermision(token, item.id);

                                  case 3:
                                    isValidToken = _context.sent;

                                    if (isValidToken.ok) {
                                      _context.next = 6;
                                      break;
                                    }

                                    throw new Error(isValidToken.textContent);

                                  case 6:
                                    return _context.abrupt("return", isValidToken);

                                  case 9:
                                    _context.prev = 9;
                                    _context.t0 = _context["catch"](0);
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showValidationMessage("Access failed: ".concat(_context.t0.message));

                                  case 12:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this, [[0, 9]]);
                          }));
                        },
                        allowOutsideClick: function allowOutsideClick() {
                          return !sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.isLoading();
                        }
                      }, {
                        title: "Step 2",
                        text: "Ente your Nickname identify",
                        showLoaderOnConfirm: true,
                        preConfirm: function preConfirm(nickNmae) {
                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee2() {
                            var nickToken, nickname;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    nickToken = this.nickNameService.getNickToken;
                                    _context2.prev = 1;

                                    if (nickNmae) {
                                      _context2.next = 4;
                                      break;
                                    }

                                    throw new Error("Please enter your nickname");

                                  case 4:
                                    _context2.next = 6;
                                    return this.nickNameService.createNickname(nickNmae, item.id, nickToken);

                                  case 6:
                                    nickname = _context2.sent;

                                    if (nickname.id) {
                                      _context2.next = 9;
                                      break;
                                    }

                                    throw new Error(nickname.textContent);

                                  case 9:
                                    return _context2.abrupt("return", nickname);

                                  case 12:
                                    _context2.prev = 12;
                                    _context2.t0 = _context2["catch"](1);
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showValidationMessage("Access failed: ".concat(_context2.t0.message));

                                  case 15:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this, [[1, 12]]);
                          }));
                        },
                        allowOutsideClick: function allowOutsideClick() {
                          return !sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.isLoading();
                        }
                      }]) // .then(async result => {
                      //   console.log(result, 1111111);
                      //   return result;
                      // })
                      .then(function (result) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (!result.value) {
                                    _context3.next = 5;
                                    break;
                                  }

                                  _context3.next = 3;
                                  return sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                    title: "All done!",
                                    html: "Dear ".concat(result.value[1].name, " you succesfully Registered"),
                                    confirmButtonText: "Let's Start!"
                                  });

                                case 3:
                                  // console.log(window.atob(result.value[1].token.split(".")[1]), 888);
                                  localStorage.setItem("nickToken", result.value[1].token);
                                  this.router.navigate(["api/portals", item.token]);

                                case 5:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });
                    }

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // lll() {
        //   console.log(898989)
        // }

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          //
          this.chatService.refreshPortals.subscribe(function (_) {
            _this3.portalService.getAll().subscribe(function (portals) {
              _this3.portalData = portals;
            });
          }); //

          this.portalService.getAll().subscribe(function (portals) {
            _this3.portalData = portals;
            console.log(_this3.portalData, 8899);
          }); //

          this.userAuthService.isAuthenticated().then(function (result) {
            if (result) {
              _this3.userAuthService.setLogin();
            } else {
              _this3.userAuthService.setLogOut();
            }
          }); //

          this.portalService.portalState.subscribe(function (result) {
            if (result.state === null) {
              _this3.portalService.chekPortalStatus(result.token).subscribe(function (status) {
                if (status.private) {
                  _this3.openModal(status, true);
                } else {
                  _this3.openModal(status, false);
                }
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "??????????????!",
                footer: "<a href>Why do I have this issue?</a>"
              });
            }
          }); //

          var userId = this.userAuthService.currentUserValue && this.userAuthService.currentUserValue.id;

          if (userId) {
            this.portalService.getUserPortals(userId).subscribe(function (portals) {
              _this3.currentUserPortals = portals;
            });
          } // console.log(this.userAuthService.UserLoggedStatus);

        }
      }]);

      return CoverComponent;
    }();

    CoverComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthService"]
      }, {
        type: _services_portal_portal_service__WEBPACK_IMPORTED_MODULE_2__["PortalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_nickName_nick_name_service__WEBPACK_IMPORTED_MODULE_3__["NickNameService"]
      }, {
        type: src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]
      }];
    };

    CoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-cover",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cover/cover.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cover.component.css */
      "./src/app/components/cover/cover.component.css")).default]
    }) // [routerLink]="['/api/portals', item.token]"
    ], CoverComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/header/header.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* { /* Safari/Chrome, other WebKit */    /* Firefox, other Gecko */\n    box-sizing: border-box!important;\n}\nul > li {\n    margin-right: 5px;\n}\n.is-active {\n    border-bottom: 3px solid #333333;\n    padding: 0;\n    margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFDOEMsZ0NBQWdDLEtBQ2hDLHlCQUF5QjtJQUNuRSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveCFpbXBvcnRhbnQ7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveCFpbXBvcnRhbnQ7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveCFpbXBvcnRhbnQ7XG59XG51bCA+IGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5pcy1hY3RpdmUge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMzMzMzMzO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // import { AuthService } from "angularx-social-login";
    // import { Observable } from "rxjs/Observable";


    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(router, authService) {
        var _this4 = this;

        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.authService = authService;
        this.authService.currentUser.subscribe(function (x) {
          _this4.currentUser = x;
        });
        this.authService.isLoggedIn.subscribe(function (x) {
          _this4.isLoggedIn = x;
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          alert(210989);
          this.authService.logout(); // this.socialAuthService.signOut();

          this.router.navigate(["/"]);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/components/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fieldOfportal {\n    background-color: aqua;\n}\n.table > thead > tr > th {\n    text-align: center;\n}\n.ni_active {\n    pointer-events: none;\n    cursor: default;\n    background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGRPZnBvcnRhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5pX2FjdGl2ZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_HELPERS_backwardTimer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/HELPERS/backwardTimer */
    "./src/app/HELPERS/backwardTimer.ts");
    /* harmony import */


    var src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts"); // import { formattedError } from '@angular/compiler';


    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(portalService, userAuthService, router) {
        var _this5 = this;

        _classCallCheck(this, HomeComponent);

        this.portalService = portalService;
        this.userAuthService = userAuthService;
        this.router = router;
        this.timetoStart = false;
        this.portalUrlPath = "http://localhost:3000/api/portals/";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.portalData = [];
        this.portalService.portal.subscribe(function (x) {
          _this5.portal = x;

          var StartTime = _this5.extractStartDate([x]);

          if (!StartTime[0]) {
            return;
          }

          var addedPortal = _this5.setupTimes([x], StartTime);

          _this5.portalData.push(addedPortal[0]);
        });
      } // extract date from array of portals


      _createClass(HomeComponent, [{
        key: "extractStartDate",
        value: function extractStartDate(portals) {
          return portals.reduce(function (arr, item) {
            return arr.push(item.start), arr;
          }, []);
        }
      }, {
        key: "setupTimes",
        value: function setupTimes(portals, time) {
          var _this6 = this;

          return portals.reduce(function (arr, element, ind) {
            var timeStart = element.start;

            var localDate = _this6.makeCurrentDate(timeStart);

            element.counter = _this6.initCounter(time[ind]);
            element.start = localDate;
            return arr;
          }, portals);
        }
      }, {
        key: "makeCurrentDate",
        value: function makeCurrentDate(time) {
          var date = new Date(time);
          var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          var formatter = new Intl.DateTimeFormat("en-Us", {
            timeZone: timeZone,
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
          });
          return formatter.format(date);
        }
      }, {
        key: "initCounter",
        value: function initCounter(time) {
          var _this7 = this;

          var timer1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_) {
            var t = _this7.foo(time);

            if (!t) {
              // this.started = true;
              return;
            }

            return t;
          }), // filter(item => !!item),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$));
          return timer1;
        }
      }, {
        key: "foo",
        value: function foo(time) {
          var countDownDate = new Date(time).getTime();
          return Object(src_app_HELPERS_backwardTimer__WEBPACK_IMPORTED_MODULE_6__["timer"])(countDownDate);
        }
      }, {
        key: "startEvent",
        value: function startEvent(id, token) {
          var _this8 = this;

          this.portalService.currentPortalIdSubject.next(id);
          this.portalService.startEvent(id, token).subscribe(function (resp) {
            if (resp) {
              _this8.router.navigate(["api/portals", token]);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          var userId = this.userAuthService.currentUserValue.id;
          this.started = false;
          this.portalData = []; // get all portals

          this.portalService.getUserPortals(userId).subscribe(function (portals) {
            var StartTime = _this9.extractStartDate(portals);

            _this9.portalData = _this9.setupTimes(portals, StartTime);
            console.log(_this9.portalData);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true); // Unsubscribe from the subject

          this.destroy$.complete();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"]
      }, {
        type: src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_7__["UserAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/home/portal-modal/portal-modal.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/components/home/portal-modal/portal-modal.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomePortalModalPortalModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9wb3J0YWwtbW9kYWwvcG9ydGFsLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/portal-modal/portal-modal.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/home/portal-modal/portal-modal.component.ts ***!
    \************************************************************************/

  /*! exports provided: PortalModalComponent */

  /***/
  function srcAppComponentsHomePortalModalPortalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalModalComponent", function () {
      return PortalModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts");
    /* harmony import */


    var src_app_HELPERS_portalTimeCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/HELPERS/portalTimeCreator */
    "./src/app/HELPERS/portalTimeCreator.ts");
    /* harmony import */


    var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts");

    var PortalModalComponent =
    /*#__PURE__*/
    function () {
      function PortalModalComponent(modalService, formBuilder, authService, portalService) {
        var _this10 = this;

        _classCallCheck(this, PortalModalComponent);

        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.portalService = portalService;
        this.portalForm = this.formBuilder.group({
          title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          time: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          private: null
        });
        this.authService.currentUser.subscribe(function (x) {
          _this10.currentUser = x;
        });
      }

      _createClass(PortalModalComponent, [{
        key: "open",
        value: function open(content) {
          var _this11 = this;

          this.modalService.open(content, {
            ariaLabelledBy: "modal-basic-title"
          }).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
            console.log(result, 999);

            if (result.invalid || !Object(src_app_HELPERS_portalTimeCreator__WEBPACK_IMPORTED_MODULE_5__["isValidDate"])(result.value.date, result.value.time)) {
              console.log(89101);
              return;
            }

            var portalData = result.value;
            var userId = _this11.currentUser.id;
            var UTCtime = Object(src_app_HELPERS_portalTimeCreator__WEBPACK_IMPORTED_MODULE_5__["UTCtimeCreator"])(portalData.date, portalData.time);
            console.log(UTCtime, 777666);

            _this11.portalService.addPortal({
              start: UTCtime,
              userId: userId,
              name: portalData.title,
              private: +portalData.private
            }).subscribe(function (portal) {
              return console.log(portal, 23323);
            });
          }, function (reason) {
            _this11.closeResult = "Dismissed ".concat(_this11.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "fx",
        get: function get() {
          return this.portalForm.controls;
        }
      }]);

      return PortalModalComponent;
    }();

    PortalModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"]
      }, {
        type: src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_6__["PortalService"]
      }];
    };

    PortalModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-portal-modal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portal-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/portal-modal/portal-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portal-modal.component.css */
      "./src/app/components/home/portal-modal/portal-modal.component.css")).default]
    })], PortalModalComponent);
    /***/
  },

  /***/
  "./src/app/components/home/send-mail-modal/send-mail-modal.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/home/send-mail-modal/send-mail-modal.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeSendMailModalSendMailModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form div div .ng-dirty.ng-valid {\n    border: 1px solid green\n}\nform div div .ng-dirty.ng-invalid {\n    border: 1px solid red\n}\n.add {\n    display: flex;\n    justify-content: center;\n    /* position: absolute; */\n    cursor: pointer;\n    width: 100%;\n}\n.input-group i{\n    color: red;\n    font-size: 25px;\n    position: relative;\n    left: -40px;\n    top: 5px;\n    cursor: pointer;\n}\n.add > i {\n    font-size: 25px!important;\n    color: #806104;\n}\n.red {\n    color: red\n}\n.url {\n    font-size: 12px;\n}\nform p:nth-of-type(2) {\n    margin-bottom: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3NlbmQtbWFpbC1tb2RhbC9zZW5kLW1haWwtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9zZW5kLW1haWwtbW9kYWwvc2VuZC1tYWlsLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIGRpdiBkaXYgLm5nLWRpcnR5Lm5nLXZhbGlkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlblxufVxuZm9ybSBkaXYgZGl2IC5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWRcbn1cblxuLmFkZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmlucHV0LWdyb3VwIGl7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC00MHB4O1xuICAgIHRvcDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZCA+IGkge1xuICAgIGZvbnQtc2l6ZTogMjVweCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM4MDYxMDQ7XG59XG4ucmVkIHtcbiAgICBjb2xvcjogcmVkXG59XG4udXJsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbmZvcm0gcDpudGgtb2YtdHlwZSgyKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/send-mail-modal/send-mail-modal.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/home/send-mail-modal/send-mail-modal.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SendMailModalComponent */

  /***/
  function srcAppComponentsHomeSendMailModalSendMailModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendMailModalComponent", function () {
      return SendMailModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts");
    /* harmony import */


    var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user/user.service */
    "./src/app/services/user/user.service.ts");

    var SendMailModalComponent =
    /*#__PURE__*/
    function () {
      function SendMailModalComponent(modalService, formBuilder, portalService, userService) {
        _classCallCheck(this, SendMailModalComponent);

        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.portalService = portalService;
        this.userService = userService;
        this.fails = false;
        this.failureMsg = "sign correct email";
        this.sendMailForm = this.formBuilder.group({
          emails: this.formBuilder.array([this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]]
          })])
        });
      }

      _createClass(SendMailModalComponent, [{
        key: "open",
        value: function open(content) {
          var _this12 = this;

          this.modalService.open(content, {
            ariaLabelledBy: "modal-basic-title"
          }).result.then(function (result) {
            _this12.fails = false;
            console.log(result, 4444);

            _this12.userService.sendMail(result.value, _this12.url).subscribe(function (info) {
              return console.log(info, 789);
            });
          }, function (reason) {// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
        }
      }, {
        key: "checkFormValid",
        value: function checkFormValid(isValid) {
          if (isValid.valid) {
            return true;
          }

          this.fails = true;
          return false;
        }
      }, {
        key: "addInput",
        value: function addInput() {
          this.inpArray.push(this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]]
          }));
        }
      }, {
        key: "removeEmail",
        value: function removeEmail(i) {
          this.inpArray.removeAt(i);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "inpArray",
        get: function get() {
          return this.sendMailForm.get("emails");
        }
      }]);

      return SendMailModalComponent;
    }();

    SendMailModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_4__["PortalService"]
      }, {
        type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SendMailModalComponent.prototype, "url", void 0);
    SendMailModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-send-mail-modal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./send-mail-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/send-mail-modal/send-mail-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./send-mail-modal.component.css */
      "./src/app/components/home/send-mail-modal/send-mail-modal.component.css")).default]
    })], SendMailModalComponent);
    /***/
  },

  /***/
  "./src/app/components/login/user-login/user-login.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/login/user-login/user-login.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginUserLoginUserLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".divider-text {\n    position: relative;\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n.divider-text span {\n    padding: 7px;\n    font-size: 12px;\n    position: relative;   \n    z-index: 2;\n}\n.divider-text:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    border-bottom: 1px solid #ddd;\n    top: 55%;\n    left: 0;\n    z-index: 1;\n}\n.btn-facebook {\n    background-color: #405D9D;\n    color: #fff;\n}\n.btn-twitter {\n    background-color: #42AEEC;\n    color: #fff;\n}\n/*  */\n/* form>div>div {\n    order: -1;\n} */\nform > div {\n    display: flex;\n}\nform > div > div {\n    order: -1;\n}\n.no_valid i {\n    color: red\n}\n.is_valid i {\n    color: green\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi91c2VyLWxvZ2luL3VzZXItbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsUUFBUTtJQUNSLE9BQU87SUFDUCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQSxLQUFLO0FBQ0w7O0dBRUc7QUFDSDtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2aWRlci10ZXh0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5kaXZpZGVyLXRleHQgc3BhbiB7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgXG4gICAgei1pbmRleDogMjtcbn1cbi5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIHRvcDogNTUlO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmJ0bi1mYWNlYm9vayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNUQ5RDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tdHdpdHRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyQUVFQztcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi8qICAqL1xuLyogZm9ybT5kaXY+ZGl2IHtcbiAgICBvcmRlcjogLTE7XG59ICovXG5mb3JtID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuZm9ybSA+IGRpdiA+IGRpdiB7XG4gICAgb3JkZXI6IC0xO1xufVxuXG4ubm9fdmFsaWQgaSB7XG4gICAgY29sb3I6IHJlZFxufVxuLmlzX3ZhbGlkIGkge1xuICAgIGNvbG9yOiBncmVlblxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/login/user-login/user-login.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/login/user-login/user-login.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UserLoginComponent */

  /***/
  function srcAppComponentsLoginUserLoginUserLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function () {
      return UserLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); // import { UserService } from "src/app/services/user/user.service";


    var UserLoginComponent =
    /*#__PURE__*/
    function () {
      function UserLoginComponent(router, formBuilder, userAuthService) {
        _classCallCheck(this, UserLoginComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.userAuthService = userAuthService;
      }

      _createClass(UserLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
          });
        }
      }, {
        key: "userLogin",
        value: function userLogin() {
          var _this13 = this;

          var _this$loginForm$value = this.loginForm.value,
              email = _this$loginForm$value.email,
              password = _this$loginForm$value.password;
          this.userAuthService.login(email, password).subscribe(function (user) {
            return _this13.router.navigate(["api/users/profile", user.id]);
          });
        }
      }, {
        key: "detectClass",
        value: function detectClass(field) {
          if (this.loginForm.controls[field].dirty && this.loginForm.controls[field].invalid) {
            return "no_valid";
          } else if (this.loginForm.controls[field].dirty && this.loginForm.controls[field].valid) {
            return "is_valid";
          }
        }
      }]);

      return UserLoginComponent;
    }();

    UserLoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"]
      }];
    };

    UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-user-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/user-login/user-login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-login.component.css */
      "./src/app/components/login/user-login/user-login.component.css")).default]
    })], UserLoginComponent);
    /***/
  },

  /***/
  "./src/app/components/ngbootstrap/datepicker/datepicker-popup.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/ngbootstrap/datepicker/datepicker-popup.ts ***!
    \***********************************************************************/

  /*! exports provided: NgbdDatepickerPopup */

  /***/
  function srcAppComponentsNgbootstrapDatepickerDatepickerPopupTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdDatepickerPopup", function () {
      return NgbdDatepickerPopup;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var NgbdDatepickerPopup_1;

    var NgbdDatepickerPopup = NgbdDatepickerPopup_1 =
    /*#__PURE__*/
    function () {
      // private ngControl: NgControl;
      function NgbdDatepickerPopup() {
        _classCallCheck(this, NgbdDatepickerPopup);

        this.onChange = function () {};

        this.onTouched = function () {};
      }

      _createClass(NgbdDatepickerPopup, [{
        key: "bsValueChange",
        value: function bsValueChange(value) {
          this.writeValue(value);
          this.onTouched();
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = this.transformDate(this.value);
          this.onChange(this.value);
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
          this.onChange(this.value); // for OnInit cycle
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {} // this.onTouched = fn;
        //   public setDisabledState(isDisabled: boolean) {
        //     //
        //   }

      }, {
        key: "transformDate",
        value: function transformDate(value) {
          // console.log(value, 999);
          return this.value;
        }
      }]);

      return NgbdDatepickerPopup;
    }();

    NgbdDatepickerPopup = NgbdDatepickerPopup_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "ngbd-datepicker-popup",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./datepicker-popup.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ngbootstrap/datepicker/datepicker-popup.html")).default,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return NgbdDatepickerPopup_1;
        }),
        multi: true
      }]
    })], NgbdDatepickerPopup);
    /***/
  },

  /***/
  "./src/app/components/portal/portal-detail/chat-list/chat-list.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/portal/portal-detail/chat-list/chat-list.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPortalPortalDetailChatListChatListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    list-style: none;\r\n}\r\n\r\n.q_data>span>img, .a_data>span>img {\r\n    width: 32px;\r\n    height: 32px;\r\n    border-radius: 50%;\r\n    border:1.5px solid #f5f6fa;\r\n\r\n}\r\n\r\n.q_data span:last-child, .a_data span:last-child {\r\n    color: #aab8c2;\r\n}\r\n\r\nspan {\r\n    align-self: center;\r\n    margin: 3px 5px;\r\n}\r\n\r\n.current_question {\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-left: 10px;\r\n    border-radius: 25px;\r\n    background-color: #82ccdd;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n\r\n.answer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    padding-right: 10px;\r\n}\r\n\r\n.current_answer {\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-left: 10px;\r\n    border-radius: 25px;\r\n    background: #88BB71;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n\r\n.current_answer+span {\r\n    font-size: 13px;\r\n    color: #aab8c2;\r\n    margin-left: auto;\r\n}\r\n\r\n.ch_list_header h4 {\r\n    height: 45px;\r\n    background: #4E6486;\r\n    border-bottom: 1px solid #fff;\r\n    text-align: center;\r\n    line-height: 45px;\r\n    color: #aab8c2;\r\n}\r\n\r\n.list {\r\n        overflow-y: auto;\r\n        height: calc(100% - 40px);\r\n        background: #53748A;\r\n        padding: 12px;\r\n    }\r\n\r\n.list ul > li {\r\n        border-radius: 20px;\r\n        background: #51678A;\r\n        margin-top: 17px;\r\n    }\r\n\r\n/* scrollbar */\r\n\r\n.scrollbar-near-moon::-webkit-scrollbar-track {\r\n        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n        background-color: #F5F5F5;\r\n        border-radius: 10px; }\r\n\r\n.scrollbar-near-moon::-webkit-scrollbar {\r\n        width: 12px;\r\n        background-color: #F5F5F5; }\r\n\r\n.scrollbar-near-moon::-webkit-scrollbar-thumb {\r\n        border-radius: 10px;\r\n        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n        background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%); }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0YWwvcG9ydGFsLWRldGFpbC9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7O0FBRTlCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixhQUFhO0lBQ2pCOztBQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7O0FBRUEsY0FBYzs7QUFDZDtRQUNJLG9EQUFvRDtRQUNwRCx5QkFBeUI7UUFDekIsbUJBQW1CLEVBQUU7O0FBRXJCO1FBQ0EsV0FBVztRQUNYLHlCQUF5QixFQUFFOztBQUUzQjtRQUNBLG1CQUFtQjtRQUNuQixvREFBb0Q7UUFHcEQsbUVBQW1FLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRhbC9wb3J0YWwtZGV0YWlsL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ucV9kYXRhPnNwYW4+aW1nLCAuYV9kYXRhPnNwYW4+aW1nIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOjEuNXB4IHNvbGlkICNmNWY2ZmE7XHJcblxyXG59XHJcbi5xX2RhdGEgc3BhbjpsYXN0LWNoaWxkLCAuYV9kYXRhIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICBjb2xvcjogI2FhYjhjMjtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDNweCA1cHg7XHJcbn1cclxuXHJcbi5jdXJyZW50X3F1ZXN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyY2NkZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmFuc3dlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmN1cnJlbnRfYW5zd2VyIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzg4QkI3MTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jdXJyZW50X2Fuc3dlcitzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjYWFiOGMyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLmNoX2xpc3RfaGVhZGVyIGg0IHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6ICM0RTY0ODY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgY29sb3I6ICNhYWI4YzI7XHJcbn1cclxuICAgIC5saXN0IHtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzUzNzQ4QTtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0IHVsID4gbGkge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzUxNjc4QTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHNjcm9sbGJhciAqL1xyXG4gICAgLnNjcm9sbGJhci1uZWFyLW1vb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zY3JvbGxiYXItbmVhci1tb29uOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTsgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zY3JvbGxiYXItbmVhci1tb29uOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20oIzVlZTdkZiksIHRvKCNiNDkwY2EpKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sICM1ZWU3ZGYgMCUsICNiNDkwY2EgMTAwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzVlZTdkZiAwJSwgI2I0OTBjYSAxMDAlKTsgfVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/portal/portal-detail/chat-list/chat-list.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/portal/portal-detail/chat-list/chat-list.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ChatListComponent */

  /***/
  function srcAppComponentsPortalPortalDetailChatListChatListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatListComponent", function () {
      return ChatListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_answer_answer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/answer/answer.service */
    "./src/app/services/answer/answer.service.ts");
    /* harmony import */


    var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts");

    var ChatListComponent =
    /*#__PURE__*/
    function () {
      function ChatListComponent(answerService, portalService) {
        _classCallCheck(this, ChatListComponent);

        this.answerService = answerService;
        this.portalService = portalService;
      }

      _createClass(ChatListComponent, [{
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.scrollToBottom();
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
          } catch (err) {
            alert(err.message);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          var portalId = this.portalService.getPortalId;
          this.answerService.getAnswers(portalId).subscribe(function (answers) {
            return _this14.answers = answers;
          });
          this.answer.subscribe(function (answer) {
            return _this14.answers.push(answer);
          });
        }
      }]);

      return ChatListComponent;
    }();

    ChatListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_answer_answer_service__WEBPACK_IMPORTED_MODULE_2__["AnswerService"]
      }, {
        type: src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatListComponent.prototype, "answer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatListComponent.prototype, "inUserPortal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatListComponent.prototype, "userData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatListComponent.prototype, "nickData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("scrollMe", {
      static: false
    })], ChatListComponent.prototype, "myScrollContainer", void 0);
    ChatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-chat-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/chat-list/chat-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-list.component.css */
      "./src/app/components/portal/portal-detail/chat-list/chat-list.component.css")).default]
    })], ChatListComponent);
    /***/
  },

  /***/
  "./src/app/components/portal/portal-detail/message/message.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/portal/portal-detail/message/message.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPortalPortalDetailMessageMessageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text_container {\r\n    margin: 10px;\r\n}\r\n\r\nbody {margin:2rem;}\r\n\r\n.form-rounded {\r\nborder-radius: 1rem;\r\n}\r\n\r\n.reciever {\r\n    width: 15%;\r\n}\r\n\r\n.txt_area {\r\n    width: 65%;\r\n}\r\n\r\n.sendbtn {\r\n    width: 20%;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 25px;\r\n}\r\n\r\n.msg {\r\n    resize: none;\r\n    width: 100%;\r\n}\r\n\r\n.rec_wrap > img {\r\n    width: 40px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0YWwvcG9ydGFsLWRldGFpbC9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsTUFBTSxXQUFXLENBQUM7O0FBRWxCO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGFsL3BvcnRhbC1kZXRhaWwvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dF9jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5ib2R5IHttYXJnaW46MnJlbTt9XHJcblxyXG4uZm9ybS1yb3VuZGVkIHtcclxuYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuLnJlY2lldmVyIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuLnR4dF9hcmVhIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbn1cclxuLnNlbmRidG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuLm1zZyB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucmVjX3dyYXAgPiBpbWcge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/portal/portal-detail/message/message.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/portal/portal-detail/message/message.component.ts ***!
    \******************************************************************************/

  /*! exports provided: MessageComponent */

  /***/
  function srcAppComponentsPortalPortalDetailMessageMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageComponent", function () {
      return MessageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts");
    /* harmony import */


    var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts");
    /* harmony import */


    var src_app_services_question_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/question/question.service */
    "./src/app/services/question/question.service.ts"); // import { Observable, Subject } from "rxjs";


    var MessageComponent =
    /*#__PURE__*/
    function () {
      function MessageComponent(chatService, userAuthService, portalService, questionService) {
        _classCallCheck(this, MessageComponent);

        this.chatService = chatService;
        this.userAuthService = userAuthService;
        this.portalService = portalService;
        this.questionService = questionService;
        this.message = "";
      } //  for subscriber


      _createClass(MessageComponent, [{
        key: "sendMessage",
        value: function sendMessage(message) {
          this.questionService.canScrollSubject.next(true);

          if (message.trim()) {
            var nickDataClone = Object.assign({}, this.nickData);
            nickDataClone.message = message;
            nickDataClone.time = new Date();
            this.chatService.sendMessage(nickDataClone);
            this.message = "";
          }
        } // for user

      }, {
        key: "sendMessgeQuestion",
        value: function sendMessgeQuestion(answer) {
          console.log(answer.trim(), 555);
          this.questionService.canScrollSubject.next(true);

          if (answer.trim()) {
            var userId = this.userData.id;
            var questionId = this.currTop10Nick.id;
            this.chatService.answQuestion({
              userId: userId,
              questionId: questionId,
              answer: answer
            });
            this.message = "";
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.isUserInSelfPortal = this.userAuthService.UserLoggedStatus && this.portalService.isPortalisMakeUser(this.portalService.getPortalId);
          this.questionService.recivierAns.subscribe(function (nick) {
            _this15.currTop10Nick = nick;
          });
        }
      }]);

      return MessageComponent;
    }();

    MessageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"]
      }, {
        type: src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_4__["PortalService"]
      }, {
        type: src_app_services_question_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessageComponent.prototype, "userData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessageComponent.prototype, "nickData", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-message",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/message/message.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message.component.css */
      "./src/app/components/portal/portal-detail/message/message.component.css")).default]
    })], MessageComponent);
    /***/
  },

  /***/
  "./src/app/components/portal/portal-detail/portal-detail.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/portal/portal-detail/portal-detail.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPortalPortalDetailPortalDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    /* outline: 1px solid green; */\r\n}\r\n\r\n/* html, body {\r\n    width: 100%;\r\n    height: 100%;\r\n} */\r\n\r\n.wrapper {\r\n    margin: 15px;\r\n    width: 100%;\r\n    height: 90vh;\r\n}\r\n\r\n.messages {\r\n    width: 70%;\r\n    height: 100%;\r\n    flex-direction: column;\r\n}\r\n\r\n.questions {\r\n    height: 100%;\r\n    width: 30%;\r\n    background-color: #51678A;\r\n}\r\n\r\n.top {\r\n    width: 100%;\r\n    height: 85%;\r\n}\r\n\r\n.wrote_messages {\r\n    width: 100%;\r\n    height: 30%;\r\n}\r\n\r\n.chat_list {\r\n    width: 60%;\r\n    height: 100%;\r\n    /* overflow-y: scroll; */\r\n}\r\n\r\n.top10_list {\r\n    width: 40%;\r\n    height: 100%;\r\n}\r\n\r\n.nick_data > img{\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-left: 15px;\r\n}\r\n\r\n.nick_data {\r\n    padding-left: 50px\r\n}\r\n\r\n.portal_data {\r\n    margin-left: 15%;\r\n}\r\n\r\n/* scrollbar question */\r\n\r\n.scrollbar-near-moon::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-color: #F5F5F5;\r\n    border-radius: 10px; }\r\n\r\n.scrollbar-near-moon::-webkit-scrollbar {\r\n    width: 12px;\r\n    background-color: #F5F5F5; }\r\n\r\n.scrollbar-near-moon::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%); }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0YWwvcG9ydGFsLWRldGFpbC9wb3J0YWwtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDViw4QkFBOEI7QUFDbEM7O0FBRUE7OztHQUdHOztBQUNIO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQSx1QkFBdUI7O0FBQ3ZCO0lBQ0ksb0RBQW9EO0lBQ3BELHlCQUF5QjtJQUN6QixtQkFBbUIsRUFBRTs7QUFFckI7SUFDQSxXQUFXO0lBQ1gseUJBQXlCLEVBQUU7O0FBRTNCO0lBQ0EsbUJBQW1CO0lBQ25CLG9EQUFvRDtJQUdwRCxtRUFBbUUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGFsL3BvcnRhbC1kZXRhaWwvcG9ydGFsLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCBncmVlbjsgKi9cclxufVxyXG5cclxuLyogaHRtbCwgYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSAqL1xyXG4ud3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTB2aDtcclxufVxyXG4ubWVzc2FnZXMge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnF1ZXN0aW9ucyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxNjc4QTtcclxufVxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi53cm90ZV9tZXNzYWdlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4uY2hhdF9saXN0IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXHJcbn1cclxuLnRvcDEwX2xpc3Qge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ubmlja19kYXRhID4gaW1ne1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLm5pY2tfZGF0YSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHhcclxufVxyXG4ucG9ydGFsX2RhdGEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxufVxyXG4vKiBzY3JvbGxiYXIgcXVlc3Rpb24gKi9cclxuLnNjcm9sbGJhci1uZWFyLW1vb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxyXG4gICAgXHJcbiAgICAuc2Nyb2xsYmFyLW5lYXItbW9vbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1OyB9XHJcbiAgICBcclxuICAgIC5zY3JvbGxiYXItbmVhci1tb29uOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20oIzVlZTdkZiksIHRvKCNiNDkwY2EpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzVlZTdkZiAwJSwgI2I0OTBjYSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM1ZWU3ZGYgMCUsICNiNDkwY2EgMTAwJSk7IH1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/portal/portal-detail/portal-detail.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/portal/portal-detail/portal-detail.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PortalDetailComponent */

  /***/
  function srcAppComponentsPortalPortalDetailPortalDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalDetailComponent", function () {
      return PortalDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_nickName_nick_name_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/nickName/nick-name.service */
    "./src/app/services/nickName/nick-name.service.ts");
    /* harmony import */


    var src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts");
    /* harmony import */


    var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts");
    /* harmony import */


    var src_app_services_question_question_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/question/question.service */
    "./src/app/services/question/question.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PortalDetailComponent =
    /*#__PURE__*/
    function () {
      function PortalDetailComponent(nickService, userAuthService, chatService, portalService, questionService, router) {
        var _this16 = this;

        _classCallCheck(this, PortalDetailComponent);

        this.nickService = nickService;
        this.userAuthService = userAuthService;
        this.chatService = chatService;
        this.portalService = portalService;
        this.questionService = questionService;
        this.router = router;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.messages = [];
        this.answer = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.inUserPortal = false;
        this.token = "";
        this.kkk = 1;
        this.nickService.currentNickToken.subscribe(function (token) {
          return _this16.token = token;
        });
      }

      _createClass(PortalDetailComponent, [{
        key: "ChangedAvatar",
        value: function ChangedAvatar(avatar) {
          this.nickData.image = avatar;
          this.questionService.changeAvatarSubject.next({
            avatar: avatar,
            nickId: this.nickData.id
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.portalData = this.portalService.getCurrentPortal;
          this.nickService.nickData.subscribe(function (data) {
            return _this17.nickData = data;
          });
          this.userData = this.userAuthService.currentUserValue;

          if (this.userAuthService.UserLoggedStatus && this.portalService.isPortalisMakeUser(this.portalService.getPortalId)) {
            this.inUserPortal = true;
            this.chatService.answerQuestion.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$)).subscribe(function (answer) {
              _this17.answer.next(answer);
            });
            this.chatService.message.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$)).subscribe(function (message) {
              // this.messages.push(message);
              _this17.questionService.msg.next(message);

              console.log(_this17.messages);
            });
          } else {
            alert(10);
            this.inUserPortal = false;
            this.chatService.message.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$)).subscribe(function (message) {
              // this.messages.push(message);
              _this17.questionService.msg.next(message);

              console.log(_this17.messages);
            });
          }

          this.portalService.portalFinished.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$)).subscribe(function (res) {
            if (_this17.inUserPortal) {
              _this17.router.navigate(["/api/users/home"]);
            } else {
              _this17.router.navigate(["/"]);
            }
          }); // check subscriber authorization
          // this.nickService.isSubscriberAuth()
          // .subscribe(x => this.nickData = x);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }]);

      return PortalDetailComponent;
    }();

    PortalDetailComponent.ctorParameters = function () {
      return [{
        type: src_app_services_nickName_nick_name_service__WEBPACK_IMPORTED_MODULE_2__["NickNameService"]
      }, {
        type: src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"]
      }, {
        type: src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
      }, {
        type: src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_5__["PortalService"]
      }, {
        type: src_app_services_question_question_service__WEBPACK_IMPORTED_MODULE_6__["QuestionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }];
    };

    PortalDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-portal-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portal-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/portal-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portal-detail.component.css */
      "./src/app/components/portal/portal-detail/portal-detail.component.css")).default]
    })], PortalDetailComponent);
    /***/
  },

  /***/
  "./src/app/components/portal/portal-detail/question/question.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/portal/portal-detail/question/question.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPortalPortalDetailQuestionQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "li {\r\n    list-style: none;\r\n}\r\n.msg_card_body{\r\n    overflow-y: auto;\r\n    max-height: 470px;\r\n}\r\n.card-header > div {\r\n    align-items: center;\r\n}\r\n/* .scr {\r\n    width: 100%;\r\n    height: 100%;\r\n} */\r\n.user_img_msg{\r\n    height: 32px;\r\n    width: 32px;\r\n    border:1.5px solid #f5f6fa;\r\n    border-radius: 50%;\r\n}\r\n/*  */\r\n.img_cont_msg{\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n.img_name {\r\n    display: flex;\r\n}\r\n.name {\r\n    margin-left: -15px;\r\n}\r\n/*  */\r\n.msg_cotainer{\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-left: 10px;\r\n    border-radius: 25px;\r\n    background-color: #82ccdd;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n.msg_cont  {\r\n    overflow-y: auto;\r\n}\r\n.msg_time{\r\n    width: 115px;\r\n    margin-top: 2px;\r\n    margin-left: 50px;\r\n    color: rgba(255,255,255,0.5);\r\n    font-size: 10px;\r\n}\r\n/* user card style */\r\n.card-header{\r\n    border-radius: 15px 15px 0 0 !important;\r\n    border-bottom: 1px solid #f5f6fa !important;\r\n}\r\n.user_info {\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-left: 15px;\r\n}\r\n.user_info span, .user_info p {\r\n    color: #AAB8C2;\r\n}\r\n.user_img {\r\n    height: 70px;\r\n    width: 70px;\r\n    border: 1.5px solid #f5f6fa;\r\n}\r\n.metta {\r\n    margin-top: 5px;\r\n    margin-bottom: -60px;\r\n}\r\n/* like */\r\n@-webkit-keyframes animate {\r\n    0%   { background-position: left;  }\r\n    50%  { background-position: right; }\r\n    100% { background-position: right; }\r\n}\r\n@keyframes animate {\r\n    0%   { background-position: left;  }\r\n    50%  { background-position: right; }\r\n    100% { background-position: right; }\r\n}\r\n.is-active {\r\n  -webkit-animation-name: animate;\r\n          animation-name: animate;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: steps(28);\r\n          animation-timing-function: steps(28);\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n.like-btn {\r\n    position: relative;\r\n    top: -20px;\r\n    background: url('twitter-heart.png');\r\n    width: 60px;\r\n    height: 60px;\r\n    background-size: 2900%;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer;\r\n}\r\n.like_count {\r\n    margin-top: -3px;\r\n}\r\n.finish {\r\n    font-size: 55px;\r\n    color: red;\r\n    margin-left: auto;\r\n    margin-right: 20px;\r\n    cursor: pointer;\r\n}\r\n/* scroll */\r\n.scrollbar-near-moon::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-color: #F5F5F5;\r\n    border-radius: 10px; }\r\n.scrollbar-near-moon::-webkit-scrollbar {\r\n    width: 12px;\r\n    background-color: #F5F5F5; }\r\n.scrollbar-near-moon::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%); }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0YWwvcG9ydGFsLWRldGFpbC9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTs7O0dBR0c7QUFDSDtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0QjtBQUVBLEtBQUs7QUFDTDtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBLEtBQUs7QUFDTDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjtBQUVBLG9CQUFvQjtBQUVwQjtJQUNJLHVDQUF1QztJQUN2QywyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUVBLFNBQVM7QUFDVDtJQUNJLE9BQU8seUJBQXlCLEdBQUc7SUFDbkMsT0FBTywwQkFBMEIsRUFBRTtJQUNuQyxPQUFPLDBCQUEwQixFQUFFO0FBQ3ZDO0FBSkE7SUFDSSxPQUFPLHlCQUF5QixHQUFHO0lBQ25DLE9BQU8sMEJBQTBCLEVBQUU7SUFDbkMsT0FBTywwQkFBMEIsRUFBRTtBQUN2QztBQUVBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQyxxQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9CO0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9DQUFtRTtJQUNuRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBLFdBQVc7QUFDWDtJQUNJLG9EQUFvRDtJQUNwRCx5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUU7QUFFckI7SUFDQSxXQUFXO0lBQ1gseUJBQXlCLEVBQUU7QUFFM0I7SUFDQSxtQkFBbUI7SUFDbkIsb0RBQW9EO0lBR3BELG1FQUFtRSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3J0YWwvcG9ydGFsLWRldGFpbC9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubXNnX2NhcmRfYm9keXtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA0NzBweDtcclxufVxyXG4uY2FyZC1oZWFkZXIgPiBkaXYge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKiAuc2NyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59ICovXHJcbi51c2VyX2ltZ19tc2d7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGJvcmRlcjoxLjVweCBzb2xpZCAjZjVmNmZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKiAgKi9cclxuLmltZ19jb250X21zZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59XHJcbi5pbWdfbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG4vKiAgKi9cclxuLm1zZ19jb3RhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyY2NkZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1zZ19jb250ICB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5tc2dfdGltZXtcclxuICAgIHdpZHRoOiAxMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLyogdXNlciBjYXJkIHN0eWxlICovXHJcblxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjZmYSAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VyX2luZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4udXNlcl9pbmZvIHNwYW4sIC51c2VyX2luZm8gcCB7XHJcbiAgICBjb2xvcjogI0FBQjhDMjtcclxufVxyXG4udXNlcl9pbWcge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNmNWY2ZmE7XHJcbn1cclxuLm1ldHRhIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC02MHB4O1xyXG59XHJcblxyXG4vKiBsaWtlICovXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcbiAgICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDsgIH1cclxuICAgIDUwJSAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDsgfVxyXG4gICAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0OyB9XHJcbn1cclxuXHJcbi5pcy1hY3RpdmUge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBzdGVwcygyOCk7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcblxyXG4ubGlrZS1idG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3R3aXR0ZXItaGVhcnQucG5nJyk7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjkwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5saWtlX2NvdW50IHtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuXHJcbi5maW5pc2gge1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBzY3JvbGwgKi9cclxuLnNjcm9sbGJhci1uZWFyLW1vb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxyXG4gICAgXHJcbiAgICAuc2Nyb2xsYmFyLW5lYXItbW9vbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1OyB9XHJcbiAgICBcclxuICAgIC5zY3JvbGxiYXItbmVhci1tb29uOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20oIzVlZTdkZiksIHRvKCNiNDkwY2EpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzVlZTdkZiAwJSwgI2I0OTBjYSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM1ZWU3ZGYgMCUsICNiNDkwY2EgMTAwJSk7IH1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/portal/portal-detail/question/question.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/portal/portal-detail/question/question.component.ts ***!
    \********************************************************************************/

  /*! exports provided: QuestionComponent */

  /***/
  function srcAppComponentsPortalPortalDetailQuestionQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () {
      return QuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_question_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/question/question.service */
    "./src/app/services/question/question.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_HELPERS_extractLikes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/HELPERS/extractLikes */
    "./src/app/HELPERS/extractLikes.ts");
    /* harmony import */


    var src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var QuestionComponent =
    /*#__PURE__*/
    function () {
      // canAutoScroll = true;
      function QuestionComponent(questionService, chatServise, portalService, route) {
        _classCallCheck(this, QuestionComponent);

        this.questionService = questionService;
        this.chatServise = chatServise;
        this.portalService = portalService;
        this.route = route;
        this.questions = [];
        this.isLiked = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        var portalToken = this.route.snapshot.paramMap.get("token");
        this.portalToken = portalToken;
      }

      _createClass(QuestionComponent, [{
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          var canAutoScroll = this.questionService.scrollStatus;

          if (canAutoScroll) {
            this.scrollToBottom();
          }
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
          } catch (err) {
            alert(err.message);
          }
        }
      }, {
        key: "action",
        value: function action(item, i) {
          this.questionService.canScrollSubject.next(false);
          var us_erID = this.currUserID;

          if (item.isLiked) {
            item.isLiked = false;
            item.isClicked = true;
            console.log("click-Minus");
            var t = Object(src_app_HELPERS_extractLikes__WEBPACK_IMPORTED_MODULE_4__["extractLikes"])(item); // console.log(t, 777);

            item.likes = t - 1;
            console.log(item.likes, 8888);
            this.chatServise.sendLikeCount({
              index: i,
              likes: t - 1,
              nicknameId: us_erID,
              questionId: item.id
            }, "minus");
          } else {
            item.isLiked = true;
            item.isClicked = false;

            var _t = Object(src_app_HELPERS_extractLikes__WEBPACK_IMPORTED_MODULE_4__["extractLikes"])(item);

            item.likes = _t + 1;
            console.log(item.likes, 9999);
            console.log("click-Plus");
            this.chatServise.sendLikeCount({
              index: i,
              likes: _t + 1,
              nicknameId: us_erID,
              questionId: item.id
            }, "plus");
          }
        } // if user or subscriber are liked a question

      }, {
        key: "isNickLiked",
        value: function isNickLiked(questionItem) {
          var us_erID = this.currUserID;
          var value = questionItem.questionLikers ? questionItem.questionLikers.some(function (item) {
            return item === us_erID;
          }) : false; //   // console.log(questionItem.isLiked, 5566);

          if (value && !questionItem.isClicked) {
            questionItem.isLiked = true;
            return value;
          } else if (value && questionItem.isClicked) {
            questionItem.isLiked = false;
            return false;
          } else {
            questionItem.isLiked = false;
            return false;
          }
        }
      }, {
        key: "finishPortal",
        value: function finishPortal() {
          this.chatServise.finishPortal(this.portalId);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.questionService.getAllQuestions(this.portalToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(function (questions) {
            console.log(questions, 210989);
            _this18.questions = questions; // this.questions.concat(this.question);
          });
          this.chatServise.addLikeCount();
          this.chatServise.likeCountSubscrbtion.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(function (data) {
            console.log(data, 555222111);
            _this18.questions[data.index].likes = data.likes;
          });
          this.questionService.getMsg.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(function (message) {
            _this18.questions.push(message);
          }); //

          this.questionService.changeAvatar.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(function (result) {
            // console.log(result, 33322211);
            // console.log(this.questions);
            _this18.questions.forEach(function (item, index) {
              if (item.nickss.id === result.nickId) {
                item.nickss.image = result.avatar;
              }
            });
          }); //

          this.chatServise.endOfPortal.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(function (isFinished) {
            // alert(isFinished)
            _this18.portalService.portalFinishedSubject.next(!!isFinished);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.complete();
        }
      }, {
        key: "currUserID",
        get: function get() {
          return this.inUserPortal ? this.userData.id : this.nickData.id;
        }
      }, {
        key: "currPortalId",
        get: function get() {
          return this.inUserPortal ? this.userData.id : this.nickData.id;
        }
      }]);

      return QuestionComponent;
    }();

    QuestionComponent.ctorParameters = function () {
      return [{
        type: src_app_services_question_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]
      }, {
        type: src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]
      }, {
        type: src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_6__["PortalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionComponent.prototype, "nickData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionComponent.prototype, "userData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionComponent.prototype, "inUserPortal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionComponent.prototype, "portalId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("scrollMe", {
      static: false
    })], QuestionComponent.prototype, "myScrollContainer", void 0);
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-question",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/question/question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question.component.css */
      "./src/app/components/portal/portal-detail/question/question.component.css")).default]
    })], QuestionComponent); // partadir destroy ara bolor subscribtion unsub anelu hamar

    /***/
  },

  /***/
  "./src/app/components/portal/portal-detail/settings/settings.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/portal/portal-detail/settings/settings.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPortalPortalDetailSettingsSettingsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    list-style: none;\n}\n.avatars {\n    margin-top: 10px;\n    margin-left: -55px;\n}\n.avatars img {\n    width: 35px;\n    height: 35px;\n    outline: 1px solid gainsboro;\n}\n.avatars ul {\n    display: flex!important;\n    flex-wrap: wrap!important;\n    margin: 3px!important;\n    justify-content: center;\n    align-content: center;\n}\n.avatars ul li {\n    cursor: pointer;\n    margin: 1px;\n}\n.col {\n    flex-grow: 0!important;\n    padding-right: 0!important;\n}\n.row {\n    margin-left: 0!important;\n}\n.dropdown-toggle::after {\n    display: none!important;\n}\n.btn-outline-primary {\n    padding: 5px;\n    margin-left: 64px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0YWwvcG9ydGFsLWRldGFpbC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRhbC9wb3J0YWwtZGV0YWlsL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uYXZhdGFycyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTU1cHg7XG59XG5cbi5hdmF0YXJzIGltZyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBnYWluc2Jvcm87XG59XG5cbi5hdmF0YXJzIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICBmbGV4LXdyYXA6IHdyYXAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogM3B4IWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hdmF0YXJzIHVsIGxpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAxcHg7XG59XG5cbi5jb2wge1xuICAgIGZsZXgtZ3JvdzogMCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMCFpbXBvcnRhbnQ7XG59XG4ucm93IHtcbiAgICBtYXJnaW4tbGVmdDogMCFpbXBvcnRhbnQ7XG59XG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDY0cHg7XG59XG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/portal/portal-detail/settings/settings.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/portal/portal-detail/settings/settings.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppComponentsPortalPortalDetailSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_nickName_nick_name_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/nickName/nick-name.service */
    "./src/app/services/nickName/nick-name.service.ts");
    /* harmony import */


    var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts"); // import { QuestionService } from 'src/app/services/question/question.service';


    var SettingsComponent =
    /*#__PURE__*/
    function () {
      function SettingsComponent(nickNameService, portalService) {
        _classCallCheck(this, SettingsComponent);

        this.nickNameService = nickNameService;
        this.portalService = portalService;
        this.ChangedAvatar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.avatars = ["https://ya-webdesign.com/transparent250_/ale-riendo.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwH6DalS_KpcvdezZT-tymCO2Spog0pW1g8ySWMhAPAohnxKNJ", "https://i.ya-webdesign.com/images/male-avatar-icon-png-18.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR7BUU0nd3piJ38VsRBI6ZuUGpYFca4z35W0bcGaCd84XNV8Kj", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmlIXnWr7kjdc-yDwD5FT_TwHgFOmOqcBvVylgafeSlAXtVjiZ", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHhMPsakSz2Jpg2v9AN5dmzTq6A4xZfGEl2B1XnzOzs13CbpZS", "https://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Devil-3-icon.png"];
      }

      _createClass(SettingsComponent, [{
        key: "updateAvatar",
        value: function updateAvatar(avatar) {
          var _this19 = this;

          console.log(this.portalId, this.nickDataId, 888888888);
          this.nickNameService.changeAvatar({
            avatar: avatar,
            portalId: this.portalId,
            nickId: this.nickDataId
          }).subscribe(function (response) {
            if (response) {
              _this19.ChangedAvatar.emit(avatar);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_nickName_nick_name_service__WEBPACK_IMPORTED_MODULE_2__["NickNameService"]
      }, {
        type: src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SettingsComponent.prototype, "portalId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SettingsComponent.prototype, "nickDataId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SettingsComponent.prototype, "ChangedAvatar", void 0);
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "ngbd-dropdown-basic",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/settings/settings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.component.css */
      "./src/app/components/portal/portal-detail/settings/settings.component.css")).default]
    })], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/components/portal/portal-detail/top10-list/top10-list.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/portal/portal-detail/top10-list/top10-list.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPortalPortalDetailTop10ListTop10ListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n.wrapper {\r\n  height: calc(100% - 40px);\r\n  overflow-y: auto;\r\n  background: #53748A;\r\n  padding: 12px;\r\n}\r\n.wrapper ul > li {\r\n  border-radius: 20px;\r\n  background: #51678A;\r\n  margin-top: 17px;\r\n}\r\n.like {\r\n  /* position: relative; */\r\n  /* top: -20px; */\r\n  background: url('twitter-heart.png');\r\n  width: 60px;\r\n  height: 60px;\r\n  background-size: 2900%;\r\n  background-repeat: no-repeat;\r\n}\r\n@-webkit-keyframes animate {\r\n  0% {\r\n    background-position: left;\r\n  }\r\n  50% {\r\n    background-position: right;\r\n  }\r\n  100% {\r\n    background-position: right;\r\n  }\r\n}\r\n@keyframes animate {\r\n  0% {\r\n    background-position: left;\r\n  }\r\n  50% {\r\n    background-position: right;\r\n  }\r\n  100% {\r\n    background-position: right;\r\n  }\r\n}\r\n.is-active {\r\n  -webkit-animation-name: animate;\r\n          animation-name: animate;\r\n  -webkit-animation-duration: 0.3s;\r\n          animation-duration: 0.3s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: steps(28);\r\n          animation-timing-function: steps(28);\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\nul > li {\r\n  list-style: none;\r\n  padding-left: 5px;\r\n}\r\n.img > img {\r\n  height: 32px;\r\n  width: 32px;\r\n  border-radius: 50%;\r\n  border:1.5px solid #f5f6fa;\r\n}\r\n.msg_cotainer {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  margin-left: 10px;\r\n  border-radius: 25px;\r\n  background-color: #82ccdd;\r\n  padding: 10px;\r\n  position: relative;\r\n}\r\n.data {\r\n  cursor: pointer;\r\n}\r\n.top_10header h4 {\r\n  height: 45px;\r\n  background: #4e6486;\r\n  border-bottom: 1px solid #fff;\r\n  color: #aab8c2;\r\n  text-align: center;\r\n  line-height: 45px;\r\n}\r\n.like.likes {\r\n  position: relative;\r\n  top: -18px;\r\n}\r\nspan {\r\n  margin: 3px 5px;\r\n}\r\n.rait {\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.rait span {\r\n  margin-right: 5px;\r\n  font-size: 20px;\r\n  color: #F9E617;\r\n}\r\n.rait i {\r\n  font-size: 20px;\r\n  color: #F9E617;\r\n}\r\n.scrollbar-near-moon::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-near-moon::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-near-moon::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%); }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0YWwvcG9ydGFsLWRldGFpbC90b3AxMC1saXN0L3RvcDEwLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLG9DQUF1RTtFQUN2RSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGO0FBVkE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjtBQUVBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQyxxQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUU7QUFFckI7RUFDQSxXQUFXO0VBQ1gseUJBQXlCLEVBQUU7QUFFM0I7RUFDQSxtQkFBbUI7RUFDbkIsb0RBQW9EO0VBR3BELG1FQUFtRSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3J0YWwvcG9ydGFsLWRldGFpbC90b3AxMC1saXN0L3RvcDEwLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjNTM3NDhBO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi53cmFwcGVyIHVsID4gbGkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzUxNjc4QTtcclxuICBtYXJnaW4tdG9wOiAxN3B4O1xyXG59XHJcbi5saWtlIHtcclxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgLyogdG9wOiAtMjBweDsgKi9cclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL3R3aXR0ZXItaGVhcnQucG5nXCIpO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDI5MDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaXMtYWN0aXZlIHtcclxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBzdGVwcygyOCk7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbnVsID4gbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmltZyA+IGltZyB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6MS41cHggc29saWQgI2Y1ZjZmYTtcclxufVxyXG5cclxuLm1zZ19jb3RhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyY2NkZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZGF0YSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udG9wXzEwaGVhZGVyIGg0IHtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYmFja2dyb3VuZDogIzRlNjQ4NjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICBjb2xvcjogI2FhYjhjMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5saWtlLmxpa2VzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMThweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgbWFyZ2luOiAzcHggNXB4O1xyXG59XHJcblxyXG4ucmFpdCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucmFpdCBzcGFuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNGOUU2MTc7XHJcbn1cclxuLnJhaXQgaSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjRjlFNjE3O1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLW5lYXItbW9vbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XHJcbiAgXHJcbiAgLnNjcm9sbGJhci1uZWFyLW1vb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1OyB9XHJcbiAgXHJcbiAgLnNjcm9sbGJhci1uZWFyLW1vb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbSgjNWVlN2RmKSwgdG8oI2I0OTBjYSkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzVlZTdkZiAwJSwgI2I0OTBjYSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNWVlN2RmIDAlLCAjYjQ5MGNhIDEwMCUpOyB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/portal/portal-detail/top10-list/top10-list.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/components/portal/portal-detail/top10-list/top10-list.component.ts ***!
    \************************************************************************************/

  /*! exports provided: Top10ListComponent */

  /***/
  function srcAppComponentsPortalPortalDetailTop10ListTop10ListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Top10ListComponent", function () {
      return Top10ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_question_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/question/question.service */
    "./src/app/services/question/question.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts");

    var Top10ListComponent =
    /*#__PURE__*/
    function () {
      function Top10ListComponent(questionService, portalService) {
        _classCallCheck(this, Top10ListComponent);

        this.questionService = questionService;
        this.portalService = portalService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(Top10ListComponent, [{
        key: "prepForAnswer",
        value: function prepForAnswer(nick) {
          this.questionService.recivierSubject.next(nick);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.portalId = +this.portalService.getPortalId;
          var data$ = this.questionService.getTop_10_questions(this.portalId);
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 80000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (_) {
            return data$;
          }), // ete ches uzum http->requestov anes, karas concatMap-i tex@ gres map(this.chatService.anyMethod()),
          // vor@ emit kani et URL-i(getTOP10/:portalId) tak reg exac inchvor socket
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (response) {
            _this20.top10data = response;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }]);

      return Top10ListComponent;
    }();

    Top10ListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_question_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]
      }, {
        type: src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_5__["PortalService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Top10ListComponent.prototype, "inUserPortal", void 0);
    Top10ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-top10-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./top10-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal-detail/top10-list/top10-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./top10-list.component.css */
      "./src/app/components/portal/portal-detail/top10-list/top10-list.component.css")).default]
    })], Top10ListComponent);
    /***/
  },

  /***/
  "./src/app/components/portal/portal.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/portal/portal.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPortalPortalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGFsL3BvcnRhbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/portal/portal.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/portal/portal.component.ts ***!
    \*******************************************************/

  /*! exports provided: PortalComponent */

  /***/
  function srcAppComponentsPortalPortalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalComponent", function () {
      return PortalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts");

    var PortalComponent =
    /*#__PURE__*/
    function () {
      function PortalComponent(router, portalService, userAuthService) {
        _classCallCheck(this, PortalComponent);

        this.router = router;
        this.portalService = portalService;
        this.userAuthService = userAuthService;
      }

      _createClass(PortalComponent, [{
        key: "goToPortal",
        value: function goToPortal(portalData) {
          this.portalService.currentPortalIdSubject.next(portalData.id);
          this.portalService.currentPortalSubject.next(portalData);
          this.router.navigate(["/api/portals", portalData.token]); // console.log(portalData);
        } // [routerLink]="['/api/portals', item.token]"

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          var currentUserId = this.userAuthService.currentUserValue.id;
          this.portalService.getActivePortal(currentUserId).subscribe(function (portal) {
            _this21.portals = portal;
            console.log(_this21.portals);
          });
        }
      }]);

      return PortalComponent;
    }();

    PortalComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_portal_portal_service__WEBPACK_IMPORTED_MODULE_2__["PortalService"]
      }, {
        type: src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"]
      }];
    };

    PortalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-portal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portal/portal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portal.component.css */
      "./src/app/components/portal/portal.component.css")).default]
    })], PortalComponent);
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/profile/profile.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // import { Observable } from "rxjs";


    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(route, userService) {
        var _this22 = this;

        _classCallCheck(this, ProfileComponent);

        this.route = route;
        this.userService = userService;
        var userId = this.route.snapshot.paramMap.get("id"); // const userToken = this.route.snapshot.paramMap.get("token");

        if (userId) {
          this.userService.getUserProfile(userId).subscribe(function (data) {
            console.log(data);
            _this22.data = data;
          });
        } // if (userToken) {
        //   this.userService.addToken("access_token", userToken);
        //   this.userService.getUserProfileSocial(userToken).subscribe(data => {
        //     console.log(data, 93939393939);
        //     this.data = data;
        //   });
        // }

      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/components/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/registration/user-registration/user-registration.component.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/registration/user-registration/user-registration.component.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegistrationUserRegistrationUserRegistrationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".divider-text {\n    position: relative;\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n.divider-text span {\n    padding: 7px;\n    font-size: 12px;\n    position: relative;   \n    z-index: 2;\n}\n.divider-text:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    border-bottom: 1px solid #ddd;\n    top: 55%;\n    left: 0;\n    z-index: 1;\n}\n.btn-facebook {\n    background-color: #405D9D;\n    color: #fff;\n}\n.btn-twitter {\n    background-color: #42AEEC;\n    color: #fff;\n}\n/*  */\n/* form>div>div {\n    order: -1;\n} */\nform > div {\n    display: flex;\n}\nform > div > div {\n    order: -1;\n}\n.no_valid i {\n    color: red\n}\n.is_valid i {\n    color: green\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsUUFBUTtJQUNSLE9BQU87SUFDUCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQSxLQUFLO0FBQ0w7O0dBRUc7QUFDSDtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3VzZXItcmVnaXN0cmF0aW9uL3VzZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2aWRlci10ZXh0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5kaXZpZGVyLXRleHQgc3BhbiB7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgXG4gICAgei1pbmRleDogMjtcbn1cbi5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIHRvcDogNTUlO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmJ0bi1mYWNlYm9vayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNUQ5RDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tdHdpdHRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyQUVFQztcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi8qICAqL1xuLyogZm9ybT5kaXY+ZGl2IHtcbiAgICBvcmRlcjogLTE7XG59ICovXG5mb3JtID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuZm9ybSA+IGRpdiA+IGRpdiB7XG4gICAgb3JkZXI6IC0xO1xufVxuXG4ubm9fdmFsaWQgaSB7XG4gICAgY29sb3I6IHJlZFxufVxuLmlzX3ZhbGlkIGkge1xuICAgIGNvbG9yOiBncmVlblxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/registration/user-registration/user-registration.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/registration/user-registration/user-registration.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: UserRegistrationComponent */

  /***/
  function srcAppComponentsRegistrationUserRegistrationUserRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function () {
      return UserRegistrationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _HELPERS_mutch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../HELPERS/mutch */
    "./src/app/HELPERS/mutch.ts"); // import { AuthService } from "angularx-social-login";
    // import {
    //   FacebookLoginProvider,
    //   GoogleLoginProvider
    // } from "angularx-social-login";


    var UserRegistrationComponent =
    /*#__PURE__*/
    function () {
      function UserRegistrationComponent(router, userService, authService, // private socialAuthService: AuthService,
      formBuilder) {
        _classCallCheck(this, UserRegistrationComponent);

        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.formBuilder = formBuilder;
      }

      _createClass(UserRegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
            confPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          }, {
            validator: Object(_HELPERS_mutch__WEBPACK_IMPORTED_MODULE_6__["MustMatch"])("password", "confPassword")
          });
          this.authService.socialStateCheck();
        }
      }, {
        key: "detectClass",
        value: function detectClass(field) {
          if (this.registerForm.controls[field].dirty && this.registerForm.controls[field].invalid) {
            return "no_valid";
          } else if (this.registerForm.controls[field].dirty && this.registerForm.controls[field].valid) {
            return "is_valid";
          }
        } // signInWithGoogle(): void {
        //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
        // }

      }, {
        key: "signInWithFB",
        value: function signInWithFB() {
          // this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
          this.authService.signInWithFB();
        } // signOut(): void {
        //   this.socialAuthService.signOut();
        // }
        // FC_Login() {
        //   console.log("in user-registration component");
        //   this.authService.regWithFace()
        //   .subscribe(x => console.log(x), err => console.log(err, 2109));
        // }

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this23 = this;

          console.log(this.registerForm.value);
          var userData = this.registerForm.value;
          delete userData.confPassword;
          this.userService.AddUser(userData).subscribe(function (data) {
            if (data.firstName) {
              console.log(data, typeof data);

              _this23.userService.addToken("currentUser", data);

              _this23.authService.refresh(data);

              _this23.router.navigate(["api/users/profile", data.id]);
            }
          }, function (error) {
            _this23.user = error.userData;
          });
        }
      }]);

      return UserRegistrationComponent;
    }();

    UserRegistrationComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    UserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-user-registration",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/user-registration/user-registration.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-registration.component.css */
      "./src/app/components/registration/user-registration/user-registration.component.css")).default]
    })], UserRegistrationComponent);
    /***/
  },

  /***/
  "./src/app/datepicker-popup.module.ts":
  /*!********************************************!*\
    !*** ./src/app/datepicker-popup.module.ts ***!
    \********************************************/

  /*! exports provided: NgbdDatepickerPopupModule */

  /***/
  function srcAppDatepickerPopupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdDatepickerPopupModule", function () {
      return NgbdDatepickerPopupModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_ngbootstrap_datepicker_datepicker_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/ngbootstrap/datepicker/datepicker-popup */
    "./src/app/components/ngbootstrap/datepicker/datepicker-popup.ts");

    var NgbdDatepickerPopupModule = function NgbdDatepickerPopupModule() {
      _classCallCheck(this, NgbdDatepickerPopupModule);
    };

    NgbdDatepickerPopupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"]],
      declarations: [_components_ngbootstrap_datepicker_datepicker_popup__WEBPACK_IMPORTED_MODULE_6__["NgbdDatepickerPopup"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      exports: [_components_ngbootstrap_datepicker_datepicker_popup__WEBPACK_IMPORTED_MODULE_6__["NgbdDatepickerPopup"]],
      bootstrap: []
    })], NgbdDatepickerPopupModule);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authenticationService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var isValid;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.authenticationService.isAuthenticated();

                  case 2:
                    isValid = _context5.sent;

                    if (!isValid) {
                      _context5.next = 7;
                      break;
                    }

                    return _context5.abrupt("return", true);

                  case 7:
                    console.log(isValid, 33333333);
                    this.router.navigate(["api/users/login"], {
                      queryParams: {
                        returnUrl: state.url
                      }
                    });
                    return _context5.abrupt("return", false);

                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/guards/subscriber.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/guards/subscriber.guard.ts ***!
    \********************************************/

  /*! exports provided: SubscriberGuard */

  /***/
  function srcAppGuardsSubscriberGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriberGuard", function () {
      return SubscriberGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_nickName_nick_name_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/nickName/nick-name.service */
    "./src/app/services/nickName/nick-name.service.ts");
    /* harmony import */


    var _services_portal_portal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/portal/portal.service */
    "./src/app/services/portal/portal.service.ts");
    /* harmony import */


    var _services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts");

    var SubscriberGuard =
    /*#__PURE__*/
    function () {
      function SubscriberGuard(nickService, portalService, userAuthService, router) {
        _classCallCheck(this, SubscriberGuard);

        this.nickService = nickService;
        this.portalService = portalService;
        this.userAuthService = userAuthService;
        this.router = router;
      }

      _createClass(SubscriberGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this24 = this;

          if (this.userAuthService.UserLoggedStatus && !this.nickService.getNickToken || this.portalService.isPortalisMakeUser(this.portalService.getPortalId)) {
            return this.userAuthService.isAuthforGuard().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
              if (result) {
                console.log(result, 9999999);
                return true;
              }

              return false;
            }));
          } else {
            return this.nickService.isSubscriberAuth(next.params.token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
              if (result) {
                _this24.nickService.nickDataSubject.next(result);

                return true;
              } else if (result === null) {
                _this24.portalService.portalStatusSubject.next({
                  token: next.params.token,
                  state: null
                });

                _this24.router.navigate(["api/cover"]);

                return false;
              } else {
                _this24.portalService.portalStatusSubject.next({
                  token: next.params.token,
                  state: false
                });

                _this24.router.navigate(["api/cover"]);

                return false;
              }
            }));
          }
        }
      }]);

      return SubscriberGuard;
    }();

    SubscriberGuard.ctorParameters = function () {
      return [{
        type: src_app_services_nickName_nick_name_service__WEBPACK_IMPORTED_MODULE_4__["NickNameService"]
      }, {
        type: _services_portal_portal_service__WEBPACK_IMPORTED_MODULE_5__["PortalService"]
      }, {
        type: _services_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SubscriberGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], SubscriberGuard);
    /***/
  },

  /***/
  "./src/app/services/answer/answer.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/answer/answer.service.ts ***!
    \***************************************************/

  /*! exports provided: AnswerService */

  /***/
  function srcAppServicesAnswerAnswerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswerService", function () {
      return AnswerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AnswerService =
    /*#__PURE__*/
    function () {
      function AnswerService(http) {
        _classCallCheck(this, AnswerService);

        this.http = http;
      }

      _createClass(AnswerService, [{
        key: "getAnswers",
        value: function getAnswers(portalId) {
          return this.http.get("api/answers/".concat(portalId));
        }
      }]);

      return AnswerService;
    }();

    AnswerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AnswerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AnswerService);
    /***/
  },

  /***/
  "./src/app/services/auth/user-auth.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/auth/user-auth.service.ts ***!
    \****************************************************/

  /*! exports provided: UserAuthService */

  /***/
  function srcAppServicesAuthUserAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAuthService", function () {
      return UserAuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/angularx-social-login.js");
    /* harmony import */


    var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserAuthService =
    /*#__PURE__*/
    function () {
      function UserAuthService(http, socialAuthService, userService, router) {
        _classCallCheck(this, UserAuthService);

        this.http = http;
        this.socialAuthService = socialAuthService;
        this.userService = userService;
        this.router = router;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
        this.isLoggedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.isLoggedIn = this.isLoggedSubject.asObservable();
      }

      _createClass(UserAuthService, [{
        key: "isAuthforGuard",
        value: function isAuthforGuard() {
          var accessToken = this.currentUserValue && this.currentUserValue.access_token;

          if (accessToken) {
            var res = this.http.post("api/users/checkTokenValid", {
              accessToken: accessToken
            });
            return res; // if (res) {
            //   return of(true);
            // } else {
            //   return of(false);
            // }
          }
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var accessToken, res;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    // tslint:disable-next-line: variable-name
                    accessToken = this.currentUserValue && this.currentUserValue.access_token;

                    if (!accessToken) {
                      _context6.next = 10;
                      break;
                    }

                    _context6.next = 4;
                    return this.http.post("api/users/checkTokenValid", {
                      accessToken: accessToken
                    }).toPromise();

                  case 4:
                    res = _context6.sent;

                    if (!res) {
                      _context6.next = 9;
                      break;
                    }

                    return _context6.abrupt("return", res);

                  case 9:
                    this.logout();

                  case 10:
                    return _context6.abrupt("return", Promise.resolve(null));

                  case 11:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var _this25 = this;

          return this.http.post("api/users/login", {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (user) {
            if (user) {
              localStorage.setItem("currentUser", JSON.stringify(user));

              _this25.currentUserSubject.next(user);

              _this25.isLoggedSubject.next(true);
            }

            return user;
          }));
        }
      }, {
        key: "regWithFace",
        value: function regWithFace(accesToken) {
          console.log("inside user-auth service", 7401);
          return this.http.post("api/users/auth/facebook", {
            access_token: accesToken
          });
        }
      }, {
        key: "socialStateCheck",
        value: function socialStateCheck() {
          var _this26 = this;

          this.socialAuthService.authState // avtomat berume token@
          .subscribe(function (user) {
            // this.loggedIn = user != null;
            if (user) {
              _this26.regWithFace(user.authToken).subscribe(function (response) {
                _this26.userService.addToken("currentUser", response);

                _this26.refresh(response);

                _this26.router.navigate(["api/users/profile", response.id]);
              });
            }
          }, function (error) {
            return console.log(error, 85858585);
          });
        }
      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID);
        }
      }, {
        key: "signInWithFB",
        value: function signInWithFB() {
          this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID);
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.socialAuthService.signOut();
        }
      }, {
        key: "refresh",
        value: function refresh(data) {
          this.currentUserSubject.next(data);
          this.isLoggedSubject.next(true);
        }
      }, {
        key: "setLogin",
        value: function setLogin() {
          this.isLoggedSubject.next(true);
        }
      }, {
        key: "setLogOut",
        value: function setLogOut() {
          this.isLoggedSubject.next(false);
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem("currentUser");
          this.signOut();
          this.currentUserSubject.next(null);
          this.isLoggedSubject.next(false);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }, {
        key: "UserLoggedStatus",
        get: function get() {
          return this.isLoggedSubject.value;
        }
      }]);

      return UserAuthService;
    }();

    UserAuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    UserAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UserAuthService);
    /***/
  },

  /***/
  "./src/app/services/chat/chat.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/chat/chat.service.ts ***!
    \***********************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ChatService =
    /*#__PURE__*/
    function () {
      function ChatService(socket) {
        _classCallCheck(this, ChatService);

        this.socket = socket;
        this.message = this.socket.fromEvent("message");
        this.answerQuestion = this.socket.fromEvent("answ_message");
        this.refreshPortals = this.socket.fromEvent("showPortals");
        this.TOP10 = this.socket.fromEvent("show_top_10");
        this.endOfPortal = this.socket.fromEvent("portal_end"); // this.socket.connect();

        this.likeCountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.likeCountSubscrbtion = this.likeCountSubject.asObservable();
      }

      _createClass(ChatService, [{
        key: "addLikeCount",
        value: function addLikeCount() {
          var _this27 = this;

          this.socket.on("sendLikesCount", function (data) {
            _this27.likeCountSubject.next(data);
          });
        }
      }, {
        key: "sendLikeCount",
        value: function sendLikeCount(data, action) {
          // alert(JSON.stringify(data));
          this.socket.emit("get_likes_count", data, action);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(nickData) {
          delete nickData.nickToPortal;
          this.socket.emit("send_message", nickData);
        }
      }, {
        key: "answQuestion",
        value: function answQuestion(answerData) {
          this.socket.emit("send_question", answerData);
        }
      }, {
        key: "finishPortal",
        value: function finishPortal(portalId) {
          this.socket.emit("fin_portal", portalId);
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]
      }];
    };

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ChatService);
    /***/
  },

  /***/
  "./src/app/services/interceptor/interceptor.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/interceptor/interceptor.service.ts ***!
    \*************************************************************/

  /*! exports provided: InterceptorService */

  /***/
  function srcAppServicesInterceptorInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterceptorService", function () {
      return InterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var InterceptorService =
    /*#__PURE__*/
    function () {
      function InterceptorService(user) {
        _classCallCheck(this, InterceptorService);

        this.user = user;
      }

      _createClass(InterceptorService, [{
        key: "handleError",
        value: function handleError(error) {
          console.log(error);

          if (error.status === 501) {
            // return throwError(this.user.execption());
            //     oR
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
          }

          var err = error.error.message || error.statusText;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }
      }, {
        key: "intercept",
        value: function intercept(req, next) {
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }]);

      return InterceptorService;
    }();

    InterceptorService.ctorParameters = function () {
      return [{
        type: _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    InterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], InterceptorService);
    /***/
  },

  /***/
  "./src/app/services/interceptor/interceptorJWT.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/services/interceptor/interceptorJWT.service.ts ***!
    \****************************************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppServicesInterceptorInterceptorJWTServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../auth/user-auth.service */
    "./src/app/services/auth/user-auth.service.ts");

    var JwtInterceptor =
    /*#__PURE__*/
    function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add auth header with jwt if user is logged in and request is to api url
          var currentUser = this.authenticationService.currentUserValue;
          var isLoggedIn = currentUser && currentUser.access_token;

          if (isLoggedIn) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.access_token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _auth_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/services/nickName/nick-name.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/nickName/nick-name.service.ts ***!
    \********************************************************/

  /*! exports provided: NickNameService */

  /***/
  function srcAppServicesNickNameNickNameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NickNameService", function () {
      return NickNameService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // import { PreloadAllModules } from '@angular/router';


    var NickNameService =
    /*#__PURE__*/
    function () {
      function NickNameService(http) {
        _classCallCheck(this, NickNameService);

        this.http = http;
        this.nickDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.nickData = this.nickDataSubject.asObservable();
        this.currentNickSubjectToken = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](localStorage.getItem("nickToken"));
        this.currentNickToken = this.currentNickSubjectToken.asObservable();
      }

      _createClass(NickNameService, [{
        key: "isSubscriberAuth",
        value: function isSubscriberAuth(portalToken) {
          var nickToken = this.getNickToken;

          if (nickToken) {
            return this.http.post("api/nicknames/canactivate", {
              portalToken: portalToken,
              nickToken: nickToken
            });
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }
      }, {
        key: "isSubAuth",
        value: function isSubAuth(portalId) {
          var nickToken = this.getNickToken;

          if (nickToken) {
            return this.http.post("api/nicknames/isLogged", {
              nickToken: nickToken,
              portalId: portalId
            }).toPromise();
          }

          return Promise.resolve(null);
        }
      }, {
        key: "createNickname",
        value: function createNickname(nickName, portalId, nickToken) {
          var _this28 = this;

          return this.http.post("api/nicknames/addNickname", {
            nickName: nickName,
            portalId: portalId,
            nickToken: nickToken
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (nick) {
            _this28.currentNickSubjectToken.next(nick["token"]);

            console.log(nick, 889977);

            _this28.nickDataSubject.next(nick);

            return nick;
          })).toPromise();
        }
      }, {
        key: "changeAvatar",
        value: function changeAvatar(data) {
          return this.http.put("api/nicknames/changeAvatar", data);
        }
      }, {
        key: "getNickToken",
        get: function get() {
          return this.currentNickSubjectToken.value;
        }
      }]);

      return NickNameService;
    }();

    NickNameService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    NickNameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], NickNameService);
    /***/
  },

  /***/
  "./src/app/services/portal/portal.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/portal/portal.service.ts ***!
    \***************************************************/

  /*! exports provided: PortalService */

  /***/
  function srcAppServicesPortalPortalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalService", function () {
      return PortalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PortalService =
    /*#__PURE__*/
    function () {
      // isPortalOfUser: BehaviorSubject<boolean>;
      function PortalService(http) {
        _classCallCheck(this, PortalService);

        this.http = http;
        this.portalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.portal = this.portalSubject.asObservable();
        this.portalStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.portalState = this.portalStatusSubject.asObservable();
        this.currentPortalIdSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
        this.currentPortalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.currentUserPortals = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.portalFinishedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.portalFinished = this.portalFinishedSubject.asObservable(); // this.isPortalOfUser = new BehaviorSubject(false);
      }

      _createClass(PortalService, [{
        key: "addPortal",
        // get getIsPortalofUser {
        //   return this.isPortalOfUser.value;
        // }
        value: function addPortal(data) {
          var _this29 = this;

          return this.http.post("api/portals/addPortal", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (portal) {
            _this29.portalSubject.next(portal);

            _this29.currentPortalIdSubject.next(portal.id);
          }));
        }
      }, {
        key: "startEvent",
        value: function startEvent(id, token) {
          return this.http.put("api/portals/".concat(token), {
            id: id
          }); // xi token@ query.param ???
        }
      }, {
        key: "checkPermision",
        value: function checkPermision(token, portalId) {
          return this.http.post("api/portals/checkToken", {
            token: token,
            portalId: portalId
          }).toPromise();
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get("api/portals/getAll");
        }
      }, {
        key: "getUserPortals",
        value: function getUserPortals(userId) {
          var _this30 = this;

          return this.http.post("api/portals/getUserPortals", {
            userId: userId
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (portals) {
            _this30.currentUserPortals.next(portals);

            return portals;
          }));
        }
      }, {
        key: "getActivePortal",
        value: function getActivePortal(currentUserId) {
          return this.http.get("api/portals/active/".concat(currentUserId));
        } //

      }, {
        key: "chekPortalStatus",
        value: function chekPortalStatus(token) {
          return this.http.post("api/portals/portalStatus", {
            token: token
          });
        } //

      }, {
        key: "isPortalisMakeUser",
        value: function isPortalisMakeUser(portalid) {
          var userPortals = this.getCurentUserPortals;
          var isExist = userPortals.find(function (item) {
            return item.id === portalid;
          });
          return isExist;
        }
      }, {
        key: "getPortalId",
        get: function get() {
          return this.currentPortalIdSubject.value;
        }
      }, {
        key: "getCurentUserPortals",
        get: function get() {
          return this.currentUserPortals.value;
        }
      }, {
        key: "getCurrentPortal",
        get: function get() {
          return this.currentPortalSubject.value;
        }
      }]);

      return PortalService;
    }();

    PortalService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PortalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], PortalService);
    /***/
  },

  /***/
  "./src/app/services/question/question.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/question/question.service.ts ***!
    \*******************************************************/

  /*! exports provided: QuestionService */

  /***/
  function srcAppServicesQuestionQuestionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionService", function () {
      return QuestionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var QuestionService =
    /*#__PURE__*/
    function () {
      function QuestionService(http) {
        _classCallCheck(this, QuestionService);

        this.http = http; // for new create message

        this.msg = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.changeAvatarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.recivierSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.canScrollSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.getMsg = this.msg.asObservable();
        this.recivierAns = this.recivierSubject.asObservable();
        this.changeAvatar = this.changeAvatarSubject.asObservable();
      }

      _createClass(QuestionService, [{
        key: "getAllQuestions",
        value: function getAllQuestions(portalToken) {
          return this.http.get("api/questions/getAll/".concat(portalToken));
        }
      }, {
        key: "getTop_10_questions",
        value: function getTop_10_questions(portalId) {
          return this.http.get("api/questions/getTOP10/".concat(portalId));
        }
      }, {
        key: "scrollStatus",
        get: function get() {
          return this.canScrollSubject.value;
        }
      }]);

      return QuestionService;
    }();

    QuestionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], QuestionService);
    /***/
  },

  /***/
  "./src/app/services/user/user.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/user/user.service.ts ***!
    \***********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "execption",
        value: function execption() {
          return "its workikng";
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.http.get("api/users");
        }
      }, {
        key: "AddUser",
        value: function AddUser(user) {
          return this.http.post("api/users/register", user);
        }
      }, {
        key: "addToken",
        value: function addToken(name, user) {
          if (typeof user === "string") {
            localStorage.setItem(name, user);
          } else {
            localStorage.setItem(name, JSON.stringify(user));
          }
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile(id) {
          return this.http.get("api/users/profile/".concat(id));
        }
      }, {
        key: "sendMail",
        value: function sendMail(email, url) {
          console.log(email, url, 9999);
          email = email.reduce(function (arr, item) {
            return arr.push(item.email), arr;
          }, []);
          return this.http.post("api/users/sendmail", {
            email: email,
            url: url
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ACER\Desktop\project_aca\client\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map