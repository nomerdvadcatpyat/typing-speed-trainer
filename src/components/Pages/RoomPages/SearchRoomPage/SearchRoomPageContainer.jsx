import React, {useEffect, useState} from "react";
import {SearchRoomPage} from "./SearchRoomPage";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getRooms} from "../../../../store/selectors/appSelectors";
import {fetchRooms} from "../../../../store/actionCreators/appActionCreators";
import {getIsAuth} from "../../../../store/selectors/userSelectors";
import {getRoomError} from "../../../../store/selectors/gameSelectors";
import {setRoomError} from "../../../../store/actionCreators/gameActionCreators";



const SearchRoomPageContainer = props => {

    useEffect(() => {
        if(props.isAuth)
            props.fetchRooms();
    }, []);

    useEffect(() => {
        return () => {
            if(props.roomError) {
                console.log(props.roomError)
                props.setRoomError(null);
            }
        }
    }, [props.roomError]);

    return <SearchRoomPage {...props} rooms={props.rooms} />
}

const mapStateToProps = state => {
    return {
        rooms: getRooms(state),
        isAuth: getIsAuth(state),
        roomError: getRoomError(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRooms: bindActionCreators(fetchRooms, dispatch),
        setRoomError: bindActionCreators(setRoomError, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRoomPageContainer)
