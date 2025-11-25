import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>aDNS First-Call 2025!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="aDNS First-Call 2025!" />
        <p className="description">
          Diese Domain liegt auf dem aDNS, der Zukunft des autoritativen DNS der Telekom!
        </p>
      </main>

      <Footer />
    </div>
  )
}
