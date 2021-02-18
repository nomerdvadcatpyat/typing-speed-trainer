import {StartSameTextButton} from "./StartSameTextButton";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
	setPrepareState,
	setTypingState,
} from "../../../../../store/actionCreators/trainingSpeedActionCreators";
import {getKeyboardLayout, getText} from "../../../../../store/selectors/trainingSpeedSelectors";
import {prepareToTyping} from "../../../../../utils/api/trainingSpeedApi";


const StartSameTextButtonContainer = props => {

	const startSameTextButtonClickHandler = () => {
		props.setPrepareState({ text: props.text, keyboardLayout: props.keyboardLayout });
		prepareToTyping()
			.then(props.setTypingState)
			.catch(console.log);
	}

	return <StartSameTextButton {...props} startSameText={startSameTextButtonClickHandler}/>
}


const mapDispatchToProps = dispatch => {
	return {
		setTypingState: bindActionCreators(setTypingState, dispatch),
		setPrepareState: bindActionCreators(setPrepareState, dispatch)
	}
}

const mapStateToProps = state => {
	return {
		keyboardLayout: getKeyboardLayout(state),
		text: getText(state)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StartSameTextButtonContainer);