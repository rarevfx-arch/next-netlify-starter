import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div 
        className="container"
        style={{
            backgroundImage: "url('/images/background.jpg')",
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
        <Header title="<span style={{ color: 'magenta' }}>aDNS</span> First-Call 2025!" />
        <p className="description">
          Diese Domain liegt auf dem <span style={{ color: 'magenta' }}>aDNS</span>, der Zukunft des autoritativen DNS der Telekom!
        </p>
      </main>

      <Footer />
    </div>
  )
}
