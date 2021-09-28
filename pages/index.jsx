import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import Image from 'next/image';
import Logo from '@/public/img/spa-logo.png';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Home' />
      <section className='flex-grow flex mt-10'>
        <article className='px-6 flex flex-col md:pt-0 cursor-default md:mt-0 md:justify-center text-gray-900 layout'>
          <div className='flex flex-col flex-grow justify-around'>
            <p className='text-center text-2xl font-courgette text-gray-400'>
              Indulge yourself in Holistic & Spiritual Spa treatments to refresh
              and heal your mind, body and spirit...
            </p>
            <Image src={Logo} width='100%' height='100%' objectFit='contain' />
          </div>
        </article>
      </section>
    </>
  );
}
