import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.span`
  font-size: 25px;
  font-weight: 400;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const ItemContainer = styled.div`
  margin-top: 20px;
`;

const Item = styled.span``;

const Overview = styled.p`
  margin-top: 20px;
  width: 60%;
  font-size: 11px;
  opacity: 0.8;
  line-height: 22px;
`;

const VideoList = styled.ul`
  list-style-type: require("youtubeicon.png");
`;

const VideoItem = styled.li`
  margin-bottom: 10px;
  opacity: 0.8;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
      ></Backdrop>
      <Content>
        <Cover
          bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        ></Cover>
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime
                ? `${result.runtime} min`
                : `${result.episode_run_time} min`}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genres, index) =>
                  index === result.genres.length - 1
                    ? genres.name
                    : ` ${genres.name} /`
                )}
            </Item>
            <Divider>•</Divider>
            <Item>{result.status}</Item>
            <Divider>•</Divider>
            <Item>{result.vote_average && `${result.vote_average}/10`}</Item>
            <Overview>{result.overview}</Overview>
          </ItemContainer>
          <ItemContainer>
            <VideoList>
              {result.videos.results.map(video => (
                <VideoItem key={video.id}>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.key}`}
                    target="_blank"
                  >
                    {video.name}
                  </a>
                </VideoItem>
              ))}
            </VideoList>
          </ItemContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
