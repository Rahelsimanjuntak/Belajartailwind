import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/login"
import Home from "./routes/home"
import Comments from "./routes/comment"
import User from "./routes/user"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="home" element={<Home />} />
        <Route path="comment" element={<Comments />} />
        <Route path="user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;