import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './RouterConfig/Context/authContext.tsx'
import { AppRoutes } from './RouterConfig/AppRoutes.tsx'
import { Toaster } from './components/ui/sonner.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <AppRoutes/>
      <Toaster/>
    </AuthProvider>
  </StrictMode>,
)
