import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";


const ProfilePageContainer = props => {

    const userInfo = {
        username: 'admin',
        points: '230',
        averageSpeed: '126',
        pic: `${process.env.REACT_APP_PICS_PATH}/default-profile-pic.svg`,
        firstPlacesCount: 23,
        secondPlacesCount: 32,
        thirdPlacesCount: 67
    }


    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    const graphicData = [
        {date: new Date(2021, 0, 1, 0, 0, 0, 0).toLocaleDateString("ru", options),
            averageSpeed: '120'},
        {date: new Date(2021, 0, 2, 0, 0, 0, 0).toLocaleDateString("ru", options),
            averageSpeed: '125'},
        {date: new Date(2021, 0, 2, 12, 0, 32, 0).toLocaleDateString("ru", options),
            averageSpeed: '130'},
        {date: new Date(2021, 0, 3, 0, 0, 12, 0).toLocaleDateString("ru", options),
            averageSpeed: '120'},
        {date: new Date(2021, 0, 3, 3, 0, 23, 0).toLocaleDateString("ru", options),
            averageSpeed: '250'},
        {date: new Date(2021, 0, 4, 3, 0, 23, 0).toLocaleDateString("ru", options),
            averageSpeed: '2600'},
        {date: new Date(2021, 0, 5, 21, 0, 23, 0).toLocaleDateString("ru", options),
            averageSpeed: '210'},
        {date: new Date(2021, 0, 6, 0, 0, 23, 0).toLocaleDateString("ru", options),
            averageSpeed: '220'},
    ]



    return <ProfilePage {...props} userInfo={userInfo} graphicData={graphicData} />
}

export default connect()(ProfilePageContainer);