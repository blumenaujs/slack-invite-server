import Router from 'koa-router';

import invites from '../api/invites/routes';
import apiStatus from '../api/status/routes';

const router = new Router();
router.prefix('/api');

/**
 * Register all routes
 */
router.use(invites);
router.use(apiStatus);

export default router.routes();
