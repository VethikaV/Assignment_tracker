import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import TeacherProfile from '../src/Components/TeacherProfile';
import Studentform from '../src/Components/StudentForm';
import Assignment from './Components/Assignment';
import Task from './Components/Task';
import Home from '../src/Components/Home'
import StudentList from './Components/StudentList';

const App=()=> {
  return (
    <>
      <div>
         <BrowserRouter>
         <NavBar />
         <Routes>
          <Route path='/' element={<Home/>}/>
         <Route path="/Login" element={<Login/>}></Route>
         <Route path="/Signup" element={<Signup/>}></Route>
         <Route path='/Assignment' element={<Assignment/>}></Route>
         <Route path='/TeacherProfile' element={<TeacherProfile/>}></Route>
         <Route path='/Studentform' element={<Studentform/>}></Route>
         <Route path='/Task' element={<Task/>}></Route>
         <Route path="/StudentList" element={<StudentList />} />
         
         </Routes>
         </BrowserRouter>
       
      </div>
     
    </>
  )
}

export default App