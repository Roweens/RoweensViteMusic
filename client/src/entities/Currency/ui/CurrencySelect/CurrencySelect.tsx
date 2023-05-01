import { FC } from 'react';
import { Selector, SelectorTheme } from 'shared/ui/Selector/Selector';
import { OptionsType } from 'shared/types/OptionsType';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
    className?: string;
    onChange?: (value: Currency) => void;
    value?: Currency;
    readOnly?:boolean;
}

const CurrencyOptions: OptionsType[] = [
    {
        id: 1,
        label: Currency.EUR,
        value: Currency.EUR,
    },
    {
        id: 2,
        label: Currency.RUB,
        value: Currency.RUB,
    },
    {
        id: 3,
        label: Currency.USD,
        value: Currency.USD,
    },
];

export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
    const {
        className, onChange, value, readOnly,
    } = props;

    const { t } = useTranslation();

    return (
        <Selector
            onChange={onChange}
            label={t('Выберите валюту')}
            value={value}
            options={CurrencyOptions}
            theme={SelectorTheme.FILLED}
            readOnly={readOnly}
        />
    );
};
