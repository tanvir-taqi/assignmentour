
import {  BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Template from './Components/Template/Template';
import Template1 from './Components/Template/Template1';

function App() {
  return (
    <div className="min-h-[100vh] bg-[rgb(193,176,255)]">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/template' element={<Template></Template>}></Route>
          <Route path='/template1' element={<Template1></Template1>}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
