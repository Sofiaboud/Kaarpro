import styled from 'styled-components';

const SContain = styled.div`
  font-family: 'Oswald', sans-serif;
  background-color: #f6f6f6;
  .contain {
    display: flex;
    margin-top: 8%;
    margin-bottom: 8%;
  }
  .paragraph {
    width: 36%;
    line-height: 1.4;
  }
  h1 {
    color: #3f3f3f;
    font-weight: 300;
    font-size: 36px;
    margin-top: 20px;
    margin-bottom: 10px;
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
  }
  img {
    width: 213px;
    height: 234px;
    margin: 39px auto;
  }
  .widget {
    width: 20vw;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
  }
  @media (max-width: 700px) {
    width: 100vh;

    img {
      width: 182px;
      height: 210px;
      margin: 144px auto;
    }

    .widget {
      height: 190px;
      margin-top: 18%;
      margin-left: 5%;
    }
  }
`;

export default SContain;
