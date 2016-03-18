var gulp = require('gulp');
var runSeq = require('run-sequence');
var del = require('del');

var buildConfig = require('./gulp.config');

gulp.task('get:started', function(done) {
    runSeq(
        'clean-Vendor-Js-In-Root',
        'copy-Vendor-Js-To-Wwwroot-Internal',
        done);
});

gulp.task('clean-Vendor-Js-In-Root', function() {
    return del(buildConfig.rootJsFolder);
});

gulp.task('copy-Vendor-Js-To-Wwwroot-Internal', function() {
   return gulp.src(buildConfig.sources.jsFilesInclSourcePaths)
        .pipe(gulp.dest(buildConfig.rootJsFolder))
});