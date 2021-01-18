import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import {
  bardenaslp,
  constancelp,
  indonesialp,
  natninlp,
  panamalp,
  shockabsorberlp,
  tahitilp,
} from "./Images/MainCarousel/Images";
// import Header from "./Header";
import Slider from "./Background";
// import RSociaux from "./Sociaux";

const items = [
  {
    src: { bardenaslp },
    alt: "shooting-photo-bardenas-Paul-Fraysse-Photographe",
  },
  {
    src: { constancelp },
    alt: "shooting-photo-constance-Paul-Fraysse-Photographe",
  },
  {
    src: { indonesialp },
    alt: "shooting-photo-indonesie-Paul-Fraysse-Photographe",
  },
  {
    src: { natninlp },
    alt: "shooting-photo-Nat&Nin-Paul-Fraysse-Photographe",
  },
  {
    src: { panamalp },
    alt: "shooting-photo-panama-Paul-Fraysse-Photographe",
  },
  {
    src: { shockabsorberlp },
    alt: "shooting-photo-shock-absorber-Paul-Fraysse-Photographe",
  },
  {
    src: { tahitilp },
    alt: "shooting-photo-tahiti-Paul-Fraysse-Photographe",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i.alt}
      >
        <img src={i.src} alt={i.alt} />
      </CarouselItem>
    );
  });

  return (
    <>
      <Slider />

      {/* <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        {/* <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      /> 
      </Carousel> */}
    </>
  );
};

export default Home;
