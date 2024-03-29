module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        // 0 = "off", 1 = "warning", 2 = "error"
        'react/jsx-indent': [0, 4],                             // отступ 4 пробела для jsx файлов
        'react/jsx-indent-props': [0, 4],                       // отступ 4 пробела для пропсов
        indent: [0, 4],                                         // отступ 4 пробела для остальных файлов
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],   // чтоб eslint понимал расширения файлов
        'import/no-unresolved': 'off',                          // разрешили абсолютные пути в импортах
        'import/prefer-default-export': 'off',                  // откл только дефолтные экспорты (разрешили именованные)
        'no-unused-vars': [0],                                  // warning для не используемых переменных
        'react/require-default-props': 'off',                   // отключили обязательное указание дефолтных значений у не обязательных переменных
        'react/react-in-jsx-scope': 'off',                      // если не отключить, то в рекат файлах(jsx, tsx) будет ругаться если нет import React from react. Т.к. в версиях реакта от 17+ импортировать не обязательно, то отключаем.
        'react/jsx-props-no-spreading': [0],                    // spread(распаковка) для пропсов лучше не использовать. Но в этом коде есть необходимость. потому не отключаем, а варнинг
        'react/function-component-definition': 'off',           // по умолчанию подмечает функции, объявденные не через Function Declaration. Отключили, т.к. многогде используем Function Expression
        'no-shadow': 'off',
        'import/extensions': 'off',                             // чтоб не ругался на импорты без расширений. У нас настроен вебпак(резолверы), потому нам не надо
        'import/no-extraneous-dependencies': 'off',             // отменили запрет на импорт внешних модулей, которые не объявлены в package.json (типа import webpack from 'webpack';)
        'no-underscore-dangle': 'off',                          // отменили запрет на нижние подчеркивания в переменных
        'linebreak-style': 0,                                   // отключение проблемы с переносами строк (Expected linebreaks to be 'LF' but found 'CRLF')
        'no-multiple-empty-lines': [2, { max: 3 }],             // максимум 3 пустых строки
        'no-multi-spaces': [2, { ignoreEOLComments: true }],    // игнорировать множественные пробелы в конце строки перед комментарием
        'react/jsx-one-expression-per-line': [0, {}],           // один элемент JSX на строку. отключил чтоб в конец строки jsx\tsx файла можно было добавить коммент
        'max-len': [1, { comments: 500, code: 500 }],           // макс длинна строки
        'object-curly-newline': [0, 'never'],                   // чтоб не требовал переноса строк у открывающих и закрывающих скобок
        'react/jsx-no-bind': [0],                               // чтоб можно было использовать функции, объявленные через function declaration в пропсах
        quotes: [0],                                            // кавычки
        'space-in-parens': [0],                                 // expect( classNames('someClass') ) разрешить пробелы внутри expect()
        'object-curly-spacing': [0],
        'arrow-body-style': [0],
        'react/jsx-curly-spacing': [0],
        'react/jsx-tag-spacing': [0],
        'react/button-has-type': [0],
        'no-restricted-globals': [0],
        'no-console': [0],
        'i18next/no-literal-string': [0],
        'react/jsx-first-prop-new-line': [0],
        'react/jsx-boolean-value': [0],
    },
    globals: {
        __IS_DEV__: true,                                       // объявили глобальную переменную из вебпака
    },
};
