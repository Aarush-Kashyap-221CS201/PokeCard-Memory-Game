import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Container from './Container.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container />
  </StrictMode>,
)
