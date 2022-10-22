import React from 'react'

export default function Profile({ image, title, name, isNew }) {

    return (
        <div className='profile'>
            <h1>Profile</h1>
            <img className='photo' src={image} alt={title} />
            {isNew && <div className='new'>New</div> }
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    )
}
