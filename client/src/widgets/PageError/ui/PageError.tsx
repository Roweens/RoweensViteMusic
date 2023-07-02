import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = (props) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError)}>
            <Text title={t('Произошла непредвиденная ошибка')} bold />
            <Button onClick={reloadPage} theme={ButtonTheme.OUTLINED}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
