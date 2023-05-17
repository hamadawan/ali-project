const settings: any = {
  development: {
    home: 'http://localhost:3000',
    apiUrl: 'http://localhost:8000',
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
    apiUrl: 'https://puentify-api.up.railway.app',
    cookieDomain: 'localhost',
    graphQLEndpoint: 'https://puentify-api.up.railway.app/graphql',
  }
};

export default settings[process.env.NODE_ENV || 'development'];
