import React, { useState } from 'react'
import Products from './component/Products';

export default function AppProducts() {
    const [showProduct, setShowProduct] = useState(true);
    const handleOnClick = () => {
        setShowProduct(!showProduct);
    }
    return (
        <div className='container'>
            <button onClick={handleOnClick}>Toggle</button>
            {showProduct && <Products />}
        </div>
    )
}
