import { FC } from 'react';
import classNames from 'classnames';
import { DropDown, ThemeDropDown } from 'shared/ui/DropDown/DropDown';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
    className?: string;
    onChange?: (value: Currency) => void;
    value?: Currency;
    readOnly?:boolean;
}

const CurrencyOptions = [
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

    return (
        <DropDown
            onClick={onChange}
            title="Выберите валюту"
            state={value}
            options={CurrencyOptions}
            theme={ThemeDropDown.FILLED}
            readOnly={readOnly}
        />
    );
};
