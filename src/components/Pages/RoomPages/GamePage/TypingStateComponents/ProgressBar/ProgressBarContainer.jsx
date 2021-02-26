import {connect} from "react-redux";
import {getRoomMembers} from "../../../../../../store/selectors/gameSelectors";
import {ProgressBar} from "./ProgressBar";


const ProgressBarContainer = props => {
    return <ProgressBar {...props} />
}

const mapStateToProps = state => {
    return {
        roomMembers: getRoomMembers(state)
    }
}

export default connect(mapStateToProps)(ProgressBarContainer)