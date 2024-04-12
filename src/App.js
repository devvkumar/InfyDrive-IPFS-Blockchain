import './App.css';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Store1 from './Store/Store1';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      {/* <Store1/> */}
      {/* <Content/>
      <Footer/> */}


      <Router>
      <Routes>
        <Route exact path="/" element={<Content/>}>
        </Route>
        <Route exact path="/Store1" element={<Store1/>}>
        </Route>
      </Routes>
      {/* <Footer/> */}
    </Router>
    </>
  );
}

export default App;
