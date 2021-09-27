import Seo from '@/components/Seo';
import React from 'react';
import { createClient } from 'contentful';
import ServiceCard from '@/components/ServiceCard';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'service' });

  return {
    props: {
      services: res.items,
    },
  };
}

const Services = ({ services }) => {
  return (
    <>
      <Seo title='Services' />
      <section className='grid grid-cols-1 gap-10 md:grid-cols-2 my-10 layout'>
        {services.map((service) => (
          <article key={service.sys.id} className=''>
            <ServiceCard service={service} />
          </article>
        ))}
      </section>
    </>
  );
};

export default Services;
