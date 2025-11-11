import HeroSection from '@/components/HeroSection';
import ConversationDemo from '@/components/ConversationDemo';
import StatsSection from '@/components/StatsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import UseCasesSection from '@/components/UseCasesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ComparisonSection from '@/components/ComparisonSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ConversationDemo />
      <StatsSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <UseCasesSection />
      <TestimonialsSection />
      <ComparisonSection />
      <IntegrationsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
