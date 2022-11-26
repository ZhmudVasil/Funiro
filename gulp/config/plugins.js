import replace from "gulp-replace"; /*Пошук і заміна*/
import plumber from "gulp-plumber"; /*Обробка помилок під час компіляції*/
import notify from "gulp-notify"; /*Підказка про помилку*/
import browsersync from "browser-sync"; /*Локальний сервер*/
import newer from "gulp-newer"; /*Перевірка чи оновилась картинка*/
import ifPlugin from "gulp-if"; /*Умова розгалуження*/

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};
