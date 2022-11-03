import log from '../data/page-4'
import Page from '../components/page'
import featured from '../public/i-like-you.png'

const spotify = (
  <iframe
    src="https://open.spotify.com/embed/track/0O6u0VJ46W86TxN9wgyqDj?utm_source=generator&theme=0"
    width="100%"
    height="152"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
);

export default function Day4() {
  return <Page log={log} spotify={spotify} featured={featured} pageNum="4" />;
}
