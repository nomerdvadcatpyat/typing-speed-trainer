import {Nav} from "react-bootstrap";
import React from "react";
import {LinkContainer} from 'react-router-bootstrap';

export const HeaderLink = ({to, text}) => {
	return (
		<LinkContainer to={to}>
			<Nav.Link> {text} </Nav.Link>
		</LinkContainer>
	);
}