import {Redirect, Route, Switch} from "react-router-dom";
import GamePageContainer from "./GamePage/GamePageContainer";
import WaitingRoomPageContainer from "./WaitingRoomPage/WaitingRoomPageContainer";
import React from "react";
import {RingLoader} from "../../UtilComponents/RingLoader/RingLoader";



export const RoomPages = props => {
    return (
        <>
            {
                // props.isUserKicked ? <Redirect to="/searchRoom" /> :
                props.roomError ? <Redirect to="/searchRoom" error={props.roomError} /> :
                !props.roomId ? <RingLoader className="main-spinner" /> :
                props.typingState.IDLE ?
                    <WaitingRoomPageContainer /> :
                    <GamePageContainer />
            }
        </>
    );

}