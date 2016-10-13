"use strict";
var home_component_1 = require('./components/home/home.component');
var about_component_1 = require('./components/about/about.component');
exports.AppRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
//# sourceMappingURL=app.routes.js.map