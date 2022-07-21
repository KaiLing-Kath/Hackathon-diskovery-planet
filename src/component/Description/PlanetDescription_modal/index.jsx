import "./PlanetDescription_modal.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
const api = axios.create({
  baseURL: `https://images-api.nasa.gov/`,
});

const Modal = (props) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const planets = props.planets;
  useEffect(
    (res) => {
      api
        .get("search?nasa_id=" + planets[props.index].planet_id)
        .then((res) => {
          //Path to acess planet image, name, description
          const planet_image_link_path =
            res.data?.collection?.items[0].links[0].href;
          const planet_name_path = res.data?.collection?.items[0].data[0].title;
          const planet_description_path =
            res.data?.collection?.items[0].data[0].description;
          //Update info
          setImage(planet_image_link_path);
          setName(planet_name_path);
          setDescription(planet_description_path);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [props.index]
  );

  return (
    <>
      {props.popup ? (
        <div className="popup">
          <div className="popup_header">
            <h1>Planet Info</h1>

            <button className="close_btn" onClick={() => props.setPopup(false)}>
              x
            </button>
          </div>

          <div className="description">
            <img className="planet_image" src={image} alt="Image"></img>
            <div className="planet_descripton">
              <p>{planets[props.index].planet_name}</p>
              <p>{description.slice(0, description.indexOf("Read more"))}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
