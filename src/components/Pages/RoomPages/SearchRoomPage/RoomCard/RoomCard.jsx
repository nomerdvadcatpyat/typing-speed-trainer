import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import './RoomCard.scss';
import {LinkToUser} from "../../../../UtilComponents/LinkToUser/LinkToUser";

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
				<Button as={Link} to={linkTo} variant="dark">Enter room</Button>
			</Card.Body>
		</Card>
	);
}