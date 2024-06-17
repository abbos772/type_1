import "./Home.css";
import hero from "./img/Frame 8.png";
import women from "./img/Снимок экрана 2024-06-15 194507.png";
import women2 from "./img/Rectangle 5.png";
import Product from "../Products/Product";

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <img src={hero} alt="" />
      </div>
      <div className="women">
        <div className="women_text">
          <h1>Seedra helps to grow fast and efficient</h1>
          <p>
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George
          </p>
          <p>
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
            Spinach common culinary uses: salads, soups, smoothies, lasagne,
            pizza, pies, risotto, and more
          </p>
          <p>
            Proudly sourced in the USA - our garden seeds are grown, harvested,
            and packaged in the USA. We support local farmers and are happy to
            produce this American-made product
          </p>
        </div>
        <div className="women_img">
          <img src={women} alt="" />
        </div>
      </div>
      <div className="womenn">
        <div className="women_img">
          <img src={women2} alt="" />
        </div>
        <div className="women_text">
          <h1>Our story</h1>
          <p>
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George
          </p>
          <p>
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
            Spinach common culinary uses: salads, soups, smoothies, lasagne,
            pizza, pies, risotto, and more
          </p>
          <p>
            Proudly sourced in the USA - our garden seeds are grown, harvested,
            and packaged in the USA. We support local farmers and are happy to
            produce this American-made product
          </p>
        </div>
      </div>
      <div className="product_flex">
        <h3>Meet our team</h3>
        <Product />
      </div>
    </div>
  );
};

export default Home;
