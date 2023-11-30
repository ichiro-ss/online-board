import logo from "./logo.svg";
import "./App.css";
import Threads from "./Threads";

function App() {
  return (
    <div className="App">
      <header className="Online Board">
        <h1>New Threads</h1>
        <Threads />
      </header>
    </div>
  );
}

export default App;
