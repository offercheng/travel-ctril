import React, { useState } from 'react'
import { Card, Input, Button, Spin, message } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import { Center } from './index.layout'
import { hyRequest } from '../../service';
import serverPath from '../../api';

/**
 * 使用 antd 对 login 界面进行简单的布局 
 */
const Register = () => {

  // 对注册用户名的私有属性的设计
  const [userName, setUserName] = useState(() => "");
  // 对注册用户密码的私有属性的设计
  const [password, setPassword] = useState(() => "");
  // 对注册用户确认密码的私有属性的设计
  const [confirm, setConfirm] = useState(() => "");
  // 对用户体验 loading 效果的使用 
  const [isLoading, setIsLoading] = useState(() => false);

  const checkRegister = () => {
    setIsLoading(true);
    console.log("11111111111111");
    if (!userName) {
      message.error('用户名不能空哦！');
    } else if (!password) {
      message.error('密码不能为空哦！');
    } else if (confirm !== password) {
      message.error('两次密码不是一样的哦')
    }
    const registerData = {
      "userName": userName,
      "password": password,
    }
    
    hyRequest.post({
      url: serverPath.registerData,
      data: registerData,
      withCredentials: true,
    }).then(res => {
      console.log(res);
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 500);
  }

  return (
    <Center>
      <Spin tip='Register...' spinning={isLoading} >
        <Card title="JAKE CMM System" bordered={true} style={{ width: 400 }} headStyle={{ textAlign: "center" }}>
          <Input className='register-user' id="userName" size='large' placeholder="Enter your userName" prefix={<UserOutlined />} onChange={(event) => { setUserName(event.target.value) }} />
          <Input.Password className='register-pwd' id="password" size='large' placeholder="Enter your password" prefix={<KeyOutlined />} onChange={(event) => { setPassword(event.target.value) }} />
          <Input.Password className='register-ver' id="confirmPassword" size='large' placeholder="Confirm your password" prefix={<KeyOutlined />} onChange={(event) => { setConfirm(event.target.value) }} />
          <Button type='primary' size='large' block onClick={checkRegister} >Register</Button>
        </Card>
      </Spin>
    </Center>
  )
}
export default Register