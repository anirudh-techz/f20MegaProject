import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './component/home'
import Jobs from './component/jobs'
import Login from './component/login'
import NotFound from './component/notFound'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <>
    <Routes>

  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/jobs' element={<Jobs/>}></Route>
  <Route path='/*' element={<NotFound/>}></Route>





    </Routes>
    </>
  )
}

export default App
