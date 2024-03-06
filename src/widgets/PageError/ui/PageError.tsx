import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';


interface PageErrorProps {className?: string}


export const PageError = ({className}: PageErrorProps) => {
    const { t } = useTranslation();

    function reloadPage() {
        location.reload();
    }

    return (
        <div className={ classNames(cls.PageError, {}, [className]) }>
            <p>{t('произошла непредвиденная ошибка')}</p>
            <button onClick={() => { reloadPage(); }}>{t('обновить страницу')}</button>
        </div>
    );
};

