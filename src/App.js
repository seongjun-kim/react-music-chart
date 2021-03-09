import React, { Component } from "react";
import "./App.css";
import MusicChart from "./MusicChart";

class App extends Component {
  state = {};

  componentDidMount() {
    this._getMusicChart();
  }

  _renderMusicChart = () => {
    const musicChart = this.state.musicChart.map((data, index) => {
      return <MusicChart rank={index + 1} musicData={data} />;
    });
    return musicChart;
  };

  _getMusicChart = async () => {
    const musicChart = await this._callApi();
    this.setState({
      musicChart,
    });
  };

  _callApi = () => {
    return fetch(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
      .then((res) => {
        try {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(res);
          }
        } catch (err) {
          console.log("error!:", err.message);
          // return WHATEVER_YOU_WANT_TO_RETURN;
        }
      })
      .then((resJson) => {
        return resJson.feed.entry;
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { musicChart } = this.state;
    return (
      <div className={musicChart ? "App" : "App-loading"}>
        {musicChart ? this._renderMusicChart() : "Loading ..."}
      </div>
    );
  }
}

export default App;
