import { Link } from 'react-router-dom';

const Team = () => {
 
  const teamMembers = [
    {
      id: 1,
      name: "Gökhan Özdemir",
      role: "Project Manager",
      image: "/images/team-page/media.png",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Merve Daşçi",
      role: "Full Stack Developer", 
      image: "/images/team-page/media (1).png",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "UI/UX Designer",
      image: "/images/team-page/media (2).png",
      socialLinks: {
        facebook: "#",
        instagram: "#", 
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Marcus Johnson",
      role: "Frontend Developer",
      image: "/images/team-page/media (3).png",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Sarah Wilson", 
      role: "Backend Developer",
      image: "/images/team-page/media (4).png",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "David Kim",
      role: "DevOps Engineer",
      image: "/images/team-page/media (5).png",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      id: 7,
      name: "Lisa Rodriguez",
      role: "QA Engineer", 
      image: "/images/team-page/media (6).png",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      id: 8,
      name: "Michael Brown",
      role: "Data Analyst",
      image: "/images/team-page/media (7).png",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      id: 9,
      name: "Anna Taylor",
      role: "Product Manager",
      image: "/images/team-page/media (8).png",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    }
  ];

  const TeamMemberCard = ({ member }) => (
    <div className="bg-white text-center">
      <div className="mb-4">
        <img 
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <h3 className="font-bold text-lg mb-2 text-gray-900">{member.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{member.role}</p>
      <div className="flex justify-center gap-3">
        <a href={member.socialLinks.facebook} className="text-blue-500 hover:text-blue-700">
          <i className="fab fa-facebook text-xl"></i>
        </a>
        <a href={member.socialLinks.instagram} className="text-blue-500 hover:text-blue-700">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href={member.socialLinks.twitter} className="text-blue-500 hover:text-blue-700">
          <i className="fab fa-twitter text-xl"></i>
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
     
      <nav className="py-4 px-4 bg-gray-50">
        <div className="max-w-1440 mx-auto">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">Team</span>
        </div>
      </nav>

    
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-1440 mx-auto px-4 text-center">
          <p className="text-sm font-medium mb-4 tracking-wider text-blue-500">
            WHAT WE DO
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Innovation tailored for you
          </h1>
          
         
          <div className="flex justify-center items-center gap-2 mb-12">
            <Link to="/" className="text-gray-900 font-bold">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">Team</span>
          </div>

          
          <div className="hidden lg:block mb-16">
            <div className="grid grid-cols-4 gap-2 h-96">
             
              <div className="col-span-2 row-span-2">
                <img 
                  src="/images/team-page/team-page-1.png"
                  alt="Team hero"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
             
              <div>
                <img 
                  src="/images/team-page/team-page-2.png"
                  alt="Team"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <img 
                  src="/images/team-page/team-page-3.png"
                  alt="Team"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
           
              <div>
                <img 
                  src="/images/team-page/team-page-4.png"
                  alt="Team"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <img 
                  src="/images/team-page/team-page-5.png"
                  alt="Team"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

         
          <div className="lg:hidden mb-12">
            <img 
              src="/images/team-page/team-page-1.png"
              alt="Team hero"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-white">
        <div className="max-w-1440 mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-900">
            Meet Our Team
          </h2>

         
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-white">
        <div className="max-w-1440 mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
            Start your 14 days free trial
          </h2>
          <p className="text-lg mb-8 text-gray-600 max-w-md mx-auto">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded font-medium hover:bg-blue-600 transition-colors mb-8">
            Try it free now
          </button>
          
         
          <div className="flex justify-center gap-6">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;