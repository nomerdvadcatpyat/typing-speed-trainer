import './SearchRoomPage.scss'
import {Link} from "react-router-dom";
import {Ring} from "react-spinners-css";
import React from "react";
import {RoomCard} from "./RoomCard/RoomCard";
import {Button} from "react-bootstrap";

export const SearchRoomPage = props => {

	const createJSXrooms = () => {
		return props.rooms.map(room => {
			console.log(room);
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
				props.isUserKicked ? (
						<div onClick={props.closeKickedMessage}> Вы были исключены </div>
					) :
					props.rooms ? (
							<div className="search-room">
								<aside className="search-room__create-own-room">
										<Button as={Link} to="createRoom" variant="dark">Create Room</Button>
								</aside>
								<main className="search-room__rooms">
									{createJSXrooms()}
								</main>
							</div>
						) :
						<Ring className="main-spinner"/>
			}
		</>
	);
}