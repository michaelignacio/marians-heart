import log from '../data/page-2'
import Page from '../components/page'
import featured from '../public/hanap.png'

const spotify = (
  <iframe
    src="https://open.spotify.com/embed/track/799SoTqNMEAXvTmkbVNteo?utm_source=generator&theme=0"
    width="100%"
    height="152"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
);

export default function Day2() {
  return <Page log={log} spotify={spotify} featured={featured} pageNum="2" />;
}
