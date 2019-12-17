import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 3rem 4rem;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 600;
  max-width: 760px;
  margin: 0 auto;
  label {
    display: block;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    color: ${props => props.theme.red};
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.8rem;
    font-size: 1.5rem;
    border: 1px solid ${props => props.theme.blue};
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
    }
  }
  button,
  input[type='submit'] {
    width: 100%;
    background: ${props => props.theme.red};;
    color: white;
    border: 0;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem;
    cursor: pointer;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 0.5rem;
      content: '';
      display: block;
      background-image: linear-gradient(90deg, rgba(255,95,109,1) 25%, rgba(255,195,113,1) 71%);
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  .login, .signup {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 2rem;
    button {
      width: auto;
      background: rgba(0, 0, 0, 0.02);
      padding: 0.2rem 1rem;
      border: 1px solid ${props => props.theme.black};
      font-weight: normal;
    }
  }
`;

export default Form;