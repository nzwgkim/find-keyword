import React, { useState } from 'react'
import './App.css';
import Counter from './component/Counter';


export default function AppCounter() {
    const [count, setCount] = useState(0);
  return (
    <div className='container'>
        <div className='banner'>
            Total Count:{count} {count>10?'💛':'💥'}
        </div>
        <Counter count={count} setCount={setCount}/>
        <Counter count={count} setCount={setCount}/>
    </div>
  )
}
