var gulp = require("gulp");
var sass = require("gulp-sass");
var minify = require('gulp-minify');
var pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const image = require('gulp-image');
var browserSync = require('browser-sync').create();

// listen events
gulp.task("sass-watch", ["sass"], function() {
  browserSync.init({
      server: {
          baseDir: './front/'
      }
  });
    gulp.watch(['./src/templates/js/*.js'], ["sass"]);
    gulp.watch(['./src/templates/css/*.scss'], ["sass"]);
    gulp.watch(['src/*.pug'], ['sass']);
    gulp.watch(['src/elements/*.pug'], ['sass']);
    // gulp.watch("front/*.html").on('change', browserSync.reload);
});

gulp.task("sass", function() {
  // compress css
  gulp.src("./src/templates/css/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
    .pipe(gulp.dest("./front/templates/css/"))
    .pipe(browserSync.stream());

  // compress js
  gulp.src('./src/templates/js/*.js')
    .pipe(minify({
        exclude: ['tasks']
    }))
    .pipe(gulp.dest('./front/templates/js'))
    .pipe(browserSync.stream()); 

  // pug to html 
  gulp.src('./src/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('front'))
    .pipe(browserSync.stream());

  //   // images to image_min
  // gulp.src('./src/templates/images/*')
  // .pipe(imagemin())
  // .pipe(gulp.dest('./front/templates/images/'))
  // .pipe(browserSync.stream());
  
    // img to images
  gulp.src('./src/templates/images/*')
  .pipe(image())
  .pipe(gulp.dest('./front/templates/images/'))
  .pipe(browserSync.stream());

});
  

gulp.task("default", ["sass-watch"]);
