import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

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

  
  const companies = [
    { name: "Hooli", icon: "fab fa-hooli" },
    { name: "Lyft", icon: "fab fa-lyft" },
    { name: "Pied Piper", icon: "fab fa-pied-piper-alt" },
    { name: "Stripe", icon: "fab fa-stripe" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Reddit", icon: "fab fa-reddit" }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      <nav className="py-4 px-4 bg-gray-50">
        <div className="max-w-1440 mx-auto">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">About</span>
        </div>
      </nav>

   
      <section className="py-12 lg:py-20">
        <div className="max-w-1440 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
           
            <div className="text-center lg:text-left">
              <p className="text-sm font-medium mb-4 tracking-wider text-gray-600">
                ABOUT COMPANY
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                ABOUT US
              </h1>
              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
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
                  src="/images/hero/technology 1.png"
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

     
      <section className="py-16 bg-white">
        <div className="max-w-1440 mx-auto px-4 text-center">
          <p className="text-sm font-medium mb-4 tracking-wider text-red-500">
            Problems trying
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-white">
        <div className="max-w-1440 mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-white">
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

     
      <section className="py-16 bg-white">
        <div className="max-w-1440 mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-12 max-w-md mx-auto">
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
                <h3 className="font-bold text-lg mb-2 text-gray-900">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>
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

     
      <section className="py-16 bg-gray-50">
        <div className="max-w-1440 mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Big Companies Are Here
          </h2>
          <p className="text-gray-600 mb-12 max-w-md mx-auto">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>

        
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity flex items-center justify-center">
                <i className={`${company.icon} text-4xl lg:text-5xl text-gray-600`}></i>
              </div>
            ))}
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
  );
};

export default About;