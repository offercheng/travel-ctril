import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Input, Button, Spin, message } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import styled from 'styled-components';
// 这里可以使用 webpack进行配置 把 ../../ 替换成 @ ，让代码更加的优美
import { hyRequest } from '../../service'
import { IDataType } from '../../config/axios/axios.type'
import { DateProps } from './index.type';
import serverPath from '../../api'

const Center = styled.div`
  margin: 150px auto;
  width: 400px;
`

/**
 * 使用 antd 对 login 界面进行简单的布局 
 */
const Login: React.FC = () => {

  
  // 对用户名的私有属性的设计
  const [userName, setUserName] = useState(() => "");
  // 对用户密码的私有属性的设计
  const [password, setPassword] = useState(() => "");
  // 对用户体验 loading 效果的使用 
  const [isLoading, setIsLoading] = useState(() => false);

  // 对用户名和密码的验证  
  const checkLogin = () => {
    // 对用户体验的优化 将 loading 图标显示出来
    setIsLoading(true);
    // 对用户名为空的情况进行间的排除
    if (!userName) {
      message.error("用户名不能为空哦");
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return false;
    } else if (!password) {
      message.error("密码不能为空哦");
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return false;
    }
    const dataProps: DateProps = {
      'userName': userName,
      'password': password,
    }
    console.log(dataProps);
    // 使用 axios 进行数据请求
    hyRequest.post<IDataType>({
      // method: "POST",
      url: serverPath.checkLogin,
      data: dataProps,
      // 当前请求为跨域类型时是否在请求中协带cookie
      withCredentials: true,
    }).then((res: any) => {
      setIsLoading(false);
      // 结果 AxiosResponse<any> 类型
      // console.log(res,"60");  
      if (res.code === 200) {
        console.log("-----");
        localStorage.setItem('token', res.token);
        window.location.href = '/home';
      } else {
        message.error("用户名或密码错误")
      }
    }
    ).catch(error => {
      console.log(error);

    })
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Center>
      <Spin tip='Loading...' spinning={isLoading}  >
        <Card title="CMM REACT TRAVL" bordered={true} style={{ width: 400 }} headStyle={{ textAlign: "center" }}>
          <Input id="userName" size='large' placeholder="Enter your userName" prefix={<UserOutlined />} onChange={(event) => { setUserName(event.target.value) }} /><br /><br />
          <Input.Password id="password" size='large' placeholder="Enter your password" prefix={<KeyOutlined />} onChange={(event) => { setPassword(event.target.value) }} /><br /><br />
          <Button type='primary' size='large' block onClick={checkLogin}>Login in</Button>
          <Link to="./register" >注册</Link>
        </Card>
      </Spin>
    </Center>
  )
}
export default Login