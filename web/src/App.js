import './App.css';
import {Routes, Route} from "react-router-dom";
import Settings from './pages/Settings';
import Trials from './pages/Trials';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Landingpage from './pages/Landingpage';
import logo from './Logo/cropped-Final-Logo-2.png';

import {AppBar, Button, Toolbar} from "@mui/material";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
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
            <Button href={"/FirstDevOps/"}>
                <img
                    src={logo} alt={"Logo"}
                    height={50}
                />
            </Button>
            <Button color="inherit" size={"large"} href={"#/about"}>About</Button>
            <Button color="inherit" size={"large"} href={"#/signin"}>Login</Button>
            <Button color="inherit" size={"large"} href={"#/settings"}>Settings</Button>
            <Button color="inherit" size={"large"} href={"#/trials"}>Trials</Button>
        </Toolbar>
    </AppBar>
    )
}


export default App;
