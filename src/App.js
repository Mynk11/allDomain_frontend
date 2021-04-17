import "./App.css";
import Routes from "./route";
import { BrowserRouter } from "react-router-dom";
function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes {...props} />
      </BrowserRouter>
    </div>
  );
}

export default App;
