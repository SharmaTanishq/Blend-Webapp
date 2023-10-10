import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { useEffect } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer, MarqueeBanner, Navbar } from '@/components';
import { CarouselSection, ExploreSection, HeroSection, MeetSimilarSection } from '@/sections';




const Index = () => {
  useEffect(()=>{AOS.init();},[])
  const router = useRouter();
  
  
  return (
    <Main
      meta={
        <Meta
          title="Blend"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
     <div className="mx-auto max-w-screen">     

      <section className='h-4/6	'><HeroSection/></section>

      <section className='pt-3 pb-5'><MeetSimilarSection/></section>

      {/* <section className='pt-1 pb-1 bg-primary'>
        <MarqueeBanner 
        textColor='text-white '
        textOne='Music lovers only!'
        textTwo='Music lovers only!'
        />
        </section> */}
      <section className='bg-white'> <CarouselSection/> </section>

      <section id='explore' className='pt-5 pb-3'> <ExploreSection/> </section>

      <section className='pt-1 pb-1 bg-white'>
        <MarqueeBanner
            textColor='text-[#4B4B4B] '
            textOne='Find your new bestie'
            textTwo='Find your new boo'
       /></section>

      
    </div>
    </Main>
  );
};

export default Index;
