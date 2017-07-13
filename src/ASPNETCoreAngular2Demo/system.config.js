/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'js/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // Third Party
      'angular2-toaster': 'npm:angular2-toaster/bundles/angular2-toaster.umd.js',
      // 'ng2-slim-loading-bar': 'npm:ng2-slim-loading-bar/bundles/index.umd.js',
      "ng2-loading-bar": "npm:ng2-loading-bar",

      // other libraries      
      'ng2-eonasdan-datetimepicker': 'npm:',
      'jquery': 'npm:jquery.js',
      'bootstrap': 'npm:bootstrap.js',
      'moment': 'npm:',
      'eonasdan-bootstrap-datetimepicker': 'npm:bootstrap-datetimepicker.js',
      'rxjs': 'npm:rxjs'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-toaster': {
        defaultExtension: 'js'
      },
      'ng2-slim-loading-bar': {
        defaultExtension: 'js'
      },      
      "ng2-loading-bar": {
          "main": "index.js",
          "defaultExtension": "js"
      },
      'moment': {
          main: './moment-with-locales.js',
          defaultExtension: 'js'
      }, 
      'ng2-eonasdan-datetimepicker': {
          main: 'datetimepicker.module.js',
          defaultExtension: 'js'
      }
    }
  });
})(this);
