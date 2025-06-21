
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">FokusCrypto</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm hover:text-primary-blue transition-colors">
              Features
            </a>
            <a href="#crypto" className="text-sm hover:text-primary-blue transition-colors">
              Market
            </a>
            <Button variant="outline" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-light-gray/10">
            <div className="flex flex-col space-y-4 mt-4">
              <a 
                href="#features" 
                className="text-sm hover:text-primary-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#crypto" 
                className="text-sm hover:text-primary-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Market
              </a>
              <Button variant="outline" size="sm" className="w-fit">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
