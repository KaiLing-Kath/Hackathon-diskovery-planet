import "./PlanetDescription.css";
import React, { useState } from "react";

import Modal from "../PlanetDescription_modal/index";

const PlanetDescription = () => {
  //to open popup
  const [popup, setPopup] = useState(false);
  //to indicate which planet is click
  const [index, setIndex] = useState(0);

  const planets = [
    {
      planet_name: "Sun",
      planet_id: "GSFC_20171208_Archive_e001435",
      index: 0,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/sun.png",
    },
    {
      planet_name: "Mercury",
      planet_id: "PIA11245",
      index: 1,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/mercury.png",
    },
    {
      planet_name: "Venus",
      planet_id: "PIA00257",
      index: 2,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/venus.png",
    },
    {
      planet_name: "Earth",
      planet_id: "PIA18033",
      index: 3,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/earth.png",
    },
    {
      planet_name: "Mars",
      planet_id: "PIA02165",
      index: 4,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/mars.png",
    },
    {
      planet_name: "Jupiter",
      planet_id: "PIA00343",
      index: 5,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/jupiter.png",
    },
    {
      planet_name: "Saturn",
      planet_id: "PIA05385",
      index: 6,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/saturn.png",
    },
    {
      planet_name: "Uranus",
      planet_id: "PIA18182",
      index: 7,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/uranus.png",
    },
    {
      planet_name: "Neptune",
      planet_id: "PIA01492",
      index: 8,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/neptune.png",
    },
    {
      planet_name: "Pluto",
      planet_id: "PIA20291",
      index: 9,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/pluto.png",
    },
  ];

  const handleClickOpen = (index) => {
    setPopup(true);
    setIndex(index);
  };

  return (
    <div className="description_container">
      <div className="planet_animation">
        <div className="planets">
          {planets.map((items) => (
            <input
              type="image"
              src={items.image}
              key={items.planet_name}
              alt={items.planet_name}
              onClick={() => handleClickOpen(items.index)}
            />
          ))}
        </div>

        <Modal
          popup={popup}
          setPopup={setPopup}
          index={index}
          setIndex={setIndex}
          planets={planets}
        />
      </div>
    </div>
  );
};
export default PlanetDescription;
