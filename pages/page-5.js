import log from '../data/page-5'
import Page from '../components/page'
import featured from '../public/featured-aug-3.jpg';
import Head from 'next/head';

const spotify = (
  <iframe
    src="https://open.spotify.com/embed/track/6PGoSes0D9eUDeeAafB2As?utm_source=generator&theme=0"
    width="100%"
    height="152"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
);

export default function Page5() {
  return (
    <>
      <Head>
        <title>Marian's Heart - Page 5</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Page log={log} spotify={spotify} pageNum="5" featured={featured} />
    </>
  );
}
