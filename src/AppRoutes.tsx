import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import SignInPage from './components/signIn'
import App from './App'

function AppRoutes() {
  return (
    <Router>
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </SignedIn>
    </Router>
  )
}

export default AppRoutes
