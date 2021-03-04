import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import './RoomMemberCard.scss';
import { LinkContainer } from 'react-router-bootstrap';

export const RoomMemberCard = ({userName, points, isRoomOwner, gamesCount, averageSpeed}) => {
	return (
		<Card className={`room-member-card ${isRoomOwner && 'room-member-card_owner'}`}>
			<Link className="room-member-card__link-to-user" to={`user/?user=${userName}`}>
				<Card.Header className="room-member-card__header"> {userName} </Card.Header>
			</Link>

			<Card.Body className="room-member-card__body">
				<Card.Text >
					<p> Всего очков: {points} </p>
					<p> Всего игр: {gamesCount} </p>
					<p> Средняя скорость: {averageSpeed} </p>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}