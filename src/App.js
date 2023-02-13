import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import Navbar from "./Components/Navbar";



function App() {
  return (
    
    
    <Router>
      <Navbar></Navbar>
    
    <div className="max-w-screen-md mx-auto pt-20">
   
    
     <Routes>

      <Route path="/" element={  <Home></Home> }> </Route>
      <Route path="/About" element={ <About></About>  }> </Route>
      <Route path="/Article/:name" element={  <Article></Article> }> </Route>
      <Route path="/ArticlesList" element={  <ArticlesList></ArticlesList> }> </Route>
      
    
     </Routes>
   
    </div>

    </Router>
  );
}

export default App;
