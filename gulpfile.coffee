gulp   = require 'gulp'
util   = require 'gulp-util'
concat = require 'gulp-concat'

smaps  = require 'gulp-sourcemaps'
coffee = require 'gulp-coffee'
sass   = require 'gulp-ruby-sass'
haml   = require 'gulp-ruby-haml'
cjsx   = require 'gulp-cjsx'

# 防止编译 coffee 过程中 watch 进程中止
plumber = require("gulp-plumber")

app =
  src:
    base:
      coffee:  'src/base/coffee/*.coffee'
      scss:    'src/base/scss/*.scss'
      haml:    'src/base/haml/*.haml'
      partial: 'src/base/partial/*.*'
  dist:
    base:
      js:   'dist/base/js'
      css:  'dist/base/css'
      html: 'demo'

compile_js_concat = (src_path, dist_path, file_name)->
  gulp.src src_path
    .pipe plumber()
    .pipe smaps.init()
    .pipe coffee()
    .pipe concat file_name
    .pipe smaps.write '.'
    .pipe gulp.dest dist_path

gulp.task 'js', ->
  compile_js_concat app.src.base.coffee, app.dist.base.js, 'base.js'

gulp.task 'css', ->
  gulp.src app.src.base.scss
    .pipe sass 'sourcemap=none': true
    .on 'error', (err)->
      file = err.message.match(/^error\s([\w\.]*)\s/)[1]
      util.log [
        err.plugin,
        util.colors.red file
        err.message
      ].join ' '
    .pipe concat 'base.css'
    .pipe gulp.dest app.dist.base.css

gulp.task 'html', ->
  gulp.src app.src.base.haml
    .pipe haml()
    .on 'error', (err)->
      util.log [
        err.plugin,
        util.colors.red err.message
        err.message
      ].join ' '
    .pipe gulp.dest(app.dist.base.html)

gulp.task 'build', [
  'js', 'css', 'html'
]

gulp.task 'watch', ['build'], ->
  gulp.watch app.src.base.coffee, ['js']
  gulp.watch app.src.base.scss, ['css']
  gulp.watch app.src.base.haml, ['html']
  gulp.watch app.src.base.partial, ['html']