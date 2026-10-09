import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import NotFound from './NotFound.jsx'
import UserList from './components/UserList.jsx'
import App from './components/App.jsx'
import UsersDetail from './components/UsersDetail.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="users" element={<UserList />} />
          {/* <Route path="users/:id" element={<UsersDetail />} /> */}
          <Route path="detail" element={<UsersDetail />} />
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
