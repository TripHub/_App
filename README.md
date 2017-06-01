# TripHub

[![Build Status](https://travis-ci.org/TripHub/TripHub.svg?branch=master)](https://travis-ci.org/TripHub/TripHub)

🛠 *This project is in the early stages of development*

**Welcome to TripHub, a unified place for groups to organise trips!**

I am building TripHub, partly because I think it's a cool idea and I can't find anything else like it, and partly as a learning exercise for developing scalable and performant Single Page Applications (SPA's) by utilising awesome techniques like Server Side Rendering (SSR) and HTML caching.

**Below is a running log of some of the packages I'm using, with my thoughts/notes** 📝

## [Create React App](https://github.com/facebookincubator/create-react-app)

*Bootstrapping*

## [Styletron](https://github.com/rtsao/styletron)

*CSS-in-JS*

I was drawn to this library because I like how it handles CSS class names. Styletron converts individual CSS rules into their own atomic classes, and then combines those classes to create the desired styles. In doing this, it hopes to limit CSS size, as future rules are likely to simply be a combination of pre-existing classes.

A great explaination on how Styletron works along with it's limitations can be found [here](https://ryantsao.com/blog/virtual-css-with-styletron).

## [Auth0](https://github.com/auth0/lock)

*single-sign-on and social login*

[Auth0](https://auth0.com/) offers a very easy way to integrate authentication, with both email/password and/or social login.

The flow of Auth0 in TripHub is as follows

  - Users arriving are redirected to a hosted Auth0 login/signup page where they can authenticate with either a email/password combo or social account.
  - Upon successful authentication, Auth0 redirects to a callback page on TripHub (currently at [`/auth/signed-in`](https://github.com/benjaminhadfield/TripHub/blob/master/pages/auth/signed-in.js)) with an `access_token` and `id_token` in the URL's hash.
  - We extract these tokens and dispatch them to redux. The `id_token` is also saved to a cookie so the server can authenticate the user too.
  - The access token is sent in the `Authorization` header of any requests made to the TripHub API (e.g. to get a list of the user's trips). This token uniquely identify the user, and confirm a given request is from a valid source.
  - As an additional security measure, the `access_token` expires after a set number of seconds. When this happens it will no longer authenticate with the API (returning `HTTP_401`). We have two options here:

    * Attempt to silently renew the access token upon a `HTTP_401` response
    * Anticipate the expiry by storing the time of expiry in local storage and silently renew prior to expiry

  - When a user returns to TripHub, the `id_token` cookie is used to hydrate the user state in redux on the server before being passed to the client.

Relevent articles on this topic are:
  - [Authenicating using implicit grant](https://auth0.com/docs/api-auth/tutorials/adoption/implicit)
  - [Calling your APIs with Auth0 tokens](https://auth0.com/docs/api-auth/tutorials/adoption/api-tokens)
  - [Silent Authenication](https://auth0.com/docs/api-auth/tutorials/silent-authentication)