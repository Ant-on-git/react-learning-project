import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';


const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {},
    tags: ['autodocs'],
    args: { to: '/' },      // прокинется в каждый сторис
} satisfies Meta<typeof AppLink>;

export default meta;


type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        children: 'link text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'link text',
        theme: AppLinkTheme.SECONDARY,
    },
};
