import './StyledButton.scss';

export const StyledButton = ({children, className, disabled, preventDefault, onClick, otherProps}) => {

	const clickHandler = e => {
		if(disabled || preventDefault) {
			e.preventDefault();
			if(disabled) return;
		}

		onClick && onClick(e);
	}

	return (
		<div className={className}>
			<button className={`styled-button ${disabled ? 'styled-button_disabled' : 'styled-button_active'}`} onClick={clickHandler} {...otherProps}>
				{children}
			</button>
		</div>
	);
}