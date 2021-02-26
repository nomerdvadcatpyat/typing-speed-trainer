import './SearchRoomPage.scss'
import {Link} from "react-router-dom";
import {Ring} from "react-spinners-css";
import React from "react";

export const SearchRoomPage = props => {

    const createJSXrooms = () => {
        return props.rooms.map((room, index) => {
            return (
                <div key={index} className="rooms__room">
                    <div className="room__element"> {room.textTitle} </div>
                    <div className="room__element"> {room.members.length} </div>
                    {/*<div className="room__element"> {room.owner.userName} </div>*/}
                    <div className="room__element">
                        <Link to={`/room?game_id=${room.id}`}>
                            Enter
                        </Link>
                    </div>
                </div>
            );
        });
    }

    console.log(props)

    return (
        <>
            {
                props.isUserKicked ? (
                    <div onClick={props.closeKickedMessage}> Вы были исключены </div>
                ) : null
            }
            {
                !props.isAuth ? (
                        <div>
                            Войди
                        </div>
                    ) :
                props.rooms ? (
                    <div className="search-room">
                        <main className="search-room__rooms">
                            {createJSXrooms()}
                        </main>
                        <aside className="search-room__create-own-room">
                            <Link to="createRoom">
                                <button className="btn waves-effect"> Создать комнату</button>
                            </Link>
                        </aside>
                    </div>
                ) : <Ring className="main-spinner"/>
            }
        </>
    );
}