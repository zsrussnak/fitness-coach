import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 pt-20 pb-10 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 font-bold text-2xl text-white mb-6">
                <span className="text-primary">Motive</span>Muscle
            </div>
            <p className="text-gray-400 leading-relaxed">
              Personal Fitness Coaching for Strength, Confidence, and Long-Term Results.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Footer links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links 2 (Placeholder or Extra) - merging into one column if needed, but design usually has columns. I'll stick to requested links. */}
           <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

           {/* Newsletter */}
           <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
             <p className="text-gray-400 mb-4">Subscribe for latest updates</p>
             <form className="flex">
                 <input type="email" placeholder="Email.." className="bg-dark border border-zinc-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:border-primary w-full" />
                 <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors">Go</button>
             </form>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 <a href="https://russnak.dev" target="_blank" rel="noopener noreferrer" className="no-underline transition-all duration-200 hover:text-orange-500 hover:scale-105 inline-block">russnak.dev</a> | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
