import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserJoin from './pages/user/UserJoin.tsx';

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/users/join" element={<UserJoin />} />
          </Routes>
      </Router>
  )
}

export default App
