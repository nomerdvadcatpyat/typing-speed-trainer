import * as yup from "yup";

export const registrationSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(3).max(25).required('Password is required'),
	rePassword: yup.string().min(3).max(25)
		.oneOf([yup.ref('password'), null], 'Passwords must match')
});

export const loginSchema = yup.object().shape({
	email: yup.string().email().required('Email is required'),
	password: yup.string().min(3).max(25).required('Password is required')
});

