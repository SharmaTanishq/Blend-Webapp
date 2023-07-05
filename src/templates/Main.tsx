
import type { ReactNode } from 'react';
import { Footer, MarqueeBanner, Navbar } from '@/components';
import { MeetSimilarSection,HeroSection, CarouselSection,ExploreSection } from '@/sections';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased bg-background overflow-hidden">
    {props.meta}
    <div className="mx-auto max-w-screen">
     <Navbar/>

      <section className='h-4/6	'><HeroSection/></section>
      
      <section className='pt-3 pb-5'><MeetSimilarSection/></section>

      <section className='pt-2 pb-2 bg-primary'>
        <MarqueeBanner 
        textColor='text-white '
        textOne='Music lovers only!'
        textTwo='Music lovers only!'
        />
        </section>
      <section className='bg-white'><CarouselSection/></section>
      <section className='pt-5 pb-3'><ExploreSection/></section>
      <section className='pt-2 pb-2 bg-white'><MarqueeBanner
       textColor='text-[#4B4B4B] '
       textOne='Find your new bestie'
       textTwo='Find your new boo'
       /></section>

      <Footer/>
    </div>
  </div>
);

export { Main };
