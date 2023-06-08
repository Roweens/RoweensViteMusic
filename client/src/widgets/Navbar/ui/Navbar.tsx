import { memo, useCallback } from 'react';
import classNames from 'classnames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { UserMenu } from 'features/userMenu';
import cls from './Navbar.module.scss';
import { ReactComponent as BackArrow } from '../assets/backArrow.svg';
import { ReactComponent as NextArrow } from '../assets/nextArrow.svg';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const navigate = useNavigate();

    const handleGoBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    const handleGoForward = useCallback(() => {
        navigate(1);
    }, [navigate]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.controls}>
                <Button
                    theme={ButtonTheme.CLEAN}
                    className={cls.button}
                    onClick={handleGoBack}
                >
                    <BackArrow />
                </Button>
                <Button theme={ButtonTheme.CLEAN} onClick={handleGoForward}>
                    <NextArrow />
                </Button>
            </div>
            <UserMenu username="Cognus" />
        </div>
    );
});
