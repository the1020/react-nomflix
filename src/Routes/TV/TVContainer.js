import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    topRated: null,
    popluar: null,
    airingToday: null,
    error: null,
    loading: true
  };

  render() {
    const { topRated, popluar, airingToday, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popluar={popluar}
        airingToday={airingToday}
        error={error}
        loading={loading}
      ></TVPresenter>
    );
  }
}
