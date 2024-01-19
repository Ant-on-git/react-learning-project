import { createContext } from "react";

// объявление перечисления (enum) в TypeScript. Перечисления - это способ организации связанных константных значений.
// Когда вы используете перечисления, вы получаете преимущества статической типизации и автодополнения кода в редакторах кода, поддерживающих TypeScript.
export enum Theme {
    LIGHT= 'light',
    DARK = 'dark'
}

// ? = свойство является необязательным.
// void = ничего не возвращает
export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

// ключ для хранения в local storage
export const LOCAL_STORAGE_THEME_KEY = 'theme';