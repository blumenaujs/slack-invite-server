import Koa from 'koa';
import cors from '@koa/cors';
import bodyparser from 'koa-bodyparser';

import routes from './routes';
import { errorHandler, notFoundHandler } from './middleware';

const app = new Koa();

app
  .use(errorHandler)
  .use(cors())
  .use(bodyparser())
  .use(routes)
  .use(notFoundHandler);

export default app;
