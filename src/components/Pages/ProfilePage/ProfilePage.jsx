import './ProfilePage.scss';
import {PlaceInfo} from "./PlaceInfo/PlaceInfo";
import {Graphic} from "./Graphic/Graphic";

export const ProfilePage = props => {
    return (
      <div className="user-profile-page">
          <div className="user-profile-page__first-line">
              <img
                  className="profile-pic"
                  src={ props.userInfo.pic || `${process.env.REACT_APP_PICS_PATH}/default-profile-pic.svg`}
                  alt="profile pic"
              />

              <div className="user-profile-info">
                  <p> {props.userInfo.username} </p>
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

          <div className="user-profile-page__graphic-wrapper">
              <Graphic data={props.graphicData} XAxisName="date" YAxisName="averageSpeed" />
          </div>
      </div>
    );
}