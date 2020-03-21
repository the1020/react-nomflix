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
  height: 180px;
  &:hover {
    filter: brightness(60%);
    transition: opacity 0.3s linear;
  }
`;

const NoImage = styled.div`
  width: 125px;
  height: 187px;
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
  <Link key={id} to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        {imageUrl === null ? (
          <NoImage src="" />
        ) : (
          <Image src={"https://image.tmdb.org/t/p/w500/" + imageUrl}></Image>
        )}
        <Rating>{rating}/10</Rating>
      </ImageContainer>
      <Title>
        {title.length > 10 ? `${title.substring(0, 15)}...` : title}
      </Title>
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
