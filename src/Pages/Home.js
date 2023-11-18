import React from "react";
import Banner from "../components/Banner";
import LogoClientSection from "../components/HomePage/LogoClientSection";
import WorkSection from "../components/HomePage/WorkSection";
import WhyUsSection from "../components/HomePage/WhyUsSection";
import FeaturedSection from "../components/HomePage/FeaturedSection";
import JobsSection from "../components/HomePage/JobsSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import CounterSection from "../components/HomePage/CounterSection";
import PricingSection from "../components/HomePage/PricingSection";



const Home = () => {
  return (
    <main className="main">
      <Banner></Banner>
      <LogoClientSection></LogoClientSection>
      <WorkSection></WorkSection>
      <WhyUsSection></WhyUsSection>
      <FeaturedSection></FeaturedSection>
      <JobsSection></JobsSection>
      <TestimonialSection></TestimonialSection>
      <CounterSection></CounterSection>
      <PricingSection></PricingSection>
  
    </main>
  );
};

export default Home;
