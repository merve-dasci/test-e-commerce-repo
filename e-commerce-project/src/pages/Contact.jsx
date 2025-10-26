import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
   
      <nav className="py-4 px-4 bg-gray-50">
        <div className="max-w-1440 mx-auto">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">Contact</span>
        </div>
      </nav>

    
      <section className="py-12 lg:py-20">
        <div className="max-w-1440 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
            <div className="text-center lg:text-left">
              <p className="text-sm font-medium mb-4 tracking-wider text-blue-500">
                CONTACT US
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Get in touch<br />
                today!
              </h1>
              <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                We know how large objects will act,<br />
                but things on a small scale
              </p>
              
             
              <div className="space-y-6">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Phone className="text-blue-500" size={20} />
                  <span className="font-bold text-gray-900">Phone : +451 215 215</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Mail className="text-blue-500" size={20} />
                  <span className="font-bold text-gray-900">Fax : +451 215 215</span>
                </div>
              </div>

            
              <div className="flex justify-center lg:justify-start gap-4 mt-8">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>

           
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                <img 
                  src="/images/categories/technology 1.png"
                  alt="Technology and shopping"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-gray-50">
        <div className="max-w-1440 mx-auto px-4 text-center">
          <p className="text-sm font-medium mb-4 tracking-wider text-blue-500">
            VISIT OUR OFFICE
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-900">
            We help small businesses<br />
            with big ideas
          </h2>

         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Phone className="text-blue-500" size={32} />
              </div>
              <div className="mb-4">
                <p className="text-gray-600 mb-1">georgia.young@example.com</p>
                <p className="text-gray-600">georgia.young@ple.com</p>
              </div>
              <h3 className="font-bold text-lg mb-4 text-gray-900">Get Support</h3>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded font-medium transition-colors">
                Submit Request
              </button>
            </div>

         
            <div className="bg-gray-900 p-8 text-center text-white">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={32} />
              </div>
              <div className="mb-4">
                <p className="text-gray-300 mb-1">georgia.young@example.com</p>
                <p className="text-gray-300">georgia.young@ple.com</p>
              </div>
              <h3 className="font-bold text-lg mb-4">Get Support</h3>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded font-medium transition-colors">
                Submit Request
              </button>
            </div>

          
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Mail className="text-blue-500" size={32} />
              </div>
              <div className="mb-4">
                <p className="text-gray-600 mb-1">georgia.young@example.com</p>
                <p className="text-gray-600">georgia.young@ple.com</p>
              </div>
              <h3 className="font-bold text-lg mb-4 text-gray-900">Get Support</h3>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded font-medium transition-colors">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16">
        <div className="max-w-1440 mx-auto px-4 text-center">
          <p className="text-sm font-medium mb-4 tracking-wider text-blue-500">
            WE CAN'T WAIT TO MEET YOU
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-gray-900">
            Let's Talk
          </h2>
          <button className="bg-blue-500 text-white px-8 py-3 rounded font-medium hover:bg-blue-600 transition-colors">
            Try it free now
          </button>
        </div>
      </section>

    
      <section className="py-12 bg-gray-50 lg:hidden">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </section>

    
      <section className="hidden lg:block py-20">
        <div className="max-w-1440 mx-auto px-4">
          <div className="grid grid-cols-2 gap-16">
           
            
           
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="desktop-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="desktop-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="desktop-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="desktop-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="desktop-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="desktop-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;