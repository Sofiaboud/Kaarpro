import styled from 'styled-components';

const SMarques = styled.div`
  background-color: #1e2225;
  .logo {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 30px 0;
  }

  @media (max-width: 700px) {
    width: 100vh;

    .logo img {
      margin-right: 1.5%;
      height: 9%;
      width: 9%;
    }
  }
`;

export default SMarques;
