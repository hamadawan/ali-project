const settings: any = {
  development: {
    home: 'http://localhost:3000',
    apiUrl: 'http://localhost:8000/api/v1',
    cookieDomain: 'localhost',
    graphQLEndpoint: 'http://localhost:8000/graphql',
  },
  staging: {
    home: 'https://dev.puentify.com',
    apiUrl: 'https://api-dev.puentify.com',
    cookieDomain: 'localhost',
    graphQLEndpoint: 'https://api-dev.puentify.com/graphql',
  },
  production: {
    home: 'https://puentify.com',
    apiUrl: 'https://api.puentify.com',
    cookieDomain: 'localhost',
    graphQLEndpoint: 'https://api.puentify.com/graphql',
  }
};

export default settings[process.env.NODE_ENV || 'development'];
