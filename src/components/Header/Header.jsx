import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import PropTypes from "prop-types";

export function Header({ isAuth, onLogout }) {
	return (
		<header className="header">
			<nav>
				<Link to="/rating"> Рейтинг </Link>
				<Link to="/training"> Тренировка </Link>
				{ isAuth? <span className="header__logout-button" onClick={onLogout}> Выход </span> :
					<Link className="header__login-button" to="/auth/login"> Вход </Link> }
			</nav>
		</header>
	);
}

Header.propTypes = {
	onLogout: PropTypes.func,
	isAuth: PropTypes.bool
}
