
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/home';

function App() {
  return (
    <div>
                        
 <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/viewbooks" element={<books />}></Route>
        <Route path="/viewcategories" element={<category />}></Route>
        <Route path="/viewauthors" element={<authors />}></Route>
        <Route path="/viewbookdtls" element={<bookdetail />}></Route> */}



      </Routes>
    </div>
  );
}


export default App;