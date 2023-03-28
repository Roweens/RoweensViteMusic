import { useEffect, useState } from 'react';

const UNMOUNT_DELAY_TIME = 250;

interface useMountProps {
  opened: boolean;
  setState?: (value: boolean) => void
}

export const useMount = ({ opened, setState }: useMountProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (opened && !mounted) {
            setMounted(true);
        } else if (!opened && mounted) {
            if (setState) setState(true);
            setTimeout(() => {
                setMounted(false);
                if (setState) setState(false);
            }, UNMOUNT_DELAY_TIME);
        }
    }, [opened, mounted, setState]);

    return {
        mounted,
    };
};
