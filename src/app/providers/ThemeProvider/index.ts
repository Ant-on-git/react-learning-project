// public api файл. Регулирует то, что отдаем наружу.

import { Theme } from "./lib/ThemeContext";
import { useTheme } from "./lib/UseTheme";
import ThemeProvider from "./ui/ThemeProvider";


export { ThemeProvider, useTheme, Theme };