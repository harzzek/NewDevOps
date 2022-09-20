import './App.css';
import {Routes, Route} from "react-router-dom";

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

export default App;
