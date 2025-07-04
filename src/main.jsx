import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  
  RouterProvider,
} from "react-router";
import { router } from './router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className='max-w-7xl m-auto'>
      <RouterProvider router={router} />
     </div>
  </StrictMode>,
)
