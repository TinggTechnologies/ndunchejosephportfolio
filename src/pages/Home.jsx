import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Skills />
    </PageLayout>
  );
}

