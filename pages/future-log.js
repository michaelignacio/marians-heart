// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const months = [
  {
    name: 'july',
    items: [
      {
        date: '26',
        task: 'reach out to Marian',
      },
      {
        date: '28',
        task: 'test',
      },
    ],
  },
  {
    name: 'aug',
    items: [
      {
        date: '27',
        task: 'test',
      },
      {
        date: '28',
        task: 'test',
      },
    ],
  },
];

export default function FutureLog() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-2xl w-full bg-amber-100 p-14 rounded-l-xl">
        <div className="flex flex-col">
          <div className="handwriting">
            {months.map((month) => {
              return (
                <div className="leading-10 flex flex-col mb-5">
                  <div className="mb-5">{month.name}</div>
                  {month.items.map((item) => {
                    return (
                      <div>
                        {item.date} - {item.task}
                      </div>
                    );
                  })}
                </div>
              );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
