import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomLink from './CustomLink';

export default function ServiceCard({ service }) {
  const { name, description, slug, image, bookingUrl } = service.fields;
  return (
    <div className='relative shadow flex flex-col justify-between'>
      <CustomLink className='relative' href={'/services/' + slug}>
        <Image
          src={'https:' + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          className='relative bg-gray-200'
        />
      </CustomLink>
      <h4 className='absolute bg-gray-100 text-green-700 shadow rounded-br-md text-4xl px-4 py-2 tracking-wide top-0'>
        {name}
      </h4>
    </div>
  );
}
