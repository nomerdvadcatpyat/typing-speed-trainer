import React, {useEffect} from "react";
import {connect} from "react-redux";
import {RoomPages} from "./RoomPages";
import {getRoomError, getRoomId, getTypingState} from "../../../store/selectors/gameSelectors";
import {joinToRoom, leaveRoom, setIdleState} from "../../../store/actionCreators/gameActionCreators";
import {bindActionCreators} from "redux";
import {getUser} from "../../../store/selectors/userSelectors";
import {useHistory} from "react-router-dom";
import queryString from "querystring";


const RoomPagesContainer = props => {
    const history = useHistory()

    useEffect(() => {
        const query = queryString.parse(props.location.search.substr(1));
        if(query.game_id) {
            props.joinToRoom({roomId: query.game_id, userId: props.user.id});
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
        roomError: getRoomError(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        leaveRoom: bindActionCreators(leaveRoom, dispatch),
        setIdleState: bindActionCreators(setIdleState, dispatch),
        joinToRoom: bindActionCreators(joinToRoom, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPagesContainer)