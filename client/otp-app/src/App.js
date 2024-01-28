import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import VerifyOTP from './components/VerifyOTP';
import GenerateOTP from './components/GenerateOTP';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<GenerateOTP/>}/>
      <Route path='/verify-otp' element={<VerifyOTP/>}/>
      <Route path='/welcome-page' element={<WelcomePage/>}/>
    </Routes>
  );
}

export default App;
