var config = require('../../config');
var gulp = require('gulp');
var revCollector = require('gulp-rev-collector');

gulp.task('rev', ['rev-assets', 'rev-font-workaround'], function(){
  return gulp.src([config.publicAssets + '/rev-manifest.json', config.publicAssets + '/**/*.{css,js}'])
    .pipe(revCollector())
    .pipe(gulp.dest(config.publicAssets));
});
