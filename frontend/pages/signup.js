import Signup from '../components/Signup';
import styled from 'styled-components';

const StyledSignUp = styled.div`
  max-width: 440px;
  margin: 0 auto;
`;

const SignupPage = props => (
  <StyledSignUp>
    <Signup />
  </StyledSignUp>

);

export default SignupPage;