import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { GlobalStyle } from "./styles/global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route index path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
