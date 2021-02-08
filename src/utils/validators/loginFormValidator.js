
export const requiredField = (value) => {
	if(!value) 	return 'Поле обязательно для заполнения';

	return undefined;
}

export const maxLengthCreator = maxLength => value => {
	if(value.length > maxLength) return `Поле не должно быть больше ${maxLength} символов`;

	return undefined;
}


