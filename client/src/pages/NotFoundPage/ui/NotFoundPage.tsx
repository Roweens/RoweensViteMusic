import { memo } from 'react';
import classNames from 'classnames';
import { Page } from 'widgets/Page';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Page>
            <div
                className={classNames(cls.NotFoundPage, {}, [className])}
                data-testid="NotFoundPage"
            >
                {t('Страница не найдена')}
            </div>
        </Page>
    );
});
