import "../sass/Item.scss";

interface Props {
  className: string;
  desc: string;
  image: string;
  number: string;
  title: string;
}

const Item = ({ className, desc, image, number, title }: Props) => {
  return (
    <article className={`item ${className}`}>
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
