import log from '../data/page-3'
import Page from '../components/page'
import featured from '../public/keeper.png'
import bujoPic from '../public/first-date.jpg'

const spotify = (
  <iframe
    src="https://open.spotify.com/embed/track/2gmXIH1xQBGIgndQEA1aoU?utm_source=generator&theme=0"
    width="100%"
    height="152"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
);

export default function Day3() {
  return <Page log={log} spotify={spotify} featured={featured} pageNum="3" bujoPic={bujoPic} />;
}
