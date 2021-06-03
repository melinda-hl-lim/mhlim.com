import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Melinda Lim
          </title>
        </Head>
        <Container>
          {/* <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  );
}
