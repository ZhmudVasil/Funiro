import replace from "gulp-replace"; /*Пошук і заміна*/
import plumber from "gulp-plumber"; /*Обробка помилок*/
import notify from "gulp-notify"; /*Підказка про помилку*/
import browsersync from "browser-sync";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
};
