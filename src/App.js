import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import BiographyView from './views/BiographyView';
import HomeView from './views/HomeView';
import WorksView from './views/WorksView';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomeView/>}/>
      <Route path="/biography" element={<BiographyView/>}/>
      <Route path="/works" element={<WorksView/>}/>
    </Routes>
      let's build a website that shows Isabel Allende's life and works
    </>
  );
}

export default App;
