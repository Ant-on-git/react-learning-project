import './styles/index.scss';
import { Route, Routes, Link } from "react-router-dom";
import { Suspense, lazy, useContext } from 'react';
import { useTheme } from './theme/UseTheme';
import { classNames } from './helpers/classNames/classNames';


export const MainPageAsync = lazy(() => import('./pages/MainPage/MainPage'));
export const AboutPageAsync = lazy(() => import('./pages/AboutPage/AboutPage'));


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            
            <button onClick={toggleTheme}>Toggle theme</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
