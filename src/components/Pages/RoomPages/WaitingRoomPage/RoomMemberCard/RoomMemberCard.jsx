import './RoomMemberCard.scss';
import {UserCard} from "../../../../UtilComponents/UserCard/UserCard";

export const RoomMemberCard = ({userName, points, isRoomOwner, gamesCount, averageSpeed}) => {
	return (
		<div className="room-member-card-wrapper">
			{isRoomOwner && <img className="gold-star" src={`${process.env.REACT_APP_PICS_PATH}/star.svg`} alt="gold star"/>}
			<UserCard username={userName} className={`room-member-card`}>
				<>
					<p> Всего очков: {points} </p>
					<p> Всего игр: {gamesCount} </p>
					<p> Средняя скорость: {averageSpeed} </p>
				</>
			</UserCard>
		</div>

	);
}