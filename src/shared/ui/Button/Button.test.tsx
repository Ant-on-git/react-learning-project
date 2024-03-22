import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";


describe('Button', () => {
    test('button in the document', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('button has class', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
