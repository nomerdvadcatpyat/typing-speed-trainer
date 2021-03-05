import {Card} from "react-bootstrap";
import './UserRatingCard.scss'
import {LinkToUser} from "../../../UtilComponents/LinkToUser/LinkToUser";

export const UserRatingCard = props => {

	return (
		<div className={`user-rating-card ${props.className}`}>
			<p className="user-rating-card__place"> {props.place} </p>
			<Card className="user-rating-card__user-info">
				<LinkToUser username={props.username}>
					<Card.Header>{props.username}</Card.Header>
				</LinkToUser>
				<Card.Body className="user-rating-card__body">
					<Card.Text>
						<p> Points: {props.userInfo.points} </p>
						<p> Average Speed: {props.userInfo.averageSpeed} ch/min </p>
						<p> Games Count: {props.userInfo.gamesCount} </p>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}