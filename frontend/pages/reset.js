import Reset from '../components/Reset';
import styled from 'styled-components';

const StyledReset = styled.div`
  max-width: 440px;
  margin: 0 auto;
`;

const ResetPage = props => (
  <StyledReset>
    <p>Reset Password {props.query.resetToken}</p>
    <Reset resetToken={props.query.resetToken} />
  </StyledReset>
);

export default ResetPage;