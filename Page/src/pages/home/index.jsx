import React from 'react';
import styled from 'styled-components';
import PollItemList from '../../components/polls/pollItemList';

const Heading = styled.h1`
  font-size: 3rem;
`;

const PollContainer = styled.div`
  width: 100%;
  border-top: 1px solid black;
  display: flex;
  flex-flow: row wrap;
`;

const Home = () => (
  <>
    <Heading>Polls</Heading>
    <PollContainer>
      <PollItemList />
    </PollContainer>
  </>
);

export default Home;
