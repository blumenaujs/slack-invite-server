import Router from 'koa-router';

import invites from '../api/invites/routes';
import apiStatus from '../api/status/routes';
import online from '../api/users/online-users/routes';
import registered from '../api/users/registered-users/routes';

const router = new Router();
router.prefix('/api');

/**
 * Register all routes
 */
router.use(invites);
router.use(apiStatus);
router.use(online);
router.use(registered);

export default router.routes();
