import Head from 'next/head';
import LandingPageSeller from '@/components/LandingPage/index';
export default function Home() {

  return (
    <div>
      <Head>
        <title>Puentify</title>
        <meta name="description" content="Puente - Your Bridge to Mexican Manufacturing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPageSeller />
    </div>
  );
}
