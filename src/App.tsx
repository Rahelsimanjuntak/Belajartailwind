import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/login";
import Home from "./routes/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="comment" element={<Comments />} />
        <Route path="user" element={<User />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
