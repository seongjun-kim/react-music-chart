import React from "react";
import { Col } from "antd";

function AlbumCard(props) {
  const { rank, musicName, albumImage, musicId } = props;

  return (
    <Col lg={6} md={8} xs={24}>
      <div
        style={{
          position: "relative",
        }}
      >
        <a href={`/music/${musicId}`} style={{ textDecoration: "none" }}>
          <h3
            style={{
              color: "black",
              height: "20px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {rank}위 {musicName}
          </h3>

          <img
            style={{ width: "100%", height: "320px" }}
            src={albumImage}
            alt={musicName}
          />
        </a>
      </div>
    </Col>
  );
}

export default AlbumCard;
