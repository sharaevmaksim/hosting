var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var pug = require('gulp-pug');

gulp.task('default', ['start']);

gulp.task('sass', function() {
    return gulp
    .src('style/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('style/'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('pug', function() {
    return gulp
    .src('./*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({stream: true}))
  });

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        notify: false
    })
});
gulp.task('start', ['pug', 'sass', 'browser-sync'],function() {
    gulp.watch('style/*.sass', ['sass', ]);
    gulp.watch('index.pug', ['pug', ]);
});
