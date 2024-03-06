// import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import 'shared/config/i18n/i18n';



// в уроке использовался React 17 и там было
// render(
//     <div>a1111sdfsefsdf</div>,      // что
//     document.getElementById('root') // куда
// )
// но т.к. здесь установил актуальный React, то переделываем


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App /> {/* App (все приложение) выступает в качестве пропса children в провайдере ThemeProvider, благодаря чему в любом месте приложения можно получить доступ к theme, setTheme и изменить тему */}
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
