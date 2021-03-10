import React, { useEffect, useState } from "react";
import AlbumCard from "../commons/AlbumCard";
import { Row } from "antd";

function LandingPage() {
  const [musicChart, setMusicChart] = useState([]);
  const url = `https://itunes.apple.com/us/rss/topalbums/limit=100/json`;

  useEffect(() => {
    fetchMusicChart(url);
  }, []);

  const fetchMusicChart = (url) => {
    fetch(url)
      .then((res) => {
        try {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(res);
          }
        } catch (err) {
          console.log("error!:", err.message);
        }
      })
      .then((resJson) => {
        setMusicChart(resJson.feed.entry);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ width: "100%", margin: "0" }}>
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>Music Chart TOP100</h2>
        <hr />

        {/* Movie Grid Cards */}

        <Row gutter={[16, 16]}>
          {musicChart &&
            musicChart.map((music, index) => (
              <React.Fragment key={index}>
                <AlbumCard
                  rank={index + 1}
                  albumImage={
                    music["im:image"].length ? music["im:image"][2].label : null
                  }
                  musicId={music["id"].attributes["im:id"]}
                  musicName={music["im:name"].label}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default LandingPage;
