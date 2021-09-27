import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import Image from 'next/image';
import Logo from '@/public/img/spa-logo.png';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Home' />
      <section className='flex-grow flex mt-10'>
        <article className='flex bg-primary-50 rounded-xl flex-col md:pt-0 cursor-default md:mt-0 md:justify-center text-primary-900 layout'>
          <div className='flex flex-col items-center flex-grow justify-around'>
            <h1 className='mt-10'>The Holistic Spa Room</h1>
            <h4 className='text-center w-2/3'>
              Indulge yourself in a Holistic & Spiritual Spa treatments to
              refresh and heal your mind, body and spirit
            </h4>
            <Image src={Logo} width='100%' height='100%' objectFit='contain' />
          </div>
        </article>
      </section>
    </>
  );
}
