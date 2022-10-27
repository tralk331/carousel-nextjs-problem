import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";
import { ReactNode } from "react";

const Slide = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ backgroundColor: "lightblue", height: "400px" }}>{children}</Box>
  );
};
export default function Home() {
  return (
    <Box>
      <Carousel
        align={"center"}
        slideGap={16}
        slideSize={"80%"}
        height={400}
        containScroll="trimSnaps"
      >
        <Carousel.Slide>
          <Slide>Slide1</Slide>
        </Carousel.Slide>
        <Carousel.Slide>
          <Slide>Slide2</Slide>
        </Carousel.Slide>
        <Carousel.Slide>
          <Slide>Slide3</Slide>
        </Carousel.Slide>
      </Carousel>
    </Box>
  );
}
