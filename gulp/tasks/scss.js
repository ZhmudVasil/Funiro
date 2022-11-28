import dartSass from "sass"; /*сам компілятор*/
import gulpSass from "gulp-sass"; /*плагін gula для компілятора*/
import rename from "gulp-rename"; /*переіменовує файл на .min.css*/

import cleanCss from "gulp-clean-css"; /*зжимає css код*/
// import webpcss from "gulp-webpcss"; /*додає в css стилізацію webp зображення*/
import autoprefixer from "gulp-autoprefixer"; /*добавляє префікси для кросбраузності*/
import groupCssMediaQueries from "gulp-group-css-media-queries"; /*групує медіа запити*/

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(app.plugins.replace(/@img\//g, `../img/`))
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )
      .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
      // .pipe(
      //   app.plugins.if(
      //     app.isBuild,
      //     webpcss({
      //       webpClass: ".webp",
      //       noWebpClass: ".no-webp",
      //     })
      //   )
      // )
      .pipe(
        app.plugins.if(
          app.isBuild,
          autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true,
          })
        )
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(cleanCss())
      .pipe(
        rename({
          extname: ".min.css",
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream())
  );
};
