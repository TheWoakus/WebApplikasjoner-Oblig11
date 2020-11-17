import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { StyledForm, StyledInput, StyledFormButton } from '../../styled/Styled';

const Heading = styled.h1`
  font-size: 3rem;
`;

const initalState = { title: '', question: '' };

const NewPoll = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const [Title, setTitle] = useState('');
  const [Question, setQuestion] = useState('');

  const submitForm = () => {
    console.log("submit");

    const postData = async () => {
      try {
        const response = await Axios.post(
          'http://localhost:1337/api/v1/polls',
          {
            title: Title,
            question: Question,
            answers: [],
          }
        );
        if (response.status === 200) {
          setError('');
          history.push('/home');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    postData();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeQuestion = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <>
      <Heading>New Poll</Heading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChangeTitle}
          values={Title}
        />
        <StyledInput
          type="text"
          placeholder="question"
          name="content"
          onChange={handleChangeQuestion}
          values={Question}
        />

        <StyledFormButton type="submit">Submit</StyledFormButton>
      </StyledForm>
    </>
  );
};

export default NewPoll;
