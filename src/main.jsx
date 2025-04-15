import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { appRouter } from './router/appRouter'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ appRouter } />
  </StrictMode>,
)
