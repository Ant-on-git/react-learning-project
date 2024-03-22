import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';


interface LangSwitcherProps {
    className?: string,
    short?: boolean,        // для укороченных слов. добавили когда делали чтоб переключатель языков не вылезал за сайтбар
}



export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    async function toddle() {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button theme={ButtonTheme.CLEAR}
                className={classNames('', {}, [className])}
                onClick={toddle}
        >
            {t(short ? 'сокращенный язык' : 'Язык')}
        </Button>
    );
};

