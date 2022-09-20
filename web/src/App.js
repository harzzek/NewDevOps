import './App.css';
import {Routes, Route} from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@mui/material";

function App() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
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
