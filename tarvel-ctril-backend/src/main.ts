import Koa from 'koa';
import middleware from './middlewares';
import { APP_PORT } from './config/app.config'

// koa的实例 app
const app = new Koa();
// 职责分离
middleware(app);
// 将服务挂载在 8888 端口
app.listen(APP_PORT, () => {
  console.log(`项目在 5050 端口启动`);
})