import React, { useState } from 'react'

function Counter({count, setCount}) {
    const [counter, setCounter] = useState(0);
    const handleOnClick = () => {
        setCounter(counter + 1);
        setCount(count+1);
    }
    return (
        <div className='counter'>
            <span className='number'>{counter}</span>
            <button className='button' onClick={handleOnClick}>Add+</button>
        </div>
    )
}

export default Counter