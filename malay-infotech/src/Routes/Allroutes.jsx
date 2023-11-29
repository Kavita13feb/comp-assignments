import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Registration } from '../Pages/Registration'
import { Dashboard } from '../Pages/Dashboard'
import { Login } from '../Pages/Login'

export const Allroutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Registration/>}/>
    <Route path='/login' element={<Login/>}/>

    <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes>
  )
}
