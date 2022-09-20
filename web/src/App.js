import './App.css';
import {Routes, Route} from "react-router-dom";
import {AppBar, Button, Link, Toolbar, Typography} from "@mui/material";

function App() {
  return (
    <div>
        <Header/>
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

const Settings = () => {
    return <div>
        <h1>Settings</h1>
    </div>
}

const Trials = () => {
    return <div>
        <h1>trials</h1>
    </div>
}

const Homepage = () => {
    return <div>
        <h1>Homepage</h1>
    </div>
}

const Login = () => {
    return <div>
        <h1>Login</h1>
    </div>
}

 const About = () => {
     return <div>
         <h1>Hi</h1>
     </div>
 }

 const Home= () => {
        return <div>
            <h1>Home</h1>
        </div>
 }

 const Header = () => {
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
