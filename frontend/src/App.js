import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/register' element={<Register/>}/>

      </Routes>
     </Router>
    </div>
  );
}

export default App;
