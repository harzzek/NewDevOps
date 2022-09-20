import './App.css';
import {Routes, Route} from "react-router-dom";
import Settings from './pages/Settings';
import Login from './pages/Login';
import Trials from './pages/Trials';
import About from './pages/About';


function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/homepage" element={<Homepage/>}/>
            <Route path="/trials" element={<Trials/>}/>
            <Route path="/settings" element={<Settings/>}/>
        </Routes>
    </div>
  );
}



const Homepage = () => {
    return <div>
        <h1>Homepage</h1>
    </div>
}



 const Home= () => {
        return <div>
            <h1>Home</h1>
        </div>
 }

export default App;
