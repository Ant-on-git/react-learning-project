import './styles/index.scss';
import { Link } from "react-router-dom";
import { useTheme } from 'app/providers/ThemeProvider/lib/UseTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './router';






const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            
            <button onClick={toggleTheme}>Toggle theme</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <AppRouter />

        </div>
    );
};

export default App;
