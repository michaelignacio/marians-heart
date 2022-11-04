import log from '../data/page-7'
import Page from '../components/page'
import bujoPic from '../public/fam-pic.jpg';
import featured from '../public/marian.jpg';

const spotify = (
  <iframe
    src="https://open.spotify.com/embed/track/7cpCU3Denug5NGZsSpQl8v?utm_source=generator&theme=0"
    width="100%"
    height="152"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
);

export default function Page7() {
  return <Page log={log} spotify={spotify} pageNum="7" bujoPic={bujoPic} featured={featured} bujoClass="!w-full" />;
}
