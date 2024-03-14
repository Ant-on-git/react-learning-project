// для подключения глобальных стилей в storybook
// как я понял, здесь просто подключаются стили, а код принимает историю и выполняет ее
import React from 'react';
import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";



export function StyleDecorator(Story: StoryFn) {
    return <Story />;
}
