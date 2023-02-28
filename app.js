import express from 'express';
import morgan from 'morgan';
import http from 'http';
import cors from 'cors';
import routes from './src/routes/index.js';
import './env.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(routes);

const server = http.createServer(app);
const port = process.env.PORT;

const start = async () => {
	server.listen(port, () => {
		console.log(`server on ${port} 🚀`);
	});
};

start();
