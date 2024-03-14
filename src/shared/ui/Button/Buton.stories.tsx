import type { Meta, StoryObj } from '@storybook/react';     // импортируются типы чтоб использовать строгую типизацию в TypeScript.
import { Button, ThemeButton } from './Button';             // импортируется компонент Button, который будет использоваться в истории.



// how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// Объект meta: Содержит метаданные для компонента Button, включая заголовок, сам компонент, параметры отображения и теги.
const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        // Параметры отображения (parameters) используются для настройки внешнего вида компонента в Storybook, например, для центрирования компонента на экране.
        // https://storybook.js.org/docs/configure/story-layout
        // layout: 'centered',
    },
    tags: ['autodocs'],     // Теги (tags) используются для автоматической генерации документации через Autodocs. https://storybook.js.org/docs/writing-docs/autodocs
    argTypes: {
        // argTypes: Определяет типы аргументов для компонента, позволяя Storybook автоматически создавать контролы для изменения этих аргументов в интерфейсе Storybook. В данном случае, для backgroundColor создается контрол типа 'color'.
        // More on argTypes: https://storybook.js.org/docs/api/argtypes
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>;

export default meta;        // Экспорт meta: Экспортируется объект meta как дефолтный экспорт, который Storybook использует для настройки компонента в UI.



type Story = StoryObj<typeof meta>;     // определяет тип для историй компонента, используя тип StoryObj из Storybook.

// Истории компонента: Primary, Secondary, Large, Small - это истории компонента Button, каждая из которых демонстрирует компонент в различных состояниях или с разными аргументами (args). Это позволяет визуализировать компонент в разных вариантах и тестировать его поведение.
//  https://storybook.js.org/docs/writing-stories/args

export const Basic: Story = {
    args: {
        children: 'Basic button',
    },
};

export const Clear: Story = {
    args: {
        children: 'Clear button',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'outline button',
        theme: ThemeButton.OUTLINE,
    },
};
