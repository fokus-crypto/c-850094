
import { motion } from "framer-motion";
import { ArrowRight, Command, Smartphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            Coming Soon - Next-gen crypto trading platform
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="This App is" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="Coming Soon" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            Experience seamless cryptocurrency trading with advanced features, real-time analytics, and institutional-grade security.{" "}
            <span className="text-white">Available soon on all platforms.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start mb-12"
          >
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-black border border-light-gray/20 hover:bg-dark-gray/20 text-white flex items-center gap-3 px-6 py-3 h-14"
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">A</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-black border border-light-gray/20 hover:bg-dark-gray/20 text-white flex items-center gap-3 px-6 py-3 h-14"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-lime-green to-primary-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">▶</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Device Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-6xl mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* iPhone Mockup */}
            <div className="glass rounded-3xl p-8 text-center">
              <div className="w-64 h-96 mx-auto bg-gradient-to-br from-dark-gray to-black rounded-3xl border-4 border-light-gray/20 relative overflow-hidden">
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
                <div className="pt-16 px-4">
                  <Smartphone className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">iOS App</h3>
                  <p className="text-gray text-sm">Native iOS experience with advanced trading features</p>
                </div>
              </div>
            </div>

            {/* Android Mockup */}
            <div className="glass rounded-3xl p-8 text-center">
              <div className="w-64 h-96 mx-auto bg-gradient-to-br from-dark-gray to-black rounded-3xl border-4 border-light-gray/20 relative overflow-hidden">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-lg"></div>
                <div className="pt-16 px-4">
                  <Monitor className="w-12 h-12 text-lime-green mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Android App</h3>
                  <p className="text-gray text-sm">Optimized Android experience with real-time market data</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Features Section */}
      <div id="features" className="bg-black">
        <FeaturesSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-black">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get notified when we launch
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be the first to experience the future of cryptocurrency trading. Sign up for early access.
          </p>
          <Button size="lg" className="button-gradient">
            Notify Me
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
