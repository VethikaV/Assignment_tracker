import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import TeacherProfile from './Components/TeacherProfile';
import StudentProfile from './Components/StudentAdd';
import Assignment from './Components/Assignment';
import Task from './Components/Task';

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
         <Route path='/StudentAdd' element={<StudentAdd/>}></Route>
         <Route path='/Task' element={<Task/>}></Route>
         <Route path="/StudentList" element={<StudentList />} />
         
         </Routes>
         </BrowserRouter>
       
      </div>
     
    </>
  )
}

export default App