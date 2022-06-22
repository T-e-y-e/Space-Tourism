import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './Styles.css';
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
       <div className="app">
         <Navbar />
       </div>
       <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/destination/*' element= {<Destination />} />
          <Route path='/destination' element= {<Navigate to="/destination/moon" />} />
          <Route path='/crew/*' element= {<Crew />} />
          <Route path='/crew' element= {<Navigate to="/crew/commander" />} />
          <Route path='/technology/*' element= {<Technology />} />
          <Route path='/technology' element= {<Navigate to="/technology/vehicle" />} />
          <Route path='*' element= {<NotFound />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
