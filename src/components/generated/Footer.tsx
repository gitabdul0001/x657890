import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
const Footer: React.FC = () => {
  const footerLinks = {
    Product: [{
      name: 'Features',
      href: '#',
      mpid: "20cc0efc-0ac9-43f5-a4ef-8546e5ac564e"
    }, {
      name: 'Pricing',
      href: '#',
      mpid: "a3759a24-02d2-4111-a01a-59d86a53bc38"
    }, {
      name: 'Integrations',
      href: '#',
      mpid: "3d2a6381-4ff1-416f-88d2-568a6afeff16"
    }],
    Company: [{
      name: 'About',
      href: '#',
      mpid: "4fabf518-9d20-4dd0-8a62-70bfa8d006fe"
    }, {
      name: 'Blog',
      href: '#',
      mpid: "440e0ada-367d-4def-900f-96038903493c"
    }, {
      name: 'Careers',
      href: '#',
      mpid: "0434e148-c604-4c7d-8003-021473e08a4d"
    }, {
      name: 'Press',
      href: '#',
      mpid: "5302495e-1238-4b8d-b00a-3e1d36477876"
    }],
    Resources: [{
      name: 'Documentation',
      href: '#',
      mpid: "4a81ab55-3141-4af9-8d0b-f75a8f7deb5b"
    }, {
      name: 'Help Center',
      href: '#',
      mpid: "e17bbcfe-e14f-4178-b78d-d94e8e620578"
    }, {
      name: 'Community',
      href: '#',
      mpid: "f5d3e33d-78e2-45ec-afe0-3a4ec01b5e7a"
    }, {
      name: 'Status',
      href: '#',
      mpid: "3ef5b343-f801-4b96-92a6-b59d207aa26f"
    }],
    Legal: [{
      name: 'Privacy',
      href: '#',
      mpid: "ab0b3c07-e426-4538-8140-509398956543"
    }, {
      name: 'Terms',
      href: '#',
      mpid: "a28f3768-1ff8-425b-be51-257d17a5b2b4"
    }, {
      name: 'Security',
      href: '#',
      mpid: "cbb3a632-63e8-40ff-8007-6a2c7649e298"
    }, {
      name: 'Cookies',
      href: '#',
      mpid: "942dd76d-aeae-4ee8-9cf4-bb09b45262f7"
    }]
  };
  const socialLinks = [{
    icon: Github,
    href: '#',
    label: 'GitHub',
    mpid: "326ca682-50e4-45ce-a706-5385e59ba754"
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter',
    mpid: "70c7a8a3-475b-42c8-8656-885e521126ae"
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn',
    mpid: "90110c27-d69f-4008-9c88-68e91a129f3e"
  }, {
    icon: Mail,
    href: '#',
    label: 'Email',
    mpid: "5783eb27-c3dc-4ffe-b645-819835e6290f"
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