import styled from 'styled-components';

const SSavoirFaire = styled.div`
  padding-top: 7%;
  padding-bottom: 6%;
  background-color: #f6f6f6;
  font-family: 'Oswald', sans-serif;
  line-height: 1.5;

  .savoirfaire {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  .text {
    width: 40%;
  }
  h1 {
    margin: 0px;
    color: #3f3f3f;
    font-weight: 300;
    font-size: 38px;
  }
  h4 {
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 20px;
    color: #3f3f3f;
    line-height: 18px;
    margin-bottom: 30px;
    font-weight: 300;
  }
  p {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: #575757;
    margin: 0px 0px 10px;
  }
  img {
    margin-top: 35px;
  }

  button {
    transition: 0.5s;
    font-family: 'Oswald', sans-serif;
    color: #fff;
    font-weight: 400;
    background-color: #e53935;
    font-size: 18px;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    padding: 7px 40px;
    margin: 30px auto;
  }

  button:hover {
    background-color: #333;
  }

  @media (max-width: 700px) {
    width: 100vh;

    img {
      margin-top: 62%;
      width: 95%;
    }
    .text {
      width: 56%;
    }
  }
`;

export default SSavoirFaire;
