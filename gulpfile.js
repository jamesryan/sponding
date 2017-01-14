const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

// gulp.task('default', function() {
//   gulp.src('src/assets/images/**/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('src/images'));

// });

gulp.task('images', function() {
gulp.src('src/assets/img/**/*')
.pipe(imagemin({
progressive: true,
svgoPlugins: [{ removeViewBox: false }],
use: [pngquant()]
}))
.pipe(gulp.dest('src/assets/img'));
});