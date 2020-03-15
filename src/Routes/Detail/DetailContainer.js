import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push },
      location: { pathname }
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      push("/");
      return;
    }

    const { isMovie } = this.state;
    let result;
    if (isMovie) {
      const request = await moviesApi.movieDetail(parsedId);
      result = request.data;
    } else {
      const request = await tvApi.showDetail(parsedId);
      result = request.data;
    }

    console.log(result);
  }

  render() {
    const { result, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
      ></DetailPresenter>
    );
  }
}
