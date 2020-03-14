import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component {
  state = {
    topRated: null,
    popluar: null,
    airingToday: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popluar }
      } = await tvApi.popluar();
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();

      this.setState({ topRated, popluar, airingToday });
    } catch {
      this.setState({ error: "Error Message" });
    } finally {
      this.setState({ loading: false });
    }
  }

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
