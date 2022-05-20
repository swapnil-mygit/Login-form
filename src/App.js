import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import LoginDemo from './components/Demo/LoginDemo';
import SignupDemo from './components/Demo/SignupDemo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/logindemo' element={<LoginDemo/>}></Route>
          <Route path='/signupdemo' element={<SignupDemo/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
