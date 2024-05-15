import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/test' element={<Test/>}/>


      </Routes>
     </Router>
    </div>
  );
}

export default App;
