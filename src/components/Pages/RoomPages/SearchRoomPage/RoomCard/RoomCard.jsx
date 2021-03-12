import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import './RoomCard.scss';
import {LinkToUser} from "../../../../UtilComponents/LinkToUser/LinkToUser";
import {StyledButton} from "../../../../UtilComponents/StyledButton/StyledButton";

export const RoomCard = ({textTitle, textLength, language, owner, personsCount, maxPersonsCount, linkTo}) => {
	return (
		<Card className="room-card">
			<Card.Header>{textTitle}, {textLength} символов </Card.Header>
			<Card.Body>
				<Card.Title>
					Создатель: <LinkToUser username={owner}> {owner} </LinkToUser>
				</Card.Title>
				<Card.Text>
					<p> {personsCount} из {maxPersonsCount} игроков подключились к комнате </p>
					<p> Язык текста: {language}</p>
				</Card.Text>
				<Link to={linkTo}>
					<StyledButton  className="room-card__enter-room">
						Присоедениться
					</StyledButton>
				</Link>
			</Card.Body>
		</Card>
	);
}