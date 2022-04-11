// General
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
// Components
import Loader from '../components/subcomponents/loader';
import Module from '../components/module';
// Styling
import { ColumnCenter } from '../styles/layout.styled';
import WalletConnect from '../components/wallet-connect';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const timer = setTimeout(() => setIsLoading(false), 1000);

  useEffect(() => {
      return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      <Head>
        <title>dripDAO</title>
        <meta name="description" content="DripDAO ..." />

        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      {isLoading ? (<Loader fullScreen />) : (
        <>
          <Main>
            <ColumnCenter alignCenter>
              <ResponsiveSpacing>
                <Image
                  src="/logo/logo-w-text.png"
                  alt="dripDAO Logo"
                  width="100px" 
                  height="100px"
                />
              </ResponsiveSpacing>
              <Module />
            </ColumnCenter>

            <WalletWrapper>
              <WalletConnect />
            </WalletWrapper>
          </Main>

          <Footer>
            <span>dripDAO &copy; 2022</span>
          </Footer>
        </>
      )}
    </>
  )
}

const Main = styled.main`
  min-height: 800px;
`;

const Footer = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 1rem;
  left: 0;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-height: 890px) {
    display: none;
  }
`;

const WalletWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 4rem;
  left: 0;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-height: 890px) {
    position: relative;
    top: 1rem;
    padding-bottom: 1rem;
  }
`;

const ResponsiveSpacing = styled.div`
  margin: 1rem;
  @media screen and (min-height: 1000px){
    margin: 2rem;
  }
  @media screen and (min-height: 1100px){
    margin: 3rem;
  }
`;

export default Home;
