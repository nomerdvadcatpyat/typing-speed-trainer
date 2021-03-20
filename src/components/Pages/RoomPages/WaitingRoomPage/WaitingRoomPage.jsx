import {SearchOrWaitingRoomLayout} from "../SearchOrWaitingRoomLayout";
import {RoomMemberCard} from "./RoomMemberCard/RoomMemberCard";
import './WaitingRoomPage.scss'
import {StyledButton} from "../../../UtilComponents/StyledButton/StyledButton";


export const WaitingRoomPage = props => {
	const getJSXRoomInfo = () => {
		return (
			<div className="room-info">
				<p><span className="room-info__key"> Название текста: </span> {props.textTitle}</p>
				<p><span className="room-info__key"> Длина текста: </span> {props.textLength}</p>
				<p><span className="room-info__key"> Язык текста: </span> {props.language}</p>
				<p><span className="room-info__key"> Количество игроков: </span> {props.members.length}/{props.maxMembersCount}
				</p>
			</div>
		);
	}

	const getJSXUsersInfo = () => {
		return props.members.map((member, index) => {
			return (
				<RoomMemberCard
					key={index}
					userName={member.userName}
					points={member.points}
					isRoomOwner={member.isRoomOwner}
					gamesCount={member.gamesCount}
					averageSpeed={member.averageSpeed}
				/>
			)
		});
	}

	return (
		<SearchOrWaitingRoomLayout
			className="waiting-room"
			mainContent={(
				<div className="waiting-room__main">
					{getJSXUsersInfo()}
				</div>
			)}
			asideContent={(
				<div className="waiting-room__aside">
					{getJSXRoomInfo()}
					{
						props.isRoomOwner && (
							<StyledButton
								className="waiting-room__start-button page-content__aside-button"
								onClick={props.startGameButtonClickHandler}
							>
								Начать
							</StyledButton>
						)
					}
				</div>
			)}
		/>
	);
}