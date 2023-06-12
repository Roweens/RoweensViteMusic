import { FC, lazy } from 'react';
import { FavouriteTracksListProps } from './FavouriteTracksList';

export const FavouriteTracksListAsync = lazy<FC<FavouriteTracksListProps>>(
    () => import('./FavouriteTracksList'),
);
