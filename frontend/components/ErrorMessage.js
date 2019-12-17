import styled from 'styled-components';
import React from 'react';

import PropTypes from 'prop-types';

const ErrorStyles = styled.div`
  padding: 1rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid ${props => props.theme.grey};
  border-left: 3px solid ${props => props.theme.yellow};
  p {
    margin: 0;
    font-weight: 100;
    text-align: center;
    color: ${props => props.theme.orange}
  }
  strong {
    margin-right: 1rem;
  }
`;

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <strong>Network Error</strong>
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};

DisplayError.defaultProps = {
  error: {},
};

DisplayError.propTypes = {
  error: PropTypes.object,
};

export default DisplayError;