import * as yup from "yup";

const registrationSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(4).max(25).required('Password is required'),
	rePassword: yup.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
});

export const loginSchema = yup.object().shape({
	email: yup.string().email().min(4).max(25).required(),
	password: yup.string().required('Password is required')
});

