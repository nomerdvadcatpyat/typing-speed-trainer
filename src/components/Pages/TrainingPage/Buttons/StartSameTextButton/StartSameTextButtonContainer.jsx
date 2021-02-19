import {StartSameTextButton} from "./StartSameTextButton";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
	setPrepareState,
	setTypingState,
} from "../../../../../store/actionCreators/trainingSpeedActionCreators";
import {getKeyboardLayout, getText} from "../../../../../store/selectors/trainingSpeedSelectors";
import {prepareToTyping} from "../../../../../utils/api/trainingSpeedApi";
import {initSocket} from "../../../../../store/actionCreators/socketActionCreators";


const StartSameTextButtonContainer = props => {

	const startSameTextButtonClickHandler = (e) => {
		e.preventDefault();
		props.setPrepareState({ text: props.text, keyboardLayout: props.keyboardLayout });
		props.initSocket();
	}

	return <StartSameTextButton {...props} startSameText={startSameTextButtonClickHandler}/>
}


const mapDispatchToProps = dispatch => {
	return {
		setTypingState: bindActionCreators(setTypingState, dispatch),
		setPrepareState: bindActionCreators(setPrepareState, dispatch),
		initSocket: bindActionCreators(initSocket, dispatch)
	}
}

const mapStateToProps = state => {
	return {
		keyboardLayout: getKeyboardLayout(state),
		text: getText(state)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StartSameTextButtonContainer);