import React, { useContext } from 'react'
import { Dropdown, Menu, Typography, Button, Input } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { Top, Tab } from './index.layout';
import logo from '../../assets/image/logo.svg';
import { LoginContext } from '../../contexts/loginContext';

const Header: React.FC = () => {
  const { state, dispatch } = useContext(LoginContext);
  const { userName } = state;

  const gotoLogin = () => {
    window.location.href = "/login"
  }
  const gotoRegister = () => {
    window.location.href = "/register"
  }
  const gotoShop = () => {
    window.location.href = "/shopping"
  }

  const gotoLogout = () => {
    if(window.localStorage.getItem("token")) {
       window.localStorage.removeItem("token");
       window.location.href = "/"
    }
    
  }

  return (
    <React.Fragment>
      <Top>
        <Typography.Text>让旅游更幸福</Typography.Text>
        <Dropdown.Button
          style={{ marginLeft: 15 }}
          overlay={
            <Menu >
              <Menu.Item>简体中文</Menu.Item>
              <Menu.Item>English</Menu.Item>
            </Menu>
          }
          icon={<GlobalOutlined />}
        >
          简体中文
        </Dropdown.Button>
        {
          userName
            ?
            <div className='header-button'>
              <Button onClick={gotoShop} type="text">购物车</Button>
              <Typography.Text>{userName}</Typography.Text>
              <Button onClick={gotoLogout} type="text">退出登录</Button>
            </div>
            :
            <div className='header-button'>
              <Button onClick={gotoLogin} type="text">登录</Button>
              <Button onClick={gotoRegister} type="text">注册</Button>
            </div>
        }
      </Top>
      <Tab>
        <div className='header-title'>
          <img src={logo} alt="logo" className='header-log' />
          <div className='header-text'>
            React 旅游网
          </div>
          <Input.Search className='header-search'
            placeholder={"请输入旅游目的地、主题、或关键字"}
          />
        </div>
        <Menu mode={"horizontal"} className="header-menu">
          <Menu.Item key="1"> 首页  </Menu.Item>
          <Menu.Item key="2"> 热门旅游 </Menu.Item>
          <Menu.Item key="3"> 周边旅游 </Menu.Item>
          <Menu.Item key="4"> 当地活动 </Menu.Item>
          <Menu.Item key="5"> 境内旅游 </Menu.Item>
          <Menu.Item key="6"> 主题旅游 </Menu.Item>
          <Menu.Item key="7"> 高端旅游 </Menu.Item>
          <Menu.Item key="8"> 出境旅游 </Menu.Item>
          <Menu.Item key="9"> 红色旅游 </Menu.Item>
          <Menu.Item key="10"> 毕业旅游 </Menu.Item>
          <Menu.Item key="11"> 首页 </Menu.Item>
          <Menu.Item key="12"> 首页 </Menu.Item>
          <Menu.Item key="13"> 首页 </Menu.Item>
          <Menu.Item key="14"> 首页 </Menu.Item>
          <Menu.Item key="15"> 首页 </Menu.Item>
          <Menu.Item key="16"> 首页 </Menu.Item>
        </Menu>
      </Tab>
    </React.Fragment>
  )
}

export default Header;