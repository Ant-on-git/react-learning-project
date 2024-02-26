import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';



const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader/>}>     {/* для асинхронной загрузки страниц чтоб не грузилось сразу все приложение, а только то, куда переходит пользователь (lazy loading / code splitting ). пока что то загружается, отображается то, что в fallback */}
                        <div className={classNames('page-wrapper', {}, [])}>
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

export default AppRouter;
