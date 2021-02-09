import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';

export function Header({ isAuth, onLogout }) {
	return (
		<header className="header">
			<nav>
				<Link to="/rating"> Рейтинг </Link>
				<Link to="/training"> Тренировка </Link>
				{ isAuth? <Link onClick={onLogout}> Выход </Link> : <Link to="/auth/login"> Вход </Link> }
			</nav>
		</header>
	);
}