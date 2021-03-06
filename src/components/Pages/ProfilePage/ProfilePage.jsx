import './ProfilePage.scss';
import {PlaceInfo} from "./PlaceInfo/PlaceInfo";
import {Graphic} from "./Graphic/Graphic";
import {Ring} from "react-spinners-css";
import React from "react";
import {Select} from "../../UtilComponents/Select/Select";

export const ProfilePage = props => {
    return props.isLoading ? <Ring className="main-spinner" /> : (
      <div className="user-profile">
          <div className="user-profile__first-line">
              <div className="user-profile__user-info">
                  <p> {props.userInfo.login} </p>
                  <p> Points: {props.userInfo.points} </p>
                  <p> Average typing speed: {props.userInfo.averageSpeed} ch/min </p>
              </div>

              <div className="user-profile__user-wins">
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

          <div className="user-profile__second-line">
              <Select className="user-profile__y-axis-selector"
                      options={props.selectOptions}
                      onChange={props.setYAxisName}
                      custom
              />
              <div className="user-profile__graphic-wrapper">
                  <Graphic data={props.graphicData} XAxisName="date" YAxisName={props.YAxisName} />
              </div>
          </div>

      </div>
    );
}