import './App.css';
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Search from './components/Search';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="app">

      <Router>
        <Routes>

          <Route path='/' element={<><Home /></>} />

          <Route path='/search' element={<><Search hideButtons/><SearchPage /></>} />

        </Routes>
        
      </Router>

    </div>
  );
}

export default App;
