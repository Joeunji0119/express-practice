import userService from '../services/userService.js';

const signUp = async (req, res) => {
	try {
		const { name, email, password, profileImage } = req.body;
		console.log(req.body);

		if (!name || !email || !password || !profileImage)
			res.this.status(400).json({ message: '키 에러' });

		await userService.signUp(name, email, password, profileImage);
		return res.status(201).json({
			message: '회원가입 성공',
		});
	} catch (err) {
		console.log(err);
		return res.status(err.statusCode ?? 500).json({
			message: err.message,
		});
	}
};

export default { signUp };
