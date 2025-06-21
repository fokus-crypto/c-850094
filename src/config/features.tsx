
import { TrendingUp, TrendingDown, Target, Zap } from "lucide-react";

export const features = [
  {
    title: "Smart Buy/Sell Signals",
    description: "AI-powered indicators that appear directly over candlesticks to show optimal entry and exit points.",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
  },
  {
    title: "Real-Time Indicator Overlay",
    description: "Visual buy/sell arrows positioned precisely on candlestick charts for instant decision making.",
    icon: <Target className="w-6 h-6" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
  },
  {
    title: "Trend Reversal Detection",
    description: "Advanced algorithms detect market reversals and display clear sell signals at peak moments.",
    icon: <TrendingDown className="w-6 h-6" />,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
  },
  {
    title: "Lightning-Fast Execution",
    description: "Get instant notifications when buy/sell signals appear, with one-tap trading execution.",
    icon: <Zap className="w-6 h-6" />,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png"
  }
];
