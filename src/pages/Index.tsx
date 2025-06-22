
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
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20 bg-white"
      >
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 py-2 rounded-full bg-truth-light-blue border border-truth-blue/20"
        >
          <span className="text-sm font-medium text-truth-blue">
            <Command className="w-4 h-4 inline-block mr-2" />
            Coming Soon - Next-gen crypto trading platform
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-left text-truth-gray-900">
            <span className="text-truth-gray-700">
              <TextGenerateEffect words="This App is" />
            </span>
            <br />
            <span className="text-truth-blue font-bold">
              <TextGenerateEffect words="Coming Soon" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-truth-gray-600 mb-8 max-w-2xl text-left leading-relaxed"
          >
            Experience seamless cryptocurrency trading with advanced features, real-time analytics, and institutional-grade security.{" "}
            <span className="text-truth-gray-900 font-medium">Available soon on all platforms.</span>
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
                className="bg-white border border-truth-gray-300 hover:bg-truth-gray-50 text-truth-gray-900 flex items-center gap-3 px-6 py-3 h-16 rounded-xl shadow-sm"
              >
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-truth-gray-500">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-white border border-truth-gray-300 hover:bg-truth-gray-50 text-truth-gray-900 flex items-center gap-3 px-6 py-3 h-16 rounded-xl shadow-sm"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-truth-green to-truth-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">▶</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-truth-gray-500">Get it on</div>
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
            <div className="truth-card p-8 text-center">
              <div className="w-64 h-96 mx-auto bg-gradient-to-br from-truth-gray-100 to-white rounded-3xl border-4 border-truth-gray-200 relative overflow-hidden shadow-lg">
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
                <div className="pt-16 px-4">
                  <Smartphone className="w-12 h-12 text-truth-blue mx-auto mb-4" />
                  <h3 className="text-truth-gray-900 font-semibold mb-2">iOS App</h3>
                  <p className="text-truth-gray-600 text-sm">Native iOS experience with advanced trading features</p>
                </div>
              </div>
            </div>

            {/* Android Mockup */}
            <div className="truth-card p-8 text-center">
              <div className="w-64 h-96 mx-auto bg-gradient-to-br from-truth-gray-100 to-white rounded-3xl border-4 border-truth-gray-200 relative overflow-hidden shadow-lg">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-lg"></div>
                <div className="pt-16 px-4">
                  <Monitor className="w-12 h-12 text-truth-green mx-auto mb-4" />
                  <h3 className="text-truth-gray-900 font-semibold mb-2">Android App</h3>
                  <p className="text-truth-gray-600 text-sm">Optimized Android experience with real-time market data</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Logo Carousel */}
      <div className="truth-section">
        <LogoCarousel />
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white">
        <FeaturesSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="truth-section">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-white">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative truth-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="truth-card p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-truth-gray-900">
            Get notified when we launch
          </h2>
          <p className="text-lg text-truth-gray-600 mb-8 max-w-2xl mx-auto">
            Be the first to experience the future of cryptocurrency trading. Sign up for early access.
          </p>
          <Button size="lg" className="truth-button">
            Notify Me
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
