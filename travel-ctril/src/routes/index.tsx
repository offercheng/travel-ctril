import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));
const Shop = lazy(() => import('../compoents/Shop'));



export const SignRoutes = () => {
  // 这里的进行类型约束，但是
  const signRoutes = useRoutes([
    {
      path: "/login", element: <Login />
    },
    {
      path: "/register", element: <Register />

    },
    {
      path: "/", element: <Home />
    },
    {
      path: '/shopping', element: <Shop />
    },
    {
      path: '*', element: <Navigate to="/" />
    }
  ])
  return signRoutes
}




