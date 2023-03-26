import { render } from '@testing-library/react';

// Components
import MyButton from '../components/MyButton';

test("Snapshot test for Header", () => {
    // ARRANGE
    const Header = () => <h1 style={{ color: 'red' }}>Something</h1>

    // ACT
    const { asFragment } = render(<Header />);

    // ASSERT
    expect(asFragment()).toMatchSnapshot();
})

test("Snapshot test for Button", () => {
    // ARRANGE
    const alertFunction = jest.fn()
    // ACT
    const { asFragment } = render(<MyButton alert={alertFunction} />);

    // ASSERT
    expect(asFragment()).toMatchSnapshot();
})

