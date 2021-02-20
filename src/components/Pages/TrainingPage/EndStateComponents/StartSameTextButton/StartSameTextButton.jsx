

export const StartSameTextButton = ({ startSameText }) => {
	return (
		<button autoFocus={true} className="training-page__repeat-button" onClick={startSameText}>
			Заново
		</button>
	);
}
