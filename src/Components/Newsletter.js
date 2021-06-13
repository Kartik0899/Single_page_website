import React from "react";
import "../styles.css";

export default function Newsletter() {
  return (
    <div className="News">
      <section>
        <h1>Subscribe to Our Newsletter</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <input
            type="text"
            placeholder="Enter your email address"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.11)" }}
          />
          <button
            style={{
              textAlign: "center",
              backgroundColor: "#00dbd0",
              padding: "13px 47.5px 24px",
              borderRadius: "30px"
            }}
          >
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
