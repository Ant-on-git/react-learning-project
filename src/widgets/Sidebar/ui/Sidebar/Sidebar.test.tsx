import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslations/renderWithTranslations";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "./Sidebar";



describe('Sidebar', () => {
    test('Sidebar in the document', () => {
        componentRender(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
