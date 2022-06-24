import React from "react";
import Boost from "./component/Boost";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import ShortlyInput from "./component/ShortlyInput";

const App = () => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section className="hero">
        <Hero />
      </section>
      <section className="shorten">
        <ShortlyInput />
        <section className="Container Card-Info">
          <h3>Advanced Statistics</h3>
          <p>
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </p>
          <article>
            <Cards
              title="Brand Recognition"
              classNameB="card-1"
              para="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. "
              img_url="./images/icon-brand-recognition.svg"
            />
            <div className="line"></div>
            <Cards
              title="Detailed Records"
              classNameB="card-2"
              para="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.  "
              img_url="./images/icon-detailed-records.svg"
            />
            <div className="line"></div>
            <Cards
              title="Fully Customizable"
              classNameB="card-3"
              para="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              img_url="./images/icon-fully-customizable.svg"
            />
          </article>
        </section>
      </section>
      <section className="boost_section">
        <Boost />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
