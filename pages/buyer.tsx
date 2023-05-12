import Head from 'next/head'
import LandingPageBuyer from '@/components/LandingPage/LandingPageBuyer';
export default function Buyer(props: any) {

  return (
    <div>
      <Head>
        <title>Puente</title>
        <meta name="description" content="Puente - Your Bridge to Mexican Manufacturing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPageBuyer />
    </div>
  )
}
