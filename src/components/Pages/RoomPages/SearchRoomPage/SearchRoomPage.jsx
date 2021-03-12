import '../SearchOrWaitingRoomLayout.scss';
import './SearchRoomPage.scss';
import {Link} from "react-router-dom";
import React from "react";
import {RoomCard} from "./RoomCard/RoomCard";
import {SearchOrWaitingRoomLayout} from "../SearchOrWaitingRoomLayout";
import {ErrorAlert} from "./ErrorAlert/ErrorAlert";
import {RingLoader} from "../../../UtilComponents/RingLoader/RingLoader";
import {StyledButton} from "../../../UtilComponents/StyledButton/StyledButton";


const CreateRoomButton = ({className}) => {
	return (
		<Link to="/createRoom">
			<StyledButton className={className}>
				Создать комнату
			</StyledButton>
		</Link>
	);
}


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
					props.rooms.length === 0 ? (
						<main className="zero-rooms-content">
							<p> Свободных комнат нет. Создайте свою или начните в одиночку. </p>
							<CreateRoomButton className={"zero-rooms-content__create-button"} />
						</main>
						) :
						<SearchOrWaitingRoomLayout
							asideContent={<CreateRoomButton className={"room-content__aside-button"} />}
							mainContent={createJSXrooms()}
						/>
					) :
					<RingLoader className="main-spinner"/>
			}
		</>
	);
}