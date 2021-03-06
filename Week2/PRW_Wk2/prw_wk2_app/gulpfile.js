var gulp = require("gulp"),
    sass = require("gulp-sass"),
  	plumber = require("gulp-plumber");

//SASS Styles Task
gulp.task("stylesSCSS", function(){
	return gulp.src("sass/App.scss")
  .pipe(sass({
    style: "expanded"
  }))
	.pipe(plumber())
	.pipe(gulp.dest("src/"));
});

//Watch Tasks
gulp.task("watch", function(){
	gulp.watch("sass/base/base.scss", ["stylesSCSS"]);
});

gulp.task("default", ["watch", "stylesSCSS"]);
