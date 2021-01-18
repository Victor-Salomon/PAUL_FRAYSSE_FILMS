import BackgroundSlider from "react-background-slider";
import {
  bardenaslp,
  constancelp,
  indonesialp,
  natninlp,
  panamalp,
  shockabsorberlp,
  tahitilp,
} from "./Images/MainCarousel/Images";

const Slider = () => {
  return (
    <BackgroundSlider
      images={[
        bardenaslp,
        constancelp,
        indonesialp,
        natninlp,
        panamalp,
        shockabsorberlp,
        tahitilp,
      ]}
      duration={10}
      transition={2}
    />
  );
};

export default Slider;
