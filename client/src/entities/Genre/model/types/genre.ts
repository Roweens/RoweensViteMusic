import { EntityState } from '@reduxjs/toolkit';

export interface Genre {
    id: number;
    name: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface GenresSliceSchema extends EntityState<Genre> {
    isLoading?: boolean;
    error?: string;
}
