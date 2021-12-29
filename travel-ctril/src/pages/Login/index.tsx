import React from 'react'
import {Card,Input,Button,Spin, message} from 'antd';
import {UserOutlined,KeyOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Center = styled.div`
  margin: 150px auto;
  width: 400px;
`

/**
 * 使用 antd 对 login 界面进行简单的布局 
 */
const Login = () => {
  return (
    <Center>
      {/* <Spin tip='Loading...'  > */}
        <Card title="JAKE CMM System" bordered={true} style={{width:400}}>
          <Input id="userName" size='large' placeholder="Enter your userName" prefix={<UserOutlined />}  /><br/><br/>
          <Input.Password id="password" size='large' placeholder="Enter your password" prefix={<KeyOutlined />}  /><br/><br/>
          <Button type='primary' size='large' block >Login in</Button>
        </Card>
      {/* </Spin> */}
    </Center>
  )
}
export default Login