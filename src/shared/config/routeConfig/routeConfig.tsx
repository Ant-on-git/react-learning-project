import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';


// делаем перечисление роутов (страниц).
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}


// экспортируем переменную типа {'main': '/', 'about': '/about'}
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',     // охватывает все маршруты, если описанные до него не сработали
};


// объявляем сами роуты (маршрут, компонент, кот. для них надо отрисовать)
export const routeConfig: Record<AppRoutes, RouteProps> = {   // RouteProps - тип, кот. используется для передачи пропсов в компонент react router dom ((  <Route path={'/about'} element={<AboutPage />}/>  пропсы это path={'/about'} element={<AboutPage />}  ))
    [AppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
    [AppRoutes.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
    [AppRoutes.NOT_FOUND]: { path: RoutePath.not_found, element: <NotFoundPage /> },
};
