import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import {Nav, Navbar} from "react-bootstrap";
import {HeaderLink} from "./HeaderLink/HeaderLink";

export function Header({ isAuth, user, onLogout }) {
	return (
			<Navbar className="header" collapseOnSelect expand="sm" bg="dark" variant="dark">
				<Navbar.Brand> SomeApp </Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="w-100">

						<div className="header__left-side">
							<HeaderLink to="/rating" text="Рейтинг" />
							<HeaderLink to="/searchRoom" text="Играть" />
						</div>

						<div className="header__right-side">
							{ isAuth ? (
								<>
									<HeaderLink to={`/user?user=${user.login}`} text={user.login} />
									<Nav.Link href="#"> <span onClick={onLogout}> Выход </span> </Nav.Link>
								</>
							) : (
								<HeaderLink to="/auth/login" text="Вход" />
							)}
						</div>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
	);
}
