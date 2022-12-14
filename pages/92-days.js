import marian from '../public/marian.png';
import Image from 'next/image';
import Head from 'next/head';

export default function DaysOfMarian() {
  return (
    <>
      <Head>
        <title>92 Days of Marian</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex justify-center items-center p-5">
        <div className="max-w-2xl w-full bg-amber-100 p-7 xl:p-10 rounded-l-xl">
          <div className="flex flex-col">
            <div className="handwriting flex-col-reverse flex lg:flex-col">
              <div className="index-content"></div>
              <div className="title">
                <div className="leading-10 flex gap-5 w-full">
                  <div className="w-full text-center text-stone-600">
                      <p className="text-2xl md:text-3xl">
                        You know how I&apos;m so captivated by you that I want
                        to profess my love for you across all mediums and platforms?
                        Here&apos;s another one:
                      </p>
                      <Image
                        src={marian}
                        className={`my-5 rounded-xl w-1/2 mx-auto`}
                      />
                      <p className="text-4xl">
                        I love you, my beautiful Marian (in chibi world). Happy
                        third monthsary 😘
                      </p>
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
