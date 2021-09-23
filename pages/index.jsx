import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import Image from 'next/image';
import Logo from '../public/img/logo.png';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Home' />
      <section className='flex-grow flex'>
        <article className='flex flex-col pt-20 md:pt-0 cursor-default md:mt-0 md:justify-center text-white layout'>
          <div className='flex flex-col items-center'>
            <h1 className=''>Headline</h1>
            <h2 className='cursor-default'>
              Read more <CustomLink href='/about'>here</CustomLink>
            </h2>
            <Image src={Logo} width='100%' height='100%' objectFit='contain' />
          </div>
        </article>
      </section>
    </>
  );
}
