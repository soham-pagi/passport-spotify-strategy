# Passport-Spotify Strategy with EJS Profile Example

This repository contains a Node.js application that demonstrates how to use the `passport-spotify` authentication strategy along with the EJS templating engine to create a simple profile page for authenticated users.

## Features

- User authentication using Spotify OAuth 2.0
- Rendering user profile information using the EJS templating engine

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Passport.js](https://www.passportjs.org/packages/passport-spotify/)

## Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/soham-pagi/passport-spotify-strategy.git
   ```

2. Navigate to the project directory:
   ```sh
   cd passport-spotify-strategy
   ```
3. Install the required dependencies:
   ```sh
   npm install
   ```
4. Configure Environment Variables:
   ```sh
   PORT=4000
   SPOTIFY_CLIENT_ID=your-spotify-client-id
   SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
   ```
5. Start the application:
   ```sh
   npm start
   ```
6. Open your web browser and navigate to http://localhost:4000
7. Click the "Sign in with spotify" button to authenticate using your Spotify account.
8. After authentication, you will be redirected to your profile page displaying your Spotify profile information.
