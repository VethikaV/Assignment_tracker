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
        
         <Route path='/assignment' element={<Assignment/>}></Route>
         <Route path='/teacherprofile' element={<TeacherProfile/>}></Route>
         <Route path='/studentprofile' element={<StudentProfile/>}></Route>
         <Route path='/task' element={<Task/>}></Route>
         </Routes>
         </BrowserRouter>
       
      </div>
     
    </>
  )
}

export default App