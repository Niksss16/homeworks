import './App.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import { Home, CSS, HTML, Git, GitHub, Python, Django, NotPage } from './pages'
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
   <>
    <Route path = "/" element ={<Home />} />
    <Route path = "CSS" element ={<CSS />} />
    <Route path = "Django" element ={<Django />} />
    <Route path = "Git" element ={<Git />} />
    <Route path = "GitHub" element ={<GitHub />} />
    <Route path = "HTML" element ={<HTML />} />
    <Route path = "Python" element ={<Python />} />
    <Route path="*" element  = {<NotPage />} />
   </> 
  ))

  return (
   <RouterProvider router = {router}/>
  )
}

export default App
