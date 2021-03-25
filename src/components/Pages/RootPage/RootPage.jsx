import "./RootPage.scss"
import {RoomInfoText} from "./RootInfo/RoomInfoText/RoomInfoText";
import {StyledButton} from "../../UtilComponents/StyledButton/StyledButton";
import {BasicLink} from "../../UtilComponents/Links/BasicLink/BasicLink";

export const RootPage = ({isAuth}) => {
	return (
		<div className="root-page">
			<RoomInfoText className="root-page__info"/>
			<BasicLink tabIndex={-1} to={isAuth ? `/searchRoom` : `/auth/login`}>
				<StyledButton className="start-button root-page__start-button">
					{isAuth ? 'Начать' : 'Войти'}
				</StyledButton>
			</BasicLink>
		</div>
	);
}