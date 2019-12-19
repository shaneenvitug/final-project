import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Activity from './Activity';
import Philippines from './Philippines'

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

 const Title = styled.p`
  font-family: sans-serif;
  font-size: 2.2rem;
  font-weight: 500;
 `;

 const CityStyle = styled.span`
  font-family: sans-serif;
  font-size: 2rem;
  border-bottom: 0.3rem inset ${props => props.theme.yellow};

 `;

class Activities extends Component {
  render() {
    return (
      <>
        <Philippines />
        <Title>CITIES TO EXPLORE IN THE PHILIPPINES</Title>
        <CityStyle>Palawan</CityStyle>
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
      </>
    )
  }
}

export default Activities;
export { ALL_ACTIVITIES_QUERY };
