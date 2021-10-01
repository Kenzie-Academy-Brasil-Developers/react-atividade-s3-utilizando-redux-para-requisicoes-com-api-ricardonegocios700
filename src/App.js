import "./App.css";
import { Search } from "./components/Search/search.jsx";
import { Digimons } from "./pages/Digimons/digimons.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Digimons />
      </header>
    </div>
  );
}

export default App;
