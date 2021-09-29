import React from 'react';
import Seo from '@/components/Seo';
import Image from 'next/image';

const Contact = () => {
  return (
    <>
      <Seo templateTitle='Contact' />
      <section className='flex-grow flex mb-auto py-4'>
        <article className='layout'>
          <h2>Contact</h2>
        </article>
      </section>
    </>
  );
};

export default Contact;
