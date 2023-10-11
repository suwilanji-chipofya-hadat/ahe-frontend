import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import './index.css'
import Root from "./routes/root";
import Home from "./routes/home"
import About from "./routes/about"
import Gallery from "./routes/gallery"
import ErrorPage from "./routes/error-page"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
    	{
    		path: "",
    		element: <Home/>
    	},
    	{
    		path: "about",
    		element: <About/>
    	},
    	{
    		path: "gallery",
    		element: <Gallery/>
    	}
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
    	<RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
