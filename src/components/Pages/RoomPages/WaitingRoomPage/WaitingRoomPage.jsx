import {SearchOrWaitingRoomLayout} from "../SearchOrWaitingRoomLayout";
import {RoomMemberCard} from "./RoomMemberCard/RoomMemberCard";
import './WaitingRoomPage.scss'

export const WaitingRoomPage = props => {

    const getJSXRoomInfo = () => {
        return (
          <>
              <p>Room Info</p>
              <p>{props.roomInfo.textTitle}</p>
              <p>{props.roomInfo.length}</p>
              <p>{props.roomInfo.maxMembersCount}</p>
          </>
        );
    }

    const getJSXUsersInfo = () => {
        console.log(props.members);
        return props.members.map((member, index) => {
            return (
              <RoomMemberCard
                key={index}
                userName={member.userName}
                points={member.points}
                isRoomOwner={member.isRoomOwner}
                gamesCount={member.gamesCount}
                averageSpeed={member.averageSpeed}
              />
            )
        });
    }

    return (
      <SearchOrWaitingRoomLayout
        mainContent={(
          <div className="waiting-room-page">
            {getJSXUsersInfo()}
          </div>
        )}
        asideContent={(
          <>
            { getJSXRoomInfo() }
            {
              props.isRoomOwner && (
                <button onClick={props.startGameButtonClickHandler}>
                  Начать
                </button>
              )
            }
          </>
        )}
      />
    );
}