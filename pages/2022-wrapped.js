import Head from 'next/head';
import Stories from 'react-insta-stories';

const stories = [
  {
    content: (props) => (
      <div
        style={{
          background:
            'url(https://i.pinimg.com/236x/3a/22/13/3a221342b57ad5677d543a3b94da4473.jpg) no-repeat',
          backgroundSize: 'cover',
          padding: 50,
          height: '100%',
          width: '100%',
        }}
      >
        <h1
          style={{
            marginTop: '90%',
            marginBottom: 0,
            color: '#fff',
            fontSize: '1.8rem',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
          }}
        >
          💑 147 days of being together
        </h1>
      </div>
    ),
  },
  {
    content: (props) => (
      <div
        style={{
          background:
            'url(https://i.pinimg.com/236x/bd/54/86/bd54865fe99838003f296bb33494f33e.jpg) no-repeat',
          backgroundSize: 'cover',
          padding: 50,
          height: '100%',
          width: '100%',
        }}
      >
        <h1
          style={{
            marginTop: '90%',
            marginBottom: 0,
            color: '#fff',
            fontSize: '1.8rem',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
          }}
        >
          💻 116 days of being in a long distance relationship
        </h1>
      </div>
    ),
  },
  {
    content: (props) => (
      <div
        style={{
          background:
            'url(https://i.pinimg.com/236x/fc/dd/d6/fcddd65d92ef3f60fe73a4ff3a4158aa.jpg) no-repeat',
          backgroundSize: 'cover',
          padding: 50,
          height: '100%',
          width: '100%',
        }}
      >
        <h1
          style={{
            marginTop: '90%',
            marginBottom: 0,
            color: '#fff',
            fontSize: '1.8rem',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
          }}
        >
          🥧 382 video bubbles sent of Marian being a cutie pie
        </h1>
      </div>
    ),
  },
  {
    content: (props) => (
      <div
        style={{
          background:
            'url(https://i.pinimg.com/236x/ed/6d/74/ed6d74d17155263a369e69938affce40.jpg) no-repeat',
          backgroundSize: 'cover',
          padding: 50,
          height: '100%',
          width: '100%',
        }}
      >
        <h1
          style={{
            marginTop: '90%',
            marginBottom: 0,
            color: '#fff',
            fontSize: '1.8rem',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
          }}
        >
          🐱 781 Peach and Goma GIFs sent
        </h1>
      </div>
    ),
  },
  {
    content: (props) => (
      <div
        style={{
          background:
            'url(https://i.pinimg.com/236x/00/91/6e/00916e423e2ba995999165a18d61cd2f.jpg) no-repeat',
          backgroundSize: 'cover',
          padding: 50,
          height: '100%',
          width: '100%',
        }}
      >
        <h1
          style={{
            marginTop: '90%',
            marginBottom: 0,
            color: '#fff',
            fontSize: '1.8rem',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
          }}
        >
          ❤️ 1,097 messages + reactions on Instagram
        </h1>
      </div>
    ),
  },
  {
    content: (props) => (
      <div
        style={{
          background:
            'url(https://i.pinimg.com/236x/09/d6/81/09d6813185ca8e6fd67fa2c51a135cad.jpg) no-repeat',
          backgroundSize: 'cover',
          padding: 50,
          height: '100%',
          width: '100%',
        }}
      >
        <h1
          style={{
            marginTop: '90%',
            marginBottom: 0,
            color: '#fff',
            fontSize: '1.8rem',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
          }}
        >
          🎤 1,671 voice notes sent
        </h1>
      </div>
    ),
  },
  {
    content: (props) => (
      <div
        style={{
          background:
            'url(https://i.pinimg.com/236x/81/5d/bf/815dbf7c5e22a8827f0f4514b0b93606.jpg) no-repeat',
          backgroundSize: 'cover',
          padding: 50,
          height: '100%',
          width: '100%',
        }}
      >
        <h1
          style={{
            marginTop: '90%',
            marginBottom: 0,
            color: '#fff',
            fontSize: '1.8rem',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
          }}
        >
          ✉️ 90,203 telegram messages
        </h1>
      </div>
    ),
  },
  {
    content: (props) => (
      <div
        style={{
          background:
            'url(https://i.pinimg.com/236x/41/7e/be/417ebe32ee0cabc7fe89bc9e86d02823.jpg) no-repeat',
          backgroundSize: 'cover',
          padding: 50,
          height: '100%',
          width: '100%',
        }}
      >
        <h1
          style={{
            marginTop: '90%',
            marginBottom: 0,
            color: '#fff',
            fontSize: '1.8rem',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
          }}
        >
          🕘 209,592 minutes of being physically + virtually together
        </h1>
      </div>
    ),
  },
  {
    content: (props) => (
      <div
        style={{
          background:
            'url(https://i.pinimg.com/236x/eb/bc/56/ebbc5627d62741555393eef7eabc8cd6.jpg) no-repeat',
          backgroundSize: 'cover',
          padding: 50,
          height: '100%',
          width: '100%',
        }}
      >
        <h1
          style={{
            marginTop: '90%',
            marginBottom: 0,
            color: '#fff',
            fontSize: '1.8rem',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
          }}
        >
          👫 36,792,000 more minutes to spend with you (til we turn 100! and
          then we start counting again)
        </h1>
      </div>
    ),
  },
  {
    content: (props) => (
      <div
        style={{
          background:
            'url(https://i.pinimg.com/236x/5f/c8/58/5fc8581ec3127ce282fc9fb5fb1b5b03.jpg) no-repeat',
          backgroundSize: 'cover',
          padding: 50,
          height: '100%',
          width: '100%',
        }}
      >
        <h1
          style={{
            marginTop: '70%',
            marginBottom: 0,
            color: '#fff',
            fontSize: '1.8rem',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
          }}
        >
          Thank you for being with me this year and I wish you nothing but the best for
          2023! 💖 I love you so much, Marian!
        </h1>
      </div>
    ),
  },
];

export default function Wrapped() {
  return (
    <div className="lg:h-screen lg:flex items-center lg:justify-center">
      <Head>
        <title>Duckie Wrapped 2022</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Stories
        stories={stories}
        defaultInterval={10000}
        width={412}
        height={914}
        loop
      />
    </div>
  );
}
