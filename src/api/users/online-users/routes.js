import Router from 'koa-router';
import { getOnlineUserCount } from './controller';

const userCountRouter = new Router();

userCountRouter.get('/online', getOnlineUserCount);

export default userCountRouter.routes();
