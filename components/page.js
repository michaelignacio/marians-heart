import Image from 'next/image';

export default function Page({ log, spotify, featured }) {
  return (
    <div className="flex justify-center p-5 gap-5">
      <div className="max-w-2xl w-full">
        <div className="flex flex-col bg-amber-100 p-14 rounded-xl">
          <div className="handwriting">
            {log.map((day) => {
              return (
                <div className="flex flex-col mb-5">
                  <div className="mb-5">{day.date}</div>
                  {day.items.map((item) => {
                    return (
                      <div className="flex w-full border-b border-dotted">
                        <div className="w-12 text-center leading-10">
                          {item.indicator}
                        </div>
                        <div className="grow leading-10">{item.name}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/5">
        <div className="w-full">{spotify}</div>
        {featured && <Image src={featured} className="my-5 rounded-xl" />}
      </div>
    </div>
  );
}
