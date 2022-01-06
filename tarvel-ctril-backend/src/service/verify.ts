import { SECRET } from '../config/app.config';
import jwt from 'jsonwebtoken';


export const verify = async (ctx, next) => {
  // 登陆验证
  const auth = ctx.request.headers['authorization'];
  console.log(auth, "////");
  if(!auth) {
    ctx.body = {
      code: 401,
      message: "请先登录",
    }
  }
  try {
    const playload = jwt.verify(auth, SECRET);
    ctx.user = playload;
    await next();
  } catch(e) {
    ctx.body = {
      code: 500,
      message: "过期了，请重新登录"
    }
  }
}