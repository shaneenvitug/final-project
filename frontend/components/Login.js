import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class Login extends Component {
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
      <Mutation mutation={LOGIN_MUTATION} variables={this.state} refetchQueries={[ { query: CURRENT_USER_QUERY } ]}>
        {(login, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await login();
              this.setState({ name: '', email: '', password: '' });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Log In</h2>
              <Error error={error} />
              <label htmlFor="email">
                Email address
                <input
                  type="email"
                  name="email"
                  placeholder="email@johndoe.com"
                  value={this.state.email}
                  onChange={this.saveToState}
                  autoFocus
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
              <Link href="/forgotpwd">
                <a><p className="password">Forgot password?</p></a>
              </Link>
              <button type="submit">Log In</button>
            </fieldset>
            <div className="signup">
              <p>No account yet? Sign up now!</p>
              <button>
                <Link href="/signup">
                  <a>Sign Up</a>
                </Link>
              </button>
            </div>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Login;