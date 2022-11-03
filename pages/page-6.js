import log from '../data/page-6'
import Page from '../components/page'
import featured from '../public/capy.jpg'

const spotify = (
  <iframe
    src="https://open.spotify.com/embed/track/5iMRhOHzze2CujxHiJ6cRL?utm_source=generator&theme=0"
    width="100%"
    height="152"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
);

export default function Page6() {
  return <Page log={log} spotify={spotify} pageNum="6" featured={featured} />;
}
