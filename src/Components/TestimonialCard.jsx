import React from "react";
import "./testimonials.css";

export default function TestimonialCard({
  testimony,
  image,
  name,
  work,
  ...rest
}) {
  return (
    <div className="testimonial-card" {...rest}>
      <div className="testimonial-image">
        <img src={image} alt="testimonial" />
        <div className="testimonial-details">
          <p>{name}</p>
          <p>{work}</p>
        </div>
      </div>
      <div className="testimonial-body">{testimony}</div>
    </div>
  );
}
