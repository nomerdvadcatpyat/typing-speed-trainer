import "./RootStartButton.scss";
import {StyledButton} from "../../../../UtilComponents/StyledButton/StyledButton";


export const RootStartButton = ({className}) => {
	return (
		<div className={`start-button-wrapper ${className}`}>
			<StyledButton variant="dark" className="start-button"> Начать </StyledButton>
			<div className="search-or-create-wrapper">

			</div>
		</div>
	);
}