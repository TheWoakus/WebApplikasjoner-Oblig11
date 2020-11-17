import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { StyledForm, StyledInput, StyledFormButton } from '../../styled/Styled';

const Heading = styled.h1`
  font-size: 3rem;
`;

const SignUp = () => {
  const [Username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const [loggedInAs, setLoggedInAs] = useState('Not logged in');

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const submitForm = () => {
    const filteredUser = users.filter((item) => item[1].username === Username);
    if (filteredUser[0] !== undefined) {
      const user = filteredUser[0][1].username;
      localStorage.setItem('Username', user);
      setLoggedInAs(user);
    } else {
      console.log('No exist');

      const postData = async () => {
        try {
          const response = await Axios.post(
            'http://localhost:1337/api/v1/users',
            {
              username: Username,
            }
          );
          if (response.status === 200) {
            setError('');
          }
        } catch (error) {
          setError(error.message);
        }
      };
      postData();
      localStorage.setItem('Username', Username);
      setLoggedInAs(Username);
    }
  };

  const createMap = ({ data }) => Object.entries(data);

  // Ikke veldig smart å laste alle brukere for å så sjekke. burde egentlig lage en metode for dette i API-et, men hadde ikke tid...
  useEffect(() => {

    if(localStorage.getItem("Username") !== null){
        setLoggedInAs(localStorage.getItem("Username"));
    }

    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:1337/api/v1/users', {
          transformResponse: createMap,
          responseType: 'json',
        });
        if (response.status === 200) {
          setUsers(response.data);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Heading>New Poll</Heading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChangeUsername}
          values={Username}
        />

        <StyledFormButton type="submit">Logg inn/Sign up</StyledFormButton>
      </StyledForm>

      <p>Logged in as: {loggedInAs}</p>
    </>
  );
};

export default SignUp;
