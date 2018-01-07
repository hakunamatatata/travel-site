var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task!")
});

gulp.task('html', function() {
  console.log("Gulp watch: ./app/index.html was just changed")
});
gulp.task('styles', function() {
  console.log("Gulp watch: a CSS file in ./app/assets/styles/ was changed")
});

gulp.task('watch', function() {
  watch ('./app/index.html', function() {
    gulp.start('html');
  });
  watch ('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  })
});
