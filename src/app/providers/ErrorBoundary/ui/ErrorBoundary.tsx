import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { PageError } from "widgets/PageError";


// образец из документации https://legacy.reactjs.org/docs/error-boundaries.html


// нужно типизировать state и props:
interface ErrorBounderyProps { children: ReactNode }         // ReactNode - любой react компонент
interface ErrorBounderyState { hasError: boolean }



class ErrorBoundary extends React.Component<ErrorBounderyProps, ErrorBounderyState> {       // типизация классов: 1 аргумент - тип для props, 2 - тип для state
    constructor(props: ErrorBounderyProps) {        // тип для props здесь должен совпадать с тем, что указали дженериком в React.Component<>
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Обновите состояние, чтобы при следующем рендеринге был показан резервный пользовательский интерфейс.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Вы также можете залогировать ошибку в службе отчетов об ошибках
        // logErrorToMyService(error, errorInfo);        // по документации было так - если используем сервис для логирования, в этот сервис здесь отправляют ошибку
        console.log(error, errorInfo);                   // но мы сделаем чисто лог в консоль
    }

    render() {
        const { hasError } = this.state;
        const { children} = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            // в <PageError/> используется перевод.
            // Ранее, когда подключали перевод, делали асинхронную загрузку файлов с переводами.
            // И оборачивали основное приложение (в App.tsx) в suspense
            // компонент  <PageError/> не включен в ту обертку, потому его дополнительно надо обернуть в suspense
            return (
                <Suspense fallback="">
                    <PageError/>
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
