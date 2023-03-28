import { FC } from 'react';
import classNames from 'classnames';
import { DropDown, ThemeDropDown } from 'shared/ui/DropDown/DropDown';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
    className?: string;
    onChange?: (value: Country) => void;
    value?: Country;
    readOnly?:boolean;
}

const CountryOptions = [{
    id: 1,
    label: Country.RUSSIA,
    value: Country.RUSSIA,
}, {
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
}];

export const CountrySelect: FC<CountrySelectProps> = (props) => {
    const {
        className, onChange, value, readOnly,
    } = props;

    return (
        <DropDown
            onClick={onChange}
            title="Выберите страну"
            state={value}
            options={CountryOptions}
            theme={ThemeDropDown.FILLED}
            readOnly={readOnly}
        />
    );
};
