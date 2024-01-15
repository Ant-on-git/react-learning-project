import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import { FC, useMemo, useState } from 'react';



// получаем значение выбранной темы из localStorage если есть. as в TypeScript используется для приведения типов.
// Приходит строка, Однако, вы хотите присвоить результат этой операции переменной defaultTheme, которая имеет тип Theme. Поэтому, вы используете as Theme для приведения типа возвращаемого значения к типу Theme. Это говорит TypeScript, что вы уверены, что возвращаемое значение будет соответствовать типу Theme.
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;



// препод использует реакт 17 версии и у него было "const ThemeProvider: FC = ({children}) => {" - но Тип PropsWithChildren исключен из типа props FunctionalComponent после React 18
// Таким образом, когда вы пишете FC<Props>, вы говорите TypeScript, что ваш компонент принимает любые пропсы, которые определены в Props, а также любые дополнительные пропсы, которые могут быть определены в FC
interface Props {
    children?: React.ReactNode; // ReactNode потому что в параметы ThemeProvider будет приходить <App/>
}



// создает контекст для управления темой
const ThemeProvider: FC<Props> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // Используется хук useMemo для оптимизации производительности. useMemo возвращает мемоизированное значение, которое пересчитывается только тогда, когда меняются его зависимости (в данном случае, theme). 
    // Это означает, что объект { theme: theme, setTheme: setTheme } будет создан заново только тогда, когда theme изменится. А если не изменилось, возвращается старое значение объекта
    // иначе , если прописать прям в ThemeContext.Provider value = {{theme: theme, setTheme: setTheme}}, то этот объект (внутри value) будет создаваться каждый раз при рендере компонента
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
// <ThemeContext.Provider value={defaultProps}>: Здесь создается провайдер контекста. Все компоненты внутри этого провайдера ({children}) будут иметь доступ к значениям theme и setTheme.


export default ThemeProvider;
