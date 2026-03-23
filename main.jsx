import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Timer from './Timer.jsx'
// import SubComponent from './SubComponent.jsx'
import Hello from './Hello.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Timer />
    {/* <SubComponent /> */}
    <Hello />
  </StrictMode>,
)
