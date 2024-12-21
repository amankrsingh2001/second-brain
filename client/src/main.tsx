import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Router.tsx'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
        <RouterProvider router={router}>
        </RouterProvider>
    </RecoilRoot>
    
  </StrictMode>,
)
