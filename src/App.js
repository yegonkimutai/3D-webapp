import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
