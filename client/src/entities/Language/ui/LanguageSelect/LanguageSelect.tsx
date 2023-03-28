import { FC } from 'react';
import classNames from 'classnames';
import { DropDown, ThemeDropDown } from 'shared/ui/DropDown/DropDown';
import { Language } from '../../model/types/Language';

interface LanguageSelectProps {
    className?: string;
    onChange?: (value: Language) => void;
    value?: Language;
    readOnly?: boolean
}

const LanguageOptions = [
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
    const {
        className, onChange, value, readOnly,
    } = props;

    return (
        <DropDown
            onClick={onChange}
            title="Выберите язык"
            state={value}
            options={LanguageOptions}
            theme={ThemeDropDown.FILLED}
            readOnly={readOnly}
        />
    );
};
