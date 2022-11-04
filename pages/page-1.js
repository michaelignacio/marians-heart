import log from '../data/page-1'
import featured from '../public/this-love.png';
import Page from '../components/page';
import Head from 'next/head';

const spotify = (
  <iframe
    src="https://open.spotify.com/embed/track/4d1CG5ei1E2vGbvmgf5KKv?utm_source=generator&theme=0"
    width="100%"
    height="152"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
);

export default function Page1() {
  return (
    <>
      <Head>
        <title>Marian's Heart - Page 1
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Page log={log} spotify={spotify} featured={featured} pageNum="1" />
    </>
  );
}
