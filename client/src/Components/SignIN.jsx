import React, { useState } from 'react';
import { Cloud, User, Mail, Phone, Lock } from 'lucide-react';

function SignIn({onSwitch}) {
  const [formData, setFormData] = useState({
    
    email: '',
    
    password: '',
    
  });

  const handleSubmit = (e ) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 flex flex-col md:flex-row items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-600/20 rounded-full blur-xl"></div>
      
      {/* Left section */}
      <div className="text-white mb-8 md:mb-0 md:w-1/2 md:pr-8 md:block hidden">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome To Our Apponiment Platform
        </h1>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full border border-white/30 hover:bg-white/10 transition">
            Skip Now
          </button>
          <button onClick={onSwitch} className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Right section - Sign up form */}
      <div className="w-full md:w-[450px] bg-white/10 backdrop-blur-lg  rounded-2xl p-8 border border-white/20">
        <div className="flex items-center justify-center mb-6">
          <Cloud className="text-blue-400 w-8 h-8 mr-2" />
          <span className="text-white text-xl font-semibold">Dev Amit Consulting LLC</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

           

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

           

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg py-2.5 transition duration-300 transform hover:scale-[1.02]"
          >
            Sign In
          </button>
          <button onClick={onSwitch} className="px-6 py-2 md:hidden block rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;