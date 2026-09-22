import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { QuickServiceBar } from '../components/home/QuickServiceBar';
import { ServicesSection } from '../components/home/ServicesSection';
import { SecuritySection } from '../components/home/SecuritySection';
import { ProjectsSection } from '../components/home/ProjectsSection';
import { ProductsSection } from '../components/home/ProductsSection';
import { VideoSection } from '../components/home/VideoSection';
import { EngineerSection } from '../components/home/EngineerSection';
import { ContactCtaSection } from '../components/home/ContactCtaSection';
import { useSeo } from '../hooks/useSeo';
import { companyConfig } from '../config/company';

export const HomePage: React.FC = () => {
  useSeo({
    title: `Solar, CCTV & Security Solutions | ${companyConfig.name}`,
    description: `${companyConfig.brandMessage} ${companyConfig.secondaryMessage}`,
  });

  return (
    <>
      <HeroSection />
      <QuickServiceBar />
      {/* Solar & Power */}
      <ServicesSection />
      {/* CCTV Surveillance & Security */}
      <SecuritySection />
      <ProjectsSection />
      <ProductsSection />
      <VideoSection />
      <EngineerSection />
      <ContactCtaSection />
    </>
  );
};
