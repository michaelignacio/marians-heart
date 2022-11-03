import log from '../data/page-1'
import Page from '../components/page'
import featured from '../public/this-love.png';

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

export default function Day1() {
  return <Page log={log} spotify={spotify} featured={featured} pageNum="1" />;
}
