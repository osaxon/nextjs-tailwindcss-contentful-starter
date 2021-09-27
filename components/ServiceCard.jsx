import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomLink from './CustomLink';

export default function ServiceCard({ service }) {
  const { name, description, slug, image, bookingUrl } = service.fields;
  return (
    <div className='relative shadow flex flex-col justify-between bg-primary-50 rounded p-4 h-full'>
      <div className='relative flex items-end'>
        <Image
          src={'https://' + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          objectFit='cover'
          className='relative mix-blend-multiply rounded-t'
        />
        <h4 className='absolute text-primary-50 text-3xl px-4 py-2 text-centertext-primary-900 tracking-wide opacity-80'>
          {name}
        </h4>
      </div>

      <div className='flex flex-col justify-between flex-grow'>
        {/* buttons */}
        <div className='mt-4 flex flex-col gap-2'>
          <CustomLink
            className='bg-primary-900 hover:bg-primary-700 text-primary-50 font-bold text-xl rounded shadow py-2'
            href={'/services/' + slug}
          >
            Find out more
          </CustomLink>
          <CustomLink
            className='text-center bg-green-600 hover:bg-green-400 text-green-50 font-bold text-xl rounded shadow py-2'
            href={bookingUrl}
          >
            Book now
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
