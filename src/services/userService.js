import userDao from '../models/userDao.js';

const signUp = async (name, email, password, profileImage) => {
	const pwValidation = new RegExp(
		'^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})'
	);
	if (!pwValidation.test(password)) {
		const err = new Error('패스워드 틀림');
		err.statusCode = 409;
		throw err;
	}
	const createUser = await userDao.createUser(
		name,
		email,
		password,
		profileImage
	);
	return createUser;
};

export default { signUp };
