import './RatingPage.scss';
import {UserRatingCard} from "./UserRatingCard/UserRatingCard";
import {RingLoader} from "../../UtilComponents/RingLoader/RingLoader";

export const RatingPage = props => {

	const getJSXRating = rating => {
		return rating.map((user, index) => {
			const {username, ...userInfo} = user;
			return (
					<UserRatingCard
						key={index}
						className="rating-content__user-rating-card"
						userInfo={userInfo}
						username={username}
						place={index + 1}
						selectedValue={props.value}
					/>
				);
		});
	}

	return props.isLoading ? <RingLoader className="main-spinner"/> : (
		<div className="rating-page">
			<div className="rating-content">
					{props.usersRating && getJSXRating(props.usersRating)}
			</div>
		</div>
	);
}