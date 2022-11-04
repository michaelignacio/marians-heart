import Link from 'next/link';
import Head from 'next/head';

const content = [
  { page: '1', topic: 'july 26, 27' },
  { page: '2', topic: 'july 28, 29' },
  { page: '3', topic: 'july 30, 31' },
  { page: '4', topic: 'aug 1, 2' },
  { page: '5', topic: 'aug 3, 4' },
  { page: '6', topic: 'aug 5, 6 ' },
  { page: '7', topic: 'aug 7' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Marian&apos;s Heart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex justify-center items-center p-5">
        <div className="max-w-2xl w-full bg-amber-100 p-10 rounded-l-xl">
          <div className="flex flex-col">
            <div className="leading-10 uppercase hidden lg:flex gap-5">
              <div className="border-b w-28">&nbsp;</div>
              <div className="border-b grow text-lg">
                Inhalt / Content / Contenu
              </div>
            </div>
            <div className="leading-10 uppercase hidden lg:flex gap-5 leading-[3rem]">
              <div className="border-b w-28">Seite / Page</div>
              <div className="border-b grow">Thema / Topic / Sujet</div>
            </div>
            <div className="handwriting flex-col-reverse flex lg:flex-col">
              <div className="index-content">
                {content.map((item, i) => {
                  return (
                    <Link
                      href={`page-${item.page}`}
                      className="leading-10 flex gap-5"
                      key={item.page}
                    >
                      <div className="border-b w-28 text-center">
                        {item.page}
                      </div>
                      <div className="border-b grow lg:pl-16">{item.topic}</div>
                    </Link>
                  );
                })}
              </div>
              <div className="title">
                <div className="leading-10 flex gap-5 w-full mt-10">
                  <div className="border-b w-full text-center text-5xl text-stone-600">
                    <p className="w-4/5 mx-auto">
                      7 Pages to Marian&apos;s Heart
                    </p>
                  </div>
                </div>
                <div className="leading-10 flex gap-5 w-full mt-2">
                  <div className="border-b w-full text-center text-stone-600">
                    <p className="w-4/5 mx-auto">A Bullet Journal Love Story</p>
                  </div>
                </div>
                <div className="leading-10 flex gap-5 w-full mt-2 mb-10 lg:mb-0">
                  <div className="border-b w-full text-center text-stone-600">
                    <p className="w-4/5 mx-auto">by Michael</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
