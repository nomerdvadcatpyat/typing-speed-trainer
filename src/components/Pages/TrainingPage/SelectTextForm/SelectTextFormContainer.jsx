import React, {useState, useEffect} from 'react';
import {SelectTextForm} from "./SelectTextForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setPrepareState, setText, setTypingState} from "../../../../store/actionCreators/trainingSpeedActionCreators";
import {getSelectTextPageData, prepareToTyping} from "../../../../utils/api/trainingSpeedApi";
import {setLoadedState, setLoadingState} from "../../../../store/actionCreators/appActionCreators";
import {getIsLoading} from "../../../../store/selectors/appSelectors";


const SelectTextFormContainer = props => {

	const [values, setValues] = useState({ textTitles: null, lengths: null });

	const [length, setLength] = useState(null);
	const [textTitle, setTextTitle] = useState(null);

	useEffect(() => {
		getSelectTextPageData()
			.then(data => {
				const lengths = data.lengths.map(str => ({title: str}));
				const textTitles = data.textTitles;
				setValues({ textTitles, lengths });
			})
			.catch(console.log)
			.finally();
	}, []);


	useEffect(() => {
		if(values.textTitles && values.lengths) {
			setLength(values.lengths[0]);
			setTextTitle(values.textTitles[0]);
		}
	}, [values])


	const handleSubmit = () => {
		console.log(values);
		props.setPrepareState();
		prepareToTyping()
			.then(props.setTypingState)
			.catch(console.log);
	}

	return <SelectTextForm
		{...props}
		isLoading={props.isLoading}
		texts={values.textTitles}
		lengths={values.lengths}
		handleSubmit={handleSubmit}
		handleLengthChange={e => setLength(e.target.value)}
		handleTextTitleChange={e => setTextTitle(e.target.value)}
		length={length}
		textTitle={textTitle}
	/>
}

const mapDispatchToProps = dispatch => {
	return {
		setLoadingState: bindActionCreators(setLoadingState, dispatch),
		setLoadedState: bindActionCreators(setLoadedState, dispatch),
		setPrepareState: bindActionCreators(setPrepareState, dispatch),
		setTypingState: bindActionCreators(setTypingState, dispatch),
		setText: bindActionCreators(setText, dispatch)
	}
}

const mapStateToProps = state => {
	return {
		isLoading: getIsLoading(state)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTextFormContainer)