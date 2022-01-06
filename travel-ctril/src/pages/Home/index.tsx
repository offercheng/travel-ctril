import React from 'react'
import { hyRequest } from '../../service'

const Home = () => {
  hyRequest.get({
    url: "/userinfo",
    withCredentials: true,
  }).then(res => {
    if(res.code === 401) {
      window.location.href = "/login"
    }
    if(res.code === 200) {
      const { user } = res.user;
      console.log(user.userName);
    }
  })
  return (
    <>
      Home
    </>
  )
}
export default Home