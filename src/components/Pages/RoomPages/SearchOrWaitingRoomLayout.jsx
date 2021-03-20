import React from "react";


export const SearchOrWaitingRoomLayout = ({asideContent, mainContent, className}) => {
	return (
		<div className={`page-content ${className}`}>
			<aside className="page-content__aside">
				{asideContent}
			</aside>
			<main className="page-content__main">
				{mainContent}
			</main>
		</div>
	);
}