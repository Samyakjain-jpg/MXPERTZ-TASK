import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Loader from "./Components/Loader";

function App() {
  return (
   <Router>
     <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Loader />} /> */}
    </Routes>
   </Router>
  );
}

export default App;
