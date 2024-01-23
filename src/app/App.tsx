import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/lib/UseTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';



const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>

            <Navbar />

            <AppRouter />
            
        </div>
    );
};

export default App;
