import React from "react";
import { Link } from "react-router-dom";

export default function POTD() {
  return (
    <div>
      <Link to="/nasaphoto">Picture of The Day</Link>
      <Link to="/forum">Forum</Link>
    </div>
  );
}
