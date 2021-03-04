import React, {useEffect, useState} from "react";
import {SearchRoomPage} from "./SearchRoomPage";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getRooms} from "../../../../store/selectors/appSelectors";
import {fetchRooms} from "../../../../store/actionCreators/appActionCreators";
import {getIsAuth} from "../../../../store/selectors/userSelectors";
import {getTypingState, isUserKicked} from "../../../../store/selectors/gameSelectors";
import {setUserKicked} from "../../../../store/actionCreators/gameActionCreators";



const SearchRoomPageContainer = props => {

    useEffect(() => {
        if(props.isAuth)
            props.fetchRooms();
    }, []);

    const closeKickedMessage = () => {
        props.setUserKicked(false);
    }


    return <SearchRoomPage {...props} rooms={props.rooms} closeKickedMessage={closeKickedMessage} />
}

const mapStateToProps = state => {
    return {
        rooms: getRooms(state),
        isAuth: getIsAuth(state),
        isUserKicked: isUserKicked(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRooms: bindActionCreators(fetchRooms, dispatch),
        setUserKicked: bindActionCreators(setUserKicked, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRoomPageContainer)
