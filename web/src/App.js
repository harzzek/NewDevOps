import './App.css';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
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

export default App;
