import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';



export enum ThemeButton {
    CLEAR = 'clear',    // кнопка без всего, чисто текст
}


// extends ButtonHTMLAttributes<HTMLElement> - для наследования пропсов от html элемента button типа onclick и тд. <HTMLElement> в ButtonHTMLAttributes<HTMLElement> указывает на тип элемента, который мы хотим расширить. В данном случае, HTMLElement является базовым типом для всех HTML-элементов.
interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    className?: string;
    children?: React.ReactNode;
    theme?: ThemeButton;
}


export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

