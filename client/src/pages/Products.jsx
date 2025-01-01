import { Cpu, Battery, Wifi, Zap, Shield, Cloud, Smartphone, Laptop } from 'lucide-react';
import Navbar from '../components/Navbar';

const products = [
  {
    name: "NeoBook Pro",
    type: "ultrabook laptop · 14-inch · 1TB",
    description: "You know that perfect balance between performance and battery life you've been searching for? We created NeoBook Pro to deliver exactly that.",
    icons: [
      { Icon: Cpu, label: "Powerful" },
      { Icon: Battery, label: "Long-lasting" },
      { Icon: Wifi, label: "Connected" }
    ]
  },
  {
    name: "NeoBook Air",
    type: "ultralight laptop · 13-inch · 512GB",
    description: "Impossibly thin. Incredibly powerful. The NeoBook Air redefines what's possible in an ultralight laptop.",
    icons: [
      { Icon: Zap, label: "Fast" },
      { Icon: Battery, label: "Efficient" },
      { Icon: Cloud, label: "Cloud-ready" }
    ]
  },
  {
    name: "NeoBook Studio",
    type: "workstation laptop · 16-inch · 2TB",
    description: "Built for creators. The NeoBook Studio combines raw power with precision to bring your creative vision to life.",
    icons: [
      { Icon: Laptop, label: "Powerful" },
      { Icon: Shield, label: "Secure" },
      { Icon: Cpu, label: "Pro-grade" }
    ]
  },
  {
    name: "NeoBook Elite",
    type: "business laptop · 15-inch · 1TB",
    description: "Enterprise performance meets military-grade security. The perfect companion for professionals who demand the best.",
    icons: [
      { Icon: Shield, label: "Secure" },
      { Icon: Battery, label: "24hr Battery" },
      { Icon: Smartphone, label: "Connected" }
    ]
  }
];

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-black text-white">
        {products.map((product, index) => (
          <div key={index} className="grid md:grid-cols-2 min-h-screen border-b border-zinc-700">
            <div className="bg-zinc-900 p-12 flex items-center justify-center">
              <img
                src="/api/placeholder/600/600"
                alt={product.name}
                className="w-full max-w-xl rounded-lg object-cover"
              />
            </div>

            <div className="p-12 flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-xl text-zinc-400">{product.type}</p>
              </div>

              <h2 className="text-3xl font-semibold">Power meets portability.</h2>

              <p className="text-zinc-300 text-lg leading-relaxed">{product.description}</p>

              <div className="grid grid-cols-3 gap-8 pt-6">
                {product.icons.map(({ Icon, label }, iconIndex) => (
                  <div key={iconIndex} className="text-center">
                    <Icon className="w-12 h-12 mx-auto mb-3 text-purple-500" />
                    <p className="text-lg">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
