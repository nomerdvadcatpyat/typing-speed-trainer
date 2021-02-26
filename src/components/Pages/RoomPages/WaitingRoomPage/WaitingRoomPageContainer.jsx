import {useEffect} from 'react';
import {WaitingRoomPage} from "./WaitingRoomPage";
import {useHistory, withRouter} from "react-router-dom";
import {bindActionCreators, compose} from "redux";
import {joinToRoom, startGame} from "../../../../store/actionCreators/gameActionCreators";
import {connect} from "react-redux";
import {getUser} from "../../../../store/selectors/userSelectors";
import {getRoomId, getRoomMembers, isRoomOwner} from "../../../../store/selectors/gameSelectors";


const WaitingRoomPageContainer = props => {

    const startGameButtonClickHandler = () => {
        props.startGame({userId: props.user.id, roomId: props.roomId});
    }

    const roomInfo = {
        textTitle: 'Lorem Ipsum',
        length: '250',
        userCount: '3/4'
    }

    return (
        <WaitingRoomPage {...props}
                         startGameButtonClickHandler={startGameButtonClickHandler}
                         roomInfo={roomInfo}
        />);
}

const mapDispatchToProps = dispatch => {
    return {
        startGame: bindActionCreators(startGame, dispatch),
        joinToRoom: bindActionCreators(joinToRoom, dispatch)
    }
}

const mapStateToProps = state => {
    return {
        user: getUser(state),
        roomId: getRoomId(state),
        members: getRoomMembers(state),
        isRoomOwner: isRoomOwner(state)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(WaitingRoomPageContainer)


