import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <router>
        <Login />
        { <SignUp />}
      </router>
    </BrowserRouter>
  );
}
export default App;
