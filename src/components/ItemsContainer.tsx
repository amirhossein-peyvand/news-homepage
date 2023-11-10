import Item from "./Item";
import laptops from "../assets/image-top-laptops.jpg";
import retroPcs from "../assets/image-retro-pcs.jpg";
import gamingGrowth from "../assets/image-gaming-growth.jpg";
import "../sass/ItemsContainer.scss";

const ItemsContainer = () => {
  return (
    <section className="itemsContainer">
      <Item
        desc="What happens when old PCs are given modern upgrades?"
        image={retroPcs}
        number="01"
        title="Reviving Retro PCs"
        className="item1"
      />
      <Item
        desc="Our best picks for various needs and budgets."
        image={laptops}
        number="02"
        title="Top 10 Laptops of 2022"
        className="item2"
      />
      <Item
        desc="How the pandemic has sparked fresh opportunities."
        image={gamingGrowth}
        number="03"
        title="The Growth of Gaming"
        className="item3"
      />
    </section>
  );
};

export default ItemsContainer;
