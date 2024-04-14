import HomePage from "./pages/home";
import WriteBlog from "./pages/write";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
return(
  
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/write" element={<WriteBlog />} />
      <Route path="/*" element={<HomePage />} />
      </Routes> 
  </Router>
  
)
}
export default App;