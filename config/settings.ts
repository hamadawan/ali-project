const settings = {
  development: {
    home: 'http://localhost:3000',
    apiUrl: 'http://localhost:8000/api/v1',
    cookieDomain: 'localhost',
    graphQLEndpoint: 'http://localhost:8000/graphql',
  }
};

export default settings[process.env.NODE_ENV || 'development'];
