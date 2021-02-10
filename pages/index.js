import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import BridgeCaseStudy from '../components/home/BridgeCaseStudy';

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Andrew Crotwell, Fullstack Web Developer
          </title>
        </Head>
        <Hero />
        <BridgeCaseStudy />
      </Layout>
    </>
  );
}
