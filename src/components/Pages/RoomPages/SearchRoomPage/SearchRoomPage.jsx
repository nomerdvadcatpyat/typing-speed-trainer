import '../SearchOrWaitingRoomLayout.scss';
import {Link} from "react-router-dom";
import React from "react";
import {RoomCard} from "./RoomCard/RoomCard";
import {SearchOrWaitingRoomLayout} from "../SearchOrWaitingRoomLayout";
import {ErrorAlert} from "./ErrorAlert/ErrorAlert";
import {RingLoader} from "../../../UtilComponents/RingLoader/RingLoader";
import {StyledButton} from "../../../UtilComponents/StyledButton/StyledButton";

export const SearchRoomPage = props => {

	const createJSXrooms = () => {
		return props.rooms.map(room => {
			return (
				<>
					<RoomCard
						key={room.id}
						textTitle={room.textTitle}
						textLength={room.text.length}
						language={room.textLang}
						owner={room.members.find(member => member.isRoomOwner).userName}
						personsCount={room.members.length}
						maxPersonsCount={room.maxMembers}
						linkTo={`/room?game_id=${room.id}`}
					/>
				</>
			);
		});
	}

	return (
		<>
			{
				props.roomError && (
					<ErrorAlert onClose={() => props.setRoomError(null)} title={props.roomError.title}>
						<p> {props.roomError.message} </p>
					</ErrorAlert>
				)
			}
			{
				props.rooms ? (
						<SearchOrWaitingRoomLayout
							asideContent={
								<Link to="/createRoom">
									<StyledButton className="room-content__aside-button">
										Create Room
									</StyledButton>
								</Link>
							}
							mainContent={createJSXrooms()}
						/>
					) :
					<RingLoader className="main-spinner"/>
			}
		</>
	);
}