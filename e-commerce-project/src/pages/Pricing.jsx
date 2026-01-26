import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: 1,
      name: "FREE",
      description: "Organize across all apps by hand",
      price: 0,
      yearlyPrice: 0,
      features: [
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "1GB Cloud storage", included: false },
        { text: "Email and community support", included: false },
        { text: "Personal help + support", included: false }
      ],
      buttonText: "Try for free",
      popular: false,
      bgColor: "bg-white dark:bg-gray-800"
    },
    {
      id: 2,
      name: "STANDARD",
      description: "Organize across all apps by hand",
      price: 9.99,
      yearlyPrice: 99.99,
      features: [
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "1GB Cloud storage", included: true },
        { text: "Email and community support", included: false },
        { text: "Personal help + support", included: false }
      ],
      buttonText: "Try for free",
      popular: true,
      bgColor: "bg-[#252B42] dark:bg-[#1a1f2e]"
    },
    {
      id: 3,
      name: "PREMIUM",
      description: "Organize across all apps by hand",
      price: 19.99,
      yearlyPrice: 199.99,
      features: [
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "1GB Cloud storage", included: true },
        { text: "Email and community support", included: true },
        { text: "Personal help + support", included: false }
      ],
      buttonText: "Try for free",
      popular: false,
      bgColor: "bg-white dark:bg-gray-800"
    }
  ];

  const faqs = [
    {
      question: "The quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    }
  ];

  return (
    <>
      {/* Simple Header for Pricing Page */}
      <SimpleHeader />
      
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-gray-900">
        {/* Header Section */}
        <section className="py-12 lg:py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm font-bold text-[#737373] dark:text-gray-400 mb-2 tracking-wider">
            PRICING
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#252B42] dark:text-white mb-4">
            Simple Pricing
          </h1>
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-[#252B42] dark:text-white font-bold hover:text-[#23A6F0]">Home</Link>
            <ChevronRight className="w-4 h-4 text-[#BDBDBD]" />
            <span className="text-[#737373] dark:text-gray-400 font-bold">Pricing</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 lg:py-20 bg-[#FAFAFA] dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252B42] dark:text-white mb-4">
            Pricing
          </h2>
          <p className="text-sm text-[#737373] dark:text-gray-400 leading-relaxed max-w-md mx-auto mb-10">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-bold ${!isYearly ? 'text-[#252B42] dark:text-white' : 'text-[#737373] dark:text-gray-400'}`}>
              Monthly
            </span>
            
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

            <span className="bg-[#B2E3FF] dark:bg-[#23A6F0]/20 text-[#23A6F0] text-xs font-bold px-3 py-1 rounded-full">
              Save 25%
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:items-center max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`${plan.bgColor} rounded-xl p-8 lg:p-10 text-center border ${
                  plan.popular 
                    ? 'border-[#23A6F0] lg:scale-y-110 lg:py-16 shadow-xl z-10' 
                    : 'border-[#23A6F0]/20'
                }`}
              >
                {/* Plan Name */}
                <h3 className={`text-xl lg:text-2xl font-bold mb-4 ${
                  plan.popular ? 'text-white' : 'text-[#252B42] dark:text-white'
                }`}>
                  {plan.name}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${
                  plan.popular ? 'text-white/80' : 'text-[#737373] dark:text-gray-400'
                }`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-4xl lg:text-5xl font-bold ${
                    plan.popular ? 'text-[#23A6F0]' : 'text-[#23A6F0]'
                  }`}>
                    {isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className={`text-xl font-bold ml-1 ${
                    plan.popular ? 'text-[#23A6F0]' : 'text-[#23A6F0]'
                  }`}>$</span>
                  <p className={`text-sm mt-1 ${
                    plan.popular ? 'text-[#8EC2F2]' : 'text-[#8EC2F2]'
                  }`}>
                    Per {isYearly ? 'Year' : 'Month'}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center gap-2 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.included ? 'bg-[#2DC071]' : 'bg-[#BDBDBD]'
                      }`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className={plan.popular ? 'text-white' : 'text-[#252B42] dark:text-white'}>
                        {feature.text}
                      </span>
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

      {/* Big Companies Section */}
      <section className="py-16 bg-[#FAFAFA] dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl lg:text-2xl font-bold text-[#252B42] dark:text-white mb-8">
            Trusted By Over 4000 Big Companies
          </h2>
          
          {/* Company Logos - Mobilde alt alta, web'de yan yana */}
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 md:gap-16">
            <img 
              src="/images/shoppage/Vector.png" 
              alt="Hooli" 
              className="h-10 md:h-12 opacity-60 hover:opacity-100 transition-opacity dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (1).png" 
              alt="Lyft" 
              className="h-10 md:h-12 opacity-60 hover:opacity-100 transition-opacity dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (2).png" 
              alt="Leaf" 
              className="h-10 md:h-12 opacity-60 hover:opacity-100 transition-opacity dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (3).png" 
              alt="Stripe" 
              className="h-10 md:h-12 opacity-60 hover:opacity-100 transition-opacity dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (4).png" 
              alt="AWS" 
              className="h-10 md:h-12 opacity-60 hover:opacity-100 transition-opacity dark:invert"
            />
            <img 
              src="/images/shoppage/Vector (5).png" 
              alt="Reddit" 
              className="h-10 md:h-12 opacity-60 hover:opacity-100 transition-opacity dark:invert"
            />
          </div>
        </div>
      </section>

      {/* Pricing FAQs Section */}
      <section className="py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#252B42] dark:text-white mb-4">
              Pricing FAQs
            </h2>
            <p className="text-sm text-[#737373] dark:text-gray-400 leading-relaxed max-w-md mx-auto">
              Problems trying to resolve the conflict between 
              the two major realms of Classical physics
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="text-left">
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#23A6F0] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#252B42] dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-[#737373] dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="text-center mt-12">
            <p className="text-sm text-[#737373] dark:text-gray-400">
              Haven't got your answer? Contact our support
            </p>
          </div>
        </div>
      </section>

      {/* Start Free Trial Section */}
      <section className="py-20 lg:py-28 bg-[#FAFAFA] dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252B42] dark:text-white mb-4">
            Start your 14 days free trial
          </h2>
          <p className="text-sm text-[#737373] dark:text-gray-400 leading-relaxed max-w-md mx-auto mb-8">
            Met minim Mollie non desert Alamo est sit cliquey dolor 
            do met sent. RELIT official consequent.
          </p>
          <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-[#1a8cd8] transition-colors">
            Try it free now
          </button>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <a href="#" className="text-[#23A6F0] hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-[#252B42] dark:text-white hover:text-[#23A6F0] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-[#252B42] dark:text-white hover:text-[#23A6F0] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" className="text-[#252B42] dark:text-white hover:text-[#23A6F0] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Pricing;
