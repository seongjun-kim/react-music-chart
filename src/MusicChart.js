import React from "react";
import PropTypes from "prop-types";
// import "./MusicChart.css";

function MusicChart({ rank, musicData }) {
  console.log(musicData);

  return (
    <div className="MusicChart">
      <h1>
        {rank}위.{musicData["im:name"].label}
      </h1>
      <img src={musicData["im:image"][2].label} alt="albumImage" />
    </div>
  );
}

MusicChart.propTypes = {
  rank: PropTypes.string.isRequired,
  musicData: PropTypes.object.isRequired,
};

export default MusicChart;
