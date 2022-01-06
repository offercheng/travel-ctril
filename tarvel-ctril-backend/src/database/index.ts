// 使用 node npm 包 mysql 进行数据库的连接
import mysql from 'mysql2';

import { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } from '../config/app.config'

const mysqlConfig = {
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
}

// 创建连接对象 
const connection = mysql.createConnection(mysqlConfig);
// 开始连接， 这里还进行了相关的错误处理
connection.connect((error) => {
  // console.log(error);
  if(error) {
    console.error(`error connecting: ${error.stack}`);
    return;
  }
  // console.log(`connected as id ${connection.threadId}`);
}); 

export const getAllPeople = async () => {
  // 使用 promise 代替回调函数将数据返回
  return new Promise((resolve, reject) => {
    // sql 语句的 模板
    const modSql = 'SELECT * FROM people';
    // 进行sql 查询，这里也做了 报错的处理 
    connection.query(modSql, (error, results, fields) => {
      if(error) {
        console.log(error);
        return;
      }
      resolve(results)
    });
  });
  // console.log(results,"------");
  // console.log(fields);
  
  // 结束连接减少数据库资源的消耗
  // connection.end()
}
