import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/lib/UseTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './router';


function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>

            <Suspense fallback="loadig translated page">    {/* здесь Suspense чтобы асинхронно подгружать переводы для страниц. Переводы призодят в виде json файлов чисто с тексатми (из public/locales/<language_code>/translation.json ) */}
                <Navbar />
                <div className={classNames('content-page', {}, [])}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
}

export default App;
