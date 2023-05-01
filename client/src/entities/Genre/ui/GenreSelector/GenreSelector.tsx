import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { OptionsType } from 'shared/types/OptionsType';
import { Selector } from 'shared/ui/Selector/Selector';
import { useTranslation } from 'react-i18next';
import { fetchGenres } from '../../model/services/fetchGenres';
import { Genre } from '../../model/types/genre';
import { genreSliceReducer, getGenres } from '../../model/slice/genreSlice';

interface GenreSelectorProps {
   className?: string;
   value: string;
   onChange: (value: string) => void
}

const reducers: ReducersList = {
    genres: genreSliceReducer,
};

export const GenreSelector = memo((props:GenreSelectorProps) => {
    const { className, onChange, value } = props;
    const genres = useSelector(getGenres.selectAll);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    useInitialEffect(() => {
        dispatch(fetchGenres());
    });

    const options = useMemo(
        () => genres.reduce((acc: OptionsType[], genre: Genre) => [...acc, { id: genre.id, label: genre.name, value: String(genre.id) }], []),
        [genres],
    );

    return (
        <DynamicReducerLoader reducers={reducers}>
            <Selector options={options} value={value} onChange={onChange} label={t('Выберите жанр')} />
        </DynamicReducerLoader>
    );
});
