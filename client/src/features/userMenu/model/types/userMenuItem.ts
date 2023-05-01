import { FunctionComponent, SVGProps } from 'react';

export interface UserMenuItemType {
    text: string;
    icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    path?: string;
    onClick?: () => void;
}
