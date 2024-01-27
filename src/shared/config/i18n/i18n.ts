import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// не хотите использовать это?
// ознакомьтесь с кратким руководством по началу работы для передачи в lng и переводов в init

// загрузите перевод с помощью http -> see /public/locales (т.е. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
// узнайте больше: https://github.com/i18next/i18next-http-backend
// хотите, чтобы ваши переводы загружались с профессионального CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn

i18n.use(Backend)
    .use(LanguageDetector) // detect user language. learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        // init i18next. for all options read: https://www.i18next.com/overview/configuration-options
        fallbackLng: 'ru', // язык по умолчанию
        debug: __IS_DEV__, // сообщает в консоль подгрузку переводов, отсутствующие ключи и тд. Если режим разработчика, то вкл, иначе откл. __IS_DEV__ - глобальная переменная вебпака, задана в плагинах

        load: 'languageOnly', // чтоб загружался только выбранный язык. но работает через раз

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
