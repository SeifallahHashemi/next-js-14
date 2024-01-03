'use client';
import React from 'react';
import { CldImage } from 'next-cloudinary';

interface ImagePath {
  src: string;
}

const imagesPath: ImagePath[] = [
  {
    src: 'https://res.cloudinary.com/ddirpdoeo/image/upload/v1696682548/cld-sample-5.jpg',
  },
  {
    src: 'https://res.cloudinary.com/ddirpdoeo/image/upload/v1696682547/cld-sample-4.jpg',
  },
  {
    src: 'https://res.cloudinary.com/ddirpdoeo/image/upload/v1696682547/cld-sample-3.jpg',
  },
  {
    src: 'https://res.cloudinary.com/ddirpdoeo/image/upload/v1696682547/cld-sample-2.jpg',
  },
  {
    src: 'https://res.cloudinary.com/ddirpdoeo/image/upload/v1696682545/cld-sample.jpg',
  },
];
const Page = () => {
  return (
    <section className={'h-screen w-screen overflow-x-hidden'}>
      <ul className={"w-[90vw] container py-8 grid grid-cols-2 gap-4"}>
        {imagesPath.map((image: ImagePath) => (
          <CldImage
            sizes='(max-width: 480px) 50vw,
                    (max-width: 728px) 33vw
                    (max-width: 976px) 25vw,
                    100vw'
            width={500}
            height={500}
            loading={'lazy'}
            key={crypto.randomUUID()}
            alt={`${image.src}-${Math.random().toString(32)}`}
            crop={'fill'}
            src={image.src}
          />
        ))}
      </ul>
    </section>
  );
};

export default Page;
