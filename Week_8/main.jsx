import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Router from './Router.jsx'
import Propexample from './Propexample.jsx'
import Pagination from './Pagination.jsx'
import ReactTable from './ReactTable.jsx'
createRoot(document.getElementById('root')).render(
     <StrictMode>
      <Propexample/>
  </StrictMode>
)
