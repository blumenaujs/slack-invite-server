import Router from 'koa-router';
import axios from 'axios';

const router = new Router();

router.get('/status', (ctx) => {
  ctx.response.body = { message: 'OK' };
});

router.post('/invite', async (ctx) => {
  console.log(ctx.request.body);
  const url = `https://slack.com/api/users.admin.invite?token=${process.env.TOKEN}&email=${ctx.request.body.email}`;
  const response = await axios.get(url);
  ctx.response.status = response.status;
  ctx.response.body = response.data;
});

export default router;
