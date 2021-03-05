import {EndStatePage} from "./EndStatePage";
import {connect} from "react-redux";
import {
    getAverageSpeed,
    getEndTime,
    getPlace,
    getPoints,
    getRoomMembers
} from "../../../../../store/selectors/gameSelectors";


const EndStatePageContainer = props => {
    return <EndStatePage {...props}/>
}

const mapStateToProps = state => {
    return {
        endTime: getEndTime(state),
        points: getPoints(state),
        place: getPlace(state),
        averageSpeed: getAverageSpeed(state),
        members: getRoomMembers(state)
    }
}

export default connect(mapStateToProps)(EndStatePageContainer);