import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ topRated, popluar, airingToday, error, loading }) =>
  null;

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popluar: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
