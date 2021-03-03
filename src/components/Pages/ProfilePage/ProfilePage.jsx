import './ProfilePage.scss';
import {PlaceInfo} from "./PlaceInfo/PlaceInfo";
import {Graphic} from "./Graphic/Graphic";
import {Ring} from "react-spinners-css";
import React from "react";
import {Select} from "../../UtilComponents/Select/Select";

export const ProfilePage = props => {
    return props.isLoading ? <Ring className="main-spinner" /> : (
      <div className="user-profile-page">
          <div className="user-profile-page__first-line">
              <img
                  className="profile-pic"
                  src={ props.userInfo.pic || `${process.env.REACT_APP_PICS_PATH}/default-profile-pic.svg`}
                  alt="profile pic"
              />

              <div className="user-profile-info">
                  <p> {props.userInfo.login} </p>
                  <p> Points: {props.userInfo.points} </p>
                  <p> Average typing speed: {props.userInfo.averageSpeed} ch/min </p>
              </div>

              <div className="user-profile-wins">
                  <PlaceInfo
                      picPath={`${process.env.REACT_APP_PICS_PATH}/golden-kubok.png`}
                      picAlt="golden kubok"
                      count={props.userInfo.firstPlacesCount}
                  />
                  <PlaceInfo
                      picPath={`${process.env.REACT_APP_PICS_PATH}/silver-medal.png`}
                      picAlt="silver-medal"
                      count={props.userInfo.secondPlacesCount}
                  />
                  <PlaceInfo
                      picPath={`${process.env.REACT_APP_PICS_PATH}/bronze-medal.png`}
                      picAlt="bronze-medal"
                      count={props.userInfo.thirdPlacesCount}
                  />
              </div>
          </div>

          <div className="user-profile-page__second-line">
              <Select className="user-profile-page__y-axis-selector"
                      options={props.selectOptions}
                      onChange={props.setYAxisName}
              />
              <div className="user-profile-page__graphic-wrapper">
                  <Graphic data={props.graphicData} XAxisName="date" YAxisName={props.YAxisName} />
              </div>
          </div>

      </div>
    );
}