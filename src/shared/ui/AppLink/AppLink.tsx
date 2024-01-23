import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';


// перечисление тем. SECONDARY = инвертированная
export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}


interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme,
    children?: React.ReactNode,
}


//  FC - это сокращение от FunctionComponent, которое является типом из библиотеки react. Этот тип включает в себя все свойства, которые может иметь функциональный компонент в React. :FC<AppLinkProps> означает что props будет типа FC, с дополнениями из AppLinkProps
export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, theme=AppLinkTheme.PRIMARY, ...otherProps} = props;

    return (
        <Link 
            to={to} 
            className={ classNames(cls.AppLink, {}, [className, cls[theme]]) }     // cls[theme] при theme=primary, равно cls.primary и т.д.
            {...otherProps}
        >
            {children}
        </Link>
    );
};

