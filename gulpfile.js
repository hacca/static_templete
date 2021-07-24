//Sassコンパイル
const gulp = require('gulp');
// const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');

const plumber = require("gulp-plumber");
const sourcemaps = require('gulp-sourcemaps');
const filter = require('gulp-filter');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');


const path = {
      base:'./src/',
      scss:'./src/scss/**/*.scss',
     image:'./src/assets/images/**/*',
        js:'./src/assets/js/**/*.js',
       css:'./src/assets/css',
 css_files:'./src/assets/css/**/*.css',
      html:'./src/**/*.html',
       php:'./src/**/*.php'
};

gulp.task('sass', function(){
    return gulp.src(path.scss)
    .pipe(plumber({
      errorHandler: notify.onError({
        title: "失敗してるよ！",
        message: "<%= error.message %>"
        })
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded',
    }))
    .pipe(autoprefixer( {
        grid: "autoplace"
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(path.css))
    .pipe(filter(['**', '!**/*.map']))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('server', function () {
    browserSync({
        notify: false,
        proxy: "http://localhost.houka.yuasa-winery.jp/"
    });
});

gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch', function() {
  gulp.watch(path.scss, gulp.series('sass'));
  gulp.watch(path.php, gulp.series('reload'));
});

gulp.task('default',
    gulp.parallel('server','watch')
);
