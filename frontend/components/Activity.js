import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import ActivityStyles from './styles/ActivityStyles';
import PriceTag from './styles/PriceTag';
import Title from './styles/Title';
import formatMoney from '../lib/formatMoney';
import DeleteActivity from './DeleteActivity';
import AddToCart from './AddToCart';
import User from './User';


export default class Activity extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
  }

  render() {
    const { activity } = this.props;
    return (
      <ActivityStyles>
        {activity.image && <img src={activity.image} alt={activity.title} />}
        
        <div className="container">
          <Title>
            <Link href={{
              pathname: '/activity',
              query: { id: activity.id }
            }}>
              <a target="_blank">{activity.title}</a>
            </Link>
          </Title>
          <PriceTag>{formatMoney(activity.price)}</PriceTag>
          <p>{activity.description}</p>
        </div>
      </ActivityStyles>
    )
  }
}
