import './RatingPage.scss';
import {Ring} from "react-spinners-css";
import {Select} from "../../UtilComponents/Select/Select";
import {UserRatingCard} from "./UserRatingCard/UserRatingCard";

export const RatingPage = props => {

	const getJSXRating = rating => {
		console.log(rating);
		return rating.map((user, index) => {

			const {username, ...userInfo} = user;

			return (
					<UserRatingCard
						className="rating-page__user-rating-card"
						userInfo={userInfo}
						username={username}
						place={index + 1}
						selectedValue={props.value}
					/>
				);
		});
	}

	return props.isLoading ? <Ring className="main-spinner"/> : (
		<div className="rating-page">
			<div className="rating-page__content-wrapper">
				<Select
					className="rating-page__select"
					onChange={props.setSelectValue}
					options={props.options}
					value={props.value}
					custom
				/>
				{props.usersRating && getJSXRating(props.usersRating)}
			</div>
		</div>
	);
}