//(1)引包：require()：返回对象或者函数
let gulp = require('gulp');//得到对象
let sass = require('gulp-sass');//得到函数
//(2)创建任务
gulp.task('compileSass', function () {
    // （3）执行gulp工作流程
    return gulp.src(["./src/scss/*.scss"]) // 返回文件流（液体，文件在内存中的状态）
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});
gulp.task("jt", function () {
    gulp.watch("./src/scss/*.scss", gulp.series("compileSass"))
})

// //3.压缩js文件:先把ES6转成ES3再压缩
// var js = require('gulp-uglify');
// gulp.task('jsmin',function() {
//     return gulp.src('src/js/*.js')
//                 .pipe(js())
//                 .pipe(gulp.dest('dist/js'));
// });
//7.ES6-ES5才能压缩, 箭头函数，let const

// let babel = require('gulp-babel');

// //es6转es5
// gulp.task('es6',function(){
//     gulp.src('src/js/*.js')
//     .pipe(babel({
//         'presets':['es2015']
//     }))
//     .pipe(gulp.dest('dist/es5'));
// });

var babel = require("gulp-babel");   // ES6转化ES5模块
var js = require('gulp-uglify');     // 压缩js模块
//转es6转es5并压缩js
gulp.task('jsmin', function () {
    // 1.找到js文件
    return gulp.src('src/js/*.js')
        // 2.es6转es5
        .pipe(babel())
        // 3.压缩js
        .pipe(js())
        // 4.把文件放到对应上线目录
        .pipe(gulp.dest('dist/js'));
});



var cssmin = require('gulp-cssmin');
gulp.task('cssmin', function () {
    return gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});



var htmlmin = require('gulp-minify-html');
gulp.task('htmlmin', function () {
    return gulp.src('src/html/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('dist/html'));
});

// outputStyle参数（gulp-sass）：
//     nested(默认）
//     expanded：展开
//     compact：单行
//     compressed：压缩
// on('error', sass.logError)：忽略错误，继续编译 