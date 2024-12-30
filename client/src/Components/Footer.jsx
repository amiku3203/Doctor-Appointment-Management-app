import React from "react";
import { PhoneCall, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 lg:mb-0 text-center lg:text-left">
            <h2 className="text-xl font-semibold">Doctor's Appointment</h2>
            <p className="mt-2 text-sm text-gray-400">
              Providing excellent healthcare services for everyone.
            </p>
          </div>

          {/* Center Section */}
          <div className="flex flex-col md:flex-row text-center md:text-left">
            <div className="md:mr-8 mb-4 md:mb-0">
              <h3 className="text-sm font-semibold mb-2">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <PhoneCall className="size-4 text-indigo-400" />
                  <span>+91 12345 67890</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-indigo-400" />
                  <span>support@doctorapp.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2">Address</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="size-4 text-indigo-400" />
                  <span>123 Healthcare Lane, Cityville</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center lg:text-right">
            <p className="text-sm text-gray-400">
              Made with <Heart className="inline text-red-500" /> by Team HealthCare
            </p>
            <p className="mt-2 text-xs text-gray-500">
              © {new Date().getFullYear()} Doctor's Appointment. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
