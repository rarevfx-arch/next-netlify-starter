import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div 
        className="container"
        style={{
            color: "white",
            backgroundImage: "url('/111001795.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh"
          }}
    >
      <Head>
        <title>aDNS First-Call 2025!</title>
        <link rel="icon" href="/DTE.DE-944bd2b4_1.ico" />
      </Head>

      <main>
        <Header title="aDNS First-Call 2025!" 
         startDate="2025-01-01T00:00:00"
           />
        <p className="description">
          Diese Domain liegt auf dem aDNS, der Zukunft des autoritativen DNS der Telekom!
        </p>
      </main>

      <Footer />
    </div>
  )
}
