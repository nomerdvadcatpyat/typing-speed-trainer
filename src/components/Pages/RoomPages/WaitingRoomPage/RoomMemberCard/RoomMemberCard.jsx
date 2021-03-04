import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import './RoomMemberCard.scss';

export const RoomMemberCard = ({userName, points, isRoomOwner, gamesCount, averageSpeed}) => {
	return (
		<Card className="room-card">
			<Card.Header>
				<Link to={`user/?user=${userName}`}> {userName} </Link>
				{isRoomOwner && 'roomOwner'}
			</Card.Header>
			<Card.Body>
				<Card.Title>Всего очков: {points}</Card.Title>
				<Card.Text>
					<p> Всего игр: {gamesCount} </p>
					<p> Средняя скорость: {averageSpeed} </p>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}