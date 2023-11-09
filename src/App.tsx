import "./sass/App.scss";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import ItemsContainer from "./components/ItemsContainer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainContent />
      <Sidebar />
      <ItemsContainer />
    </div>
  );
}

export default App;
