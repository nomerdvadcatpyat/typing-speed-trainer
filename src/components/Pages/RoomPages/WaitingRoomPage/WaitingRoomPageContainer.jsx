import {WaitingRoomPage} from "./WaitingRoomPage";
import {withRouter} from "react-router-dom";
import {bindActionCreators, compose} from "redux";
import {joinToRoom, startGame} from "../../../../store/actionCreators/gameActionCreators";
import {connect} from "react-redux";
import {getUser} from "../../../../store/selectors/userSelectors";
import {
    getLanguage,
    getMaxMembersCount,
    getRoomId,
    getRoomMembers, getTextLength,
    getTextTitle,
    isRoomOwner
} from "../../../../store/selectors/gameSelectors";



const WaitingRoomPageContainer = props => {
    const startGameButtonClickHandler = () => {
        props.startGame({userId: props.user.id, roomId: props.roomId});
    }

    return (
        <WaitingRoomPage {...props}
                         startGameButtonClickHandler={startGameButtonClickHandler}
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
        textTitle: getTextTitle(state),
        maxMembersCount: getMaxMembersCount(state),
        textLength: getTextLength(state),
        language: getLanguage(state),
        isRoomOwner: isRoomOwner(state)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(WaitingRoomPageContainer)


