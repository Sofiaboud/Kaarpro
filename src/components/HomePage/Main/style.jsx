import styled from 'styled-components';

const SMain = styled.div`
  color: white;
  font-size: 25px;
  line-height: 2;
  .hello {
    background: url('/image/header.jpg') no-repeat center;
    display: flex;
    align-content: center;
    align-items: center;
    height: 100vh;
  }

  .txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 12%;
    margin-right: 12%;
    margin-top: 20vh;
  }

  .devis {
    padding: 11px;
    margin-bottom: 43%;
    color: white;

    width: 22vh;
    border-radius: 13px;
    background-color: #ff000073;
  }

  .devis:hover {
    background-color: red;
  }
  @media (max-width: 700px) {
    width: 100vh;

    .txt {
      margin-top: 20vh;
    }
  }
`;

export default SMain;
