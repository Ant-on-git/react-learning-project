import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';



export enum ButtonTheme {
    CLEAR = 'clear',        // кнопка без всего, чисто текст
    OUTLINE = 'outline',    // кнопка с рамкой, но без заднего фона
    BACGROUND = 'background',    // цвет фона такой же как у приложения
    BACGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}


// extends ButtonHTMLAttributes<HTMLElement> - для наследования пропсов от html элемента button типа onclick и тд. <HTMLElement> в ButtonHTMLAttributes<HTMLElement> указывает на тип элемента, который мы хотим расширить. В данном случае, HTMLElement является базовым типом для всех HTML-элементов.
interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    className?: string;
    children?: React.ReactNode;
    theme?: ButtonTheme;
    isSquare?: boolean;       // отвечает за то чтоб кнопка была квадратной
    size?: ButtonSize
}


export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, isSquare, size, ...otherProps } = props;

    return (
        <button type="button"
                className={classNames(cls.Button, { [cls.square]: isSquare }, [className, cls[theme], cls[size]])}
                {...otherProps}
        >
            {children}
        </button>
    );
};

