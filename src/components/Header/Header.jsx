import React from 'react';
import './Header.scss';
import {Nav, Navbar} from "react-bootstrap";
import {HeaderLink} from "./HeaderLink/HeaderLink";
import {Link} from "react-router-dom";

export function Header({isAuth, user, onLogout}) {
	return (
		<>
			<div className="header-buffer" />
			<header className="header-wrapper">
				<Navbar className="header" collapseOnSelect expand="sm" bg="dark" variant="dark">
					<Link to="/">
						<Navbar.Brand> SomeApp </Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="responsive-navbar-nav"/>

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="w-100">

							<div className="header__left-side">
								<HeaderLink to="/rating" text="Рейтинг"/>

								{isAuth && <HeaderLink to="/searchRoom" text="Комнаты"/>}
							</div>

							<div className="header__right-side">
								{isAuth ? (
									<>
										<HeaderLink to={`/user?user=${user.login}`} text={user.login}/>
										<Nav.Link href="#"> <span onClick={onLogout}> Выход </span> </Nav.Link>
									</>
								) : (
									<HeaderLink to="/auth/login" text="Вход"/>
								)}
							</div>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		</>
	);
}
