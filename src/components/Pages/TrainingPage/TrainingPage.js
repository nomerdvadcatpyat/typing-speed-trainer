import React from "react";
import TextComponentContainer from "./TextComponent/TextComponentContainer";
import {KeyboardComponent} from "./KeyboardComponent/KeyboardComponent";
import './TrainingPage.scss'

export const TrainingPage = ({ endState, startSameText }) => {
	return (
		<div className="training-page">
			<TextComponentContainer />
			{
				endState ?
					(
						<button autoFocus={true} className="training-page__repeat-button" onClick={startSameText}>
							Заново
						</button>
					) :
					null
			}
			<KeyboardComponent />
		</div>
	);
}