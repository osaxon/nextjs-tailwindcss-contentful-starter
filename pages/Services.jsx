import Seo from '@/components/Utils/Seo';
import React from 'react';
import { createClient } from 'contentful';
import ServiceCard from '@/components/ServiceCard';

// The content type ID from contentful e.g. 'service'
const CONTENT_TYPE = 'service';

export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: CONTENT_TYPE });
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
      <section className='layout py-4 text-gray-50'>
        <h2>Services</h2>
        <p className=''>
          Content from Contentful is listed here in a two col grid, or single
          col on mobile.
        </p>
        <p>
          Update the var CONTENT_TYPE in this page to whatever content type you
          want to display in the grid.
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
