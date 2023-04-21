import Head from 'next/head'
import LandingPage from '@/components/LandingPage/index';
export default function Home(props: any) {

  return (
    <div>
      <Head>
        <title>Puente</title>
        <meta name="description" content="Puente - Your Bridge to Mexican Manufacturing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </div>
  )
}
