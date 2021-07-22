import styled from 'styled-components';

const SFooter = styled.div`
  background-color: #303a42;
  padding-top: 6%;
  padding-bottom: 6%;
  line-height: 2;

  .first {
    color: #e1e2e1;
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-right: 70px;
  }
  .adress {
    border-right: 1px solid #5b6d7c;
    width: 25%;
  }
  .list {
    border-right: 1px solid #5b6d7c;
    width: 25%;
  }
  .contact {
    border-right: 1px solid #5b6d7c;
    width: 25%;
  }
  .horaire {
    width: 25%;
    padding-left: 2%;
  }
  h1 {
    margin: 0px;
    font-family: 'Oswald', sans-serif;
    line-height: 1.5;
    font-weight: 300;
  }
  .second p {
    text-align: center;
    color: rgb(90, 100, 109);
    font-size: 18px;
  }

  @media (max-width: 700px) {
    width: 100vh;
  }
`;

export default SFooter;
