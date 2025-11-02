// Replaced React's Strict Mode with BrowserRouter to add page navigation (routing) to my app.


import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
 </BrowserRouter>
)
