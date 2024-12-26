import logo from './logo.svg';
import './App.css';
import Login from './screens/login';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/home';


function App() {
  return (
   <div>

<Routes>
<Route path='/' element={<Login />} />
<Route path='home' element={<Home />} />


</Routes>
   </div>
  );
}

export default App;
