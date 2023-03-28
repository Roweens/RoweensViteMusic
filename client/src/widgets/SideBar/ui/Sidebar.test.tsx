import { render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

describe('sidebar', () => {
    test('render test', () => {
        render(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
