import React from 'react';
import './App.scss'
import {Route, Switch} from 'react-router-dom';
import {AuthPage} from "../Pages/AuthPage/AuthPage";
import HeaderContainer from "../Header/HeaderContainer";
import {Ring} from "react-spinners-css";
import SearchRoomPageContainer from "../Pages/RoomPages/SearchRoomPage/SearchRoomPageContainer";
import CreateRoomPageContainer from "../Pages/RoomPages/CreateRoomPage/CreateRoomPageContainer";
import RoomPagesContainer from "../Pages/RoomPages/RoomPagesContainer";
import {RatingPageContainer} from "../Pages/RatingPage/RatingPageContainer";
import ProfilePageContainer from "../Pages/ProfilePage/ProfilePageContainer";

export function App({isLoading, isAuth}) {
	return (
		<div className="App">
			{isLoading ?
				<Ring className="main-spinner"/> :
				<>
					<HeaderContainer/>
					<Switch>
						<Route path="/auth" component={AuthPage}/>
						<Switch>
							<Route path="/rating" component={RatingPageContainer}/>
							<Route path="/user" component={ProfilePageContainer}/>
							{
								isAuth && (
								  <>
                    <Route path="/room" component={RoomPagesContainer}/>
                    <Route path="/searchRoom" component={SearchRoomPageContainer}/>
                    <Route path="/createRoom" component={CreateRoomPageContainer}/>
                  </>
                )
							}
						</Switch>
					</Switch>
				</>
			}
		</div>
	);
}

