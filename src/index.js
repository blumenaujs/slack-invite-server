import 'babel-polyfill';
import dotenv from 'dotenv';
import app from './app';
import logger from './utils/logger';

dotenv.config();

const { port, PORT } = process.env;
const serverPort = port || PORT || 8095;

app.listen(serverPort);

logger.info(`Server running. Port => ${serverPort}`);
