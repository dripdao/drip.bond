import Head from 'next/head'
import Loader from '../components/loader'
import { ColumnCenter, FullScreenCenter } from '../styles/layout.styled'
import { useState, useEffect } from 'react';
import Module from '../components/module';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const timer = setTimeout(() => setIsLoading(false), 1000);

  useEffect(() => {
      return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <FullScreenCenter>
      <Head>
        <title>dripDAO</title>
        <meta name="description" content="DripDAO ..." />

        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <main>
        {isLoading ? (<Loader />) : (
          <ColumnCenter>
            <h1>DripDao</h1>
            <Module />
          </ColumnCenter>
        )}
      </main>

      <footer>

      </footer>
    </FullScreenCenter>
  )
}

export default Home;
