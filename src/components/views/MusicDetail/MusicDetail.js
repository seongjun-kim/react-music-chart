import React, { useEffect, useState } from "react";
import { API_URL } from "../../Config";
import MusicInfo from "./Sections/MusicInfo";

function MusicDetail(props) {
  const musicId = props.match.params.musicId;
  const [Music, setMusic] = useState(null);
  const [LoadingForMovie, setLoadingForMovie] = useState(true);

  const fetchDetailInfo = (url) => {
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
        const result = resJson.feed.entry.find((e) => {
          if (e["id"].attributes["im:id"] === musicId) return e;
        });
        setMusic(result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDetailInfo(API_URL);
  }, []);

  return (
    <div>
      <div style={{ width: "85%", margin: "1rem auto" }}>
        {Music ? <MusicInfo music={Music} /> : <div>loading...</div>}
        <br />
      </div>
    </div>
  );
}

export default MusicDetail;
