import './RoomCard.scss';
import {LinkToUser} from "../../../../UtilComponents/Links/LinkToUser/LinkToUser";
import {StyledButton} from "../../../../UtilComponents/StyledButton/StyledButton";
import {BasicLink} from "../../../../UtilComponents/Links/BasicLink/BasicLink";


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
				<BasicLink tabIndex={-1} to={linkTo}>
					<StyledButton className="room-card__enter-room" onClick={() => setRoomError(null)}>
						Присоедениться
					</StyledButton>
				</BasicLink>
			</div>
		</section>
	);
}