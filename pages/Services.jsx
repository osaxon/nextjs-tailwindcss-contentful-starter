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
  const items = res.items;

  // we want items with lower order number to appear first
  items.sort((a, b) => a.fields.order - b.fields.order);

  return {
    props: {
      services: items,
    },
  };
}

const Services = ({ services }) => {
  return (
    <>
      <Seo title='Services' />
      <section className='layout py-4'>
        <h2>Services</h2>
        <p className='prose'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          vitae?
        </p>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 my-10'>
          {services.map((service) => (
            <article key={service.sys.id} className=''>
              <ServiceCard service={service} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
