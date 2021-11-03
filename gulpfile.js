/*
 *
 * Copyright (c) 2021 SurPath Hub
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function sassTaskDev() {
    return src(['src/**/*.scss', '!src/**/*.test.scss'], {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./src', {sourcemaps: '.'}));
}

function sassTaskTest() {
    return src(['test/**/*.scss'], {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./test', {sourcemaps: '.'}));
}

function watchTask() {
    watch(['src/**/*.scss', '!src/**/*.test.scss'], sassTaskDev());
    watch(['test/**/*.scss'], sassTaskTest());
    // watch(['src/main.scss'], sassTaskProd());
    // watch('test/scripts/**/*.ts', tsTask());
}

exports.default = series(
    sassTaskDev,
    sassTaskTest,
    // sassTaskProd,
    // watchTask
);
