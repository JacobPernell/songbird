import gulp from 'gulp';
import webpack from 'webpack-stream';

import { DESTINATION, SOURCE } from './constants';

export const handleJavaScriptTask = type =>
    gulp
        .src(SOURCE[type], { allowEmpty: true })
        .pipe(webpack({
            output: {
                filename: DESTINATION[type]
            }
        }))
        .pipe(gulp.dest(DESTINATION.DIRECTORY));