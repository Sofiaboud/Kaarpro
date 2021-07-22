import styled from 'styled-components';

const SGlobal = styled.div`
  font-family: 'Oswald', sans-serif;
  width: 100vw;
  .txt {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10%;
    margin-right: 10%;
  }

  a {
    text-decoration: none;
  }
  @media (max-width: 1280px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export default SGlobal;
