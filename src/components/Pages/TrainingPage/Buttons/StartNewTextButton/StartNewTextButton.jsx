

export const StartNewTextButton = props => {
	return (
		<button autoFocus={true} className="training-page__start-button" onClick={props.startNewTextButtonClickHandler}>
			Начать
		</button>
	);
}