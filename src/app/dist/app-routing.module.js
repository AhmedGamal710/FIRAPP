"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./shared/components/layouts/home/home.component");
var dashboard_component_1 = require("./shared/components/layouts/dashboard/dashboard.component");
var auth_component_1 = require("./shared/components/layouts/auth/auth.component");
var posts_module_1 = require("./views/posts/posts.module");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    {
        path: 'admin',
        component: dashboard_component_1.DashboardComponent,
        children: [
            {
                path: 'posts',
                loadChildren: function () { return posts_module_1.PostsModule; }
            }
        ]
    },
    {
        path: '',
        component: auth_component_1.AuthComponent,
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./views/auth/auth.module'); }).then(function (m) { return m.AuthModule; }); }
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
