import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import Image from 'next/image';
import Logo from '../public/img/spa-logo.png';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Home' />
      <section className='flex-grow flex'>
        <article className='flex flex-col md:pt-0 cursor-default md:mt-0 md:justify-center text-white layout'>
          <div className='flex flex-col items-center'>
            <h1 className='mt-10'>The Holistic Spa Room</h1>
            <h4 className='text-center mt-10'>
              Indulge yourself in a Holistic & Spiritual Spa treatments to
              refresh and heal your mind, body and spirit
            </h4>
            <h2 className='cursor-default mt-10'>
              Read more <CustomLink href='/about'>here</CustomLink>
            </h2>
            <Image src={Logo} width='100%' height='100%' objectFit='contain' />
          </div>
        </article>
      </section>
    </>
  );
}
