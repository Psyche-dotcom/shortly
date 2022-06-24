import React from "react";

const Hero = () => {
  return (
    <>
      <img
        src="./images/illustration-working.svg"
        alt="hero"
        className="working-img"
      />

      <div className="Container ">
        <article className="hero_text">
          <h1>
            More than just <br /> shorter links
          </h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="started-btn">Get Started </button>
        </article>
      </div>
    </>
  );
};

export default Hero;
