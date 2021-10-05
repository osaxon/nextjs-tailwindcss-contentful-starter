import Seo from '@/components/Utils/Seo';
import SvgBall from '@/components/SvgComps/Ball';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Home' />
      <section className='flex-grow flex py-4'>
        <article className='px-6 flex flex-col md:pt-0 cursor-default md:mt-0 md:justify-center text-gray-900 layout'>
          <div className='flex flex-col flex-grow justify-center items-center'>
            <div className='flex flex-col items-center z-50'>
              <h2 className='text-center text-3xl select-none'>
                Next.JS starter with Tailwind CSS and Contentful CMS
              </h2>
            </div>
            <div className='absolute bottom-1/3 '>
              <div className='w-64 h-64 fill-yellow dark:fill-red transition-all'>
                <SvgBall />
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
