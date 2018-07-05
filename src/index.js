import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const server = app.listen(process.env.port || process.env.PORT || 8095);
console.log(`server running at port ${server.address().port}`);
