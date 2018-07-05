import Koa from 'koa';
import cors from '@koa/cors';
import bodyparser from 'koa-bodyparser';
import Router from './routes';

const app = new Koa();

app.use(cors());
app.use(bodyparser());
Router.prefix('/api');

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message,
    };
    console.log(err);
  }
});

app.use(Router.routes());


export default app;
