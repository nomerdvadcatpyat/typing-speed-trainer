import './UserRatingCard.scss'
import {LinkToUser} from "../../../UtilComponents/Links/LinkToUser/LinkToUser";
import {UserCard} from "../../../UtilComponents/UserCard/UserCard";

export const UserRatingCard = props => {

	return (
		<div className={`user-rating-card-wrapper ${props.className}`}>
			<p className="user-rating-card-wrapper__place"> {props.place} </p>
			<UserCard username={props.username} className="user-rating-card">
				<>
					<p> Points: {props.userInfo.points} </p>
					<p> Average Speed: {props.userInfo.averageSpeed} ch/min </p>
					<p> Games Count: {props.userInfo.gamesCount} </p>
				</>
			</UserCard>
		</div>
	)
}