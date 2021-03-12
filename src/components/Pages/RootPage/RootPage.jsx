import "./RootPage.scss"
import {RoomInfoText} from "./RootInfo/RoomInfoText/RoomInfoText";
import {Link} from "react-router-dom";
import {StyledButton} from "../../UtilComponents/StyledButton/StyledButton";

export const RootPage = ({isAuth}) => {
	return (
		<div className="root-page">
			<RoomInfoText className="root-page__info" />
			<Link to={isAuth ? `/searchRoom` : `/auth/login`}>
				<StyledButton variant="dark" className="start-button root-page__start-button">
					{isAuth ? 'Начать' : 'Войти'}
				</StyledButton>
			</Link>
		</div>
	);
}