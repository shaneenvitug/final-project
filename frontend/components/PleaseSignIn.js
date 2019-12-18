import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Login from './Login';
import styled from 'styled-components';

const StyledLogin = styled.div`
  max-width: 440px;
  margin: 0 auto;
  p {
    text-align: center;
    font-weight: 800;
    font-size: 1.5rem;
  }
`;

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <StyledLogin>
            <p className="signin">Please Sign In before Continuing</p>
            <Login />
          </StyledLogin>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;