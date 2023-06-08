import { FC } from 'react';
import { Selector, SelectorTheme } from 'shared/ui/Selector/Selector';
import { useTranslation } from 'react-i18next';
import { OptionsType } from 'shared/types/OptionsType';
import { Language } from '../../model/types/Language';

interface LanguageSelectProps {
    className?: string;
    onChange?: (value: Language) => void;
    value?: Language;
    readOnly?: boolean;
}

const LanguageOptions: OptionsType[] = [
    {
        id: 1,
        label: Language.RU,
        value: Language.RU,
    },
    {
        id: 2,
        label: Language.EN,
        value: Language.EN,
    },
    {
        id: 3,
        label: Language.CN,
        value: Language.CN,
    },
];

export const LanguageSelect: FC<LanguageSelectProps> = (props) => {
    const { className, onChange, value, readOnly } = props;

    const { t } = useTranslation();

    return (
        <Selector
            onChange={onChange}
            label={t('Выберите язык')}
            value={value}
            options={LanguageOptions}
            theme={SelectorTheme.FILLED}
            readOnly={readOnly}
        />
    );
};
