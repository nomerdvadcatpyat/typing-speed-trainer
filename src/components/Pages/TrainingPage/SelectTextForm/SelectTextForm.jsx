import './SelectTextForm.scss';
import {Select} from "../Selects/Select";

export const SelectTextForm = props => {
	const {
		handleSubmit,
		handleLengthChange,
		handleTextTitleChange,
		length,
		textTitle,
		texts,
		lengths
	} = props;

	return (
		<form onSubmit={handleSubmit}>
			<Select
				name="length"
				value={length}
				onChange={handleLengthChange}
				options={lengths}
			/>

			<Select
				name="textTitle"
				value={textTitle}
				onChange={handleTextTitleChange}
				options={texts}
			/>

			<button type="submit" className="btn waves-effect"> Начать </button>
		</form>
	);
}