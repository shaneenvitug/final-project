import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Title from './styles/Title';
import ActivityStyles from './styles/ActivityStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

export default class Activity extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
  }

  render() {
    const { activity } = this.props;
    return (
      <ActivityStyles>
        {activity.image && <img src={activity.image} alt={activity.title} />}
        <Title>
          <Link href={{
            pathname: '/activity',
            query: { id: activity.id }
          }}>
            <a>{activity.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(activity.price)}</PriceTag>
        <p>{activity.description}</p>

        <div className="buttonList">
          <Link href={{
            pathname: 'update',
            query: { id: activity.id },
          }}>
            <a>Edit</a>
          </Link>
          <button>Add To Cart</button>
          <button>Delete</button>
        </div>
      </ActivityStyles>
    )
  }
}
