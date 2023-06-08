import { memo, useCallback, useState } from 'react';
import { ArtistDescriptionCard } from 'entities/Artist';

interface ArtistPageBioProps {
    className?: string;
}

export const ArtistPageBio = memo((props: ArtistPageBioProps) => {
    const { className } = props;

    const [isBioOpen, setIsBioOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsBioOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsBioOpen(true);
    }, []);

    return (
        <ArtistDescriptionCard
            isOpen={isBioOpen}
            onClose={onCloseModal}
            onOpen={onOpenModal}
        />
    );
});
