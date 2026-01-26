import { Link } from 'react-router-dom';
import { Play, Star, CreditCard } from 'lucide-react';
import Features from '../components/Features';
import SimpleHeader from '../components/SimpleHeader';

const About = () => {
  
  const stats = [
    { number: "15K", label: "Happy Customers" },
    { number: "150K", label: "Monthly Visitors" },
    { number: "15", label: "Countries Worldwide" },
    { number: "100+", label: "Top Partners" }
  ];

 
  const teamMembers = [
    {
      id: 1,
      name: "Username",
      role: "Profession",
      image: "/images/team-page/media (1).png"
    },
    {
      id: 2,
      name: "Username", 
      role: "Profession",
      image: "/images/team-page/media (2).png"
    },
    {
      id: 3,
      name: "Username",
      role: "Profession", 
      image: "/images/team-page/media (3).png"
    }
  ];

  return (
    <>
      <SimpleHeader />
      <div className="min-h-screen bg-white dark:bg-gray-900">
   
        <section className="py-12 lg:py-20">
          <div className="max-w-1440 mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
           
              <div className="text-center lg:text-left">
                <p className="text-sm font-medium mb-4 tracking-wider text-gray-600 dark:text-gray-400">
                  ABOUT COMPANY
                </p>
                <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                  ABOUT US
                </h1>
                <p className="text-lg mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  We know how large objects will act, 
                but things on a small scale
              </p>
              <button className="bg-blue-500 text-white px-8 py-3 rounded font-medium hover:bg-blue-600 transition-colors">
                Get Quote Now
              </button>
            </div>

            
            <div className="mt-8 lg:mt-0">
              <div className="relative">
                <img 
                  src="/images/hero/none (1).png"
                  alt="About us"
                  className="w-full h-64 lg:h-96 object-cover rounded-lg"
                />
               
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center lg:w-20 lg:h-20">
                  <div className="w-8 h-8 bg-pink-300 rounded-full lg:w-10 lg:h-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-1440 mx-auto px-4 text-center">
          <p className="text-sm font-medium mb-4 tracking-wider text-red-500">
            Problems trying
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-1440 mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-1440 mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden h-64 lg:h-96">
            <img 
              src="/images/hero/about-us.png"
              alt="Video background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <button className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                <Play className="w-6 h-6 lg:w-8 lg:h-8 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Customer Reviews Section */}
      <section 
        className="relative py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/images/categories/background (4).png')` 
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#2A2A5A]/60"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-12 lg:mb-16 tracking-wide">
            CUSTOMERS REVIEWS
          </h2>

          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-[#FBBF24] overflow-hidden">
              <img 
                src="/images/categories/media circle-box xs-circle.png"
                alt="Regina Miles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stars Rating - 4 filled, 1 empty */}
          <div className="flex justify-center gap-1 mb-6">
            <Star className="w-5 h-5 lg:w-6 lg:h-6 text-[#FBBF24] fill-[#FBBF24]" />
            <Star className="w-5 h-5 lg:w-6 lg:h-6 text-[#FBBF24] fill-[#FBBF24]" />
            <Star className="w-5 h-5 lg:w-6 lg:h-6 text-[#FBBF24] fill-[#FBBF24]" />
            <Star className="w-5 h-5 lg:w-6 lg:h-6 text-[#FBBF24] fill-[#FBBF24]" />
            <Star className="w-5 h-5 lg:w-6 lg:h-6 text-[#FBBF24]" />
          </div>

          {/* Review Text */}
          <p className="text-white text-sm lg:text-base leading-relaxed mb-6 max-w-md mx-auto">
            Slate helps you see how many more days you need to work to 
            reach your financial goal.
          </p>

          {/* Reviewer Info */}
          <div className="text-white">
            <p className="font-bold text-[#23A6F0] mb-1">Regina Miles</p>
            <p className="text-sm text-white/80">Designer</p>
          </div>
        </div>
      </section>

      {/* Designing Better Experience Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#E74040] rounded-full flex items-center justify-center">
              <CreditCard className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl lg:text-4xl font-bold text-[#252B42] dark:text-white mb-8 leading-tight">
            Designing Better<br className="lg:hidden" /> Experience
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="px-10 py-3 bg-[#23A6F0] text-white font-bold rounded-md hover:bg-[#1a8cd8] transition-colors">
              Try Now
            </button>
            <button className="px-10 py-3 border-2 border-[#23A6F0] text-[#23A6F0] font-bold rounded-md hover:bg-[#23A6F0] hover:text-white transition-colors">
              Learn More
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-[#737373] dark:text-gray-400 leading-relaxed max-w-md mx-auto">
            Problems trying to resolve the conflict between the two
            major realms of Classical physics.
          </p>
        </div>
      </section>

     
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-1440 mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-md mx-auto">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>

         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="mb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-lg mx-auto"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.role}</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-1440 mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Big Companies Are Here
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-md mx-auto">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>

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

    
      <section className="bg-blue-500 text-white">
        <div className="max-w-1440 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-screen lg:h-[636px]">
         
            <div className="flex flex-col justify-center px-8 lg:px-16 py-16">
              <p className="text-sm font-medium mb-4 tracking-wider opacity-90">
                WORK WITH US
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Now Let's grow Yours
              </h2>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                The gradual accumulation of information about atomic and 
                small-scale behavior during the first quarter of the 20th
              </p>
              <div>
                <button className="border-2 border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-blue-500 transition-colors">
                  Button
                </button>
              </div>
            </div>

           
            <div className="h-full">
              <img 
                src="/images/hero/about-us-1.png"
                alt="Work with us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;