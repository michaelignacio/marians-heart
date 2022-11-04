import log from '../data/page-6'
import Page from '../components/page'
import featured from '../public/umaapaw.png'
import bujoPic from '../public/capy.jpg'
import Head from 'next/head';

const spotify = (
  <iframe
    src="https://open.spotify.com/embed/track/4UOfFouPDw0AqVWijbW2ea?utm_source=generator&theme=0"
    width="100%"
    height="152"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
);

export default function Page6() {
  return (
    <>
      <Head>
        <title>Marian&apos;s Heart - Page 6</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Page
        log={log}
        spotify={spotify}
        pageNum="6"
        bujoPic={bujoPic}
        featured={featured}
      />
    </>
  );
}
