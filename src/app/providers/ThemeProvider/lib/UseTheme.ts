import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import { useContext } from 'react';


// тип данных, кот. возвращает ф-я useTheme
interface UseThemeResult {
    toggleTheme: () => void,
    theme: Theme
}


export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    function toggleTheme() {
        const NewTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(NewTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, NewTheme);    // сохраняем тему в л.с.
    }

    return {theme, toggleTheme} 
}