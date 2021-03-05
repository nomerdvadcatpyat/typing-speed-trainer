import './ProgressBar.scss';
import {ProgressBar} from "react-bootstrap";

export const GameProgressBar = ({roomMembers, className, text, login}) => {

	console.log(roomMembers)

  const getProgress = inputText => {
	  let rightInputTextLength = 0;
	  for(let i = 0; i < inputText.length; i ++) {
	    if(inputText[i] !== text[i]) break;
	    rightInputTextLength++;
    }
    return (rightInputTextLength / text.length) * 100;
  }

	const generateJSXProgress = () => {
		return roomMembers.map(member => {
			const progress = member.inputText && getProgress(member.inputText);
			const self = member.userName === login;
			return (
				<div className={
					`game-progress-bar__user-progress-container user-progress-container ${member.userName === login && 'user-progress-container_self'}`
				}>
					<p className="user-progress-container__username"> {member.userName} </p>
					<ProgressBar
						variant={self ? '' : 'dark'}
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