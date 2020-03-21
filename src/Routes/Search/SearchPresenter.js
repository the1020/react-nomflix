import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Seacrh Movie or TV Shows..."
          value={searchTerm}
          onChange={updateTerm}
        ></Input>
      </Form>
      {movieResults && movieResults.length > 0 && (
        <Section title="Movie Result">
          {movieResults.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {tvResults && tvResults.length > 0 && (
        <Section title="TV Show Result">
          {tvResults.map(show => (
            <span key={show.id}>{show.name}</span>
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#eb4034"></Message>}
      {movieResults &&
        movieResults.length === 0 &&
        tvResults &&
        tvResults.length === 0 && (
          <Message text="Not Found" color="#d1d1d1"></Message>
        )}
    </Container>
  );

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
