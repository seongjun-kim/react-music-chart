import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import { Row } from "antd";

function MainPage() {
  const [MusicChart, setMusicChart] = useState([]);
  useEffect(() => {
    fetch(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
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
  }, []);

  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      <h1>Music TOP 100</h1>
      <hr />
      <Row gutter={[16, 16]}>
        {MusicChart &&
          MusicChart.map((music, index) => (
            <React.Fragment key={index}>
              <AlbumCard
                rank={index + 1}
                albumImage={
                  music["im:image"]?.length ? music["im:image"][2].label : null
                }
                musicId={music["id"].attributes["im:id"]}
                musicName={music["im:name"].label}
              />
            </React.Fragment>
          ))}
      </Row>
    </div>
  );
}

export default MainPage;
