import Koa from 'koa';
import { Context } from 'koa';
import KoaRouter from 'koa-router';

const app = new Koa();
const router = new KoaRouter();

const getMessage = (ctx: Context) => {
  ctx.body = 'Hello World';
};

router.get('/hello', getMessage);

app.use(router.routes());

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server running');
});
