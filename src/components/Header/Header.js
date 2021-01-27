import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';


export function Header() {
	return (
		<header className="header">
			<nav>
				<Link to="/rating"> Рейтинг </Link>
				<Link to="/training"> Тренировка </Link>
				<Link to="/login"> Вход </Link>
			</nav>
		</header>
	);
}