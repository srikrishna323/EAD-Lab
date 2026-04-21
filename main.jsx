import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PasswordChecker from './Hello.jsx'
import App2 from './App2.jsx'
import StudentTable from './Components/StudentTable.jsx'
createRoot(document.getElementById('root')).render(
    <StrictMode>
      <StudentTable/>
    </StrictMode>
)
    