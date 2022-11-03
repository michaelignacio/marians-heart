import Image from 'next/image';
import Link from 'next/link';

export default function Page({ log, spotify, featured, pageNum, bujoPic, bujoClass }) {
  return (
    <div className="flex flex-col lg:flex-row justify-center p-5 gap-5">
      <div className="lg:max-w-lg xl:max-w-2xl w-full">
        <div className="flex flex-col bg-amber-100 p-10 lg:p-14 rounded-xl">
          <div className="handwriting">
            <Link href="/" className="text-xl flex items-center mb-10">
              ← table of contents
            </Link>
            {log.map((day) => {
              return (
                <div className="flex flex-col mb-5">
                  <div className="mb-5">{day.date}</div>
                  {day.items.map((item) => {
                    return (
                      <div
                        className={`flex w-full border-b border-dotted 
                            ${
                              item.indicator == 'x'
                                ? 'line-through text-gray-400'
                                : ''
                            }
                            ${item.indicator == '*' ? 'text-red-600 ml-1' : ''}
                            ${item.indicator == '-' ? 'text-sky-400 ml-1' : ''}
                        `}
                      >
                        <div className="w-12 text-center leading-10">
                          {item.indicator}
                        </div>
                        <div className={`grow leading-10`}>{item.name}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            {bujoPic && (
              <Image
                src={bujoPic}
                className={`my-5 rounded-xl w-72 mx-auto ${bujoClass}`}
              />
            )}
            <div className="flex justify-between text-2xl mt-10 italic">
              {pageNum > 1 && (
                <Link href={`page-${parseInt(pageNum) - 1}`}>previous</Link>
              )}
              {pageNum < 7 && (
                <Link
                  className="ml-auto"
                  href={`page-${parseInt(pageNum) + 1}`}
                >
                  next
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-1/2 xl:w-1/5">
        <div className="w-full">{spotify}</div>
        {featured && (
          <Link href={featured}>
            <Image src={featured} className="my-5 rounded-xl w-full" />
          </Link>
        )}
      </div>
    </div>
  );
}
