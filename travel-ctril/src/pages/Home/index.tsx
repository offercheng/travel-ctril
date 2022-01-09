import React, { useReducer, useEffect, useState } from 'react'
import { hyRequest } from '../../service'
import Header from '../../common/Header'
import Swipers from '../../compoents/Swpier'
import ProductCollection from '../../compoents/ProductCollection'
import Footer from '../../common/Footer'
import { Typography } from 'antd'
import sideImage from '../../assets/image/1.png'
import sideImage2 from '../../assets/image/2.png'
import sideImage3 from '../../assets/image/3.png'
import { productList1, productList2, productList3, goodsList } from './mock';
import { LoginContext } from '../../contexts/loginContext';
import { initState, loginReducer } from '../../contexts/loginContext'


const Home: React.FC = () => {

  const [state, dispatch] = useReducer(loginReducer, initState);
  const {userName, login} = state
  const [Name, setUserName] = useState(userName);
  useEffect(() => {
    hyRequest.get({
      url: "/userinfo",
      withCredentials: true,
    }).then(res => {
      if (res.code === 401) {
        window.location.href = "/login"
      }
      if (res.code === 200) {
        const { user } = res.user;
        setUserName(user.userName)
      }
    })
    dispatch({type: 'LOGIN', user: Name})
  }, [Name])
  console.log(Name, "------------");
  
  return (
    <LoginContext.Provider value={{ state, dispatch }} >
      <Header />
      <Swipers />
      <ProductCollection title={
        <Typography.Title level={3} type="warning">爆款推荐</Typography.Title>
      } sideImage={sideImage} products={productList1} />

      <ProductCollection title={
        <Typography.Title level={3} type="warning">新品上市</Typography.Title>
      } sideImage={sideImage2} products={productList2} />

      <ProductCollection title={
        <Typography.Title level={3} type="warning">国内旅游</Typography.Title>
      } sideImage={sideImage3} products={productList3} />
      <Footer />
    </LoginContext.Provider>
  )
}
export default Home