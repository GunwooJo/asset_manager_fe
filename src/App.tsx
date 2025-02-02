import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserJoin from './pages/user/UserJoin.tsx';
import AuthCallback from "./pages/AuthCallback.tsx";
import DashBoard from "./pages/DashBoard.tsx";

function App() {

  return (
      <Router>
          <Routes>
                <Route path="/" element={<DashBoard/>} />
              <Route path="/users/join" element={<UserJoin />} />
              <Route path="/auth/google/callback" element={<AuthCallback />} />
          </Routes>
      </Router>
  )
}

export default App
