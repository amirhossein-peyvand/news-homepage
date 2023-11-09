import "./sass/App.scss";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainContent />
      <Sidebar />
    </div>
  );
}

export default App;
