import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import AddToCart from './AddToCart';
import formatMoney from '../lib/formatMoney';
import Date from './Date';
import { FiAlertCircle, FiClock } from "react-icons/fi";
import { AiOutlineThunderbolt } from "react-icons/ai";


const SingleActivityStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  min-height: 800px;
  button.book {
      background: ${props => props.theme.red};
      color: white;
      font-size: 1.8rem;
      padding: 1.3rem;
      width: 50%;
      border-radius: 0.5rem;
      cursor: pointer;
      margin-top: 2rem;
    }
  img {
    width: 50%;
  }
  .details {
    margin: 0 auto;
    font-size: 1.5rem;
    text-align: justify;
    max-width: 900px;
    h2 {
      font-family: sans-serif;
      font-weight: 800;
      font-size: 3rem;
    }
  }
  .date-picker {
    margin: 0 auto;
    max-width: 900px;
    background-color: #F0F6F9;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h3 {
      font-family: sans-serif;
      font-size: 2rem;
      border-left: 0.5rem solid ${props => props.theme.orange};
      padding-left: 1rem;
    }
    .right {
      width: 400px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 1.3rem;
      line-height: 1.5rem;
    }
  }
  .top {
    display: flex;
    justify-content: space-evenly;
    img {
      border-radius: 5px;
      box-shadow: ${props => props.theme.bs};
    }
  }
  .price {
    line-height: 1rem;
    border: 1px solid ${props => props.theme.grey};
    padding: 0rem 3rem;
    width: 300px;
    box-shadow: ${props => props.theme.bs};
    h2.aud{
      font-size: 2.5rem;
      font-weight: 800;
      color: ${props => props.theme.red};
      font-family: sans-serif;
      letter-spacing: 0.3rem;
      margin-bottom: 3rem;
    }
    button {
      background: ${props => props.theme.red};
      color: white;
      font-size: 1.8rem;
      padding: 1.3rem;
      width: 100%;
      border-radius: 0.5rem;
      cursor: pointer;
      margin-top: 2rem;
    }
    .icon {
      display: flex;
      color: #888888;
      align-items: center;
      line-height: 3rem;
      span {
        margin-right: 0.8rem;
        margin-left: 0.5rem;
      }
    }
    .jeepney {
      margin-top: 3rem;
    }
  }
`;

const SINGLE_ACTIVITY_QUERY = gql`
  query SINGLE_ACTIVITY_QUERY($id: ID!) {
    activity(where: { id: $id }) {
      id
      title
      description
      largeImage
      price
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
            <>
              <SingleActivityStyles>
                <Head>
                  <title>Jeepney | {activity.title}</title>
                </Head>
                <div className="top">
                  <img src={activity.largeImage} alt={activity.title} />
                  <div className="price">
                    <div className="icon jeepney">
                      <span>Jeepney Price Guarantee</span>
                      <FiAlertCircle />
                    </div>
                    <h2 className="aud">A{formatMoney(activity.price)}</h2>
                    <div className="icon">
                      <FiClock />
                      <span>Available tomorrow</span>
                    </div>
                    <div className="icon">
                      <AiOutlineThunderbolt />
                      <span>Instant Confirmation</span>
                    </div>
                    <button>Select Options</button>
                  </div>
                </div>
                <div className="details">
                  <h2>{activity.title}</h2>
                  <p>{activity.description}</p>
                </div>
                <div className="date-picker">
                  <div className="left">
                    <h3>Please select a tour date</h3>
                    <Date />
                  </div>
                  <div className="right">
                    <h2>Terms & Conditions</h2>
                    <p>Confirmation:</p>
                    <ul>
                      <li>You will receive a confirmation email and voucher instantly after booking</li>
                      <li>In the event that you do not receive an email from us, please check your Spam folder or notify us via email</li>
                    </ul>
                    <p>Cancellation:</p>
                    <ul>
                      <li>Full refunds will be issued for cancellations made at least 24 hours prior to the activity</li>
                      <li>The activity may be canceled due to bad weather. In case of cancellation, you will be notified by the operator before the trip date. You will be given the option to book an alternative date or request a full refund</li>
                    </ul>
                    <AddToCart id={activity.id} />
                    <button className="book">BOOK NOW</button>
                  </div>
                </div>
              </SingleActivityStyles>
            </>
          );
        }}
      </Query>
    );
  }
}

export default SingleActivity;