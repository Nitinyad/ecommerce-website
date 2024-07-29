import './App.css';
// import {Router, Route} from ''
import {
  BrowserRouter as Router,
  Routes , 
  Route,
} from 'react-router-dom'
import Pay from './Pay'; // Assuming Pay is a custom component
import Success from './Success.jsx'; // Assuming Success is a custom component

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/pay' element={<Pay/>}/>
        <Route path='/success' element={<Success/>} />
      </Routes>
    </Router>
  );
}

export default App;
