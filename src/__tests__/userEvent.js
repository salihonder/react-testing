import { render, screen, fireEvent } from '@testing-library/react'

// Component
import Counter from '../components/Counter';

describe("Test Counter Component", () => {

    it("Counter should be 0 if not clicked", async () => {
        // ARRANGE
        render(<Counter />);
        const counterValue = await screen.findByTestId('counter-text')

        // ACT

        // ASSERT
        expect(counterValue).toHaveTextContent(0);
    })

    it("Counter should be 2 if clicked twice", async () => {
        // ARRANGE
        render(<Counter />);
        const buttonElement = screen.getByText('Increase')
        const counterValue = await screen.findByTestId('counter-text')

        // ACT

        fireEvent.click(buttonElement)
        fireEvent.click(buttonElement)

        // ASSERT
        expect(counterValue).toHaveTextContent(2);
    })

})

