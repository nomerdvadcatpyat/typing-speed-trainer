import '../SearchOrWaitingRoomLayout.scss';
import './SearchRoomPage.scss';
import React from "react";
import {RoomCard} from "./RoomCard/RoomCard";
import {SearchOrWaitingRoomLayout} from "../SearchOrWaitingRoomLayout";
import {ErrorAlert} from "./ErrorAlert/ErrorAlert";
import {RingLoader} from "../../../UtilComponents/RingLoader/RingLoader";
import {StyledButton} from "../../../UtilComponents/StyledButton/StyledButton";
import {BasicLink} from "../../../UtilComponents/Links/BasicLink/BasicLink";


const CreateRoomButton = ({className}) => {
	return (
		<BasicLink tabIndex={-1} to="/createRoom">
			<StyledButton className={className}>
				Создать комнату
			</StyledButton>
		</BasicLink>
	);
}


export const SearchRoomPage = props => {
	const createJSXrooms = () => {
		return props.rooms.map(room => {
			return (
				<RoomCard
					className="page-content__room-card"
					key={room.id}
					textTitle={room.textTitle}
					textLength={room.text.length}
					language={room.textLang}
					owner={room.members.find(member => member.isRoomOwner).userName}
					personsCount={room.members.length}
					maxPersonsCount={room.maxMembers}
					setRoomError={props.setRoomError}
					linkTo={`/room?game_id=${room.id}`}
				/>
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
							asideContent={<CreateRoomButton className={"page-content__aside-button"} />}
							mainContent={createJSXrooms()}
						/>
					) :
					<RingLoader className="main-spinner"/>
			}
		</>
	);
}