import Router from 'koa-router';
import { inviteUserByEmail } from './controller';

const invitesRouter = new Router();

invitesRouter.get('/invites', inviteUserByEmail);

export default invitesRouter.routes();
