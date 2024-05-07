import { useRouter } from "next/router";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

import { useEffect } from "react";

type Repo = {
  name: string;
  stargazers_count: number;
};

import AOS from "aos";
import "aos/dist/aos.css";
import { Footer, LoginModal, MarqueeBanner, Navbar } from "@/components";
import {
  CarouselSection,
  ExploreSection,
  HeroSection,
  MeetSimilarSection,
  SectionReversed,
} from "@/sections";

export const getStaticProps = (async (context) => {
  const res = await fetch(
    `${process.env.CMS_URL}/carousels?populate=*&pagination[page]=1&pagination[pageSize]=35`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    }
  );
  const home = await fetch(
    `${process.env.CMS_URL}/home?populate[0]=similar&populate[1]=similar.main_image&populate[2]=phone&populate[3]=phone.main_image&populate[4]=phone_two&populate[5]=phone_two.main_image`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    }
  );

  const carousel_data = await res.json();
  const home_data = await home.json();
  return {
    props: {
      carousels: carousel_data,
      home: home_data,
    },
  };
}) satisfies GetStaticProps<{
  carousels: {};
  home: {};
}>;

const Index = ({
  carousels,
  home,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  const router = useRouter();

  return (
    <Main meta={<Meta title="Peach" description="The best music dating app" />}>
      <div className="mx-auto max-w-screen bg-[rgb(20 18 18)]">
        <LoginModal />
        <section className="h-4/6 	">
          <HeroSection data={carousels} />
        </section>

        <section className="p-2 md:p-8 ">
          <MeetSimilarSection
            home={home.data.attributes.similar}
            
          />
        </section>

        <section>          
          <CarouselSection data={home.data.attributes.phone} />
        </section>
       
        <section>
         
          <SectionReversed data={home.data.attributes.phone_two} />
        </section>

        <section id="explore" className="pt-5 pb-3">
          
          <ExploreSection />
        </section>

        <section className="pt-1 pb-1 bg-white">
          <MarqueeBanner
            textColor="text-[#4B4B4B] "
            textOne="Find your new bestie"
            textTwo="Find your new boo"
          />
        </section>
      </div>
    </Main>
  );
};

export default Index;
