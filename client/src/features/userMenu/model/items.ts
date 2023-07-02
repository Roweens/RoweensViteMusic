import { FunctionComponent, SVGProps } from 'react';
import { RoutePath } from 'shared/const/router';
import { ReactComponent as ProfileIcon } from '../assets/profile.svg';
import { ReactComponent as ExitIcon } from '../assets/exit.svg';

interface UserMenuItemType {
    text: string;
    icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    path?: string;
}

const userMenuItems: UserMenuItemType[] = [
    {
        icon: ProfileIcon,
        text: 'Профиль',
        path: RoutePath.profile,
    },
    {
        icon: ExitIcon,
        text: 'Выход',
    },
];
