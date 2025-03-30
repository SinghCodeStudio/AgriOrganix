import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../src/MyComponents/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </>
  );
}

export default App;
