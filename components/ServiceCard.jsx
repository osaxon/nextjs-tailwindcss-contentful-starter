import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceCard({ service }) {
  const { name, description, slug, image } = service.fields;
  return (
    <div className='shadow flex flex-col items-center justify-center bg-primary-100 rounded-lg p-4'>
      <div className=''>
        <Image
          src={'https://' + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          objectFit='cover'
          className='mix-blend-multiply'
        />
      </div>
      <div className='flex flex-col'>
        <div className='info'>
          <h4 className='text-center text-2xl'>{name}</h4>
          <p className='text-justify text-base'>{description}</p>
        </div>

        {/* button */}
        <button className='text-center bg-primary-900 hover:bg-primary-700 text-primary-50 font-bold text-xl rounded-md shadow py-2 mt-4'>
          <Link href={'/services/' + slug}>
            <a>Find out more</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
