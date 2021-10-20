import Seo from '@/components/Utils/Seo';
import SvgBall from '@/components/SvgComps/Ball';
import Emoji from 'a11y-react-emoji';
import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import SvgMoon from '@/components/SvgComps/SvgMoon';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Home' />
      <div className=' z-10'>
        <section className='flex flex-col justify-center items-center cursor-default min-h-[1000px] text-gray-900'>
          <article className='layout py-20  flex-grow z-10'>
            <h2 className='text-3xl select-none z-10'>
              Hi! I'm{' '}
              <span className='dark:text-leaf-400 text-cerise-500'>Oli</span>
              <Emoji symbol={' ' + '👍'} />
            </h2>
            <h3>Freelance web developer</h3>
            <h3>Scroll down to see some of my work</h3>
          </article>
        </section>
      </div>
    </>
  );
}
