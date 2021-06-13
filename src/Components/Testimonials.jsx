import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import TestimonialCard from "./TestimonialCard";
import "./testimonials.css";
import Test from "../Images/Group 86.png";
import sideleaf from "../Images/sideleaf.png";

const items = [
  <TestimonialCard
    testimony="Thank you for all the amazing produce and products you deliver each week…
    you make my life so easy an bring goodness into our family eating. 
    I’ve been roasting a lot of brussel sprouts and"
    image="https://randomuser.me/api/portraits/men/32.jpg"
    name="John Doe"
    work="Freelancer"
    data-value="1"
  />,
  <TestimonialCard
    testimony="Thank you for all the amazing produce and products you deliver each week…
    you make my life so easy an bring goodness into our family eating. 
    I’ve been roasting a lot of brussel sprouts and"
    image="https://randomuser.me/api/portraits/men/42.jpg"
    name="Wen Will"
    work="Designer"
    data-value="2"
  />,
  <TestimonialCard
    testimony="Thank you for all the amazing produce and products you deliver each week…
    you make my life so easy an bring goodness into our family eating. 
    I’ve been roasting a lot of brussel sprouts and"
    image="https://randomuser.me/api/portraits/women/32.jpg"
    name="San Mary"
    work="Store owner"
    data-value="3"
  />,
  <TestimonialCard
    testimony="Thank you for all the amazing produce and products you deliver each week…
    you make my life so easy an bring goodness into our family eating. 
    I’ve been roasting a lot of brussel sprouts and"
    image="https://randomuser.me/api/portraits/women/76.jpg"
    name="Doe Lisa"
    work="CEO"
  />,
  <TestimonialCard
    testimony="Thank you for all the amazing produce and products you deliver each week…
    you make my life so easy an bring goodness into our family eating. 
    I’ve been roasting a lot of brussel sprouts and"
    image="https://randomuser.me/api/portraits/men/51.jpg"
    name="Doe Den"
    work="Marketer"
  />
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1000: { items: 1 }
};

export default function App() {
  return (
    <>
      <img src={sideleaf} alt="sideImage" className="sideleaf" />
      <div className="testimonial-container">
        <img src={Test} alt="image" />
        <AliceCarousel mouseTracking items={items} responsive={responsive} />
      </div>
    </>
  );
}
