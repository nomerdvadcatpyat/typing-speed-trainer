import React from 'react';
import {connect} from 'react-redux'
import {TrainingPage} from "./TrainingPage";
import {bindActionCreators} from "redux";
import {startNewText} from "../../../store/actionCreators/trainingPageActions";
import {store} from "../../../store/store";


const TextComponentContainer = (props) => {
	return (
		<TrainingPage {...props}/>
	);
}

const mapStateToProps = (state) => {
	return {
		endState: state.trainingPage.endState
	}
}

const mapDispatchToProps = (dispatch) => {
	const sameText = store.getState().trainingPage.text;
	return {
		startSameText: bindActionCreators(() => startNewText(sameText), dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TextComponentContainer)