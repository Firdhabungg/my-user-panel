import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import './index.css'
import NotFound from './NotFound.jsx'
import App from './components/App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import UsersDetail from './pages/UsersDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />}/>
        <Route path="/users" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path=":id" element={<UsersDetail />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
