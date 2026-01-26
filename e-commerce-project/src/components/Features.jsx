import { CreditCard } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Easy to use",
      description: "Things on a very small scale behave like nothing that you have any direct experience about."
    },
    {
      id: 2,
      title: "Easy to use",
      description: "Things on a very small scale behave like nothing that you have any direct experience about."
    },
    {
      id: 3,
      title: "Easy to use",
      description: "Things on a very small scale behave like nothing that you have any direct experience about."
    },
    {
      id: 4,
      title: "Easy to use",
      description: "Things on a very small scale behave like nothing that you have any direct experience about."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-bold tracking-wider text-[#E74040] mb-3">
            Practice Advice
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold text-[#252B42] mb-4">
            Featured Products
          </h2>
          <p className="text-sm text-[#737373] max-w-md mx-auto leading-relaxed">
            Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Features Grid */}
        {/* Desktop: 2x2 grid, Mobile: single column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex items-start gap-4"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#E74040] rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base lg:text-lg font-bold text-[#252B42] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
