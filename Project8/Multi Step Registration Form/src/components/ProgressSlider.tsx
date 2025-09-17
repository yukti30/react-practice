import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  pagesValue: number; // 0, 1, 2, 3
}

const ProgressSlider = ({ pagesValue }: Props) => {
  const [sliderValue, setSliderValue] = useState(0);

  // Map page numbers to slider positions
  const pageToSliderMap = [0, 33, 66, 99];

  // ✅ Update slider when pagesValue changes
  useEffect(() => {
    setSliderValue(pageToSliderMap[pagesValue] || 0);
  }, [pagesValue]);

  return (
    <Slider
      id="slider"
      width="50%"
      value={sliderValue} // controlled by state
      min={0}
      max={99}
      colorScheme="teal"
      isReadOnly // ✅ prevents manual dragging
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
  );
};

export default ProgressSlider;
