import {Redirect, Route, Switch} from "react-router-dom";
import GamePageContainer from "./GamePage/GamePageContainer";
import WaitingRoomPageContainer from "./WaitingRoomPage/WaitingRoomPageContainer";
import {Ring} from "react-spinners-css";
import React from "react";



export const RoomPages = props => {
    return (
        <>
            {
                props.isUserKicked ? <Redirect to="/searchRoom" /> :
                props.roomError ? <div> {props.roomError} </div> :
                !props.roomId ? <Ring className="main-spinner" /> :
                props.typingState.IDLE ?
                    <WaitingRoomPageContainer /> :
                    <GamePageContainer />
            }
        </>
    );

}