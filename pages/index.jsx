import Seo from '@/components/Utils/Seo';
import SvgBall from '@/components/SvgComps/Ball';
import SvgMoon from '@/components/SvgComps/SvgMoon';
import SvgLogo from '@/components/SvgComps/SvgLogo';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Home' />
      <div className='flex flex-col justify-center min-h-[calc(100vh-82px)]'>
        <section className='w-full flex flex-col md:pt-0 cursor-default text-gray-900'>
          <article className='layout flex flex-col justify-center items-center'>
            <h2 className='text-center text-3xl select-none z-10'>
              Next.JS starter with Tailwind CSS and Contentful CMS
            </h2>
            <div className='absolute md:w-2/5 w-2/3 z-0 fill-red dark:fill-leaf opacity-20'>
              <SvgBall />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
