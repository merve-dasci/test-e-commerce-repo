import { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: 1,
      name: "FREE",
      description: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way",
      price: 0,
      yearlyPrice: 0,
      features: [
        "Unlimited product updates",
        "1GB Cloud storage",
        "Email and community support"
      ],
      buttonText: "Try for free",
      popular: false
    },
    {
      id: 2,
      name: "STANDARD",
      description: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way",
      price: 9.99,
      yearlyPrice: 99.99,
      features: [
        "Unlimited product updates",
        "5GB Cloud storage",
        "Email and community support",
        "Personal help + support"
      ],
      buttonText: "Try for free",
      popular: true
    },
    {
      id: 3,
      name: "PREMIUM",
      description: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way",
      price: 19,
      yearlyPrice: 199,
      features: [
        "Unlimited product updates",
        "Unlimited Cloud storage",
        "Priority email support",
        "Personal help + support",
        "Advanced analytics"
      ],
      buttonText: "Try for free",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-gray-900">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#252B42] dark:text-white mb-4">
            Pricing
          </h1>
          <p className="text-sm lg:text-base text-[#737373] dark:text-gray-400 leading-relaxed max-w-md mx-auto">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: 
            Newtonian mechanics
          </p>
        </div>
      </section>

      {/* Toggle */}
      <section className="py-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isYearly ? 'text-[#252B42] dark:text-white' : 'text-[#737373] dark:text-gray-400'}`}>
              Monthly
            </span>
            
            {/* Toggle Switch */}
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? 'bg-[#23A6F0]' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <div 
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform shadow-md ${
                  isYearly ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>

            <span className={`text-sm font-bold ${isYearly ? 'text-[#252B42] dark:text-white' : 'text-[#737373] dark:text-gray-400'}`}>
              Yearly
            </span>

            {/* Save Badge */}
            <span className="bg-[#B2E3FF] dark:bg-[#23A6F0]/20 text-[#23A6F0] text-xs font-bold px-3 py-1 rounded-full">
              Save 25%
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Desktop: 3 columns, Mobile: 1 column */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-start">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`bg-white dark:bg-gray-800 rounded-xl p-8 lg:p-10 text-center border-2 transition-all ${
                  plan.popular 
                    ? 'border-[#23A6F0] lg:scale-110 lg:py-16 shadow-xl' 
                    : 'border-[#23A6F0]/20 hover:border-[#23A6F0] shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Plan Name */}
                <h3 className={`text-xl lg:text-2xl font-bold mb-4 ${
                  plan.popular ? 'text-[#252B42] dark:text-white' : 'text-[#23A6F0]'
                }`}>
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#737373] dark:text-gray-400 leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl lg:text-5xl font-bold text-[#23A6F0]">
                    {isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-[#23A6F0] text-xl font-bold ml-1">$</span>
                  <p className="text-sm text-[#8EC2F2] mt-1">
                    Per {isYearly ? 'Year' : 'Month'}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center gap-2 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        index < 3 ? 'bg-[#2DC071]' : 'bg-[#BDBDBD]'
                      }`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-[#252B42] dark:text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className={`w-full py-4 rounded-md font-bold text-sm transition-colors ${
                  plan.popular 
                    ? 'bg-[#23A6F0] text-white hover:bg-[#1a8cd8]' 
                    : 'bg-[#23A6F0] text-white hover:bg-[#1a8cd8]'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-12 lg:py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#252B42] dark:text-white mb-4">
            Trusted by over 4,000 big companies
          </h2>
          <p className="text-sm text-[#737373] dark:text-gray-400 leading-relaxed max-w-md mx-auto">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
