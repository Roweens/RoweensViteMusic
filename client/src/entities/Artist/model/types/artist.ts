export interface SubscribedArtist {
    id: string;
    favouriteId: string;
    artistId: string;
}

export interface Artist {
    id: number;
    name: string;
    bio: string;
    bioImg: string;
    label: string;
    listens: string;
    img: string;
    favourite_artist: SubscribedArtist[];
    createdAt: string;
    updatedAt: string;
}

export interface ArtistSliceSchema {
    isLoading?: boolean;
    error?: string;
    data?: Artist;
}
