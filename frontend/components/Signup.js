import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
  state = {
    name: '',
    password: '',
    email: '',
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
        {(signup, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signup();
              this.setState({ name: '', email: '', password: '' });
              Router.push({
                pathname: '/',
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign Up</h2>
              <Error error={error} />
              <label htmlFor="name">
              Full Name
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.saveToState}
                autoFocus
                />
              </label>

              <label htmlFor="email">
                Email address
                <input
                  type="email"
                  name="email"
                  placeholder="email@johndoe.com"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>

              <button type="submit">Sign Up</button>
            </fieldset>
            <div className="login">
              <p>Already have a Jeepney account?</p>
              <button>
                <Link href="/login">
                  <a>Log In</a>
                </Link>
              </button>
            </div>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signup;