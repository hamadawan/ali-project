import {onError} from "@apollo/client/link/error";
import removeAuthCookies from "@/auth/removeAuthCookies";

const authLogoutLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) => {
      if (message === 'Invalid login credentials. Please try again.') {
        removeAuthCookies();
        if (typeof document !== 'undefined') {
          window.location.reload();
        }
      }
    });
  }
  if (networkError && networkError.statusCode === 401) {
    console.log(`[Network error]: ${networkError}`);
    removeAuthCookies();
    if (typeof document !== 'undefined') {
      // document.location = '/login'
    }
  }
});

export default authLogoutLink;
