import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { useEffect } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer, LoginModal, MarqueeBanner, Navbar } from '@/components';
import { CarouselSection, ExploreSection, HeroSection, MeetSimilarSection, SectionReversed } from '@/sections';




const Index = () => {
  useEffect(()=>{AOS.init({duration:500});},[])
  const router = useRouter();
  
  
  return (
    <Main
      meta={
        <Meta
          title="Peach"
          description="The best music dating app"
        />
      }
    >
     <div className="mx-auto max-w-screen bg-[rgb(20 18 18)]">     
        <LoginModal/>
      <section className='h-4/6 	'><HeroSection/></section>

      <section className='p-2 md:p-8 '><MeetSimilarSection/></section>

      
      <section > <CarouselSection/> </section>
      {/* <section className='pt-1 pb-1 bg-primary'>
        <MarqueeBanner 
        textColor='text-white '
        textOne='Music lovers only!'
        textTwo='Find your Vibe '
        />
      </section> */}


      <section > <SectionReversed/> </section>
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
