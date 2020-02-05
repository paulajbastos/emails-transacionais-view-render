'use strict';
import browserSync from 'browser-sync';
import gulp from 'gulp';
import del from 'del';

const pug = require('gulp-pug');

const dirs = {
  src: './src',
  dist: './dist'
};

const html = (done) => {
  gulp.src('./src/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest(`${dirs.dist}`));

  done();
};

const clean = () => {
  return del(
    `${dirs.dist}/**`, {force:true}
  );
};

const copy_files = () => {
  var _entries = [`${dirs.src}/assets/**/*`];
  return gulp.src(_entries)
    .pipe(gulp.dest('dist/'));
};

const watch = () => {
  browserSync.init({
    server: `${dirs.dist}`,
    serveStaticOptions: {
      extensions: ['html']
    }
  });
  gulp.watch(`${dirs.src}/**/*.pug`, gulp.series('html')).on('change', browserSync.reload);
};


gulp.task('html', html);
gulp.task('clean', clean);
gulp.task('watch', watch);
gulp.task('copy_files', copy_files);

gulp.task('default',  gulp.series('clean', 'copy_files', 'html', 'watch'));
