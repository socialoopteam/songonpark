import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function CarouselRoom(props) {
  return (
    <Carousel>
      {props.images.map((m, k) => (
        <div key={k}>
          <img src={m} alt={m}/>
        </div>
      ))}
    </Carousel>
  );
}
