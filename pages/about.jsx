import React from 'react';
import Seo from '@/components/Seo';
import Image from 'next/image';

import Buddah from '../public/img/buddah.jpg';

const about = () => {
  return (
    <>
      <Seo templateTitle='About' />
      <section className='flex-grow flex mb-auto'>
        <article className='layout'>
          <h1>About</h1>
        </article>
      </section>
    </>
  );
};

export default about;
