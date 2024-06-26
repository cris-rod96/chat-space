import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login } from './pages'
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRouter
