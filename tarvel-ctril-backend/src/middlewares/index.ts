// 
import routes from '../routers';
import bodyParser from 'koa-bodyparser';
import cors from '../crossDomain';

export default (app) => {
  // 挂载
  app.use(cors);
  app.use(bodyParser());
  // 挂载一个中间件 这里将 所有的路由都挂载上去
  app.use(routes());
}