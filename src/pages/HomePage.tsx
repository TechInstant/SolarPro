import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { QuickServiceBar } from '../components/home/QuickServiceBar';
import { ServicesSection } from '../components/home/ServicesSection';
import { ProjectsSection } from '../components/home/ProjectsSection';
import { ProductsSection } from '../components/home/ProductsSection';
import { EngineerSection } from '../components/home/EngineerSection';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ContactCtaSection } from '../components/home/ContactCtaSection';
import { useSeo } from '../hooks/useSeo';

export const HomePage: React.FC = () => {
  useSeo({
    title: 'Solar Installation & Renewable Energy Solutions | SolarPro Engineering',
    description:
      'Professional solar installation, inverter systems, batteries, maintenance and renewable energy solutions for homes and businesses.',
  });

  return (
    <>
      <HeroSection />
      <QuickServiceBar />
      <ServicesSection />
      <ProjectsSection />
      <ProductsSection />
      <EngineerSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ContactCtaSection />
    </>
  );
};
