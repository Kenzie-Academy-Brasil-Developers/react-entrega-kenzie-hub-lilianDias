import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "./providers";
import { ProviderTech } from "./providers/userTech";
import { ProtectedRoutes } from "./components/protectRouts";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider>
        <ProviderTech>
          <Routes>
            <Route index path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/home" element={<HomePage />} />
            </Route>
          </Routes>
        </ProviderTech>
      </Provider>
    </div>
  );
};

export default App;
