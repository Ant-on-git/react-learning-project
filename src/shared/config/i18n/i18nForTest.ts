// тестовый конфиг для i18next чтоб  тесты работали с компонентами, в которых есть i18next
// https://react.i18next.com/misc/testing#testing-without-stubbing

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',

        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react!!
        },

        resources: { ru: { translations: {} } },
    });

export default i18n;
