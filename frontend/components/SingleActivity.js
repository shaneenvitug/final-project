import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';

const SingleActivityStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 1.5rem;
  }
`;

const SINGLE_ACTIVITY_QUERY = gql`
  query SINGLE_ACTIVITY_QUERY($id: ID!) {
    activity(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;
class SingleActivity extends Component {
  render() {
    return (
      <Query
        query={SINGLE_ACTIVITY_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.activity) return <p>No Activity Found for {this.props.id}</p>;
          const activity = data.activity;
          return (
            <SingleActivityStyles>
              <Head>
                <title>Jeepney | {activity.title}</title>
              </Head>
              <img src={activity.largeImage} alt={activity.title} />
              <div className="details">
                <h2>Viewing {activity.title}</h2>
                <p>{activity.description}</p>
              </div>
            </SingleActivityStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleActivity;