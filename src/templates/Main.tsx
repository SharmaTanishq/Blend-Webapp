
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
    <Navbar></Navbar>
    {props.children}
    <Footer/>
  </div>
);

export { Main };
