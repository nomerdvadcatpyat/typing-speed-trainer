import {StartNewTextButton} from "./StartNewTextButton";
import {prepareToTyping} from "../../../../../utils/api/trainingSpeedApi";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setPrepareState, setTypingState} from "../../../../../store/actionCreators/trainingSpeedActionCreators";


const StartNewTextButtonContainer = props => {

	const startNewTextButtonClickHandler = () => {
		props.setPrepareState();
		prepareToTyping()
			.then(props.setTypingState)
			.catch(console.log);
	}

	return <StartNewTextButton startNewTextButtonClickHandler={startNewTextButtonClickHandler} />
}



const mapDispatchToProps = dispatch => {
	return {
		setPrepareState: bindActionCreators(setPrepareState, dispatch),
		setTypingState: bindActionCreators(setTypingState, dispatch)
	}
}


export default connect(null, mapDispatchToProps)(StartNewTextButtonContainer);