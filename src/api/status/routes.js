import Router from 'koa-router'

import { checkApiStatus } from './controller';

const statusRouter = new Router();

statusRouter.get('/status', checkApiStatus);

export default statusRouter.routes();
