import {EndStatePage} from "./EndStatePage";
import {connect} from "react-redux";
import {getEndTime} from "../../../../../store/selectors/gameSelectors";


const EndStatePageContainer = props => {
    return <EndStatePage endTime={props.endTime} />
}

const mapStateToProps = state => {
    return {
        endTime: getEndTime(state)
    }
}

export default connect(mapStateToProps)(EndStatePageContainer);