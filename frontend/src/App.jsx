import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import TeacherProfile from './Components/TeacherProfile';
import StudentProfile from './Components/StudentProfile';
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
         <Route path="/" element={<h1>Welcome to the Assignment Tracker</h1>} />
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