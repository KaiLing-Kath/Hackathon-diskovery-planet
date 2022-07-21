import React from "react";
import { useState, useEffect } from "react";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=vSMjD6A6v3rkh9btQVwMrbMJ0Xr4K07nhckq86HV"
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div>
      <img src={photoData.url} alt={photoData.title} />
      <div>
        <h1>{photoData.title}</h1>
        <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
      </div>
    </div>
  );
}
