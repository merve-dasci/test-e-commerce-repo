import { Phone, MapPin } from 'lucide-react';

const Contact = () => {
  // Office locations data
  const offices = [
    {
      city: 'Paris',
      address: '1901 Thorn ridge Cir.',
      addressLine2: '75000 Paris',
      phone: '+451 215 215',
      fax: '+451 215 215'
    },
    {
      city: 'New York',
      address: '2715 Ash Dr. San Jose,',
      addressLine2: 'South Dakota 83475',
      phone: '+451 215 215',
      fax: '+451 215 215'
    },
    {
      city: 'Berlin',
      address: '4140 Parker Rd.',
      addressLine2: 'Allentown, New Mexico 31134',
      phone: '+451 215 215',
      fax: '+451 215 215'
    },
    {
      city: 'London',
      address: '3517 W. Gray St. Utica,',
      addressLine2: 'Pennsylvania 57867',
      phone: '+451 215 215',
      fax: '+451 215 215'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section - Desktop */}
      <section 
        className="hidden md:block relative min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/categories/background (3).png')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A7CC7]/95 via-[#2A7CC7]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 min-h-[600px]">
          <div className="grid grid-cols-2 items-center min-h-[600px]">
            {/* Left Content */}
            <div className="text-white py-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                CONTACT US
              </h1>
              <p className="text-sm mb-8 leading-relaxed opacity-90 max-w-sm">
                Problems trying to resolve the conflict between<br />
                the two major realms of Classical physics:<br />
                Newtonian mechanics
              </p>
              
              {/* Contact Us Button */}
              <button className="bg-[#23A6F0] text-white px-6 py-3 rounded text-sm font-bold hover:bg-[#1E90E0] transition-colors">
                CONTACT US
              </button>
            </div>

            {/* Right Content - Addresses Grid */}
            <div className="text-white py-12">
              <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                {/* Paris */}
                <div>
                  <h3 className="text-lg font-bold mb-3">Paris</h3>
                  <p className="text-sm opacity-90">1901 Thorn ridge Cir.</p>
                  <p className="text-sm opacity-90 mb-2">75000 Paris</p>
                  <p className="text-sm opacity-90">Phone : +451 215 215</p>
                  <p className="text-sm opacity-90">Fax : +451 215 215</p>
                </div>

                {/* New York */}
                <div>
                  <h3 className="text-lg font-bold mb-3">New York</h3>
                  <p className="text-sm opacity-90">2715 Ash Dr. San Jose,</p>
                  <p className="text-sm opacity-90 mb-2">75000 Paris</p>
                  <p className="text-sm opacity-90">Phone : +451 215 215</p>
                  <p className="text-sm opacity-90">Fax : +451 215 215</p>
                </div>

                {/* Berlin */}
                <div>
                  <h3 className="text-lg font-bold mb-3">Berlin</h3>
                  <p className="text-sm opacity-90">4140 Parker Rd.</p>
                  <p className="text-sm opacity-90 mb-2">75000 Paris</p>
                  <p className="text-sm opacity-90">Phone : +451 215 215</p>
                  <p className="text-sm opacity-90">Fax : +451 215 215</p>
                </div>

                {/* London */}
                <div>
                  <h3 className="text-lg font-bold mb-3">London</h3>
                  <p className="text-sm opacity-90">3517 W. Gray St. Utica,</p>
                  <p className="text-sm opacity-90 mb-2">75000 Paris</p>
                  <p className="text-sm opacity-90">Phone : +451 215 215</p>
                  <p className="text-sm opacity-90">Fax : +451 215 215</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Mobile */}
      <section 
        className="md:hidden relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/categories/background (2).png')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A7CC7]/95 to-[#1E6BB8]/90"></div>
        <div className="relative z-10 px-6 py-12 text-center text-white">
          {/* Header */}
          <h1 className="text-2xl font-bold mb-4 tracking-wide">
            CONTACT US
          </h1>
          <p className="text-sm mb-6 leading-relaxed opacity-90">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics:<br />
            Newtonian mechanics
          </p>
          
          {/* Contact Us Button */}
          <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-6 py-3 rounded text-sm font-bold hover:bg-[#23A6F0] hover:text-white transition-colors mb-10">
            CONTACT US
          </button>

          {/* Office Addresses */}
          <div className="space-y-8 text-center">
            {/* Paris */}
            <div>
              <h3 className="text-lg font-bold mb-2">Paris</h3>
              <p className="text-sm opacity-90">1901 Thorn ridge Cir.</p>
              <p className="text-sm opacity-90 mb-2">75000 Paris</p>
              <p className="text-sm opacity-90">Phone : +451 215 215</p>
              <p className="text-sm opacity-90">Fax : +451 215 215</p>
            </div>

            {/* Berlin */}
            <div>
              <h3 className="text-lg font-bold mb-2">Berlin</h3>
              <p className="text-sm opacity-90">4140 Parker Rd.</p>
              <p className="text-sm opacity-90 mb-2">75000 Paris</p>
              <p className="text-sm opacity-90">Phone : +451 215 215</p>
              <p className="text-sm opacity-90">Fax : +451 215 215</p>
            </div>

            {/* New York */}
            <div>
              <h3 className="text-lg font-bold mb-2">New York</h3>
              <p className="text-sm opacity-90">2715 Ash Dr. San</p>
              <p className="text-sm opacity-90 mb-2">Jose,</p>
              <p className="text-sm opacity-90">75000 Paris</p>
              <p className="text-sm opacity-90">Phone : +451 215 215</p>
              <p className="text-sm opacity-90">Fax : +451 215 215</p>
            </div>

            {/* London */}
            <div>
              <h3 className="text-lg font-bold mb-2">London</h3>
              <p className="text-sm opacity-90">3517 W. Gray</p>
              <p className="text-sm opacity-90 mb-2">St. Utica,</p>
              <p className="text-sm opacity-90">75000 Paris</p>
              <p className="text-sm opacity-90">Phone : +451 215 215</p>
              <p className="text-sm opacity-90">Fax : +451 215 215</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section - Desktop Only */}
      <section className="hidden md:block py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-bold tracking-wider text-gray-600 dark:text-gray-400 mb-3">
              VISIT OUR OFFICE
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              We help small businesses<br />
              with big ideas
            </h2>
          </div>

          {/* Office Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {offices.map((office, index) => (
              <div 
                key={office.city}
                className={`p-8 lg:p-10 text-center transition-all duration-300 ${
                  index === 2 
                    ? 'bg-[#252B42] text-white' 
                    : 'bg-white dark:bg-gray-800 hover:shadow-lg'
                }`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 flex items-center justify-center ${
                    index === 2 ? 'text-[#23A6F0]' : 'text-[#23A6F0]'
                  }`}>
                    {index === 0 && <Phone size={56} strokeWidth={1.5} />}
                    {index === 1 && <MapPin size={56} strokeWidth={1.5} />}
                    {index === 2 && <Phone size={56} strokeWidth={1.5} />}
                    {index === 3 && <MapPin size={56} strokeWidth={1.5} />}
                  </div>
                </div>

                {/* Address */}
                <div className="mb-4">
                  <p className={`text-sm font-bold ${index === 2 ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {office.address}
                  </p>
                  <p className={`text-sm font-bold ${index === 2 ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {office.addressLine2}
                  </p>
                </div>

                {/* City */}
                <h3 className={`text-lg font-bold mb-4 ${
                  index === 2 ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {office.city}
                </h3>

                {/* Phone & Fax */}
                <div className="mb-6">
                  <p className={`text-sm font-bold ${index === 2 ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    Phone : {office.phone}
                  </p>
                  <p className={`text-sm font-bold ${index === 2 ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    Fax : {office.fax}
                  </p>
                </div>

                {/* Button */}
                <button className={`px-6 py-3 rounded text-sm font-bold transition-colors ${
                  index === 2
                    ? 'border-2 border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white'
                    : 'border-2 border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white'
                }`}>
                  Send a Message
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-[#23A6F0] rounded"></div>
          </div>
          <p className="text-sm font-bold tracking-wider text-gray-600 dark:text-gray-400 mb-4">
            WE CAN'T WAIT TO MEET YOU
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Let's Talk
          </h2>
          <button className="bg-[#23A6F0] text-white px-10 py-4 rounded text-sm font-bold hover:bg-[#1E90E0] transition-colors">
            Try it free now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;