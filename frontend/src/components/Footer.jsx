import React from "react";
import pics from '../assets/c.jpg';


const Footer = () => {


  return (
    <footer >
        <div className="bg-[#27071a] text-white py-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* Social Media Section */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0 pr-20">
          <div className="flex space-x-4 mb-4">
            {[
              {
                href: "#",
                label: "Facebook",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.12 8.44 9.88v-7h-2.54v-2.88h2.54v-2.14c0-2.51 1.53-3.88 3.76-3.88 1.07 0 2.1.08 2.38.12v2.74h-1.63c-1.28 0-1.54.61-1.54 1.5v1.97h3.09l-.4 2.88h-2.69v7c4.78-.76 8.44-4.89 8.44-9.88 0-5.52-4.48-10-10-10z" />
                  </svg>
                ),
              },
              {
                href: "#",
                label: "Twitter",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M22.46 6.11c-.77.34-1.6.57-2.47.68a4.2 4.2 0 001.84-2.31c-.8.48-1.68.82-2.63 1.01a4.13 4.13 0 00-7.23 3.76c-3.43-.17-6.47-1.82-8.51-4.32-.36.61-.57 1.32-.57 2.08 0 1.44.74 2.71 1.86 3.46-.68-.02-1.33-.21-1.89-.52v.05c0 2.02 1.44 3.7 3.35 4.08a4.14 4.14 0 01-1.88.07 4.15 4.15 0 003.87 2.88 8.3 8.3 0 01-5.13 1.77c-.33 0-.66-.02-.98-.06a11.72 11.72 0 006.34 1.85c7.6 0 11.76-6.3 11.76-11.76l-.01-.54c.81-.59 1.51-1.32 2.06-2.16z" />
                  </svg>
                ),
              },
              {
                href: "#",
                label: "Instagram",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 2c2.136 0 2.398.008 3.241.047.841.038 1.412.172 1.936.368.524.196.97.46 1.429.919.459.459.723.905.919 1.429.196.524.33 1.095.368 1.936.039.843.047 1.105.047 3.241s-.008 2.398-.047 3.241c-.038.841-.172 1.412-.368 1.936-.196.524-.46.97-.919 1.429-.459.459-.905.723-1.429.919-.524.196-1.095.33-1.936.368-.843.039-1.105.047-3.241.047s-2.398-.008-3.241-.047c-.841-.038-1.412-.172-1.936-.368-.524-.196-.97-.46-1.429-.919-.459-.459-.723-.905-.919-1.429-.196-.524-.33-1.095-.368-1.936C2.008 14.398 2 14.136 2 12s.008-2.398.047-3.241c.038-.841.172-1.412.368-1.936.196-.524.46-.97.919-1.429.459-.459.905-.723 1.429-.919.524-.196 1.095-.33 1.936-.368C9.602 2.008 9.864 2 12 2zm0 5.838c-3.414 0-6.162 2.748-6.162 6.162 0 3.414 2.748 6.162 6.162 6.162 3.414 0 6.162-2.748 6.162-6.162 0-3.414-2.748-6.162-6.162-6.162z" />
                  </svg>
                ),
              },
              {
                href: "#",
                label: "YouTube",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M19.635 3.296A5.788 5.788 0 0015.413 2H8.587A5.788 5.788 0 004.365 3.296 5.824 5.824 0 003 7.587v8.826c0 1.571.625 3.043 1.735 4.17A5.788 5.788 0 008.587 22h6.826a5.788 5.788 0 004.218-1.417 5.824 5.824 0 001.735-4.17V7.587a5.824 5.824 0 00-1.735-4.291zM10 15.476v-6.95l5.65 3.475L10 15.476z" />
                  </svg>
                ),
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 hover:text-pink-600 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Quis
            lobortis dolor risus non enim.
            lobortis dolor risus non enim.

          </p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Submit Article", "Blog", "Freebies", "Pricing"].map(
              (link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-pink-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="w-full sm:w-1/4  mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold mb-8">Contact Us</h3>

          <p className="text-gray-400 text-sm mb-8">📞 800-201-633-258</p>
          <p className="text-gray-400 text-sm">
            📍 3712 Doctors Drive, Los Angeles, California, USA
          </p>
        </div>

        {/* Gallery Showcase Section */}
        <div className="w-full sm:w-1/4">
  <h3 className="text-lg font-semibold mb-2">Gallery Showcase</h3>
  <div className="grid grid-cols-2 ">
    <img
      src={pics}
      className="w-3/4 h-3/4 object-cover rounded-lg transition-transform hover:scale-105"
    />
    <img
      src={pics}
      className="w-3/4 h-3/4 object-cover rounded-lg transition-transform hover:scale-105"
    />
    <img
      src={pics}
      className="w-3/4 h-3/4 object-cover rounded-lg transition-transform hover:scale-105"
    />
    <img
      src={pics}
      className="w-3/4 h-3/4 object-cover rounded-lg transition-transform hover:scale-105"
    />
  </div>
</div>

      </div>
      </div>
      <div className="w-full bg-[#72174c]" style={{ height: "1cm" }}></div>

      
    </footer>
    
  );
};

export default Footer;
