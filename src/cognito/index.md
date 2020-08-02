# Cognito

Cognito is a service for managing application users. Instead of building database tables and code to handle authentication related functionality, you just interact with Cognito through the SDK/REST endpoints. It provides tons of features (especially compared to other services available on the market) such as register, sign in (also with common identity providers like Google, Facebook, etc.), password reset, email verification, MFA (through SMS or apps like Google Auth), custom attributes and more.

## User Pools

Most likely this is what you want. User pools is the Cognito component for handling application users.

## Hooks

## Hosted UI

## Identity Pools

Finding creative and meaningful names for so many services is a job in itself so it's fair to expect some services to have a less than ideal name. This is one of those. It allows us to provide infrastructure access (i.e. similar to an AWS user) to people from outside. For example, we can allow infrastructure access to our application users stored in Cognito User Pools.
