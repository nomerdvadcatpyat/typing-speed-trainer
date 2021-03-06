import {Card} from "react-bootstrap";
import './RoomMemberCard.scss';
import {LinkToUser} from "../../../../UtilComponents/LinkToUser/LinkToUser";

export const RoomMemberCard = ({userName, points, isRoomOwner, gamesCount, averageSpeed}) => {
	return (
		<Card className={`room-member-card ${isRoomOwner && 'room-member-card_owner'}`}>
			<LinkToUser username={userName}>
				<Card.Header className="room-member-card__header"> {userName} </Card.Header>
			</LinkToUser>

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