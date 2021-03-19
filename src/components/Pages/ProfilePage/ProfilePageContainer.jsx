import {ProfilePage} from "./ProfilePage";
import {useState, useEffect} from 'react';
import {getProfileData} from "../../../utils/api/profileApi";
import {withRouter} from "react-router-dom";
import queryString from "querystring";

const ProfilePageContainer = props => {
    const [isLoading, setLoading] = useState(true);
    const [profileData, setProfileData] = useState(null);
    const [YAxisName, setYAxisName] = useState("averageSpeed");

    useEffect(() => {
        const query = queryString.parse(props.location.search.substr(1));
        getProfileData(query.user)
            .then(data => {
                setProfileData(data);
            })
            .catch(console.log)
            .finally(() => setLoading(false));
    }, []);

    const selectHandler = e => {
        setYAxisName(e.target.value);
    }

    return <ProfilePage {...props}
                        userInfo={profileData && profileData.userInfo}
                        graphicData={profileData && profileData.graphicData}
                        isLoading={isLoading}
                        YAxisName={YAxisName}
                        setYAxisName={selectHandler}
    />
}

export default withRouter(ProfilePageContainer);