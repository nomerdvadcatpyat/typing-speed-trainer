import './UserCard.scss'
import {LinkToUser} from "../Links/LinkToUser/LinkToUser";

export const UserCard = ({className, username, children}) => {
	return (
		<div className={`user-card ${className}`}>
			<div className="user-card__header">
				<LinkToUser username={username} className="user-rating-card__link-to-user">
					{username}
				</LinkToUser>
			</div>
			<div className="user-card__body">
				{children}
			</div>
		</div>
	)
}