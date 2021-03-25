import './ProgressBar.scss';

export const GameProgressBar = ({roomMembers, className, text, login}) => {

  const getProgress = inputText => {
	  let rightInputTextLength = 0;
	  for(let i = 0; i < inputText.length; i ++) {
	    if(inputText[i] !== text[i]) break;
	    rightInputTextLength++;
    }
    return (rightInputTextLength / text.length) * 100;
  }

  const getContainerClassNames = member => {
		let classes = "user-progress-container";
		if(member.userName === login) classes += " user-progress-container_self";
		if(member.isLeave) classes += " user-progress-container_leave";

		return classes;
  }

	const generateJSXProgress = () => {
		return roomMembers.map((member, index) => {
			const progress = member.inputText && getProgress(member.inputText);
			// const self = member.userName === login;
			return (
				<div className={getContainerClassNames(member)} key={index}>
					<p className="user-progress-container__username"> {member.userName} </p>
					<div className="progress-bar-wrapper">
						<div style={{left: `${progress - 100}%`}} className="progress-bar">
						</div>
					</div>
				</div>
			);
		});
	}

	return (
		<div className={`game-progress-bar ${className && className}`}>
			{generateJSXProgress()}
		</div>
	);
}