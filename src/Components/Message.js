import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${props => props.color};
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  text: propTypes.string.isRequired,
  color: propTypes.string.isRequired
};

export default Message;
