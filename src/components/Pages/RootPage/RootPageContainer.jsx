import {RootPage} from "./RootPage";
import {connect} from "react-redux";
import {getIsAuth} from "../../../store/selectors/userSelectors";

const RootPageContainer = props => {
	return <RootPage {...props} />
}

const matStateToProps = state => {
	return {
		isAuth: getIsAuth(state)
	}
}

export default connect(matStateToProps)(RootPageContainer);