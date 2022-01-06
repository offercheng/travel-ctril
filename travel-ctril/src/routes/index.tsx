import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
let Login = lazy(() => import('../pages/Login'));
let Register = lazy(() => import('../pages/Register'));
let Home = lazy(() => import('../pages/Home'))



export const SignRoutes = () => {
  // 这里的进行类型约束，但是
  const signRoutes = useRoutes([
    {
      path: "/", element: <Login />
    },
    {
      path: "/register", element: <Register />

    },
    {
      path: "/home", element: <Home />
    },
    {
      path: '*', element: <Navigate to="/" />
    }
  ])
  return signRoutes
}




