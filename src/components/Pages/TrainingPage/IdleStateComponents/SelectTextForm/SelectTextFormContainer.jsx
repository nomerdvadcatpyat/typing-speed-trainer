import React, {useState, useEffect} from 'react';
import {SelectTextForm} from "./SelectTextForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setPrepareState, setTypingState} from "../../../../../store/actionCreators/trainingSpeedActionCreators";
import {getSelectedTextData, getSelectTextPageData} from "../../../../../utils/api/trainingSpeedApi";
import {getTypingState} from "../../../../../store/selectors/trainingSpeedSelectors";
import {initSocket} from "../../../../../store/actionCreators/socketActionCreators";


const SelectTextFormContainer = props => {

	const [values, setValues] = useState({ textTitles: null, lengths: null });
	const [selectedValues, setSelectedValues] = useState({ textTitle: null, length: null });
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getSelectTextPageData()
			.then(data => {
				setValues({ textTitles: data.textTitles, lengths: data.lengths });
			})
			.catch(console.log)
			.finally(() => setIsLoading(false));
	}, []);

	useEffect(() => {
		if(values.textTitles && values.lengths) {
			setSelectedValues({ textTitle: values.textTitles[0], length: values.lengths[0] });
		}
	}, [values]);


	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await getSelectedTextData(selectedValues);
		props.initSocket();
		props.setPrepareState(data);
	}


	return <SelectTextForm
		{...props}
		isLoading={isLoading}
		texts={values.textTitles}
		lengths={values.lengths}
		handleSubmit={handleSubmit}
		handleLengthChange={e => setSelectedValues(prev => ({...prev,  length: e.target.value }))}
		handleTextTitleChange={e => setSelectedValues(prev => ({...prev,  textTitle: e.target.value }))}
		length={selectedValues.length}
		textTitle={selectedValues.textTitle}
	/>
}

const mapDispatchToProps = dispatch => {
	return {
		initSocket: bindActionCreators(initSocket, dispatch),
		setPrepareState: bindActionCreators(setPrepareState, dispatch),
		setTypingState: bindActionCreators(setTypingState, dispatch)
	}
}

const mapStateToProps = state => {
	return {
		typingState: getTypingState(state)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTextFormContainer)