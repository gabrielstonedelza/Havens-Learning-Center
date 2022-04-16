import Head from 'next/head'
import CareHome from '../components/home/CareHome'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Our kids care home" />
        <link rel="icon" href="/hlc3.png" />
      </Head>
      <CareHome />
    </div>
  )
}
