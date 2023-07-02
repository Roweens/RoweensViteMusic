import { memo, useCallback, useRef } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { UserMenu } from 'features/userMenu';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const navigate = useNavigate();
    const navbarRef = useRef<HTMLDivElement | null>(null);

    const handleGoBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    const handleGoForward = useCallback(() => {
        navigate(1);
    }, [navigate]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.controls}>
                {/* <Button
                    theme={ButtonTheme.CLEAN}
                    className={cls.button}
                    onClick={handleGoBack}
                >
                    <BackArrow />
                </Button>
                <Button theme={ButtonTheme.CLEAN} onClick={handleGoForward}>
                    <NextArrow />
                </Button> */}
            </div>
            <UserMenu />
        </div>
    );
});
