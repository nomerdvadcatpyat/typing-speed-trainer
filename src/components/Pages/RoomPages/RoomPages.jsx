import {Redirect, Route, Switch} from "react-router-dom";
import GamePageContainer from "./GamePage/GamePageContainer";
import WaitingRoomPageContainer from "./WaitingRoomPage/WaitingRoomPageContainer";
import {Ring} from "react-spinners-css";
import React from "react";



export const RoomPages = props => {
    return (
        <>
            {
                // props.isUserKicked ? <Redirect to="/searchRoom" /> :
                props.roomError ? <Redirect to="/searchRoom" error={props.roomError} /> :
                !props.roomId ? <Ring className="main-spinner" /> :
                props.typingState.IDLE ?
                    <WaitingRoomPageContainer /> :
                    <GamePageContainer />
            }
        </>
    );

}