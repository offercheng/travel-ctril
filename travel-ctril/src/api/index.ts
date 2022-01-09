// 对路径的类型限制
interface pathProps {
  checkLogin: string;
  selectgoods: string
}

// 配置路径
const serverPath: pathProps = {
  checkLogin: "checkLogin",   // 登录接口检查用户名和密码
  selectgoods: "selectgoods",   // 请求首页的数据
}

export default serverPath