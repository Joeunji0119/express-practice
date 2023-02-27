import { DataSource } from 'typeorm';
import '../../env.js';

const myDataSource = new DataSource({
	type: process.env.TYPEORM_CONNECTION,
	host: process.env.TYPEORM_HOST,
	port: process.env.TYPEORM_PORT,
	username: process.env.TYPEORM_USERNAME,
	password: process.env.TYPEORM_PASSWORD,
	database: process.env.TYPEORM_DATABASE,
});

myDataSource
	.initialize()
	.then(() => {
		console.log('Datasource has been initialized');
	})
	.catch(err => {
		console.log(err, 'Datasource error 났음');
		myDataSource.destroy();
	});

const createUser = async (name, email, password, profileImage) => {
	try {
		return await myDataSource.query(
			`insert into users(
                name, email, password, profileImage
            ) values (?,?,?,?);`,
			[name, email, password, profileImage]
		);
	} catch (err) {
		const error = new Error('data input 이상함');
		error.statusCode = 500;
		throw error;
	}
};

export default { createUser };
