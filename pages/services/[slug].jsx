import React from 'react';
import Seo from '@/components/Utils/Seo';

import { createClient } from 'contentful';
import CustomLink from '@/components/Utils/CustomLink';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'service',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'service',
    'fields.slug': params.slug,
  });
  console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>${params.slug}`);

  return {
    props: {
      service: items[0],
    },
  };
}

const ServiceDetails = ({ service }) => {
  console.log('/////////////////////////////////' + service);
  const { name, description, slug, image, bookingUrl } = service.fields;
  return (
    <>
      <Seo title={`Page about ${name}`} />
      <section className='flex-grow flex mb-auto layout'>
        <h1>{name}</h1>
        <div className='mt-4 flex flex-col'>
          {bookingUrl ? (
            <CustomLink
              className='text-center bg-green-600 hover:bg-green-400 text-green-50 font-bold text-xl rounded shadow py-2'
              href={bookingUrl}
            >
              Book now
            </CustomLink>
          ) : (
            ''
          )}
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
