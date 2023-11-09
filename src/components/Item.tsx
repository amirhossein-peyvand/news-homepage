import "../sass/Item.scss";

interface Props {
  desc: string;
  image: string;
  number: string;
  title: string;
}

const Item = ({ desc, image, number, title }: Props) => {
  return (
    <article className="item">
      <div className="imageContainer">
        <img src={image} alt={image} />
      </div>
      <div className="contents">
        <span>{number}</span>
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </article>
  );
};

export default Item;
