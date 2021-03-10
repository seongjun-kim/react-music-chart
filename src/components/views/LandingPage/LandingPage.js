import React, { useEffect, useState } from "react";
import { API_URL } from "../../Config";
import AlbumCard from "../commons/AlbumCard";
import { Row } from "antd";

function LandingPage({ type }) {
  const [musicChart, setMusicChart] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  let title = "Music Chart TOP100";

  switch (type) {
    case "name":
      title = "Names of TOP100";
      break;
    case "release":
      title = "Release date of TOP100";
      break;

    default:
      break;
  }

  useEffect(() => {
    fetchMusicChart(API_URL);
  }, []);

  useEffect(() => {
    setMusicChart([...musicChart.reverse()]);
  }, [sortAsc]);

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
        let result = [];
        switch (type) {
          case "name":
            result = resJson.feed.entry.sort((a, b) => {
              return a["im:name"].label.localeCompare(b["im:name"].label);
            });
            break;
          case "release":
            result = resJson.feed.entry.sort((a, b) => {
              return a["im:releaseDate"].label.localeCompare(
                b["im:releaseDate"].label
              );
            });
            break;
          default:
            result = resJson.feed.entry.map((e, index) => {
              e.rank = index + 1;
              return e;
            });
            break;
        }

        setMusicChart(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ width: "100%", margin: "0" }}>
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>
          {title}
          {sortAsc ? (
            <i class="fas fa-sort-up" onClick={() => setSortAsc(!sortAsc)} />
          ) : (
            <i class="fas fa-sort-down" onClick={() => setSortAsc(!sortAsc)} />
          )}
        </h2>
        <hr />
        <Row gutter={[16, 16]}>
          {musicChart &&
            musicChart.map((music, index) => (
              <React.Fragment key={index}>
                <AlbumCard
                  rank={type ? 0 : music.rank}
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
