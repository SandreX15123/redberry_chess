import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Registration, RegistrationFinish, Landed } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registration_finish" element={<RegistrationFinish />} />
        <Route path="/landed" element={<Landed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
