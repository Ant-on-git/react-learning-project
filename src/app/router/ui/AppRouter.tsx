import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';



const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>     {/* для асинхронной загрузки страниц чтоб не грузилось сразу все приложение, а только то, куда переходит пользователь (lazy loading / code splitting ). пока что то загружается, отображается то, что в fallback */}

        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className={classNames('page-wrapper', {}, [])}>
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>

    </Suspense>
);

export default AppRouter;
