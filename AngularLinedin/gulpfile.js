const gulp=require('gulp');
const browserSync=require('browser-sync').create();
const sass=require('gulp-sass');

//compile sass & insject into browserSync
gulp.task('sass',function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/assets/scss/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest("src/css"))
  .pipe(browserSync.stream());
});

//MOVE js   Files to src/js

gulp.task('js',function() {
return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
.pipe(gulp.dest("src/assets/js"))
.pipe(browserSync.stream());
});

//watch sass & serve

gulp.task('serve',['sass'],function(){
  browserSync.init({
    server:"./src"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap,scss','src/assets/scss/*.scss'],['sass']);
  gulp.watch("src/*.html").on('change',browserSync.reload);
});

//Move Fonts folder to src/fonts
gulp.task('fonts',function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest("src/assets/fonts"));
});


//Move Fonts Awesomne folder to src/css
gulp.task('fa',function() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
  .pipe(gulp.dest("src/assets/css"));
});

gulp.task('default',['js','serve','fa','fonts']);
