import React from 'react'
import UnstyledLink from './UnstyledLink'

const HeaderLink = ({ href, condition, name, onClick }) => {
	if (!condition) {
		return null
	}

	return (
		<li className="nav-item">
			<UnstyledLink
				onClick={onClick}
				className="px-3 py-2 flex items-center text-xl hover:opacity-75 text-white"
				href={href}
			>
				<span>{name}</span>
			</UnstyledLink>
		</li>
	)
}

export default HeaderLink