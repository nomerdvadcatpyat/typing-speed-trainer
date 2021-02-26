import React, {useEffect} from "react";
import {connect} from "react-redux";
import {RoomPages} from "./RoomPages";
import {getRoomError, getRoomId, getTypingState, isUserKicked} from "../../../store/selectors/gameSelectors";
import {joinToRoom, leaveRoom, setIdleState, setRoomId} from "../../../store/actionCreators/gameActionCreators";
import {bindActionCreators} from "redux";
import {getUser} from "../../../store/selectors/userSelectors";
import {setRooms} from "../../../store/actionCreators/appActionCreators";
import {useHistory} from "react-router-dom";
import queryString from "querystring";


const RoomPagesContainer = props => {
    const history = useHistory()

    useEffect(() => {
        const query = queryString.parse(props.location.search.substr(1));
        if(query.game_id) {
            console.log(query.game_id);
            props.joinToRoom({roomId: query.game_id, userId: props.user.id});
        }

        return () => {
            props.setIdleState();
        }
    }, []);


    useEffect(() => {
        if(props.roomId) {
            history.push(`/room?game_id=${props.roomId}`);
            return () => {
                props.leaveRoom({ userId: props.user.id, roomId: props.roomId });
                props.setIdleState();
            }
        }
    }, [props.roomId]);

    return (
        <RoomPages {...props} />
    );
}

const mapStateToProps = state => {
    return {
        typingState: getTypingState(state),
        roomId: getRoomId(state),
        user: getUser(state),
        roomError: getRoomError(state),
        isUserKicked: isUserKicked(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        leaveRoom: bindActionCreators(leaveRoom, dispatch),
        setIdleState: bindActionCreators(setIdleState, dispatch),
        setRoomId: bindActionCreators(setRoomId, dispatch),
        joinToRoom: bindActionCreators(joinToRoom, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPagesContainer)