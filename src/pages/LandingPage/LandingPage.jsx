import React, { useEffect, useState } from "react";
import background from "../../assets/img/smf.png";
import Content from "./Content/Content";

const LandingPage = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
    console.log(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  return (
    <React.Fragment>
      <section className="overflow-hidden">
        <img
          src={background}
          alt="background"
          className="w-full h-fit mt-[-5rem] fixed z-[-5] "
        />

        <Content scrollTop={scrollTop} />
      </section>
    </React.Fragment>
  );
};

export default LandingPage;
