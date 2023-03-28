export interface Artist {
    id: number;
    name: string;
    bio: string;
    listens: string;
    img: string;
    createdAt: string;
    updatedAt: string;
}

export interface ArtistSliceSchema {
    isLoading?: boolean;
    error?: string;
    data?: Artist;
}
