import React from "react";
import "./StartQuizz.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function StartQuizz() {
  return (
    <div className="StartQuizzStyle">
      <button className="MiniQuizzButton">
        <Link className="StartQuizzLink" to="/miniquizz" activestyle="true">
          Mini Quizz
        </Link>
      </button>
    </div>
  );
}
