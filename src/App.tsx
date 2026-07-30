import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/login";
import Home from "./routes/home";
import SetterPage from "./routes/setter/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/setter" element={<SetterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;