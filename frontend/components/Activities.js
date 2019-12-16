import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Activity from './Activity';

const ALL_ACTIVITIES_QUERY = gql`
  query ALL_ACTIVITIES_QUERY {
    activities {
      id
      title
      price
      description
      image
      largeImage
    }
  }
 `;

 const Center = styled.div`
  text-align: center;
 `;

 const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
 `;

class Activities extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_ACTIVITIES_QUERY}>
          {({data, error, loading}) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: {error.message}</p>
            return <List>
              {data.activities.map(activity => <Activity activity={activity} key={activity.id} />)}</List>
          }}
        </Query>
      </Center>
    )
  }
}

export default Activities;
