import { FC } from 'react';
import { Selector, SelectorTheme } from 'shared/ui/Selector/Selector';
import { useTranslation } from 'react-i18next';
import { OptionsType } from 'shared/types/OptionsType';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
    className?: string;
    onChange?: (value: Country) => void;
    value?: Country;
    readOnly?: boolean;
}

const CountryOptions: OptionsType[] = [
    {
        id: 1,
        label: Country.RUSSIA,
        value: Country.RUSSIA,
    },
    {
        id: 2,
        label: Country.CHINA,
        value: Country.CHINA,
    },
    {
        id: 3,
        label: Country.UK,
        value: Country.UK,
    },
    {
        id: 4,
        label: Country.US,
        value: Country.US,
    },
];

export const CountrySelect: FC<CountrySelectProps> = (props) => {
    const { className, onChange, value, readOnly } = props;

    const { t } = useTranslation();

    return (
        <Selector
            onChange={onChange}
            label={t('Выберите страну')}
            value={value}
            options={CountryOptions}
            theme={SelectorTheme.FILLED}
            readOnly={readOnly}
        />
    );
};
