import fileInclude from "gulp-file-include";
// import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      // Повідомлення коли виникне помилка
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // Для збірки html файлів
      .pipe(fileInclude())
      .pipe(app.plugins.replace(/@img\//g, `img/`))
      // Обгортання картинок в тег picture
      // .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
      //  Для запобігання кешування файлів
      .pipe(
        app.plugins.if(
          app.isBuild,
          versionNumber({
            value: "%DT%",
            append: {
              key: "_v",
              cover: 0,
              to: ["css", "js"],
            },
            output: {
              file: "gulp/version.json",
            },
          })
        )
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
  );
};
