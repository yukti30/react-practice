import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useState } from "react";

const ProgressSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <>
      <Slider
        id="slider"
        width="50%"
        defaultValue={0}
        min={0}
        max={100}
        colorScheme="orange"
        onChange={(v) => setSliderValue(v)}
        margin={3}
      >
        <SliderMark value={0} mt="1" fontSize="sm">
          Step0
        </SliderMark>
        <SliderMark value={33} mt="1" fontSize="sm">
          Step1
        </SliderMark>
        <SliderMark value={66} mt="1" fontSize="sm">
          Step2
        </SliderMark>
        <SliderMark value={99} mt="1" fontSize="sm">
          Step3
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
};

export default ProgressSlider;
