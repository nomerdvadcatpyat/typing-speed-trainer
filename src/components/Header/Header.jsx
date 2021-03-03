import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import PropTypes from "prop-types";

export function Header({ isAuth, user, onLogout }) {
	return (
		<header className="header">
			<nav>
				<Link to="/rating"> Рейтинг </Link>
				<Link to="/searchRoom"> Играть </Link>
				{ isAuth ? (
					<div className="profile-or-logout-wrapper">
						<p className="profile-or-logout-wrapper__username"> {user.login} </p>
						<div className="profile-or-logout">
							<Link className="header__profile-link" to={`/user?user=${user.login}`}> Профиль </Link>
							<span className="header__logout-button" onClick={onLogout}> Выход </span>
						</div>
					</div>
					) :
					<Link className="header__login-button" to="/auth/login"> Вход </Link>
				}
			</nav>
		</header>
	);
}

Header.propTypes = {
	onLogout: PropTypes.func,
	isAuth: PropTypes.bool
}
