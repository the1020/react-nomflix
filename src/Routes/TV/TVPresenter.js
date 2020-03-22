import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => (
  <>
    <Helmet>
      <title>Show | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated">
            {topRated.map(show => (
              <Poster
                id={show.id}
                title={show.name}
                rating={show.vote_average}
                imageUrl={show.poster_path}
              ></Poster>
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                rating={show.vote_average}
                imageUrl={show.poster_path}
              ></Poster>
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="AiringToday Movies">
            {airingToday.map(show => (
              <Poster
                id={show.id}
                title={show.name}
                rating={show.vote_average}
                imageUrl={show.poster_path}
              ></Poster>
            ))}
          </Section>
        )}
        {error && <Message text={error} color="#eb4034"></Message>}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
