import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './Components/Context/AuthContext.jsx'
import { initializeStorage } from './Components/Utils/LocalStorage.jsx'

// 🔥 MUST RUN BEFORE REACT
initializeStorage()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <App />
    </AuthContext>
  </StrictMode>
)
