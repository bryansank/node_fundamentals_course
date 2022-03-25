function task(){

    
    const gulp = require('gulp');
    gulp.task('nombre', (callback)=>{
        console.log("Contruyendo el sitio...");
        setTimeout(callback, 1200);
    });

    const server = require('gulp-server-livereload');

    gulp.task('serve', (callback)=>{
        console.log("Sirviendo el sitio...");
        gulp.src('www').pipe(
            server({
                livereaload:true,
                open:true,
            })
        );
    });

    // Si queremos automatizar varias en series...
    gulp.task('default', gulp.series('nombre', 'serve'));

}

module.exports = {task}