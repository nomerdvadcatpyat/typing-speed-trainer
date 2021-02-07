import React from 'react';
import {connect} from 'react-redux'
import {TrainingPage} from "./TrainingPage";
import {bindActionCreators} from "redux";
import {clearTraining, startNewText} from "../../../store/actionCreators/trainingPageActionCreators";
import {store} from "../../../store/store";
import {getEndState} from "../../../store/selectors/trainingPage";


const TextComponentContainer = (props) => {
	return (
		<TrainingPage {...props}/>
	);
}

const mapStateToProps = (state) => {
	return {
		endState: getEndState(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	const sameText = store.getState().trainingPage.text;
	const sameLang = store.getState().trainingPage.textLang;
	const startSameText = () => startNewText(sameText, sameLang);
	return {
		startSameText: bindActionCreators(startSameText, dispatch),
		clearTraining: bindActionCreators(clearTraining, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TextComponentContainer)