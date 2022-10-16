import React, { useState } from 'react'

const useInput = (init, onClick) => {
    const [inputValue, setInputValue] = useState(init);

    const onInput = e=>{
      setInputValue(e.target.value)      
    }
    const hOnClick = ()=>{
        onClick(inputValue);
    }
  return [inputValue, onInput, hOnClick];
}

export default useInput