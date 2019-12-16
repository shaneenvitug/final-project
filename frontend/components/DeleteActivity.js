import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_ACTIVITIES_QUERY } from './Activities';

const DELETE_ACTIVITY_MUTATION = gql`
  mutation DELETE_ACTIVITY_MUTATION($id: ID!) {
    deleteActivity(id: $id) {
      id
    }
  }
`;

class DeleteActivity extends Component {
  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the activities we want
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    console.log(data, payload);
    // 2. Filter the deleted activity out of the page
    data.activities = data.activities.filter(activity => activity.id !== payload.data.deleteActivity.id);
    // 3. Put the activities back!
    cache.writeQuery({ query: ALL_ACTIVITIES_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_ACTIVITY_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteActivity, { error }) => (
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this activity?')) {
                deleteActivity();
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteActivity;