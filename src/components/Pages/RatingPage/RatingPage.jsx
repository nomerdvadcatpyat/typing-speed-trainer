import './RatingPage.scss';
import {Select} from "../../UtilComponents/Select/Select";
import {UserRatingCard} from "./UserRatingCard/UserRatingCard";
import {RingLoader} from "../../UtilComponents/RingLoader/RingLoader";

export const RatingPage = props => {

	const getJSXRating = rating => {
		return rating.map((user, index) => {
			const {username, ...userInfo} = user;
			return (
					<UserRatingCard
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
				<Select
					className="rating-content__select"
					onChange={props.setSelectValue}
					options={props.options}
					value={props.value}
					custom
				/>
				{
					props.isDataLoading ? <RingLoader className="rating-content__spinner"/> :
						<div className="rating-content__users">
							{props.usersRating && getJSXRating(props.usersRating)}
						</div>
				}
			</div>
		</div>
	);
}