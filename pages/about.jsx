import React from 'react';
import Seo from '@/components/Seo';
import Image from 'next/image';

import Buddah from '../public/img/buddah.jpg';

const about = () => {
  return (
    <>
      <Seo templateTitle='About' />
      <section className='flex-grow flex mb-auto'>
        <article className='layout py-10 text-white'>
          <div className='shadow-lg border-t-4 border-t-red-400 md:border-l-4 md:border-l-red-400 md:border-t-0 text-red-400 bg-red-50 py-6 flex flex-col md:flex-row justify-center md:justify-start md:text-left cursor-default'>
            <div className='px-6 z-10'>
              <h1 className='mb-4 text-center md:text-left'>About</h1>
              <h4 className='text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae nobis fuga rerum fugiat nostrum veniam.
              </h4>
              <p className='text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                earum hic, voluptas cum minus aliquam?
              </p>
            </div>
            <div className='p-6 z-0'>
              <Image
                src={Buddah}
                width='750%'
                height='750%'
                objectFit='cover'
                className='rounded-full opacity-75 bg-primary-500 mix-blend-lighten'
              />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default about;
