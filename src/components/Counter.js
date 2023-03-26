import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return <div>
        <h1 data-testid="counter-text">{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
}

export default Counter;

