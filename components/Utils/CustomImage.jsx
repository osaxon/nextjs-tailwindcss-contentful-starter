import React from 'react';
import Image from 'next/image';

const CustomImage = (props) => {
  return (
    <div className='flex flex-wrap justify-center items-center'>
      <div className='md:w-6/12 w-4/12 px-4'>
        <Image src={props.image} width={props.width} height={props.height} />
      </div>
    </div>
  );
};

export default CustomImage;
