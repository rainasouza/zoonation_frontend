import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetPets from './components/Animals/GetPets';
import PostAnimal from './components/Animals/PostAnimal';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';



function App() {
  const token = localStorage.getItem('token');

  return (
    <div>

      <Router>
<NavBar/>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/toadopt' element={<GetPets/>}/>
          {token && <Route path='/post-pet' element={<PostAnimal />} />}
          {token && <Route path='/profile' element={<Profile />} />}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
