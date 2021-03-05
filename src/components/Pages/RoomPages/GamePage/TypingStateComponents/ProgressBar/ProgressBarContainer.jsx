import {connect} from "react-redux";
import {getRoomMembers, getText} from "../../../../../../store/selectors/gameSelectors";
import {GameProgressBar} from "./ProgressBar";
import {getUser} from "../../../../../../store/selectors/userSelectors";


const ProgressBarContainer = props => {
    return <GameProgressBar {...props} />
}

const mapStateToProps = state => {
    return {
        roomMembers: getRoomMembers(state),
        text: getText(state),
        login: getUser(state).login
    }
}

export default connect(mapStateToProps)(ProgressBarContainer)