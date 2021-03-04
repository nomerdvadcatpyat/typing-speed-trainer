import React from "react";


export const SearchOrWaitingRoomLayout = ({asideContent, mainContent}) => {
	return (
		<div className="room-content">
			<aside className="room-content__aside">
				{asideContent}
			</aside>
			<main className="room-content__main">
				{mainContent}
			</main>
		</div>
	);
}