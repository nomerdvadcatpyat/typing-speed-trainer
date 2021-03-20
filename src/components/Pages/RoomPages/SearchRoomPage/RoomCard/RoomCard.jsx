import {Link} from "react-router-dom";
import './RoomCard.scss';
import {LinkToUser} from "../../../../UtilComponents/Links/LinkToUser/LinkToUser";
import {StyledButton} from "../../../../UtilComponents/StyledButton/StyledButton";


export const RoomCard = ({
	                         className,
	                         textTitle,
	                         textLength,
	                         language,
	                         owner,
	                         personsCount,
	                         maxPersonsCount,
	                         linkTo,
	                         setRoomError}) => {
	return (
		<section className={`room-card ${className}`}>
			<h3 className="room-card__header">
				{textTitle}, {textLength} символов, создатель: <LinkToUser username={owner}>{owner}</LinkToUser>
			</h3>
			<div className="room-card__body">
				<p> {personsCount} из {maxPersonsCount} игроков подключились к комнате </p>
				<p> Язык текста: {language}</p>
				<Link to={linkTo}>
					<StyledButton className="room-card__enter-room" onClick={() => setRoomError(null)}>
						Присоедениться
					</StyledButton>
				</Link>
			</div>
		</section>
	);
}