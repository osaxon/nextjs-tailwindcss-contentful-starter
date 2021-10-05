import React from 'react';
import Image from 'next/image';
import CustomLink from './Utils/CustomLink';
import CustomImage from './Utils/CustomImage';

export default function ServiceCard({ service }) {
  const { name, slug, image } = service.fields;
  return (
    <article className='relative shadow flex flex-col justify-between'>
      <h4 className='p-2'>{name}</h4>
      <CustomLink className='relative' href={'/services/' + slug}>
        <CustomImage
          image={'https:' + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
        />
      </CustomLink>
    </article>
  );
}
