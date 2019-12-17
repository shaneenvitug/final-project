import Login from '../components/Login';
import styled from 'styled-components';

const StyledLogin = styled.div`
  max-width: 440px;
  margin: 0 auto;
`;

const LoginPage = props => (
  <StyledLogin>
    <Login />
  </StyledLogin>

);

export default LoginPage;