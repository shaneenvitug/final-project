import RequestReset from '../components/RequestReset';
import styled from 'styled-components';

const StyledReset = styled.div`
  max-width: 440px;
  margin: 0 auto;
`;

const RequestResetPage = props => (
  <StyledReset>
    <RequestReset />
  </StyledReset>

);

export default RequestResetPage;