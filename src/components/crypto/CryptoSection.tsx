
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const cryptoData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$67,234.56",
    change: "+2.45%",
    changeValue: "+$1,605.23",
    isPositive: true,
    volume: "$28.5B",
    marketCap: "$1.32T"
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,842.91",
    change: "+1.87%",
    changeValue: "+$70.45",
    isPositive: true,
    volume: "$15.2B",
    marketCap: "$462B"
  },
  {
    id: 3,
    name: "Binance Coin",
    symbol: "BNB",
    price: "$612.34",
    change: "-0.92%",
    changeValue: "-$5.68",
    isPositive: false,
    volume: "$2.1B",
    marketCap: "$89.2B"
  },
  {
    id: 4,
    name: "Solana",
    symbol: "SOL",
    price: "$245.67",
    change: "+5.23%",
    changeValue: "+$12.21",
    isPositive: true,
    volume: "$4.8B",
    marketCap: "$115.7B"
  },
  {
    id: 5,
    name: "XRP",
    symbol: "XRP",
    price: "$2.18",
    change: "+3.14%",
    changeValue: "+$0.066",
    isPositive: true,
    volume: "$8.9B",
    marketCap: "$124.3B"
  },
  {
    id: 6,
    name: "Cardano",
    symbol: "ADA",
    price: "$1.05",
    change: "-1.45%",
    changeValue: "-$0.015",
    isPositive: false,
    volume: "$1.7B",
    marketCap: "$37.2B"
  }
];

const topMovers = [
  { name: "PEPE", change: "+24.5%", isPositive: true },
  { name: "DOGE", change: "+18.2%", isPositive: true },
  { name: "SHIB", change: "+15.7%", isPositive: true },
  { name: "LUNA", change: "-12.3%", isPositive: false },
  { name: "ATOM", change: "-8.9%", isPositive: false }
];

const CryptoCard = ({ crypto }: { crypto: typeof cryptoData[0] }) => (
  <Card className="glass glass-hover border-light-gray/10">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-blue to-sky-blue flex items-center justify-center">
            <span className="text-white font-bold text-sm">{crypto.symbol.charAt(0)}</span>
          </div>
          <div>
            <h3 className="font-semibold text-white">{crypto.name}</h3>
            <p className="text-sm text-gray">{crypto.symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-white">{crypto.price}</div>
          <div className={`flex items-center gap-1 text-sm ${crypto.isPositive ? 'text-success' : 'text-error'}`}>
            {crypto.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {crypto.change}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray">24h Change</span>
          <div className={`font-medium ${crypto.isPositive ? 'text-success' : 'text-error'}`}>
            {crypto.changeValue}
          </div>
        </div>
        <div>
          <span className="text-gray">Volume</span>
          <div className="font-medium text-light-gray">{crypto.volume}</div>
        </div>
        <div className="col-span-2">
          <span className="text-gray">Market Cap</span>
          <div className="font-medium text-light-gray">{crypto.marketCap}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const CryptoSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Live Crypto{" "}
          <span className="text-gradient font-medium">Market Data</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Track real-time cryptocurrency prices and market movements
        </motion.p>
      </div>

      {/* Top Movers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">Top Movers</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {topMovers.map((mover, index) => (
            <div key={index} className="glass rounded-lg px-4 py-2 flex items-center gap-2">
              <span className="font-medium text-white">{mover.name}</span>
              <span className={`flex items-center gap-1 ${mover.isPositive ? 'text-success' : 'text-error'}`}>
                {mover.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {mover.change}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Crypto Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {cryptoData.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </motion.div>
    </section>
  );
};
