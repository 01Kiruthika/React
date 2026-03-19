import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Video from './Video.jsx'
import Slide from './Slide.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <App />
      {/* <Video /> */}
      {/* <Slide /> */}
    </BrowserRouter>
  </StrictMode>,
)
