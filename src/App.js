import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import GetPets from './components/Animals/GetPets';
import PostAnimal from './components/Animals/PostAnimal';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/'>
            <Route path='pets' Component={GetPets}/>
            <Route path='post-pet' Component={PostAnimal}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
