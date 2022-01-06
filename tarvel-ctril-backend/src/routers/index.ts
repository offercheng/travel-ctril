// koa-router 是  koa 生态链上面的 很重要的 一个部分
import KoaRoutes from 'koa-router';
// 使用 koa-compose 将路由中间件结合在一起 
import koaCompose from 'koa-compose';
// import { getAllPeople } from '../database';
import queryController from '../controller/query'
import { verify } from '../service/verify'


// 实例化 路由
const router = new KoaRoutes();

export default () => {
  router.post("/checkLogin", queryController.query);
  router.get("/userinfo", verify, ctx => {
    ctx.body = {
      code: 200,
      user: ctx.user || {}
    }
  })
  return koaCompose([router.routes(), router.allowedMethods()]);
}