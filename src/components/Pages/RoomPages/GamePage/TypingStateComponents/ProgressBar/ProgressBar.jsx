import './ProgressBar.scss';

export const ProgressBar = props => {


    const generateJSXProgress = roomMembers => {
        console.log(roomMembers);

        return roomMembers.map(member => {
           return (
             <div className="member-progress">
                 <p>{member.userName}</p>
                 <p>{member.inputText}</p>
             </div>
           );
        });
    }

    return (
      <div className="progress-bar">
          {generateJSXProgress(props.roomMembers)}
      </div>
    );
}