import './ProgressBar.scss';
import {ProgressBar} from "react-bootstrap";

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
		let classes = "game-progress-bar__user-progress-container user-progress-container";
		if(member.userName === login) classes += " user-progress-container_self";
		if(member.isLeave) classes += " user-progress-container_leave";

		return classes;
  }

	const generateJSXProgress = () => {
		return roomMembers.map(member => {
			const progress = member.inputText && getProgress(member.inputText);
			const self = member.userName === login;
			return (
				<div className={getContainerClassNames(member)}>
					<p className="user-progress-container__username"> {member.userName} </p>
					<ProgressBar
						variant={self || member.isLeave ? '' : 'dark'}
						now={progress}
						className="user-progress-container__progress-bar"
					/>
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