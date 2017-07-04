# [<img width="312" alt="TripHub logo" src="https://cdn.rawgit.com/TripHub/App/5034f827/images/logo.svg" />](https://github.com/TripHub/App)

[![Build Status](https://travis-ci.org/TripHub/App.svg?branch=master)](https://travis-ci.org/TripHub/App)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> 🛠 *This app is in the early stages of development.*

> ⏳ *This app uses a [free Heroku server](https://www.heroku.com/free) and so the initial load can take a while.*

**Welcome to TripHub, a unified place for groups to organise trips!**

I am building TripHub, partly because I think it's a cool idea and I can't find anything else like it, and partly as a learning exercise for developing scalable and performant Single Page Applications (SPA's) by utilising awesome techniques like bundle splitting and atomic CSS.

The [app's documentation](https://triphub.gitbooks.io/app) is on GitBooks.

## Roadmap

**Authentication**
- [x] Working authentication flow using Auth0
- [x] Persistent login

**Trip**
- [x] Create new trip
- [x] Edit trip
- [x] Invite new users
- [ ] List/menage existing members

**Destination**
- [x] Search using Google API to get place details from a search (e.g. lat/lng)
- [ ] Enter arrive/departure time
- [ ] Select travel type
- [ ] View destinations on map

**Money**
- [ ] Ability to create a new payment
- [ ] Can mark member as having paid their share of a payment

**Tickets**
- [ ] Can upload a ticket/document
- [ ] Ticket/document management

## Notes

**[Create React App](https://github.com/facebookincubator/create-react-app)** | Project bootstrapping

Amazingly simple and easy project creation, I had a really simple prototype thrown together in a couple of hours 😄
However, I'm not a huge fan of the hidden webpack config, and the lack of typescript support (although flow is supported).
So I may be forced to [eject](https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup) at some point in the future. However, until then CRA has really sped up development time and reduced [bikeshedding](https://en.wiktionary.org/wiki/bikeshedding).

**[Redux](http://redux.js.org/)** | Global app state

[This](https://medium.com/statuscode/dissecting-twitters-redux-store-d7280b62c6b1) article on how
[Twitter Lite](https://mobile.twitter.com) have structured
their redux store is really interesting, and definitely an influencer in how the redux state is designed in TripHub.

**[Styletron](https://github.com/rtsao/styletron)** | CSS-in-JS

I was drawn to this library because I like how it handles CSS class names. Styletron converts individual CSS rules into their own atomic classes, and then combines those classes to create the desired styles. In doing this, it hopes to limit CSS size, as future rules are likely to simply be a combination of pre-existing classes.

A great explaination on how Styletron works, along with some limitations, can be found [here](https://ryantsao.com/blog/virtual-css-with-styletron).
