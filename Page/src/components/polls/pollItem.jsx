import React from 'react';
import styled from 'styled-components';

const PollItemContainer = styled.div`
  max-width: 30%;
  min-width: 30%;
  min-height: 20rem;
  border: 1px solid black;

  padding: 1rem 4rem;

  margin: 2rem 2.5%;

  flex-grow: 1;

  &:nth-child(2) {
    margin-left: 0;
  }

  &:nth-child(3n + 1) {
    margin-right: 0;
  }

  &:nth-child(5n + 0) {
    margin-left: 0;
  }

  &:hover {
    border-color: red;
  }
`;


const PollItem = ({ title, question, clickFunction , answerNumber}) => (
  <PollItemContainer
  onClick={clickFunction}>
    <h2>{title}</h2>
    <p>{question}</p>
    <p>Number of answers: {answerNumber}</p>
  </PollItemContainer>
);

export default PollItem;
