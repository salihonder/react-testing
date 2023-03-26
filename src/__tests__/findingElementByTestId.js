import { render, screen } from '@testing-library/react'

// Component
const Header = (props) => <h1 data-testid="header-text">{props.title}</h1>

describe("Find with TestID Header Element ", () => {

    it("Finding by Test ID", async () => {
        // ARRANGE
        render(<Header title="Joe" />);

        // ACT
        const textJoe = await screen.findByTestId('header-text');

        // ASSERT
        expect(textJoe).toHaveTextContent("Joe");
    })

})

