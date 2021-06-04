import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import GanderCaseStudy from '../components/home/GanderCaseStudy';
import OtherProjects from '../components/home/OtherProjects';

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Melinda Lim, Fullstack Web Developer
          </title>
        </Head>
        {/* Melinda intro section */}
        <Hero />
        {/* Gander Case Study */}
        <GanderCaseStudy />
        <OtherProjects />
      </Layout>
    </>
  );
}
