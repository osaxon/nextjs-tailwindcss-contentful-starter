import React from 'react';
import Seo from '@/components/Seo';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Seo templateTitle='About' />
      <section className='flex-grow flex mb-auto py-4'>
        <article className='layout'>
          <h2>About</h2>
          <p></p>
        </article>
      </section>
    </>
  );
};

export default About;
