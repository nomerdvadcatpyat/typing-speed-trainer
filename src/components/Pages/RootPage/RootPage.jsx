import "./RootPage.scss"
import {RoomInfoText} from "./RootInfo/RoomInfoText/RoomInfoText";
import {RootStartButton} from "./RootInfo/RootStartButton/RootStartButton";
import {Link} from "react-router-dom";

export const RootPage = props => {
	return (
		<div className="root-page">
			<RoomInfoText className="root-page__info" />
			<Link to="/searchRoom">
				<RootStartButton className="root-page__start-button" />
			</Link>
		</div>
	);
}