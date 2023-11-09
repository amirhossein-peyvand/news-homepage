import "./sass/App.scss";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
