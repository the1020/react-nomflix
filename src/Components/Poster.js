import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div``;

const ImageContainer = styled.div`
  position: relative;
  &:hover {
    border: 2px solid #084177;
  }
`;

const Image = styled.img`
  width: 100%;
  &:hover {
    filter: brightness(65%);
  }
`;

const Rating = styled.div`
  visibility: hidden;
  position: absolute;
  top: 90%;
  left: 70%;
  ${ImageContainer}:hover & {
    visibility: visible;
  }
`;

const Title = styled.div`
  margin-bottom: 6px;
  margin-top: 6px;
`;

const Year = styled.span`
  color: #4d4d4d;
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + imageUrl}
        ></Image>
        <Rating>{rating}/10</Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
