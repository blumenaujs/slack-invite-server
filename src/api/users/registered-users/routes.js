import Router from 'koa-router';
import { getRegisteredUsersCount } from './controller';

const userCountRouter = new Router();

userCountRouter.get('/usersCount', getRegisteredUsersCount);

export default userCountRouter.routes();
