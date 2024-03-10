import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslations/renderWithTranslations";
import { Sidebar } from "./Sidebar";



describe('Sidebar', () => {
    test('Sidebar in the document', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggle', () => {
        renderWithTranslation(<Sidebar/>);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
