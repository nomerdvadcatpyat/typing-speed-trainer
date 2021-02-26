
export const getIsAuth = state => {
	return state.user.isAuth;
}

export const getUser = state => {
	return state.user.currentUser;
}