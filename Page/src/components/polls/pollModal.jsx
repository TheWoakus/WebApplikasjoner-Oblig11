import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { StyledForm, StyledInput, StyledFormButton } from '../../styled/Styled';

const ModalContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const ModalHeader = styled.div`
  height: 10%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AnswerContainer = styled.ul`
  width: 100%;
`;

const AnswerItem = styled.li``;

const PollModal = ({ handleClose, current, list }) => {
  const [Answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [Question, setQuestion] = useState('PlaceHolder');
  const [Answers, setAnswers] = useState([]);
  const [AnswersFilled, setAnswersFilled] = useState(false);
  const [RunningNumber, setRunningNumber] = useState(0);



  const submitForm = () => {
    console.log('submit');

    const postData = async () => {
      const uri = `http://localhost:1337/api/v1/polls/${current[0][0]}`;

      try {
        const response = await Axios.put(uri, {
          title: current[0][1].title,
          question: current[0][1].question,
          answers: current[0][1].answers,
        });
        if (response.status === 200) {
          setError('');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    postData();
    handleClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (localStorage.getItem('Username') !== null && Answer.length > 0) {
      current[0][1].answers.push({
        answer: Answer,
        user: localStorage.getItem('Username'),
      });

      submitForm();
    } else {
      setError('Not logged in or answer empty');
      console.log(current[0][1].answers);
    }
  };

  const handleChangeAnswer = (event) => {
    setAnswer(event.target.value);
  };

  useEffect(() => {
    if (current[0] !== undefined) {
      setQuestion(current[0][1].question);
      if (current[0][1].answers.length > 0) {
        setAnswers(current[0][1].answers);
        setAnswersFilled(true);
        console.log(Answers[0]);
      }
    }
  });

  const updateRunning = () => {
    setRunningNumber(RunningNumber + 1);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <h2>Poll</h2>
          <span onClick={handleClose}>Close</span>
        </ModalHeader>
        <StyledForm onSubmit={handleSubmit}>
          <p>Question:</p>
          <p>{Question}</p>
          <StyledInput
            type="text"
            placeholder="Answer"
            name="content"
            onChange={handleChangeAnswer}
            values={Answer}
          />

          <StyledFormButton type="submit">Submit</StyledFormButton>
        </StyledForm>
        {error && <p>{error}</p>}
        <AnswerContainer>
          {AnswersFilled &&
            Answers.map((answer) => (
              <AnswerItem key={answer.answer + answer.user}>{answer.answer} - {answer.user}</AnswerItem>
            ))}
        </AnswerContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default PollModal;
