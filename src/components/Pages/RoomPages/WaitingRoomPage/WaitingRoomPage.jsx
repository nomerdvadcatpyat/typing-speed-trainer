import './WaitingRoomPage.scss';

export const WaitingRoomPage = props => {

    const getJSXRoomInfo = () => {
        return (
          <>
              <p>Room Info</p>
              <p>{props.roomInfo.textTitle}</p>
              <p>{props.roomInfo.length}</p>
              <p>{props.roomInfo.usersCount}</p>
          </>
        );
    }

    const getJSXUsersInfo = () => {
        console.log(props.members);
        return props.members.map((member, index) => {
            return <div key={index} className="waiting-room__user"> {member.userName} </div>
        });
    }

    return (
      <div className="waiting-room">
          <main className="waiting-room__users">
              <p className="users-title">Users Info</p>
              {getJSXUsersInfo()}
          </main>
          <aside className="waiting-room__info">
              {getJSXRoomInfo()}
              {
                  props.isRoomOwner ? (
                      <button onClick={props.startGameButtonClickHandler}>
                          Начать
                      </button>
                  ) : null
              }
          </aside>
      </div>
    );
}