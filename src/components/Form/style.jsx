import styled from 'styled-components';

const SForm = styled.div`
  background-color: #f6f6f6;
  margin-top: -10%;
  font-family: 'Oswald', sans-serif;
  line-height: 1;

  a {
    color: red;
  }
  h1,
  h3 {
    color: #3f3f3f;
    font-weight: 300;
  }
  .column {
    width: 50%;
  }
  h1 {
    font-size: 40px;
    margin-bottom: 5px;
  }

  h3 {
    margin-bottom: 30px;
  }
  .containe {
    align-content: stretch;
    justify-content: space-around;
    align-items: center;
    display: flex;
    background-color: white;
    margin-right: 10%;
    margin-left: 10%;
    padding-bottom: 0;
    padding: 4%;
    margin-bottom: 0;
  }

  form {
    color: #3f3f3f;
    font-weight: normal;
  }
  div {
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 3%;
  }
  input {
    padding: 3px;
    width: 60%;
  }

  textarea {
    width: 60%;
    height: 25vh;
    padding: 3px;
    resize: none;
  }
  iframe {
    margin-bottom: 30px;
    margin-top: 50px;
  }

  button {
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    font-weight: 200;
    padding: 5px;
    border: none;
    border-radius: 2%;
    background-color: #f6f6f6;
  }

  button:hover {
    background-color: #ff000040;
  }

  .sent {
    padding: 3%;
    font-size: 25px;
    background-color: #111f2b;
  }

  .invalid {
    color: red;
  }
`;

export default SForm;
