import React,{ lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
let Login = lazy(() => import('../pages/Login'));
let Register = lazy(() => import('../pages/Register'));

interface RouteBase {
  // 路由路径
  path: string;
  // 路由组件
  element: any;
}

// export const signRoutes: RouteBase[] = [
//   {
//     path: "/", element: <Login />
//   },
//   {
//     path: "/register", element: <Register />

//   },
//   {
//     path: '*', element: () => <Navigate to="/" />
//   }
// ]

export const SignRoutes = () => {
  const signRoutes = useRoutes([
    {
      path: "/", element: <Login />
    },
    {
      path: "/register", element: <Register />
  
    },
    {
      path: '*', element: <Navigate to="/" />
    }
  ])
  return signRoutes
}




