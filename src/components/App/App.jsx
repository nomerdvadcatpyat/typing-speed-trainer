import React from 'react';
import './App.scss'
import { Route, Switch } from 'react-router-dom';
import TrainingPageContainer from "../Pages/TrainingPage/TrainingPageContainer";
import {AuthPage} from "../Pages/AuthPage/AuthPage";
import HeaderContainer from "../Header/HeaderContainer";
import {Ring} from "react-spinners-css";

export function App({ isLoading, isAuth}) {

  return (
      <div className="App">
        { isLoading ?
        <Ring className="main-spinner" /> :
        <>
        <HeaderContainer />
        { !isAuth ?
            <Switch>
              <Route path="/training" component={TrainingPageContainer} />
              <Route path="/auth" component={AuthPage} />
            </Switch>
            : null }
        </> }
      </div>
  );
}

