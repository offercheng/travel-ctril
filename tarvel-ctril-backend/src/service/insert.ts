import { insertUser } from '../database';

export const insertUserResult = async (ctx) => {
  const { userName, password } = ctx.request.body;
  console.log(userName,password);
  // 执行插入数据库的函数
  const result = await insertUser(userName, password);
  console.log(result);
  
}