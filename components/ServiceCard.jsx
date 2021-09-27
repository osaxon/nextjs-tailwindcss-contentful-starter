import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomLink from './CustomLink';

export default function ServiceCard({ service }) {
  const { name, description, slug, image } = service.fields;
  return (
    <div className='shadow flex flex-col justify-between bg-primary-100 rounded-lg p-4 h-full'>
      <div className=''>
        <Image
          src={'https://' + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          objectFit='cover'
          className='mix-blend-multiply'
        />
      </div>

      <div className='flex flex-col justify-between flex-grow'>
        <div className='info'>
          <h4 className='text-center text-2xl'>{name}</h4>
          <p className='text-justify text-base'>{description}</p>
        </div>

        {/* buttons */}
        <div className='mt-4 flex flex-col gap-2'>
          <CustomLink
            className='bg-primary-900 hover:bg-primary-700 text-primary-50 font-bold text-xl rounded-md shadow py-2'
            href={'/services/' + slug}
          >
            Find out more
          </CustomLink>
          <CustomLink
            className='text-center bg-green-600 hover:bg-green-400 text-green-50 font-bold text-xl rounded-md shadow py-2'
            href='https://bookwhen.com/osaxon#focus=ev-sadp-20211004100000'
          >
            Book now
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
