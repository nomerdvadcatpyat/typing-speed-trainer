import './RatingPage.scss';
import {Ring} from "react-spinners-css";

export const RatingPage = props => {

    const getJSXRating = rating => {
        return rating.map((user, index) => {
           return (
             <div> {user.username} - {user.points} </div>
           );
        });
    }

    return props.isLoading ? <Ring className="main-spinner" /> : (
        <div>
            {getJSXRating(props.usersRating)}
        </div>
    )
}