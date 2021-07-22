import styled from 'styled-components';

const SBarNav = styled.header`
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  background: #076da865;
  color: #ffffff;
  height: 10%;

  a {
    color: white;
  }
  li:hover {
    background-color: #076da89e;
  }

  .title {
    font-size: 20px;
  }

  nav {
    display: flex;
    justify-content: space-around;
    font-size: large;
  }
  li {
    text-decoration: none;
    display: inline-flex;
    margin-left: 5px;
    margin-right: 5px;
    font-family: Lucida Grande, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.2;
    color: white;
  }

  @media (max-width: 700px) {
    width: 100vh;
  }
`;

export default SBarNav;
