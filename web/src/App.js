import './App.css';
import {Routes, Route} from "react-router-dom";
import Settings from './pages/Settings';
import Login from './pages/Login';
import Trials from './pages/Trials';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Landingpage from './pages/Landingpage';

import {AppBar, Toolbar, Typography} from "@mui/material";

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/homepage" element={<Homepage/>}/>
            <Route path="/trials" element={<Trials/>}/>
            <Route path="/settings" element={<Settings/>}/>
        </Routes>
    </div>
  );
}


 const Navbar = () => {
    return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h4">
                Navbar
            </Typography>
        </Toolbar>
    </AppBar>
    )
}

export default App;
