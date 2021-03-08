import {RootPage} from "./RootPage";
import {connect} from "react-redux";


const RootPageContainer = props => {
	return <RootPage {...props} />
}

export default connect()(RootPageContainer);