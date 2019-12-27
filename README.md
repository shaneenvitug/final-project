# ![](/frontend/static/ga.png) SEI-34 Final Project: Jeepney

> An online store that sells travel activities in the Philippines using Full Stack React, GraphQL and Node.js

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)

## General info

This was developed as part of SEI 34 for my final project, the goal was to build a web application from scratch, to show off what I have learned over my short, yet intense three month 'coding-bootcamp' at General Assembly. The type of web application I chose to create was completely up to me as well as the tech stack.

## Screenshots

![Home page](/frontend/static/screenshot-jeepney.png)

## Tech Stack

**Languages:** HTML, CSS, Javascript, GraphQL  
**Frameworks/Libraries:** React, Next.js, Node.js/Express, Apollo Client
**Back-end:** GraphQL Yoga, Prisma
**Front-end Hosting:** Now  
**Other:** Styled Components, Stripe, Cloudinary

## Setup

1. Clone locally or download a zip file
2. `cd final-project`
3. `cd frontend` then open another tab `cd backend`
4. `npm install` to both
5. `npm run dev` on both to run the app

You can see the site [here](). //TODO: deploy app

## Code Examples

What is GraphQL?
GraphQL is a type-safe query language for APIs and a runtime for fulfilling those queries with your existing data. It's a replacement for (or addition to) your REST API and Ajax Calls.

GraphQL requires buy-in from both your client and your server — it then puts the power of requesting only what you want into the client and the business logic of finding and filtering that data into backend resolvers.

`query getSomeData { users { name email cart { activity { title description price } } } }`

## Features

- Full stack online store complete with real credit checkout
- Users can add to cart and checkout, and view their past orders
- JWT authentication, uploading images using cloudinary, and charging credit cards using stripe

To-do list:

- [ ] Search functionality
- [ ] Fix sending email when user forgets password
- [ ] Testing

## Status

Project is: _in progress_

## Inspiration

Project inspired by [klook](https://www.klook.com/en-PH/coureg/16-philippines-things-to-do/).

## Contact

Created by [@shaneenvitug](https://www.shaneenvitug.com/) - feel free to contact me!
