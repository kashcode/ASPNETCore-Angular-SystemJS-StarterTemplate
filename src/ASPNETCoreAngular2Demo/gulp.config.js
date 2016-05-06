'use strict';

module.exports = {
    rootJsFolder: "./wwwroot/js/",
    sources: {
        jsFilesInclSourcePaths: [
            "node_modules/es6-shim/es6-shim.min.js",
            "node_modules/zone.js/dist/zone.js",
            "node_modules/reflect-metadata/Reflect.js",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/@angular/http/http.js",
            "node_modules/jquery/dist/jquery.js",
            "node_modules/@angular/router-deprecated/router.js",
            "node_modules/es6-promise/dist/**/*.*",
            "node_modules/bootstrap/dist/js/bootstrap.js"
        ],

        angularRC: "node_modules/@angular/**/*.js",
        Rxjs: "node_modules/rxjs/**/*.js"
    }
};