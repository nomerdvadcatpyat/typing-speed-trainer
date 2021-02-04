import React from 'react';
import {connect} from 'react-redux'
import {TrainingPage} from "./TrainingPage";
import {bindActionCreators} from "redux";
import {clearTraining, startNewText} from "../../../store/actionCreators/trainingPageActionCreators";
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
	const sameLang = store.getState().trainingPage.textLang;
	return {
		startSameText: bindActionCreators(() => startNewText(sameText, sameLang), dispatch),
		clearTraining: bindActionCreators(clearTraining, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TextComponentContainer)