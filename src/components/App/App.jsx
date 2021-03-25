import React, {useState} from 'react';
import './App.scss'
import {Link, Route, Switch} from 'react-router-dom';
import {AuthPage} from "../Pages/AuthPage/AuthPage";
import HeaderContainer from "../Header/HeaderContainer";
import SearchRoomPageContainer from "../Pages/RoomPages/SearchRoomPage/SearchRoomPageContainer";
import CreateRoomPageContainer from "../Pages/RoomPages/CreateRoomPage/CreateRoomPageContainer";
import RoomPagesContainer from "../Pages/RoomPages/RoomPagesContainer";
import {RatingPageContainer} from "../Pages/RatingPage/RatingPageContainer";
import ProfilePageContainer from "../Pages/ProfilePage/ProfilePageContainer";
import {RingLoader} from "../UtilComponents/RingLoader/RingLoader";
import RootPageContainer from "../Pages/RootPage/RootPageContainer";
import {StyledButton} from "../UtilComponents/StyledButton/StyledButton";



export function App({isLoading, isAuth}) {
	const [menuCollapsed, setMenuCollapsed] = useState(null);
	return (
		<div className="App"
		     onClick={() => {if(menuCollapsed !== null && !menuCollapsed) setMenuCollapsed(true)}}
		>
			{isLoading ?
				<RingLoader className="main-spinner"/> :
				<>
					<HeaderContainer collapsed={menuCollapsed} setCollapsed={setMenuCollapsed} />
					<Switch>
						<Route path="/auth" component={AuthPage}/>
						<Switch>
							<Route path={"/"} exact component={RootPageContainer}/>
							<Route path="/rating" component={RatingPageContainer}/>
							<Route path="/user" component={ProfilePageContainer}/>
							{
								isAuth ? (
									<>
										<Route path="/room" component={RoomPagesContainer}/>
										<Route path="/searchRoom" component={SearchRoomPageContainer}/>
										<Route path="/createRoom" component={CreateRoomPageContainer}/>
									</>
								) : (
									<Link to="/auth/login">
										<StyledButton variant="dark" className="auth-button App__auth-button">
											Войти
										</StyledButton>
									</Link>
								)
							}
						</Switch>
					</Switch>
				</>
			}
		</div>
	);
}

