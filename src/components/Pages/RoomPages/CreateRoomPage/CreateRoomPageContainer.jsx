import React, {useState, useEffect} from 'react';
import {CreateRoomPage} from "./CreateRoomPage";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
	createRoom,
	setRoomData,
	setPrepareState,
	setTypingState,
	startGame, startSingleGame
} from "../../../../store/actionCreators/gameActionCreators";
import {getSelectTextPageData} from "../../../../utils/api/roomApi";
import {getRoomId, getTypingState} from "../../../../store/selectors/gameSelectors";
import {useHistory} from "react-router-dom";
import {getUser} from "../../../../store/selectors/userSelectors";


const CreateRoomPageContainer = props => {

	const [values, setValues] = useState({ textTitles: null, lengths: null });
	const [selectedValues, setSelectedValues] = useState({ textTitle: null, length: null });
	const [maxMembersCount, setMaxMembersCount] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	const history = useHistory();

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
			setSelectedValues({ textTitle: values.textTitles[0].value, length: values.lengths[0].value });
		}
	}, [values]);


	const handleSubmit = async (e) => {
		e.preventDefault();

		const parsedData = {
			textTitle: selectedValues.textTitle,
			maxMembersCount: maxMembersCount,
			length: selectedValues.length,
			userId: props.user.id
		}

		history.push(`/room`);
		if(maxMembersCount === 1) {
			props.startSingleGame(parsedData);
		}
		else {
			props.createRoom(parsedData);
		}
	}


	return <CreateRoomPage
		{...props}
		isLoading={isLoading}
		texts={values.textTitles}
		lengths={values.lengths}
		maxMembersCount={maxMembersCount}
		handleSubmit={handleSubmit}
		handleLengthChange={e => setSelectedValues(prev => ({...prev,  length: e.target.value }))}
		handleTextTitleChange={e => setSelectedValues(prev => ({...prev,  textTitle: e.target.value }))}
		handleUsersCountChange={e => setMaxMembersCount(e.target.value)}
		length={selectedValues.length}
		textTitle={selectedValues.textTitle}
	/>
}

const mapDispatchToProps = dispatch => {
	return {
		createRoom: bindActionCreators(createRoom, dispatch),
		setPrepareState: bindActionCreators(setPrepareState, dispatch),
		setTypingState: bindActionCreators(setTypingState, dispatch),
		setGameData: bindActionCreators(setRoomData, dispatch),
		startGame: bindActionCreators(startGame, dispatch),
		startSingleGame: bindActionCreators(startSingleGame, dispatch)
	}
}

const mapStateToProps = state => {
	return {
		typingState: getTypingState(state),
		user: getUser(state),
		roomId: getRoomId(state)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoomPageContainer)