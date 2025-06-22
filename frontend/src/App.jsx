import React from 'react'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

import Login from './pages/Auth/Login'
import LandingPage from './pages/LandingPage'
import InterviewPrep from './pages/InterviewPrep/InterviewPrep'
import Dashboard from './pages/Home/Dashboard'
import SignUp from './pages/Auth/SignUp'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/interview-prep/:sessionId' element={<InterviewPrep/>}/>
        </Routes>
      </Router>

      <Toaster
      toastOptions={{
        className:"",
        style:{
          fontSize:"13px",
        },
      }}
      />
    </div>
  )
}

export default App