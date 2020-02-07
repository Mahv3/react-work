import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { statement } from '@babel/template'

const App = () => {
    const [count, setCount] = useState(0)

    const addButton = () => {
        setCount(count + 1)
    }

    const decreaseButton = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h1>count:{count}</h1>
            <button type="button"
                onClick={addButton}>addNum</button>
            <button type="button"
                onClick={decreaseButton}
            >decreaseNum</button>
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))