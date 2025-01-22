import React, { Suspense } from 'react';
import HeroSection from '@/app/SystemDesign/Molecules/HomeBanner/Hero';
import BannerFeaturedText from '@/app/SystemDesign/Molecules/HomeBanner/BannerFeaturedText';
import Slider from '@/app/SystemDesign/Molecules/HomeBanner/BannerSlider';
import BannerFeaturedItem from '@/app/SystemDesign/Molecules/HomeBanner/BannerFeaturedItem';
import BannerFeaturedItemCheck from '@/app/SystemDesign/Molecules/HomeBanner/BannerFeaturedItemCheck';
import Layout from './SystemDesign/Organism/Layout';
import Container from './SystemDesign/Organism/Container';

export const runtime = 'edge';
async function fetchData(endpoint: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${apiUrl}/api/home-banner/${endpoint}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint} data`);
  }

  return res.json();
}

async function Hero() {
  const data = await fetchData('hero');
  return <HeroSection title={data.title} description={data.description} />;
}

async function FeaturedList() {
  const data = await fetchData('featured');
  return <BannerFeaturedText featuredTexts={data} />;
}

async function SliderList() {
  const data = await fetchData('slider');
  return <Slider slides={data} />;
}

async function FeaturedItems() {
  const data = await fetchData('featured-items');
  return <BannerFeaturedItem featuredItems={data} />;
}

async function FeaturedItemChecks() {
  const data = await fetchData('featured-item-checklist');
  return <BannerFeaturedItemCheck featureItemChecks={data} />;
}

export default function Home() {
  return (
    <Layout>
      <Container
        hero={
          <Suspense>
            <Hero />
          </Suspense>
        }
        featuredList={
          <Suspense>
            <FeaturedList />
          </Suspense>
        }
        sliderList={
          <Suspense>
            <SliderList />
          </Suspense>
        }
        featuredItemList={
          <Suspense>
            <FeaturedItems />
          </Suspense>
        }
        featuredItemCheckList={
          <Suspense>
            <FeaturedItemChecks />
          </Suspense>
        }
      />
    </Layout>
  );
}
