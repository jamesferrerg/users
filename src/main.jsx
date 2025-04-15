import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { appRouter } from './router/appRouter'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
      <RouterProvider router={ appRouter } />
    </Provider>
  </StrictMode>,
)
