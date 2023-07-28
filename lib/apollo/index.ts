
import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import settings from '@/config/settings';
import { setContext } from '@apollo/client/link/context';


// function getNetworkInterface(uri: string) {
//   const authLink = setContext((_, { headers }) => {
//     return {
//       headers: {
//         'access-token': localStorage.getItem('access-token'),
//         uid: localStorage.getItem('uid'),
//         client: localStorage.getItem('client'),
//         ...headers,
//       }
//     }
//   });
//
//   return ApolloLink.from([
//     authLink,
//     authLogoutLink,
//     new RetryLink({
//       attempts: {
//         max: 3,
//       }
//     })
//   ]);
// }

const httpLink = createHttpLink({ uri: settings?.graphQLEndpoint });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      'access-token': localStorage.getItem('access-token'),
      uid: localStorage.getItem('uid'),
      client: localStorage.getItem('client'),
      ...headers,
    },
  };
});

export default function createApolloClient() {
  // const { possibleTypes } = FragmentTypes;
  return new ApolloClient({
    assumeImmutableResults: true,
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
  });
}
