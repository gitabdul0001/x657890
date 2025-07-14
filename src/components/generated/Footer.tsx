import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
const Footer: React.FC = () => {
  const footerLinks = {
    Product: [{
      name: 'Features',
      href: '#',
      mpid: "49f09d0a-84a1-4b0a-9cfe-8451fede27cc"
    }, {
      name: 'Pricing',
      href: '#',
      mpid: "1c9eec0c-6edd-40f1-88df-b10f4525e2cc"
    }, {
      name: 'Integrations',
      href: '#',
      mpid: "3e658539-8f87-4ab1-a469-99d7f59a5e1c"
    }, {
      name: 'API',
      href: '#',
      mpid: "ac3a3a7a-fce4-4293-a841-c4343d6c2d91"
    }],
    Company: [{
      name: 'About',
      href: '#',
      mpid: "63b1db35-4790-41ef-8978-cf87e7894584"
    }, {
      name: 'Blog',
      href: '#',
      mpid: "acf612fd-2af2-4ea5-87b9-30324a1aa18b"
    }, {
      name: 'Careers',
      href: '#',
      mpid: "d6ced101-e8fa-4fbb-96ae-64a473f87c5a"
    }, {
      name: 'Press',
      href: '#',
      mpid: "351c5e2b-690c-496d-861b-b7ed82dfe236"
    }],
    Resources: [{
      name: 'Documentation',
      href: '#',
      mpid: "d5c067ea-d8ff-4bed-85a3-6a76267fd878"
    }, {
      name: 'Help Center',
      href: '#',
      mpid: "58abafd1-8b18-4902-8fd0-6ab2ee1674eb"
    }, {
      name: 'Community',
      href: '#',
      mpid: "e7bd4dca-137a-4190-8381-0f494e288f89"
    }, {
      name: 'Status',
      href: '#',
      mpid: "70bbe2ab-770e-4d4b-b7b0-893f30fa79a3"
    }],
    Legal: [{
      name: 'Privacy',
      href: '#',
      mpid: "1d9d948c-6562-49c1-b1b4-4ca939e3c67b"
    }, {
      name: 'Terms',
      href: '#',
      mpid: "e5126d09-2caf-40f2-840d-80789eb243c9"
    }, {
      name: 'Security',
      href: '#',
      mpid: "68647c29-2795-4038-8129-8b96a823ee00"
    }, {
      name: 'Cookies',
      href: '#',
      mpid: "04d57d50-d0bc-426e-b5cb-a43cfbe44989"
    }]
  };
  const socialLinks = [{
    icon: Github,
    href: '#',
    label: 'GitHub',
    mpid: "8a98251d-8d7d-4043-b507-fbc2b172494f"
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter',
    mpid: "0fa2b80b-d874-4462-ba42-b49925271478"
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn',
    mpid: "a86ce7cd-1016-40ba-97bc-6201380b6afe"
  }, {
    icon: Mail,
    href: '#',
    label: 'Email',
    mpid: "dae5e887-c032-4e72-873f-994aa58e2dbb"
  }] as any[];
  return <footer className="bg-black text-white" data-magicpath-id="0" data-magicpath-path="Footer.tsx">
      <div className="max-w-7xl mx-auto px-6 py-16" data-magicpath-id="1" data-magicpath-path="Footer.tsx">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12" data-magicpath-id="2" data-magicpath-path="Footer.tsx">
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} data-magicpath-id="3" data-magicpath-path="Footer.tsx">
            <div className="mb-6" data-magicpath-id="4" data-magicpath-path="Footer.tsx">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-magicpath-id="5" data-magicpath-path="Footer.tsx">
                Reaxo
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed" data-magicpath-id="6" data-magicpath-path="Footer.tsx">
                Empowering teams to build better products faster with intelligent tools and seamless collaboration.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4" data-magicpath-id="7" data-magicpath-path="Footer.tsx">
              {socialLinks.map((social, index) => <motion.a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300" whileHover={{
              scale: 1.1,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="Footer.tsx">
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="Footer.tsx" />
                </motion.a>)}
            </div>
          </motion.div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => <motion.div key={category} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: categoryIndex * 0.1,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} data-magicpath-id="10" data-magicpath-path="Footer.tsx">
              <h4 className="text-lg font-semibold text-white mb-4" data-magicpath-id="11" data-magicpath-path="Footer.tsx">{category}</h4>
              <ul className="space-y-3" data-magicpath-id="12" data-magicpath-path="Footer.tsx">
                {links.map((link, linkIndex) => <li key={linkIndex} data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="Footer.tsx">
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </motion.div>)}
        </div>

        {/* Newsletter Signup */}
        <motion.div className="border-t border-gray-800 pt-12 mb-12" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="14" data-magicpath-path="Footer.tsx">
          <div className="max-w-md" data-magicpath-id="15" data-magicpath-path="Footer.tsx">
            <h4 className="text-lg font-semibold text-white mb-2" data-magicpath-id="16" data-magicpath-path="Footer.tsx">Stay updated</h4>
            <p className="text-gray-400 mb-4 text-sm" data-magicpath-id="17" data-magicpath-path="Footer.tsx">
              Get the latest product updates and company news delivered to your inbox.
            </p>
            <div className="flex gap-3" data-magicpath-id="18" data-magicpath-path="Footer.tsx">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="19" data-magicpath-path="Footer.tsx" />
              <motion.button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-id="20" data-magicpath-path="Footer.tsx">
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="21" data-magicpath-path="Footer.tsx">
          <div className="text-gray-400 text-sm" data-magicpath-id="22" data-magicpath-path="Footer.tsx">
            © 2024 Reaxo. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400" data-magicpath-id="23" data-magicpath-path="Footer.tsx">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" data-magicpath-id="24" data-magicpath-path="Footer.tsx" />
    </footer>;
};
export default Footer;