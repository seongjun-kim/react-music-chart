import React from "react";
import { Descriptions } from "antd";

function MovieInfo(props) {
  let { music } = props;

  return (
    <>
      <img
        style={{ width: "300px", height: "300px" }}
        src={music["im:image"].length ? music["im:image"][2].label : null}
        alt={music["im:name"].label.concat("image")}
      />
      <Descriptions title={music["im:name"].label} bordered>
        <Descriptions.Item label="Title">{music.title.label}</Descriptions.Item>
        <Descriptions.Item label="Name">
          {music["im:name"].label}
        </Descriptions.Item>
        <Descriptions.Item label="Release Date">
          {music["im:releaseDate"].label}
        </Descriptions.Item>
        <Descriptions.Item label="Rights">
          {music.rights.label}
        </Descriptions.Item>
        {/* <Descriptions.Item label="runtime">{music.runtime}</Descriptions.Item> */}
      </Descriptions>
    </>
  );
}

export default MovieInfo;
