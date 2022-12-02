import React, { useState } from 'react'
import './AppXY.css'

function AppXY() {
	const [pos, setPos] = useState({ x: 0, y: 0})
	return (
		<div
			className='container'
			onPointerMove={ev => {
				setPos({ x: ev.clientX, y: ev.clientY })
				// setPos(prev=>({ ...prev, x: ev.clientX }))
			}}>
			<div
				className='pointer'
				style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
			/>
		</div>
	)
}

export default AppXY