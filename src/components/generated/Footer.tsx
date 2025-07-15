import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
const Footer: React.FC = () => {
  const footerLinks = {
    Product: [{
      name: 'Features',
      href: '#',
      mpid: "f8dcc3f7-b58e-4c8e-9b9e-3d9b3f511438"
    }, {
      name: 'Pricing',
      href: '#',
      mpid: "ab870983-ecac-40be-b96d-4354611c3445"
    }, {
      name: 'Integrations',
      href: '#',
      mpid: "ba4628d3-eee2-4f30-8bf2-132efda42bbc"
    }, {
      name: 'API',
      href: '#',
      mpid: "8dc0a956-7b81-42f3-b78b-90d2d122566a"
    }],
    Company: [{
      name: 'About',
      href: '#',
      mpid: "41207388-6c99-4eea-82ff-3ee935e793bd"
    }, {
      name: 'Blog',
      href: '#',
      mpid: "7948022d-a69f-4fc6-97c8-4572de5364b0"
    }, {
      name: 'Careers',
      href: '#',
      mpid: "b642c806-25f5-4ada-be0e-017fb231e037"
    }, {
      name: 'Press',
      href: '#',
      mpid: "306fc30c-6f53-40bc-9736-4a54fb2ef8ab"
    }],
    Resources: [{
      name: 'Documentation',
      href: '#',
      mpid: "4c7fd203-63ad-4071-bf9e-9877c3fd25ba"
    }, {
      name: 'Help Center',
      href: '#',
      mpid: "a0112760-1d11-4652-bc7b-fd54e6242aaf"
    }, {
      name: 'Community',
      href: '#',
      mpid: "49dccb79-217d-43df-9f94-278f612ed732"
    }, {
      name: 'Status',
      href: '#',
      mpid: "0eeaaef4-dc0d-4776-97f8-48674eaf71ab"
    }],
    Legal: [{
      name: 'Privacy',
      href: '#',
      mpid: "18fb84b4-041e-4c70-a3e3-577a9b3f28db"
    }, {
      name: 'Terms',
      href: '#',
      mpid: "2efac7b1-9972-4b75-a202-f5f54bca364b"
    }, {
      name: 'Security',
      href: '#',
      mpid: "e9ca31af-c853-40b8-8f2d-026e52ab5bf4"
    }, {
      name: 'Cookies',
      href: '#',
      mpid: "de8af22e-4df7-4d8d-b063-c86fb22dda2b"
    }]
  };
  const socialLinks = [{
    icon: Github,
    href: '#',
    label: 'GitHub',
    mpid: "5b50b08f-65ea-41d4-92af-7f78eb64fdd3"
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter',
    mpid: "0f29ac12-495f-48e4-9c85-c767ced01b81"
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn',
    mpid: "5f40ec90-9c6e-4a3a-8f3c-7c1d04165445"
  }, {
    icon: Mail,
    href: '#',
    label: 'Email',
    mpid: "6865e62a-e5cb-4160-9273-b5af20f01b00"
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