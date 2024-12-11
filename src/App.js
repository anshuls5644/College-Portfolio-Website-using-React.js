import './App.css';
import { BrowserRouter,Routes,   Route } from 'react-router-dom';
import Form from "./forms/form";
import Home from './Home';
import About from './components/about/about';


function App() {
  return (
    <>
   
   
   <BrowserRouter>
    <Routes>
     <Route path="/about" element={<About/>}/>
    <Route path="/forms" element={<Form/>}/>
    <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
