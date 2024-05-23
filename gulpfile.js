import gulpSass from 'gulp-sass'
import * as dartSass from 'sass'
import {src, dest, watch} from 'gulp'
const sass = gulpSass(dartSass)

export function css( done ) {
    src('src/scss/app.scss')
        .pipe( sass().on('error', sass.logError) ) //listener para logear el error y poder verlo en la terminal.
        .pipe( dest('build/css'))

    done()
}

export function dev() {
    watch('src/scss/**/*.scss', css)
}