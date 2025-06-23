import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import User from './components/user/User.jsx';
import Github, {fetchCall} from './components/github/Github.jsx';

/*const router = createBrowserRouter([
  {path:"/",
    element: <Layout/>,
    children:[
      {path:"", // '/' ke baad kuchh bhi nahi
        element: <Home/>
      },
      {path: "about", // '/' ke baad about
        element:<About/>
      }
    ] 
  }
])

OR*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="user/:userid" element={<User/>}/> {/*userid*/}
      <Route loader={fetchCall}
      path="github"
      element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
