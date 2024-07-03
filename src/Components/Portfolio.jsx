/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Currency Converter",
    description:
      "This project is a currency converter built using HTML, CSS, JavaScript, and an API to fetch currency codes and flags for respective countries. Features: Convert between different currencies using real-time exchange rates. View flags and currency codes for each country.",
    url: "https://github.com/abhi231210003/CureencyConverter",
  },
  {
    title: "Rock-paper-scissors",
    description:
      "This is Rock-paper-scissors game made by me to sharpen my skills in frontend development.",
    url: "https://github.com/abhi231210003/Rock-paper-scissors",
  },
  {
    title: "Tic-Tac-Toe-Game",
    description:
      "This is Tic-Tac-Toe game made by me in JavaScript to sharpen my skills.",
    url: "https://github.com/abhi231210003/Tic-Tac-Toe-Game",
  },
  {
    title: "Tic-Tac-Toe-using-c",
    description:
      "This is Tic-Tac-Toe game made by me in c language to sharpen my skills.",
    url: "https://github.com/abhi231210003/Tic-Tac-Toe-using-c",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
