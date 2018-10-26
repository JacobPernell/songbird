export const DESTINATION = {
    CSS: 'main.css',
    DIRECTORY: 'dist/',
    JAVASCRIPT: 'main.js',
    VENDOR_CSS: 'vendor.css'
};

export const SOURCE = {
    CSS: 'src/**/*.css',
    HTML: 'src/*.html',
    JAVASCRIPT: 'src/js/index.js',
    SASS: 'src/sass/base.scss',
    STATIC: [
        'src/**/*.ico',
        'src/**/*.jpg',
        'src/**/*.png',
        'src/**/*.svg'
    ],
    TEMPLATES: 'src/templates/*.html'
};

export const TARGET_BROWSERS = {
    browsers: [
        'last 2 major versions',
        'ie 11'
    ]
};

export const TASKS = {
    BUILD: 'build',
    CSS: 'css',
    DEFAULT: 'default',
    HTML: 'html',
    SASS: 'sass',
    STATIC: 'static',
    WATCH: 'watch',
    WEBPACK: 'webpack'
};

export const WATCH_FILES = {
    JAVASCRIPT: 'src/**/*.js',
    SASS: 'src/**/*.scss'
};