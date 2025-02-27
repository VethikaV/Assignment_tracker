import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import TeacherProfile from './Components/Teacher/TeacherProfile';
import StudentProfile from './Components/Student/StudentProfile';
import Assignment from './Components/Student/Assignment';
import Task from './Components/Teacher/Task';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <BrowserRouter>
         <NavBar />
         <Routes>
          
         <Route path="/Login" element={<Login/>}></Route>
         <Route path="/Signup" element={<Signup/>}></Route>
         <Route path='/Assignment' element={<Assignment/>}></Route>
         <Route path='/TeacherProfile' element={<TeacherProfile/>}></Route>
         <Route path='/StudentProfile' element={<StudentProfile/>}></Route>
         <Route path='/Task' element={<Task/>}></Route>
         </Routes>
         </BrowserRouter>
       
      </div>
     
    </>
  )
}

export default App