import './App.css';
import Home from './components/Home/Home';
import SpecPage from './components/SpecPage/SpecPage';
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<SpecPage/>}/>
      </Routes>
      
      {/* <SpecPage /> */}
    </div>
  );
}

export default App;
