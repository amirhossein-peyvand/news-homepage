import "./sass/App.scss";
import gamingGrowth from "./assets/image-gaming-growth.jpg";
import Item from "./components/Item";
import laptops from "./assets/image-top-laptops.jpg";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import retroPcs from "./assets/image-retro-pcs.jpg";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainContent />
      <Sidebar />
      <Item
        className="item1"
        desc="What happens when old PCs are given modern upgrades?"
        image={retroPcs}
        number="01"
        title="Reviving Retro PCs"
      />
      <Item
        className="item2"
        desc="Our best picks for various needs and budgets."
        image={laptops}
        number="02"
        title="Top 10 Laptops of 2022"
      />
      <Item
        className="item3"
        desc="How the pandemic has sparked fresh opportunities."
        image={gamingGrowth}
        number="03"
        title="The Growth of Gaming"
      />
    </div>
  );
}

export default App;
