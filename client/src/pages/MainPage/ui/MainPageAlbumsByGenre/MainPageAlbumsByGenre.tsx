import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Text } from 'shared/ui/Text/Text';
import { GenreSelector, getGenres } from 'entities/Genre';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { AlbumList } from 'entities/Album';
import {
    DynamicReducerLoader,
    ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { HStack, VStack } from 'shared/ui/Stack';
import { getAlbumsByGenreGenreId } from '../../model/selectors/getAlbumsByGenreData/getAlbumsByGenreGenreId';
import {
    mainPageAlbumsByGenreActions,
    mainPageAlbumsByGenreReducer,
} from '../../model/slices/mainPageAlbumsByGenreSlice';
import { getAlbumsByGenreIsLoading } from '../../model/selectors/getAlbumsByGenreData/getAlbumsByGenreIsLoading';
import { getAlbumsByGenreData } from '../../model/selectors/getAlbumsByGenreData/getAlbumsByGenreData';
import cls from './MainPageAlbumsByGenre.module.scss';
import { fetchAlbumsByGenre } from '../../model/services/fetchAlbumsByGenre';

interface MainPageAlbumsByGenreProps {
    className?: string;
}

const reducers: ReducersList = {
    mainPageAlbumsByGenre: mainPageAlbumsByGenreReducer,
};

export const MainPageAlbumsByGenre = memo(
    (props: MainPageAlbumsByGenreProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const genreId = useSelector(getAlbumsByGenreGenreId);
        const albums = useSelector(getAlbumsByGenreData);
        const isLoading = useSelector(getAlbumsByGenreIsLoading);
        const genres = useSelector(getGenres.selectAll);

        const genre = genres.find((genre) => String(genre.id) === genreId);

        useInitialEffect(() => {
            dispatch(fetchAlbumsByGenre(genreId));
        });

        const onChangeGenre = useCallback(
            (value: string) => {
                dispatch(mainPageAlbumsByGenreActions.setGenreId(value));
                dispatch(fetchAlbumsByGenre(value));
            },
            [dispatch],
        );

        return (
            <DynamicReducerLoader reducers={reducers}>
                <VStack
                    className={classNames(cls.mainPageAlbumsByGenre, {}, [
                        className,
                    ])}
                    gap="16"
                >
                    <HStack justify="between" gap="32">
                        <Text title={t('Лучшие альбомы из жанра:')} bold />
                        <GenreSelector
                            value={genre?.name}
                            onChange={onChangeGenre}
                        />
                    </HStack>
                    <AlbumList isLoading={isLoading} albums={albums} />
                </VStack>
            </DynamicReducerLoader>
        );
    },
);
