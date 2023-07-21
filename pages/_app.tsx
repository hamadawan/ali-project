import { ApolloProvider } from '@apollo/client';
import createApolloClient from '@/lib/apollo/index';
import '@/styles/globals.css';
import '@/public/assets/fonts/fonts.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

const client = createApolloClient();


function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default appWithTranslation(App);