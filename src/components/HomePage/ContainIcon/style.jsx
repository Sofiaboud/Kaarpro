import styled from 'styled-components';

const SContainIcon = styled.div`
  font-family: 'Oswald', sans-serif;
  background-color: #363d43;
  padding: 90px 0;
  .containicon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    align-self: center;
  }
  .column {
    line-height: 3.4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 25%;
  }
  h2 {
    color: #e53935;
    font-weight: 300;
  }
  p {
    font-size: 20px;
    color: #a5a5a5;
    line-height: 18px;
    font-weight: 300;
  }

  @media (max-width: 700px) {
    width: 100vh;
    .column img {
      width: 95%;
    }
  }
`;

export default SContainIcon;
