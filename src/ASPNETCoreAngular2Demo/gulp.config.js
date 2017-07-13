'use strict';

module.exports = {
    rootJsFolder: "./wwwroot/js/",
    rootCssFolder: "./wwwroot/css/",
    rootAppFolder: "./wwwroot/app/",
    sources: {
        jsFilesInclSourcePaths: [
            "node_modules/core-js/client/shim.min.js",
            "node_modules/zone.js/dist/zone.js",
            "node_modules/reflect-metadata/Reflect.js",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/jquery/dist/jquery.js",
            "node_modules/bootstrap/dist/js/bootstrap.js",
            "node_modules/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js",
            "node_modules/moment/min/*.js",
            "node_modules/ng2-eonasdan-datetimepicker/dist/*.js"
        ],
        cssFiles: [
            "node_modules/bootstrap/dist/css/bootstrap.css",
            "node_modules/angular2-toaster/toaster.css",
            "./css/custom.css",
            "node_modules/eonasdan-bootstrap-datetimepicker/build/css/*.css"
        ],
        angular: "node_modules/@angular/**/*.*",
        angularToastr: "node_modules/angular2-toaster/**/*.js",
        angularLoadingBar: "node_modules/ng2-loading-bar/**/*.js",
        Rxjs: "node_modules/rxjs/**/*.*"
    }
};