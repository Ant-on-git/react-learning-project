import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about_page.svg';
import MainIcon from 'shared/assets/icons/main_page.svg';
import cls from './Sidebar.module.scss';


interface SidebarProps {className?: string}


export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);    // развернут\свернут (false\true)

    function onToggle() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.SECONDARY}
                        className={cls.item}
                        to={RoutePath.main}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Главная страница')}</span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY}
                        className={cls.item}
                        to={RoutePath.about}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <Button data-testid="sidebar-toggle"
                    onClick={onToggle}
                    className={cls.collapseBtn}
                    theme={ButtonTheme.BACGROUND_INVERTED}
                    isSquare={true}
                    size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed}/>
            </div>
        </div>
    );
};

