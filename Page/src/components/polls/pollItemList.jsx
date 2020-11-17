import Axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PollItem from './pollItem';
import PollModal from './pollModal';

const pollItemList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [polls, setPolls] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPoll, setCurrentPoll] = useState([]);

  const ref = useRef(0);

  const toggleModal = () => {
    setModalVisible(!modalVisible);

    const modalVisibility = modalVisible ? 'block' : 'none';

    ref.current.style.display = modalVisibility;
  };

  const AnswerPoll = (key) => {
    setCurrentPoll(polls.filter((item) => item[0] === key));
    toggleModal();
  };

  const createMap = ({ data }) => Object.entries(data);

  useEffect(() => {
    toggleModal();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.get('http://localhost:1337/api/v1/polls', {
          transformResponse: createMap,
          responseType: 'json',
        });
        if (response.status === 200) {
          setPolls(response.data);
          setError('');
        }
      } catch (error) {
        setPolls([]);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div ref={ref}>
        <PollModal handleClose={toggleModal} current={currentPoll} list={polls}/>
      </div>
      {loading && 'Loading ...'}
      {error && <p>{error}</p>}

      {polls.map((poll) => (
        <PollItem
          key={poll[0]}
          title={poll[1].title}
          question={poll[1].question}
          clickFunction={() => AnswerPoll(poll[0])}
          answerNumber={poll[1].answers.length}
        />
      ))}
    </>
  );
};

export default pollItemList;
