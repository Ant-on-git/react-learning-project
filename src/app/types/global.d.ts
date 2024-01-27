// глобальная декларация типов чтобы typescript не ругался на импорт из css modules

declare module '*.module.css';
declare module '*.module.scss';
// and so on for whatever flavor of css you're using


// чтоб typescript понимал файлы с изображениями:
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React from 'react';

    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

// чтоб ts понимал что за переменная __IS_DEV__
declare const __IS_DEV__: boolean;
