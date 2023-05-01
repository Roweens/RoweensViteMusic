import { memo } from 'react';
import classNames from 'classnames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
     className?: string;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className } = props;

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div className={classNames(className)} onClick={toggle}>
            <Text title={`${t('Язык')}: ${i18n.language}`} />
        </div>
    );
});
