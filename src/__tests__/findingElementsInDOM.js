import { render, screen } from '@testing-library/react'

// Component
const Header = (props) => <h1 data-testid="header-text">{props.title}</h1>

describe("Find Header Element", () => {

    // it is same as test
    it("Finding title", () => {
        // ARRANGE
        render(<Header title="Joe" />);

        // ACT
        const textJoe = screen.getByText('Joe');

        // ASSERT
        expect(textJoe).toHaveTextContent("Joe");
    })

})