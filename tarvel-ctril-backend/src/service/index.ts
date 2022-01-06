import { getAllPeople } from '../database';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config/app.config'

export const findQueryResult = async (ctx) => {
  const { userName, password } = ctx.request.body;
  console.log(userName, password);
  if (!userName || !password){
    ctx.body = '出错了';
  } else {
    const users:any = await getAllPeople();
    console.log(users);
    // 使用 findIndex 对符合条件的数据 返回 下标地址
    let index = users.findIndex((user) => user.userName === userName && user.password === password);
    // console.log(index);
    
    if (index >= 0) {
      // 服务器端 下方 令牌环
      const token = await jwt.sign({
        user: users[index],
      }, SECRET, {
        // 授权码失效时间
        expiresIn: 600
      });
      // console.log("------------");
      ctx.body = {
        code: 200,
        token
      }
    }
    // ctx.body ="123456"
  }
  console.log(ctx.body);
  
}