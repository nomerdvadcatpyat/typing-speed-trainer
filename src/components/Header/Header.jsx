import React, {useState} from 'react';
import './Header.scss';
import {Hamburger} from "./Hamburger/Hamburger";
import {useMediaQuery} from "react-responsive/src";
import {BasicLink} from "../UtilComponents/Links/BasicLink/BasicLink";


export function Header({isAuth, user, onLogout}) {
	const [collapsed, setCollapsed] = useState(null);
	const isMobile = useMediaQuery({query: '(max-width: 580px)'});

	const HeaderLink = ({to, children, className}) => {
		return (
			<BasicLink onClick={() => setCollapsed(true)} className={`header-link ${className && className}`} to={to}>
				{children}
			</BasicLink>
		)
	}

	return (
		<>
			<div className="header-buffer"/>
			<header className="header">
				{
					isMobile && <Hamburger isCollapsed={collapsed} onClick={() => setCollapsed(prev => {
						if (prev === null) return false;
						return !prev;
					})}/>
				}
				<HeaderLink className="header__logo" to="/">
					SomeApp
				</HeaderLink>

				<nav className={`header__nav ${collapsed === null ? '' :
					collapsed ? 'header__nav_collapsed' : 'header__nav_opened'}`}>

					<HeaderLink to="/rating"> Рейтинг </HeaderLink>
					{isAuth && <HeaderLink to="/searchRoom"> Комнаты </HeaderLink>}

					{isAuth ? (
						<>
							<HeaderLink to={`/user?user=${user.login}`}> {user.login} </HeaderLink>
							<HeaderLink href="#"> <span onClick={onLogout}> Выход </span> </HeaderLink>
						</>
					) : (
						<HeaderLink to="/auth/login"> Вход </HeaderLink>
					)}
				</nav>

			</header>
		</>
	);
}
