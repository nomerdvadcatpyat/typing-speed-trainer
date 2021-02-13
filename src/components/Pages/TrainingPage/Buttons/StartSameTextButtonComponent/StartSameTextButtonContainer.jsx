import {StartSameTextButton} from "./StartSameTextButton";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
	setPrepareState,
	setSameText, setTypingState,
} from "../../../../../store/actionCreators/trainingSpeedActionCreators";
import {getKeyboardLayout} from "../../../../../store/selectors/trainingSpeedSelectors";
import {prepareToTyping} from "../../../../../utils/api/trainingSpeedApi";


const StartSameTextButtonContainer = props => {

	const startSameTextButtonClickHandler = () => {
		props.setSameText();
		props.setPrepareState();
		prepareToTyping()
			.then(props.setTypingState)
			.catch(console.log);
	}

	return <StartSameTextButton {...props} startSameText={startSameTextButtonClickHandler}/>
}


const mapDispatchToProps = dispatch => {
	return {
		setSameText: bindActionCreators(setSameText, dispatch),
		setTypingState: bindActionCreators(setTypingState, dispatch),
		setPrepareState: bindActionCreators(setPrepareState, dispatch)
	}
}

const mapStateToProps = state => {
	return {
		keyboardLayout: getKeyboardLayout(state)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StartSameTextButtonContainer);