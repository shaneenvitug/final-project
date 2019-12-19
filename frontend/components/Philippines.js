import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const PhilStyle = styled.div`  
  display: flex;
  height: 100%;
  line-height: 100%;
  margin-bottom: 10rem;  
  h1 {
    font-family: sans-serif;
    font-size: 4rem;
  }
  .description {
    width: 40%;
    p {
      text-align: justify;
      width: 80%;
      font-size: 1.5rem;
      line-height: 2rem;
    }
    button {
      color: ${props => props.theme.red};
      border: 2px solid ${props => props.theme.red};
      font-size: 1.7rem;
      margin: 1rem;
      padding: 0.25rem 1rem;
      border-radius: 3px;
      cursor: pointer;
    }
  }
  .images {
    width: 60%;
    img {
      margin-right: 1.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
    }
    img:hover {
      position: relative;
      top: -2px;
      transition: ease-in-out;
    }
  }
  p.label {
    display: inline;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

const Philippines = props => (
  <PhilStyle>
    <div className="description">
      <h1>PHILIPPINES</h1>
      <p>With over 7,000 islands that make up the archipelago of the Philippines, a constant challenge for travelers is to figure out where to explore first. One thing's for sure - there's something to see for every type of traveler.
      </p>
      <Link href="/philippines">
      
      <button><a>Explore More</a></button>
      </Link>
    </div>
    <div className="images">
      <img width="154" height="205" src="/static/boracay.jpg" alt="boracay"/>
      <img width="154" height="205" src="/static/bohol.jpg" alt="bohol"/>
      <img width="154" height="205" src="/static/palawan.png" alt="palawan"/>
      <img width="154" height="205" src="/static/rice.jpg" alt="rice"/>
    </div>
  </PhilStyle>
)

export default Philippines;