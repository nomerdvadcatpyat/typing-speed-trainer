import React, {useState, useEffect} from 'react';
import {CreateRoomPage} from "./CreateRoomPage";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
	createRoom,
	setGameData,
	setPrepareState,
	setTypingState,
	startGame, startSingleGame
} from "../../../../store/actionCreators/gameActionCreators";
import {getSelectedTextData, getSelectTextPageData} from "../../../../utils/api/roomApi";
import {getRoomId, getTypingState} from "../../../../store/selectors/gameSelectors";
import {useHistory} from "react-router-dom";
import {getUser} from "../../../../store/selectors/userSelectors";


const CreateRoomPageContainer = props => {

	const [values, setValues] = useState({ textTitles: null, lengths: null });
	const [selectedValues, setSelectedValues] = useState({ textTitle: null, length: null });
	const [usersCount, setUsersCount] = useState(1);
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
			setSelectedValues({ textTitle: values.textTitles[0], length: values.lengths[0] });
		}
	}, [values]);


	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await getSelectedTextData(selectedValues);
		props.setGameData(data);

		const parsedData = {
			text: data.text,
			textTitle: data.textTitle,
			textLang: data.textLang,
			usersCount: usersCount,
			userId: props.user.id
		}

		history.push(`/room`);
		if(usersCount === 1) {
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
		usersCount={usersCount}
		handleSubmit={handleSubmit}
		handleLengthChange={e => setSelectedValues(prev => ({...prev,  length: e.target.value }))}
		handleTextTitleChange={e => setSelectedValues(prev => ({...prev,  textTitle: e.target.value }))}
		handleUsersCountChange={e => setUsersCount(e.target.value)}
		length={selectedValues.length}
		textTitle={selectedValues.textTitle}
	/>
}

const mapDispatchToProps = dispatch => {
	return {
		createRoom: bindActionCreators(createRoom, dispatch),
		setPrepareState: bindActionCreators(setPrepareState, dispatch),
		setTypingState: bindActionCreators(setTypingState, dispatch),
		setGameData: bindActionCreators(setGameData, dispatch),
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