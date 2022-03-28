import React from 'react'
import { NavLink } from 'react-router-dom'

const notActiveClass = 'px-3 py-2 flex items-center text-2xl hover:opacity-75 text-white'
const activeClass = 'px-3 py-2 flex items-center text-2xl font-semibold hover:opacity-75 text-white'

const HeaderLink = ({ href, condition, name, onClick }) => {
	if (!condition) {
		return null
	}

	return (
		<li className="nav-item">
			<NavLink
				onClick={onClick}
				className={({isActive}) => isActive ? activeClass : notActiveClass }
				to={href}
			>
				<span>{name}</span>
			</NavLink>
		</li>
	)
}

export default HeaderLink