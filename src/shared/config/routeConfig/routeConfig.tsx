import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"


// делаем перечисление роутов (страниц). 
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}


// экспортируем переменную типа {'main': '/', 'about': '/about'}
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}


// объявляем сами роуты (маршрут, компонент, кот. для них надо отрисовать)
export const routeConfig: Record<AppRoutes, RouteProps> = {   // RouteProps - тип, кот. используется для передачи пропсов в компонент react router dom ((  <Route path={'/about'} element={<AboutPage />}/>  пропсы это path={'/about'} element={<AboutPage />}))
    [AppRoutes.MAIN]:   {path: RoutePath.main, element: <MainPage/>},
    [AppRoutes.ABOUT]:  {path: RoutePath.about, element: <AboutPage/>},
}