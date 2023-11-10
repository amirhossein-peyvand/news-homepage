import "../sass/MainContent.scss";
import imageWeb3Mobile from "../assets/image-web-3-mobile.jpg";
import imageWeb3Desktop from "../assets/image-web-3-desktop.jpg";
import { useMediaQuery } from "react-responsive";

const MainContent = () => {
  const isGreaterThan768px = useMediaQuery({ query: "(min-width:1000px)" });

  return (
    <article className="mainContent">
      <section className="mainImageContainer">
        {isGreaterThan768px ? (
          <img src={imageWeb3Desktop} alt="imageWeb3Desktop" />
        ) : (
          <img src={imageWeb3Mobile} alt="imageWeb3Mobile" />
        )}
      </section>
      <section className="content">
        <h1 className="title">The Bright Future of Web 3.0?</h1>
        <div>
          <p className="desc">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="readMoreBtn">Read more</button>
        </div>
      </section>
    </article>
  );
};

export default MainContent;
