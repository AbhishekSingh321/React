import {Routes,Route, Navigate} from 'react-router-dom'
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./routes/PrivateRoute"
import {useAuth} from './hooks/useAuth'


function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Routes>
          <Route path="/"
            element={
              isAuthenticated ? (<Navigate to="/dashboard" replace />) : (<Navigate to="/login" replace />)
            }
          />
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
      </Routes>
    </>
  )
}

export default App
