import autoprefixer from 'gulp-autoprefixer';
import cachebust from 'gulp-cache-bust';
import concatCss from 'gulp-concat-css';
import cssNano from 'gulp-cssnano';
import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import rmHtmlComments from 'gulp-remove-html-comments';
import sass from 'gulp-sass';
import sourceMaps from 'gulp-sourcemaps';

import {
    CACHE_BUST_OPTIONS,
    DESTINATION,
    SOURCE,
    TARGET_BROWSERS,
    TASK_TYPES,
    TASKS,
    WATCH_FILES
} from './gulp/constants';

import { handleJavaScriptTask } from './gulp/utils';

const { JAVASCRIPT, SERVICE_CLIENT_JAVASCRIPT } = TASK_TYPES;

gulp.task(TASKS.CSS, () => gulp.src(SOURCE.CSS, { allowEmpty: true })
    .pipe(sourceMaps.init())
    .pipe(autoprefixer(TARGET_BROWSERS))
    .pipe(concatCss(DESTINATION.VENDOR_CSS))
    .pipe(cssNano())
    .pipe(gulp.dest(DESTINATION.DIRECTORY))
);

gulp.task(TASKS.HTML, () => gulp.src(SOURCE.HTML, { allowEmpty: true })
    .pipe(cachebust(CACHE_BUST_OPTIONS))
    .pipe(htmlmin({
        collapseWhitespace: true,
        minifyCSS: true
    }))
    .pipe(rmHtmlComments()).pipe(gulp.dest(DESTINATION.DIRECTORY))
);

gulp.task(TASKS.SASS, () => gulp.src(SOURCE.SASS, { allowEmpty: true })
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourceMaps.write())
    .pipe(autoprefixer(TARGET_BROWSERS))
    .pipe(concatCss(DESTINATION.CSS))
    .pipe(cssNano())
    .pipe(gulp.dest(DESTINATION.DIRECTORY))
);

gulp.task(TASKS.SERVICE_CLIENT, () => handleJavaScriptTask(SERVICE_CLIENT_JAVASCRIPT));

gulp.task(TASKS.STATIC, () =>
    gulp.src(SOURCE.STATIC, { allowEmpty: true })
        .pipe(gulp.dest(`${__dirname}/${DESTINATION.DIRECTORY}`)));

gulp.task(TASKS.WEBPACK, () => handleJavaScriptTask(JAVASCRIPT));

gulp.task(TASKS.WATCH, () => {
    gulp.watch(SOURCE.CSS, gulp.series([TASKS.CSS]));
    gulp.watch(SOURCE.HTML, gulp.series([TASKS.HTML]));
    gulp.watch(SOURCE.STATIC, gulp.series([TASKS.STATIC]));
    gulp.watch(WATCH_FILES.SASS, gulp.series([TASKS.SASS]));
    gulp.watch(WATCH_FILES.JAVASCRIPT, gulp.series([TASKS.SERVICE_CLIENT, TASKS.WEBPACK]));
});

gulp.task(TASKS.BUILD, gulp.series([
    TASKS.CSS,
    TASKS.HTML,
    TASKS.SASS,
    TASKS.SERVICE_CLIENT,
    TASKS.STATIC,
    TASKS.WEBPACK
]));

gulp.task(TASKS.DEFAULT, gulp.series([TASKS.BUILD, TASKS.WATCH]));
