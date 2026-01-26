import { Phone, MapPin } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

const Contact = () => {
  return (
    <>
      <SimpleHeader />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section - Desktop */}
        <section className="hidden lg:block py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-left">
                <p className="text-sm font-bold tracking-wider text-[#252B42] dark:text-gray-300 mb-4">
                  CONTACT US
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#252B42] dark:text-white mb-6 leading-tight">
                  Get in touch<br />today!
                </h1>
                <p className="text-[#737373] dark:text-gray-400 mb-8 leading-relaxed">
                  We know how large objects will act,<br />
                  but things on a small scale
                </p>
                
                {/* Phone & Fax */}
                <div className="space-y-4 mb-8">
                  <p className="text-xl font-bold text-[#252B42] dark:text-white">
                    Phone : +451 215 215
                  </p>
                  <p className="text-xl font-bold text-[#252B42] dark:text-white">
                    Fax : +451 215 215
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                  <a href="#" className="text-[#252B42] dark:text-white hover:text-[#23A6F0] transition-colors">
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

              {/* Right Image */}
              <div className="relative flex justify-end">
                {/* Pink Circle Background */}
                <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-pink-200 rounded-full -z-10 -translate-y-1/2"></div>
                {/* Small dots */}
                <div className="absolute top-10 right-10 w-3 h-3 bg-[#977DF4] rounded-full"></div>
                <div className="absolute bottom-1/3 right-0 w-2 h-2 bg-[#977DF4] rounded-full"></div>
                
                <img 
                  src="/images/hero/none.png"
                  alt="Happy family shopping"
                  className="w-auto h-[450px] object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section - Mobile */}
        <section className="lg:hidden py-12">
          <div className="px-4">
            {/* Content first on mobile */}
            <div className="text-center mb-8">
              <p className="text-sm font-bold tracking-wider text-[#252B42] dark:text-gray-300 mb-4">
                CONTACT US
              </p>
              <h1 className="text-3xl font-bold text-[#252B42] dark:text-white mb-6 leading-tight">
                Get in touch<br />today!
              </h1>
              <p className="text-[#737373] dark:text-gray-400 mb-8 leading-relaxed text-sm">
                We know how large objects will act, but things on a small scale just do not act that way.
              </p>
              
              {/* Phone & Fax */}
              <div className="space-y-4 mb-8">
                <p className="text-xl font-bold text-[#252B42] dark:text-white">
                  Phone ; +451 215 215
                </p>
                <p className="text-xl font-bold text-[#252B42] dark:text-white">
                  Fax : +451 215 215
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                <a href="#" className="text-[#252B42] dark:text-white hover:text-[#23A6F0] transition-colors">
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

            {/* Image below on mobile */}
            <div className="relative flex justify-center">
              <img 
                src="/images/hero/none.png"
                alt="Happy family shopping"
                className="w-auto h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Contact Us with Background - Desktop */}
        <section className="hidden lg:block relative min-h-[500px]">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/categories/background (3).png')" }}
          ></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="col-span-4">
                <h2 className="text-4xl font-bold text-white mb-6">CONTACT US</h2>
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                  Problems trying to resolve the conflict between<br />
                  the two major realms of Classical physics:<br />
                  Newtonian mechanics
                </p>
                <button className="bg-[#23A6F0] text-white px-8 py-4 rounded text-sm font-bold hover:bg-[#1a8cd8] transition-colors">
                  CONTACT US
                </button>
              </div>

              {/* Right - Office Locations */}
              <div className="col-span-4">
                <div className="grid grid-cols-1 gap-8">
                  {/* Paris */}
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Paris</h3>
                    <p className="text-white/80 text-sm">1901 Thorn ridge Cir.</p>
                    <p className="text-white/80 text-sm mb-2">75000 Paris</p>
                    <p className="text-white/80 text-sm">Phone : +451 215 215</p>
                    <p className="text-white/80 text-sm">Fax : +451 215 215</p>
                  </div>

                  {/* Berlin */}
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Berlin</h3>
                    <p className="text-white/80 text-sm">4140 Parker Rd.</p>
                    <p className="text-white/80 text-sm mb-2">75000 Paris</p>
                    <p className="text-white/80 text-sm">Phone : +451 215 215</p>
                    <p className="text-white/80 text-sm">Fax : +451 215 215</p>
                  </div>
                </div>
              </div>

              {/* Right - More Office Locations */}
              <div className="col-span-4">
                <div className="grid grid-cols-1 gap-8">
                  {/* New York */}
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">New York</h3>
                    <p className="text-white/80 text-sm">2715 Ash Dr. San Jose,</p>
                    <p className="text-white/80 text-sm mb-2">75000 Paris</p>
                    <p className="text-white/80 text-sm">Phone : +451 215 215</p>
                    <p className="text-white/80 text-sm">Fax : +451 215 215</p>
                  </div>

                  {/* London */}
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">London</h3>
                    <p className="text-white/80 text-sm">3517 W. Gray St. Utica,</p>
                    <p className="text-white/80 text-sm mb-2">75000 Paris</p>
                    <p className="text-white/80 text-sm">Phone : +451 215 215</p>
                    <p className="text-white/80 text-sm">Fax : +451 215 215</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us with Background - Mobile */}
        <section className="lg:hidden relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/categories/background (2).png')" }}
          ></div>
          <div className="relative z-10 px-4 py-12">
            {/* Top Content */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">CONTACT US</h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Problems trying to resolve the conflict between<br />
                the two major realms of Classical physics:<br />
                Newtonian mechanics
              </p>
              <button className="bg-[#23A6F0] text-white px-8 py-3 rounded text-sm font-bold hover:bg-[#1a8cd8] transition-colors">
                CONTACT US
              </button>
            </div>

            {/* Office Locations */}
            <div className="space-y-8">
              {/* Paris */}
              <div className="text-center text-white border-b border-white/20 pb-6">
                <h3 className="text-lg font-bold mb-2">Paris</h3>
                <p className="text-white/80 text-sm">1901 Thorn ridge Cir.</p>
                <p className="text-white/80 text-sm mb-2">75000 Paris</p>
                <p className="text-white/80 text-sm">Phone : +451 215 215</p>
                <p className="text-white/80 text-sm">Fax : +451 215 215</p>
              </div>

              {/* Berlin */}
              <div className="text-center text-white border-b border-white/20 pb-6">
                <h3 className="text-lg font-bold mb-2">Berlin</h3>
                <p className="text-white/80 text-sm">4140 Parker Rd.</p>
                <p className="text-white/80 text-sm mb-2">75000 Paris</p>
                <p className="text-white/80 text-sm">Phone : +451 215 215</p>
                <p className="text-white/80 text-sm">Fax : +451 215 215</p>
              </div>

              {/* New York */}
              <div className="text-center text-white border-b border-white/20 pb-6">
                <h3 className="text-lg font-bold mb-2">New York</h3>
                <p className="text-white/80 text-sm">2715 Ash Dr. San Jose,</p>
                <p className="text-white/80 text-sm mb-2">75000 Paris</p>
                <p className="text-white/80 text-sm">Phone : +451 215 215</p>
                <p className="text-white/80 text-sm">Fax : +451 215 215</p>
              </div>

              {/* London */}
              <div className="text-center text-white pb-6">
                <h3 className="text-lg font-bold mb-2">London</h3>
                <p className="text-white/80 text-sm">3517 W. Gray St. Utica,</p>
                <p className="text-white/80 text-sm mb-2">75000 Paris</p>
                <p className="text-white/80 text-sm">Phone : +451 215 215</p>
                <p className="text-white/80 text-sm">Fax : +451 215 215</p>
              </div>
            </div>
          </div>
        </section>

        {/* Office Visits Section */}
        <section className="py-16 lg:py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-bold tracking-wider text-gray-600 dark:text-gray-400 mb-4">
              VISIT OUR OFFICE
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#252B42] dark:text-white mb-16">
              We help small businesses<br />with big ideas
            </h2>

            {/* Office Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Phone Card */}
              <div className="bg-white dark:bg-gray-800 py-16 px-8">
                <div className="flex justify-center mb-4">
                  <Phone className="w-16 h-16 text-[#23A6F0]" />
                </div>
                <p className="text-sm text-[#252B42] dark:text-gray-300 mb-2">georgia.young@example.com</p>
                <p className="text-sm text-[#252B42] dark:text-gray-300 mb-4">georgia.young@ple.com</p>
                <p className="text-base font-bold text-[#252B42] dark:text-white mb-4">Get Support</p>
                <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-6 py-3 rounded-full text-sm font-bold hover:bg-[#23A6F0] hover:text-white transition-colors">
                  Submit Request
                </button>
              </div>

              {/* Location Card - Dark */}
              <div className="bg-[#252B42] py-20 px-8">
                <div className="flex justify-center mb-4">
                  <MapPin className="w-16 h-16 text-[#23A6F0]" />
                </div>
                <p className="text-sm text-white mb-2">georgia.young@example.com</p>
                <p className="text-sm text-white mb-4">georgia.young@ple.com</p>
                <p className="text-base font-bold text-white mb-4">Get Support</p>
                <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-6 py-3 rounded-full text-sm font-bold hover:bg-[#23A6F0] hover:text-white transition-colors">
                  Submit Request
                </button>
              </div>

              {/* Mail Card */}
              <div className="bg-white dark:bg-gray-800 py-16 px-8">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-[#23A6F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-[#252B42] dark:text-gray-300 mb-2">georgia.young@example.com</p>
                <p className="text-sm text-[#252B42] dark:text-gray-300 mb-4">georgia.young@ple.com</p>
                <p className="text-base font-bold text-[#252B42] dark:text-white mb-4">Get Support</p>
                <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-6 py-3 rounded-full text-sm font-bold hover:bg-[#23A6F0] hover:text-white transition-colors">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Talk Section */}
        <section className="py-20 lg:py-28 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Arrow Icon */}
            <div className="flex justify-center mb-4">
              <img 
                src="/images/categories/Arrow 2.png" 
                alt="Arrow" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-sm font-bold tracking-wider text-gray-600 dark:text-gray-400 mb-4">
              WE CAN'T WAIT TO MEET YOU
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#252B42] dark:text-white mb-8">
              Let's Talk
            </h2>
            <button className="bg-[#23A6F0] text-white px-10 py-4 rounded text-sm font-bold hover:bg-[#1E90E0] transition-colors">
              Try it free now
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;