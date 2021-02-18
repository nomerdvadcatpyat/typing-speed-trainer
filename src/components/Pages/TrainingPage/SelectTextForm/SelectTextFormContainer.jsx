import React, {useState, useEffect} from 'react';
import {SelectTextForm} from "./SelectTextForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setPrepareState, setTypingState} from "../../../../store/actionCreators/trainingSpeedActionCreators";
import {getSelectedTextData, getSelectTextPageData, prepareToTyping} from "../../../../utils/api/trainingSpeedApi";


const SelectTextFormContainer = props => {

	const [values, setValues] = useState({ textTitles: null, lengths: null });

	const [selectedValues, setSelectedValues] = useState({ textTitle: null, length: null });

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getSelectTextPageData()
			.then(data => {
				const lengths = data.lengths.map(str => ({title: str}));
				const textTitles = data.textTitles;
				setValues({ textTitles, lengths });
			})
			.catch(console.log)
			.finally(() => setIsLoading(false));
	}, []);


	useEffect(() => {
		if(values.textTitles && values.lengths) {
			setSelectedValues({ textTitle: values.textTitles[0].title, length: values.lengths[0].title });
		}
	}, [values])


	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(selectedValues);
		const data = await getSelectedTextData(selectedValues);
		props.setPrepareState(data);
		prepareToTyping()
			.then(props.setTypingState)
			.catch(console.log);
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
		setPrepareState: bindActionCreators(setPrepareState, dispatch),
		setTypingState: bindActionCreators(setTypingState, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(SelectTextFormContainer)