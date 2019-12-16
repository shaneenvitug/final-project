import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

const SINGLE_ACTIVITY_QUERY = gql`
  query SINGLE_ACTIVITY_QUERY($id: ID!) {
    activity(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`;

const UPDATE_ACTIVITY_MUTATION = gql `
  mutation UPDATE_ACTIVITY_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateActivity(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
      title
      description
      price
    }
  }
`;

class UpdateActivity extends Component {
  state = {};

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  }
  updateActivity = async (e, updateActivityMutation) => {
    e.preventDefault();
    const res = await updateActivityMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      }
    });
  }

  render() {
    return (
      <Query query={SINGLE_ACTIVITY_QUERY} variables={{
        id: this.props.id
      }}>
        {({data, loading}) => {
          if (loading) return <p>Loading...</p>
          if(!data.activity) return <p>No activity found for ID {this.props.id}</p>
          return (
          <Mutation mutation={UPDATE_ACTIVITY_MUTATION} variables={this.state}>
            {(updateActivity, { loading, error }) => (
              <Form onSubmit={e => this.updateActivity(e, updateActivity)}>
                <Error error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                  <label htmlFor="title">
                    Title
                    <input type="text" id="title" name="title" placeholder="Title" required defaultValue={data.activity.title} onChange={this.handleChange}/>
                  </label>

                  <label htmlFor="price">
                    Price
                    <input type="number" id="price" name="price" placeholder="Price" required defaultValue={data.activity.price} onChange={this.handleChange}/>
                  </label>

                  <label htmlFor="description">
                    Description
                    <textarea id="description" name="description" placeholder="Enter a description" required defaultValue={data.activity.description} onChange={this.handleChange}/>
                  </label>
                  <button type="submit">Save Changes</button>
                </fieldset>
              </Form>
            )}
          </Mutation>
          )
        }}
      </Query>
    )
  }
}

export default UpdateActivity;
export { UPDATE_ACTIVITY_MUTATION };
