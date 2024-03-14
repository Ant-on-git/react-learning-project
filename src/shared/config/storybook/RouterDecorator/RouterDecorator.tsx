// для оборачивания в роутер чтоб работали линки в сторибук

import React from 'react';
import { StoryFn } from "@storybook/react";
import { BrowserRouter } from 'react-router-dom';


export function RouterDecorator(Story: StoryFn) {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
}
