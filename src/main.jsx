import React from 'react'
import ReactDOM from 'react-dom/client'
import SignUp from './components/SignUp/SignUp.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Hook/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>
  },
  {
    path: '/login',
    element: <Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
